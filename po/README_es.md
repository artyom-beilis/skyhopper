# AstroHopper - (antes SkyHopper)

[TOC]

[AstroHopper](https://artyom-beilis.github.io/astrohopper.html) (antes conocida como SkyHopper) es una aplicación web gratuita y de código abierto
desarrollada por [Artyom Beilis](https://github.com/artyom-beilis/skyhopper) que ayuda a encontrar objetos en el cielo nocturno.
Lo consigue permitiendo "saltar" con precisión desde una estrella conocida y fácil de identificar
hasta otras estrellas más débiles u objetos de cielo profundo (DSO), midiendo los cambios en los ángulos de orientación del móvil
mediante el giroscopio y los sensores de gravedad integrados. Es parecido a unos círculos graduados digitales (Digital Setting Circles)
implementados en un smartphone.

El móvil debe tener giroscopio y sensor de gravedad y, preferiblemente, brújula.

AstroHopper es una aplicación web formada por una única página HTML con una base de datos de objetos en JavaScript
que sigue funcionando sin conexión mientras esté guardada en la caché del navegador.

## Funcionamiento

Sujeta el móvil al telescopio de forma que la parte **superior** física del teléfono
apunte en la dirección de observación. Ten en cuenta que esto es distinto de las apps de observación del cielo habituales,
que simulan la vista de la cámara hacia el cielo. En AstroHopper la pantalla queda paralela a la
dirección de observación.


Antes de sujetar el móvil, abre AstroHopper y calibra la brújula haciendo movimientos en forma de "8".
La calibración mejora mucho la precisión de la brújula.
Si aun así la brújula no funciona bien, pulsa el botón de la mano `✋` para usar el modo manual.

Al iniciar AstroHopper aparece una guía rápida. También puedes obtener ayuda pulsando el botón del engranaje `⚙` arriba a la derecha y luego el botón `?`.


1. Apunta el telescopio a una estrella o un planeta fácil de identificar cerca del objeto que quieres observar
2. Pulsa el botón `[Alinear]` arriba a la izquierda de la pantalla
3. Toca la estrella o el planeta que has elegido. Se inicia una cuenta atrás de 3 segundos para asegurar que no haya vibraciones. Pasados los 3 segundos la aplicación queda alineada con el objeto seleccionado. Aparece el mensaje "Alineado" y una cruz en el centro de la pantalla que indica en el mapa hacia dónde apunta el telescopio.
4. Toca el objeto que quieres observar o escribe su nombre en el cuadro de búsqueda del menú de ajustes (botón del engranaje `⚙`). Verás una línea que indica hacia dónde mover el telescopio, y los cambios de altitud y azimut aparecen a la derecha y en la parte inferior de la pantalla
5. Mueve el telescopio hasta que esos números estén cerca de cero: en ese momento el telescopio debería apuntar al objeto buscado
6. Para pasar al siguiente objeto, repite la alineación desde el paso 1, ya que los giroscopios del móvil no mantienen la precisión durante mucho tiempo ni tras muchos movimientos

Vídeos de introducción y tutoriales (en inglés):

- Vídeo de demostración y tutorial creado por Nir Zonshine: <https://youtu.be/AtArqBLWWJ8>
- Otra reseña muy buena de John Dreese (alias Reflactor): <https://youtu.be/6-_58mSGz1Q>

## Notas para usuarios de iOS

Tienes que dar algunos permisos a Safari para usar AstroHopper.

Sensores de orientación del dispositivo:

- En iOS 13.0 o superior debes permitir el acceso a la orientación del dispositivo pulsando el botón `Activar orientación del dispositivo` cuando cargue la aplicación
- En iOS 12.2 y anteriores a la 13 debes permitirlo en: _Ajustes > Safari > Acceso a movimiento y orientación_

Geolocalización (fíjate si aparece el mensaje "Sin geolocalización" en pantalla):

- Ajustes > Privacidad > Localización activada. Después baja hasta "Safari Web..." y marca "Cuando se use la app". En iOS 14.0 y superior deberían funcionar tanto la ubicación exacta como la aproximada.

    Algunos usuarios han tenido que reiniciar el dispositivo para que estos cambios surtan efecto.


## Instalar AstroHopper

AstroHopper es una aplicación web progresiva (PWA). Se puede instalar en el móvil como una aplicación normal y, una vez instalada, funciona completamente sin conexión. También puedes probar AstroHopper como demostración en un portátil.

Para instalar la aplicación, abre la dirección <https://artyom-beilis.github.io/astrohopper.html> e instálala:

- Android/Chrome: pulsa "..." junto a la dirección y elige "Instalar aplicación" o "Añadir a pantalla de inicio"
- Samsung Internet: pulsa el símbolo `↓` junto a la dirección
- Android/Firefox: pulsa "..." junto a la dirección y elige "Instalar"
- Android/Edge: pulsa "..." abajo y elige "Añadir al teléfono"
- iPhone/Safari: pulsa el botón "Compartir" (un cuadrado con una flecha hacia arriba), baja y elige "Añadir a pantalla de inicio"

La aplicación se instalará en la pantalla de inicio o en la lista de aplicaciones, según el navegador.

Para comprobar que AstroHopper funciona sin conexión:

1. Cierra todas las aplicaciones y navegadores
2. Pon el móvil en modo avión y asegúrate de que el WiFi está desactivado
3. Pulsa el icono de la aplicación y comprueba que funciona.

Normalmente puedes actualizar la versión instalada de AstroHopper recargando la página. Si con tu navegador no funciona, desinstálala y vuelve a instalarla desde cero.

## Solución de problemas

-   _¿El cielo de la aplicación no se parece a lo que esperaba?_

    Comprueba que el navegador da la ubicación correcta. Si no, aparecerá el mensaje "Sin geolocalización". Revisa las coordenadas geográficas en el menú de ajustes para confirmar que coinciden con tu ubicación

-   _¿Muevo el móvil pero no se mueve nada?_

    Comprueba que los sensores del móvil funcionan. ¿Te funcionan aplicaciones tipo SkyMap?

-   _¿Muevo el telescopio pero solo cambia la altitud y el azimut apunta a la Polar/Norte?_

    Puede que tu navegador no admita la orientación de la brújula o que el móvil no tenga ese sensor. Se mostrará una brújula tachada.
    Puedes ajustar el azimut a mano deslizando la pantalla hasta llegar al azimut necesario y luego alinear.

-   _¿He apuntado el telescopio a una estrella pero el móvil parece apuntar a otra dirección?_

    La brújula del móvil puede estar bastante desviada. Puedes hacer lo siguiente:

    1. Mueve el móvil con el patrón de calibración de la brújula para mejorar su precisión
    2. Aumenta el campo de visión de la aplicación pulsando `+` en la esquina superior izquierda, junto al valor `∠60°` (campo por defecto).
    3. Puedes pasar al modo de azimut manual pulsando el icono de la "mano" `✋` a la derecha y ajustar el azimut a mano

-   _¿La pantalla se oscurece muy rápido y no me da tiempo a alinear o apuntar el telescopio?_

    Cambia el tiempo de suspensión del móvil. Está en "Ajustes -> Pantalla" en Android y en "Ajustes -> Pantalla y brillo -> Bloqueo automático" en iOS

-   _¿Empiezo a mover el telescopio en azimut pero la aplicación dice que se ha parado o que vuelve atrás, se comporta de forma rara?_

    Parece que el giroscopio ha perdido precisión. Pasa a veces. Inténtalo de nuevo. Si sigue pasando siempre y no llegas al objetivo, prueba una de estas opciones:

    1. Elige un punto de alineación más cercano en azimut al objeto buscado: la altitud se sigue con mucha más precisión.
    2. Corrige primero la altitud y luego busca el objeto en el eje de azimut

-   _El gesto de pellizcar amplía toda la página web en lugar de cambiar el campo de visión del mapa_

    Depende de la configuración:

    - Chrome: ajustes -> accesibilidad -> forzar zoom -> desactivado
    - Firefox: ajustes -> accesibilidad -> habilitar siempre el zoom -> desactivado
    - Samsung Internet: ajustes -> apariencia -> zoom manual -> desactivado
    - Edge: ajustes -> tamaño de fuente -> zoom en todos los sitios -> desactivado, o ajustes -> accesibilidad -> zoom en todos los sitios web -> desactivado

    Por desgracia, en iOS no hay forma de desactivar el zoom de la página completa.

## Controles

- Lado izquierdo, de arriba abajo:

    - Botón de alineación y estado: al pulsarlo empieza el proceso de alineación; tienes que elegir la estrella o el planeta con el que alineas.
    - Campo de visión: ajústalo con `+` y `-`
    - Si hay una lista de observación seleccionada, controles `<`,`>` para recorrer sus objetos. Debajo se muestra el nombre del objeto seleccionado

- Lado derecho, de arriba abajo y de derecha a izquierda:

    - `⚙`: botón de ajustes
    - Cuadro de búsqueda: permite escribir el nombre o código de un objeto. Cuando lo encuentres pulsa Intro en el teclado. Si quieres repetir la misma búsqueda, pulsa la "lupa" y volverá al objeto seleccionado.
    - `✋`: pasar al modo manual; "_brújula_": pasar al modo brújula; "_brújula tachada_": no hay brújula disponible, usa solo el modo manual
    - `W`: aparece al seleccionar un objeto con nombre; al pulsarlo se abre su página de Wikipedia (necesita conexión).

- Menú de ajustes (icono del engranaje `⚙`):

    - Botón `↻`: reinicia la alineación y el objetivo
    - UI reducida: optimiza para pantallas pequeñas, con botones más pequeños y los controles del campo de visión movidos al menú de ajustes
    - Pantalla completa: pasa la aplicación a pantalla completa
    - Modo noche: activa o desactiva la pantalla en rojo para visión nocturna
    - Solo en "UI reducida": campo de visión, ajústalo con `+` y `-`
    - Magnitud máxima de las estrellas que se muestran y sirven para alinear: ajústala con `+` y `-`
    - Magnitud aparente máxima de los objetos DSO que se muestran: ajústala con `+` y `-`
    - Opción para aumentar el tamaño de letra si hace falta
    - Selección y edición de la lista de observación
    - Campo de búsqueda de objetivo por nombre
    - Permitir alinear con cualquier objeto DSO. Úsalo con cuidado, porque es difícil definir el centro de un DSO grande como un cúmulo abierto.
    - Filtro de objetos astronómicos por tipo
    - Activar o desactivar el zoom con pellizco
    - Configuración de la información de Wikipedia
    - Mostrar el tutorial rápido al iniciar
    - Lista de objetos añadidos por el usuario
    - Estado de la geolocalización y botón para recargarla
    - Información de los sensores


## Controles en modo UI reducida

Controles en pantalla:

- Arriba a la izquierda: `◎`: botón de alineación con estado: `✓` alineado, `✗` no alineado, `?` elige la estrella de alineación
- Si hay una lista de observación seleccionada, a la izquierda aparecen los controles `<`,`>` para recorrer sus objetos. Debajo se muestra el nombre del objeto seleccionado
- Derecha:

    - Modo manual `✋` o modo "_brújula_"
    - Menú de ajustes: `⚙`

- Izquierda: `W`: aparece al seleccionar un objeto con nombre; al pulsarlo se abre su página de Wikipedia (necesita conexión)

## Información de Wikipedia

Cuando aparece el botón `W` puedes pulsarlo para abrir un recuadro con la página de Wikipedia del objeto seleccionado.

_Nota:_ ten cuidado: la aplicación no controla el estilo de la página y por defecto será texto negro sobre fondo blanco, algo nada recomendable para la visión nocturna. Para mejorarlo puedes ajustar el navegador o usar una extensión como [Dark Reader](https://darkreader.org), aunque el texto blanco o las imágenes brillantes pueden seguir afectando a tu visión nocturna.

Por eso, por defecto la información de Wikipedia está desactivada en modo noche. Puedes cambiarlo en la opción "Wiki" del menú de ajustes.

## Lista de observación

Puedes crear de antemano una lista de observación personalizada para recorrerla fácilmente durante la noche.
En el menú de ajustes está la opción `Lista`, con el control `[editar]` para abrir el editor de listas.

Una lista de observación es simplemente una lista de nombres de objetos separados por espacios, saltos de línea o comas.
Por ejemplo, la lista "por defecto":

    M411, M47, M49, M50, M44, M45

Puedes definir varias listas con nombre escribiendo el nombre de la lista seguido de `:`, por ejemplo:

    clusters: M41 M47 M49
     M50 M44 M45
    doublestars: Polaris, "Cor Caroli"

Puedes añadir un comentario entre `(` y `)` para explicar el identificador del objeto. Se mostrará en la interfaz al seleccionar el objeto, por ejemplo:

    Galaxies: M31 (Andromeda), M64 (Black Eye)

_Nota:_ si añades un comentario o usas un nombre con espacios, tienes que usar una coma `,` como separador

Las listas se eligen con los botones `<` y `>` del control "Lista". Con una lista seleccionada aparecen dos botones `<` y `>` en la pantalla principal, bajo el botón "Alinear", que permiten recorrer los objetos hacia delante y hacia atrás. Debajo de los controles se muestra el nombre del objeto seleccionado.

Las listas de observación se guardan en tu móvil por dominio y se conservan aunque vuelvas a abrir la aplicación.

## Objetos de usuario

La aplicación no incluye todas las estrellas ni todos los DSO posibles. Si quieres acceder a objetos que no están en la base de datos, puedes añadirlos en "Objetos de usuario" del menú de ajustes.

Los objetos de usuario se definen en formato CSV: la primera columna es el nombre del objeto, la segunda la ascensión recta (RA) y la tercera la declinación (DEC).
RA y DEC pueden indicarse en grados decimales (0-360 para RA y -90 a +90 para DEC) o en horas/grados con minutos y segundos. Los segundos se pueden omitir. Los campos pueden separarse con espacios, con ":" o con símbolos como "h", "m", "s", "d". Por ejemplo:

- RA: `170.6358` o `11:22:32.6` o `11h 22m 32.6s` o `11h 22' 32.6''` o `11 22′ 32.6″` o `11 22 32.6`, `11:32`
- DEC: `-87.3757` o `-87:22:32.6` o `-87d 22m 32.6s` o `-87d 22' 32.6''` o `-87° 22′ 32.6″` o `-87 22 32.6`, `-87:22`

Un ejemplo de lista:

    V1405,23h 24m 48s, +61° 11′ 15″
    Pluto,19:55:16,-22:13:42

Los objetos de usuario se guardan en tu móvil por dominio y se conservan aunque vuelvas a abrir la aplicación.


## Usuarios de montura ecuatorial

La aplicación supone que usas una montura altacimutal. Con una montura ecuatorial puede aparecer un error adicional por la desalineación entre el eje mayor del móvil y el eje del telescopio.

Si los objetivos están cerca de los polos y el salto exige grandes cambios de ascensión recta, cualquier desalineación entre el eje del móvil y el del telescopio afectará a la precisión. El error final se puede calcular como 2e⋅sin(Δα/2)⋅sin(δ), donde e es la desalineación entre móvil y telescopio, Δα el cambio de ascensión recta necesario para el salto y δ la declinación del objetivo.

Por eso puede no funcionar de forma fiable con monturas ecuatoriales. Se recomiendan monturas altacimutales (Alt-Az).

## Problemas conocidos

- El zoom con pellizco no funciona bien en iOS: no hay forma de desactivar el zoom del navegador
- En iOS, el pellizco o el doble toque amplían la pantalla cuando no deberían
- En algunas versiones de iPad (iOS 12.5) no funciona la selección de estrella u objetivo


## Informar de errores y obtener ayuda

- La mejor forma de informar de errores es en el proyecto de GitHub: <https://github.com/artyom-beilis/skyhopper>
- Además, el autor del programa (Artyom Beilis) visita a menudo el foro [Cloudy Nights](https://www.cloudynights.com/index/), donde también puedes pedir ayuda. Menciona correctamente el nombre de la aplicación: "AstroHopper".

## Copyrights

(C) 2021-2025 Artyom Beilis.

Es una aplicación web de código abierto con licencia GPL. Solo funciona con sensores en buen estado. No se ofrece ningún tipo de garantía. Para los derechos de autor detallados
de las distintas partes del proyecto, consulta <https://github.com/artyom-beilis/skyhopper/blob/main/COPYING.md>
