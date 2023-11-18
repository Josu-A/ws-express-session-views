# WS - Ariketa: Session views

## Sarrera

Cookien erabileraren bitartez erabiltzaile batek saio batean zerbitzariari egindako eskaera kopurua lortu eta pantailaratzen du.

## Build

### Betebeharrak

* *npm*
* *Node.js*

### Nola eraiki

Biltegia klonatu:

```bash
git clone https://github.com/Josu-A/ws-express-session-views.git
cd ws-express-session-views
```

npm dependenziak instalatu:

```bash
npm install
```

Sare aplikazioa hasieratu defektuzko 3101 portuan:

```bash
npm start
```

### Portu zehatzean hasieratu

Portu zehatz batean hasieratzeko, x portu zenbakia izanik:

<details><summary>Linux / MacOS</summary>

```bash
PORT=x npm start
```

</details>

<details><summary>Windows Command Prompt</summary>

```cmd
set PORT=x & npm start
```

</details>

<details><summary>Windows PowerShell</summary>

```ps
$env:PORT='x'; npm start
```

</details>

### Debuging moduan hasieratu

Aplikazioak debug mezuak kontsolan idazteko

<details><summary>Linux / MacOS</summary>

```bash
DEBUG=session-views:* npm start
```

</details>

<details><summary>Windows Command Prompt</summary>

```cmd
set DEBUG=session-views:* & npm start
```

</details>

<details><summary>Windows PowerShell</summary>

```ps
$env:DEBUG='session-views:*'; npm start
```

</details>
