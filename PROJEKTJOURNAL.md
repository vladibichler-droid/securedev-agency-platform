# PROJEKTJOURNAL

Dieses Projektjournal dokumentiert die Entwicklung der SecureDev Agency Platform Schritt für Schritt.

## Projektname

SecureDev Agency Platform

## Projektidee

SecureDev Agency Platform ist ein professionelles Fullstack-Projekt für eine fiktive Developer-Firma.

Das Projekt soll nicht wie ein Simulator wirken, sondern wie ein echtes Entwickler-Firmenprojekt.

## Arbeitsregeln

Für dieses Projekt gelten feste Regeln:

- nur komplette Dateien
- keine Teiländerungen
- keine Code-Schnipsel
- eine Version nach der anderen
- Änderungen werden getestet
- jede Version wird dokumentiert
- Git-Branch pro größerem Entwicklungsschritt

## Version 4 - Kontakt-API + Kontaktbereich

### Stand

Version 4 wurde auf einem eigenen Git-Branch gestartet:

version-4-kontakt-api

### Änderung

Erstellt und geändert wurden:

- backend/src/routes/contact.routes.ts
- backend/src/app.ts
- frontend/src/services/contactApi.ts
- frontend/src/App.tsx
- frontend/src/App.css
- CHANGELOG.md
- PROJEKTJOURNAL.md

Die neue Kontakt-API enthält:

- GET `/api/contact-info`
- POST `/api/contact-request`

Das Frontend enthält jetzt:

- Kontaktbereich
- Kontaktinformationen aus der API
- Kontaktformular
- Themenauswahl aus Backend-Daten
- Feedback nach dem Absenden

### Zweck

Version 4 erweitert die Plattform um eine Kontaktfunktion.

Dadurch wirkt die Seite stärker wie eine echte Firmen-Webseite mit Backend-Kommunikation.

### Ergebnis

Die Plattform besitzt jetzt eine vorbereitete Kontakt-API und einen sichtbaren Kontaktbereich im Frontend.

## Version 3 - Backend-API mit Firmenstatus verbinden

### Ergebnis

Die API ist erreichbar unter:

http://localhost:4000/api/company-status

Die Webseite zeigt sichtbar:

- Live API Project
- Version 3.0.0
- API-Status
- Backend-geladene Leistungen
- Backend-geladene Projektstatus-Daten

Version 3 macht das Projekt zu einem echten Fullstack-Projekt mit Kommunikation zwischen Frontend und Backend.

## Version 2 - Professionelle Firmen-Startseite

### Ergebnis

Die Firmen-Startseite ist sichtbar und deutlich hochwertiger aufgebaut.

Das Frontend wirkt jetzt strukturierter, moderner und portfolio-tauglicher.

Version 2 wurde über einen Pull Request in main übernommen.

## Version 1 - Projekt-Grundstruktur

### Ergebnis

Die Projektstruktur ist vorhanden.

Das Frontend läuft.

Das Backend läuft.

Die API-Health-Route funktioniert.

Git wurde eingerichtet.

Version 1 wurde auf GitHub hochgeladen.
