# AstroHopper – (precedentemente noto come SkyHopper)

[TOC]

[AstroHopper](https://artyom-beilis.github.io/astrohopper.html) (precedentemente noto come SkyHopper) è un’applicazione web gratuita e open-source sviluppata da [Artyom Beilis](https://github.com/artyom-beilis/skyhopper) che aiuta a individuare oggetti nel cielo notturno.
Lo fa consentendo di “saltare” con precisione da una stella ben nota e facilmente identificabile ad altre stelle più deboli o a oggetti del cielo profondo (DSO), misurando le variazioni negli angoli di puntamento dello smartphone tramite il giroscopio e i sensori di gravità integrati. È in sostanza simile ai Digital Setting Circles, ma implementato direttamente su uno smartphone.

Lo smartphone deve essere dotato di giroscopio e sensori di gravità e, preferibilmente, anche di una bussola.

AstroHopper è un’applicazione basata sul web composta da una singola pagina HTML con un database di oggetti in JavaScript, che continua a funzionare anche offline, purché sia memorizzata nella cache del browser.

## Funzionamento

Collega lo smartphone al telescopio in modo che la parte **superiore** del telefono sia rivolta nella direzione di osservazione.
Nota che questo è diverso dalle comuni app astronomiche, che simulano la visuale della fotocamera verso il cielo. In AstroHopper, invece, lo schermo è parallelo alla direzione di osservazione.


Prima di collegare lo smartphone, apri l’applicazione AstroHopper e calibra la bussola muovendo il telefono con un movimento a forma di “8”.
Questa calibrazione migliorerà notevolmente la precisione della direzione della bussola.
Tuttavia, se la bussola non funziona correttamente, premi il pulsante con l’icona della mano `✋` per passare alla Modalità Manuale.

Quando AstroHopper si avvia, viene mostrata una Guida Rapida. Puoi anche ottenere aiuto in qualsiasi momento premendo il pulsante ingranaggio `⚙` in alto a destra e poi il pulsante `?`. 


1. Allinea il telescopio con una stella o un pianeta facilmente identificabile, situato vicino all’oggetto che vuoi osservare
2. Tocca il pulsante `[Allinea]` in alto a sinistra dello schermo 
3. Tocca la stella o il pianeta che hai selezionato. Verrà avviato un timer di 3 secondi per assicurarsi che non ci siano vibrazioni. Dopo 3 secondi, l’applicazione sarà allineata all’oggetto selezionato. Comparirà il messaggio “Allineato” e una croce al centro dello schermo indicherà sulla mappa la direzione di puntamento del telescopio.
4. Tocca l’oggetto che vuoi osservare oppure digita il suo nome nel campo di ricerca presente nel menu Impostazioni (accessibile tramite il pulsante ingranaggio `⚙`). Verrà mostrata una linea di direzione che indica come muovere il telescopio; inoltre, le variazioni di altitudine e azimut saranno visibili rispettivamente sul lato destro e nella parte inferiore dello schermo
5. Muovi il telescopio finché questi valori non si avvicinano allo zero — a questo punto il telescopio sarà puntato sull’oggetto desiderato
6. Per osservare un nuovo oggetto, ripeti la procedura di allineamento dal punto 1, poiché i giroscopi integrati del telefono non mantengono la precisione a lungo o dopo più spostamenti

Video introduttivi e tutorial:

- Qui puoi trovare un video dimostrativo e tutorial realizzato da Nir Zonshine: <https://youtu.be/AtArqBLWWJ8>
- Un’altra ottima recensione, creata da John Dreese (noto anche come Reflactor), è disponibile qui: <https://youtu.be/6-_58mSGz1Q>

## Note per gli utenti iOS

Per utilizzare AstroHopper è necessario concedere alcune autorizzazioni a Safari.

Sensori di orientamento del dispositivo:

- Su iOS 13.0 e versioni successive, devi consentire l’accesso alle informazioni di orientamento del dispositivo toccando il pulsante `Abilita orientamento dispositivo` una volta caricata l’applicazione
- Su iOS 12.2 e versioni precedenti alla 13 l’accesso va abilitato tramite: _Impostazioni > Safari > Accesso a movimento e orientamento_

Geolocalizzazione (Verifica la presenza del messaggio “Nessuna geolocalizzazione” sullo schermo):

Vai su - Impostazioni > Privacy > Servizi di localizzazione, assicurati che siano attivi, quindi scorri fino a "Safari Web..." e seleziona “Durante l’uso dell’app”. Su iOS 14.0 e versioni successive, funzionano sia la posizione precisa che quella approssimata.
    
    Alcuni utenti hanno segnalato la necessità di riavviare il dispositivo affinché le modifiche abbiano effetto.


## Installazione di AstroHopper

AstroHopper è un’applicazione web progressiva (PWA) e può essere installata come una normale app sullo smartphone. Una volta installata, è completamente accessibile offline. È anche possibile eseguire AstroHopper in modalità demo su un computer portatile.

Per installare l’applicazione, apri l’indirizzo: <https://artyom-beilis.github.io/astrohopper.html> e procedi con l’installazione in base al tuo browser:

- Android/Chrome - tocca i tre puntini "..." vicino all’URL e seleziona “Installa app” o “Aggiungi alla schermata Home” 
- Samsung Browser - tocca il simbolo `↓` accanto all’URL
- Android/Firefox - tocca i tre puntini "..." accanto all’URL e seleziona “Installa”
- Android/Edge - tocca i tre puntini "..." in basso e seleziona “Aggiungi al telefono”
- iPhone/Safari - tocca il pulsante Condividi (un quadrato con una freccia verso l’alto), scorri verso il basso e seleziona “Aggiungi alla schermata Home”

L’applicazione verrà installata nella schermata Home o nella lista delle applicazioni, a seconda del browser utilizzato.

Per verificare il funzionamento offline di AstroHopper:

1. Chiudi tutte le applicazioni e i browser aperti
2. Imposta il telefono in modalità aereo e assicurati che il Wi-Fi sia disattivato
3. Tocca l’icona dell’applicazione e verifica che si apra e funzioni correttamente.

Di norma puoi aggiornare la versione installata di AstroHopper semplicemente ricaricando la pagina.
Se questo non funziona con il tuo browser, disinstalla l’app e reinstallala da zero.

## Troubleshooting 

-   _Il cielo mostrato nell’app è diverso da quello reale?_

    Assicurati che il browser fornisca le informazioni corrette sulla posizione.
Se non lo fa, comparirà il messaggio “Nessuna geolocalizzazione”.
Controlla le coordinate geografiche nel menu delle impostazioni e verifica che corrispondano alla tua posizione reale

-   _Muovo il telefono ma sull’app non succede nulla?_

    Assicurati che il tuo smartphone disponga di sensori funzionanti (giroscopio e accelerometro).
Le app come SkyMap funzionano correttamente sul tuo dispositivo?

-   _Muovo il telescopio ma cambia solo l’altitudine, mentre l’azimut resta puntato verso il Nord/Polaris?_

    Il tuo browser potrebbe non supportare il sensore di bussola (ad esempio Firefox) oppure il telefono non ne è dotato.
In tal caso comparirà l’icona di una bussola barrata.
Puoi regolare manualmente l’azimut scorrendo il dito sullo schermo fino a ottenere il valore desiderato, quindi riallineare.

-   _Ho puntato il telescopio verso una stella ma il telefono sembra indicare un’altra direzione?_

    La bussola del telefono potrebbe essere molto imprecisa. Esegui questi passaggi:

    1. Muovi il telefono eseguendo il classico movimento a “8” per ricalibrare la bussola
    2. Aumenta il campo visivo (FOV) dell’app toccando il pulsante `+` in alto a sinistra, vicino al valore FOV predefinito `∠60°`.
    3. Puoi passare alla modalità azimut manuale toccando l’icona della "mano" `✋` sul lato destro e regolare manualmente l’azimut

-   _Lo schermo si oscura troppo velocemente e non ho tempo per allineare il telescopio?_

    Modifica le impostazioni di risparmio energetico del telefono. E' sotto "Impostazioni -> Schermo -> Sospensione" in Android e sotto "Impostazioni -> Schermo e luminosità -> Blocco automatico” in IOS

-   _Muovo il telescopio per modificare l’azimut, ma l’app mostra movimenti strani o in senso opposto?_

    Probabilmente il giroscopio ha perso precisione, cosa che può accadere.
Prova di nuovo. Se il problema persiste prova le seguenti soluzioni:

    1. Seleziona un punto di allineamento più vicino in azimut all’oggetto da osservare (l’altitudine è più precisa).
    2. Correggi prima l’altitudine, poi regola l’azimut per trovare l’oggetto 

-   _Il gesto di pizzicare con due dita (pinch) ingrandisce tutta la pagina invece del cielo_

    È un problema di configurazione del browser. Disattiva lo zoom forzato:

    - Chrome: impostazioni ->accessibilità -> forza zoom -> disattiva
    - Firefox:impostazioni -> accessibilità -> abilita sempre zoom -> disattiva
    - Samsung Browser: impostazioni ->aspetto -> zoom manuale -> disattiva
    - Edge: impostazioni -> dimensioni carattere -> zoom su tutti i siti -> disattiva oppure impostazioni -> accessibilità -> zoom su tutti i siti web -> disattiva

    Sfortunatamente, su iOS non è possibile disabilitare lo zoom completo della pagina web.

## Controlli

- Lato sinistro, dall’alto verso il basso:

    - Pulsante di allineamento e stato - premendolo si avvia il processo di allineamento - devi poi selezionare la stella o il pianeta su cui desideri allinearti.
    - Campo visivo (FOV) - regolabile con i pulsanti `+`, `-` per aumentare o ridurre il campo 
    - Se è selezionata una lista di osservazione (watch list), i controlli `<`,`>` consentono di scorrere gli oggetti della lista; il nome dell’oggetto selezionato viene mostrato sotto.

- Lato destro, dall’alto verso il basso (da destra a sinistra)

    - `⚙` - pulsante delle impostazioni
    - Casella di ricerca oggetti, consente di inserire il nome o il codice di un oggetto. Una volta trovato, premi Invio sulla tastiera. Nota: se vuoi ripetere la stessa ricerca, tocca l’icona della “lente d’ingrandimento”, che riporterà l’app sull’oggetto selezionato.
    - `✋` - passa alla modalità manuale, "_bussola_" passa alla modalità bussola, "_bussola barrata_" - indica che la bussola non è disponibile, quindi si può usare solo la modalità manuale.
    - `W` - appare quando viene selezionato un oggetto con nome; toccandolo si apre la pagina Wikipedia relativa all’oggetto (richiede connessione Internet).

- Menu Impostazioni (accessibile tramite l’icona `⚙`):

    - `↻` bottone - reimposta l’allineamento e il bersaglio
    - Modalità interfaccia ridotta - ottimizza per schermi piccoli: riduce le dimensioni dei pulsanti e sposta i controlli del campo visivo nel menu impostazioni.
    - Schermo Intero - passa l’applicazione alla visualizzazione a schermo intero
    - Modalità notturna - attiva o disattiva la modalità a luce rossa per osservazione notturna.
    - Solo in "Modalità Schermo Ridotto": Campo visivo (FOV) regolabile con i pulsanti`+`, `-` 
    - Magnitudine massima delle stelle - regola, con `+`, `-` la magnitudine limite delle stelle visualizzabili o su cui è possibile allinearsi
    - Magnitudine apparente massima degli oggetti DSO - regola con `+`, `-` la luminosità limite dei DSO mostrati.
    - Dimensione del font - aumenta la dimensione del testo, utile su schermi piccoli o per maggiore leggibilità
    - Selezione e modifica della Watch List (lista di osservazione personale) 
    - Campo di ricerca per nome dell’oggetto
    - Allineamento con qualsiasi oggetto DSO - usare con cautela, poiché è difficile definire un centro preciso per oggetti estesi (come ammassi aperti).
    - Filtraggio degli oggetti astronomici per tipo
    - Attiva/disattiva lo zoom con le dita (pinch zoom)
    - Configurazione delle informazioni da Wikipedia
    - Mostra il tutorial iniziale all’avvio dell’applicazione 
    - Elenco degli oggetti aggiunti dall’utente
    - Stato della geolocalizzazione e pulsante per ricaricare la posizione
    - Informazioni sui sensori del dispositivo


## Controlli in Modalità Schermo Ridotto

Controlli su schermo:

- In alto a sinistra: `◎` - pulsante di allineamento con stato: `✓` - allineato, `✗` - non allineato, `?` - seleziona la stella di allineamento
- Se è selezionata una Watch List, a sinistra compaiono i controlli `<`,`>` per scorrere gli oggetti della lista; il nome dell’oggetto selezionato viene mostrato sotto.
- Sul lato destro:

    - Modalità Manuale `✋` oppure "_bussola_" modalità bussola
    - Apertura del menu Impostazioni: `⚙`

- A sinistra `W` - appare quando viene selezionato un oggetto con nome; toccandolo si apre la pagina Wikipedia relativa all’oggetto (richiede connessione Internet)

## Informazioni sulla pagina Wikipedia

Quando appare il pulsante `W` puoi toccarlo per aprire un riquadro contenente la pagina Wikipedia relativa all’oggetto selezionato.

_Note:_ fai attenzione - l’app non controlla lo stile della pagina Wikipedia, che di default mostra testo nero su sfondo bianco. Questa visualizzazione non è adatta all’osservazione notturna, poiché può compromettere l’adattamento dell’occhio al buio. Per migliorare la leggibilità notturna, puoi modificare le impostazioni del browser, oppure utilizzare un’estensione come [Dark Reader](https://darkreader.org), per invertire i colori della pagina. Tuttavia, anche con queste soluzioni, testi bianchi o immagini luminose potrebbero comunque disturbare la visione notturna.

Per questo motivo, di default il supporto alle pagine Wiki è disattivato in modalità notturna.
Puoi modificare questo comportamento nel menu Impostazioni “Wiki”.

## Lista di Osservazione

L’utente può creare in anticipo una lista personalizzata di oggetti da osservare, così da poterli sfogliare facilmente durante la notte.
Nel menu "Impostazioni" è presente l’opzione `Elenco`, che include il controllo `[modifica]` per aprire lo strumento di modifica della lista.

Una watch list è composta da un semplice elenco di nomi di oggetti, separati da spazi, a capo o virgole.
Ecco un esempio della lista “predefinita”:

    M411, M47, M49, M50, M44, M45

È anche possibile definire più liste con nome, aggiungendo un titolo seguito dai due punti `:`, per esempio:

    clusters: M41 M47 M49
     M50 M44 M45
    doublestars: Polaris, "Cor Caroli"

È inoltre possibile aggiungere commenti tra parentesi tonde `(` e `)` per spiegare o identificare meglio l’oggetto. Il commento verrà mostrato nell’interfaccia utente quando l’oggetto viene selezionato, ad esempio:

    Galaxies: M31 (Andromeda), M64 (Black Eye)

_Notea_ se aggiungi un commento o utilizzi un nome che contiene spazi, devi inserire una virgola `,` come separatore

Le liste possono essere selezionate premendo i pulsanti `<` e `>` nel controllo "Liste". Quando una lista è selezionata, sulla schermata principale (sotto il pulsante “Allinea”) compariranno due pulsanti `<` e `>`, che permettono di scorrere gli oggetti avanti e indietro. Il nome dell’oggetto attualmente selezionato viene mostrato sotto i controlli.

Le watch list vengono salvate localmente sul telefono, in base al dominio dell’applicazione, e rimangono memorizzate anche dopo aver chiuso e riaperto l’app. 

## Oggetti dell’Utente

L’applicazione non include tutte le stelle o tutti gli oggetti DSO esistenti. Se desideri accedere a oggetti non presenti nel database, puoi aggiungerli manualmente tramite la voce “Oggetti dell’Utente” nel menu Impostazioni.

Gli oggetti dell’utente vengono definiti in formato CSV, dove la prima colonna contiene il nome dell’oggetto, la seconda la Ascensione Retta (RA), la terza la Declinazione (DEC).
Sia RA che DEC possono essere espressi in gradi decimali (0-360 per RA and -90 +90 per DEC) oppure in ore/gradi, minuti e secondi. I secondi possono essere omessi. I campi possono essere separati da spazi, due punti ":" o dai simboli appropriati come "h", "m", "s", "d". Per esempio 

- RA: `170.6358` oppure `11:22:32.6` oppure `11h 22m 32.6s` oppure `11h 22' 32.6''` oppure `11 22′ 32.6″` oppure  `11 22 32.6`, `11:32`
- DEC: `-87.3757` oppure `-87:22:32.6` oppure `-87d 22m 32.6s` oppure `-87d 22' 32.6''` oppure `-87° 22′ 32.6″` oppure `-87 22 32.6`, `-87:22`

Questo è un esempio di tale elenco:

    V1405,23h 24m 48s, +61° 11′ 15″
    Pluto,19:55:16,-22:13:42

Gli oggetti dell’utente vengono salvati localmente sul telefono, in base al dominio dell’applicazione, e rimangono memorizzati anche dopo aver chiuso e riaperto l’app. 


## Utilizzo con Montature Equatoriali

L’applicazione è progettata per essere utilizzata con una montatura altazimutale. Se invece utilizzi una montatura equatoriale, può verificarsi un errore aggiuntivo dovuto al disallineamento tra l’asse principale del telefono e quello del telescopio.

Quando gli oggetti da osservare si trovano vicino ai poli celesti e il salto (hop) richiede variazioni significative di ascensione retta, qualsiasi piccolo errore di allineamento tra l’asse del telefono e quello del telescopio può compromettere la precisione. L’errore finale può essere calcolato come: 2e⋅sin(Δα/2)⋅sin(δ), dove e - errore di disallineamento tra telefono e telescopio, Δα - variazione di ascensione retta richiesta per il salto e δ - declinazione del bersaglio.

Per questo motivo, l’app potrebbe non funzionare in modo affidabile con montature equatoriali.
Si consiglia l’uso con montature altazimutali (Alt-Az).

## Problemi Noti

- Lo zoom con le dita (pinch zoom) non funziona correttamente su iOS, poiché non è possibile disattivare lo zoom del browser
- Su dispositivi iOS, il pinch zoom o il doppio tap ingrandiscono l’intera schermata anche quando non dovrebbero
- Su alcune versioni di iPad (iOS 12.5), la selezione di stelle o obiettivi potrebbe non funzionare correttamente


## Segnalazione Bug e Richiesta di Supporto

- Il modo migliore per segnalare eventuali bug è tramite il progetto su GitHub: <https://github.com/artyom-beilis/skyhopper>
- L’autore del programma, Artyom Beilis, è anche un frequente partecipante del forum [Cloudy Nights](https://www.cloudynights.com/index/) dove puoi ricevere assistenza. Quando chiedi supporto, ricorda di indicare correttamente il nome dell’applicazione "AstroHopper".

## Copyrights

(C) 2021-2025 Artyom Beilis.

Questa è un’applicazione web open source, rilasciata sotto licenza GPL. Il suo corretto funzionamento dipende dalla presenza di sensori pienamente operativi sul dispositivo. Non viene fornita alcuna garanzia di alcun tipo. Per i dettagli sui diritti d’autore relativi alle diverse parti del progetto, consulta <https://github.com/artyom-beilis/skyhopper/blob/main/COPYING.md>
