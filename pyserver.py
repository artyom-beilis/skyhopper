# coding=utf-8
import ssl, socket
import signal
import sys
import traceback
import tempfile
import os

pem=open('cert.pem','r',encoding='utf-8').read()
hopper=open('skyhopper_deploy.html','r',encoding='utf-8').read()

cert_path = tempfile.gettempdir()+ '/cert.pem'

print("Saving sertificate to temporary ",cert_path)

try:
    hopper = hopper.encode('utf-8')
    with open(cert_path,"w") as f:
        f.write(pem)
    context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    context.load_cert_chain(cert_path)
finally:
    os.remove(cert_path)

with socket.socket(socket.AF_INET, socket.SOCK_STREAM, 0) as sock:
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    sock.bind(('0.0.0.0', 8443))
    sock.listen(5)
    with context.wrap_socket(sock, server_side=True) as ssock:
        while True:
            try:
                conn, addr = ssock.accept()
                inp = conn.read().decode()
                if inp[:6]=='GET / ':
                    conn.write(b'HTTP/1.0 200 Ok\r\n'
                               b'Connection: close\r\n'
                               b'Content-Type: text/html\r\n'
                               b'Content-Length: %d\r\n'
                               b'\r\n%s' % (len(hopper),hopper))
                    print("Served one SkyHopper page")
                else:
                    conn.write(b'HTTP/1.0 404 Not Found\r\n'
                               b'Connection: close\r\n'
                               b'Content-Length: 0\r\n'
                               b'\r\n')
                conn.shutdown(socket.SHUT_RDWR)
                conn.close()
            except KeyboardInterrupt:
                print("Done")
                break
            except:
                pass

