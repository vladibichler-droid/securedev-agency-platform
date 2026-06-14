# PROJEKTJOURNAL

Dieses Projektjournal dokumentiert die Entwicklung der SecureDev Agency Platform Schritt für Schritt.

## Projektname

SecureDev Agency Platform

## Projektidee

SecureDev Agency Platform ist ein professionelles Fullstack-Projekt für eine fiktive Developer-Firma.

Das Projekt soll nicht wie ein Simulator wirken, sondern wie ein echtes Entwickler-Firmenprojekt.

## Ziel

Das Projekt soll zeigen:

- professionelle Webentwicklung
- klare Projektstruktur
- Frontend und Backend
- API-Kommunikation
- Sicherheitsgrundlagen
- Dokumentation
- schrittweise Entwicklung
- GitHub-taugliche Arbeitsweise

## Arbeitsregeln

Für dieses Projekt gelten feste Regeln:

- nur komplette Dateien
- keine Teiländerungen
- keine Code-Schnipsel
- eine Version nach der anderen
- Änderungen werden getestet
- jede Version wird dokumentiert
- Git-Branch pro größerem Entwicklungsschritt

## Version 3 - Backend-API mit Firmenstatus verbinden

### Stand

Version 3 wurde auf einem eigenen Git-Branch entwickelt:

version-3-backend-firmenstatus

Die Backend-API wurde im Browser getestet.

Das Frontend wurde im Browser getestet.

### Änderung

Erstellt und geändert wurden:

- backend/src/routes/company-status.routes.ts
- backend/src/app.ts
- frontend/src/services/companyStatusApi.ts
- frontend/src/App.tsx
- CHANGELOG.md
- PROJEKTJOURNAL.md

Die neue API liefert:

- Firmenname
- Slogan
- Projektname
- Version
- Frontend-Status
- Backend-Status
- Security-Status
- API-Status
- Leistungen
- Projektstatus

### Zweck

Version 3 verbindet das Frontend mit dem Backend.

Die Webseite zeigt dadurch nicht mehr nur feste Inhalte aus dem Frontend-Code, sondern lädt echte Daten aus der Backend-API.

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

### Stand

Version 2 wurde auf einem eigenen Git-Branch gestartet:

version-2-firmen-startseite

Die Webseite wurde im Browser getestet und ist sichtbar.

### Änderung

Geändert wurden:

- frontend/src/main.tsx
- frontend/src/App.tsx
- frontend/src/App.css
- CHANGELOG.md
- PROJEKTJOURNAL.md

Die Startseite enthält jetzt:

- Header mit Markenbereich
- Navigation
- großen Hero-Bereich
- Projektübersicht
- Leistungsbereich
- Security-Bereich
- Projektstatus-Bereich
- professionelles dunkles Developer-Firma-Design

### Zweck

Version 2 soll die Plattform deutlich professioneller wirken lassen.

Die Webseite soll aussehen wie der Einstieg einer echten Developer-Firma und nicht wie ein kleines Testprojekt.

### Ergebnis

Die Firmen-Startseite ist sichtbar und deutlich hochwertiger aufgebaut.

Das Frontend wirkt jetzt strukturierter, moderner und portfolio-tauglicher.

Version 2 wurde über einen Pull Request in main übernommen.

## Version 1 - Projekt-Grundstruktur

### Stand

Das Projekt wurde neu gestartet.

Die Grundstruktur wurde erstellt.

### Änderung

Erstellt wurden:

- frontend
- backend
- docs
- README.md
- CHANGELOG.md
- PROJEKTJOURNAL.md
- SECURITY.md
- package.json
- package-lock.json
- .gitignore
- .env.example

### Zweck

Version 1 legt die Grundlage für das gesamte Fullstack-Projekt.

Diese Version sorgt dafür, dass das Projekt sauber vorbereitet ist, bevor Frontend, Backend und Security-Funktionen weiter ausgebaut werden.

### Ergebnis

Die Projektstruktur ist vorhanden.

Das Frontend läuft.

Das Backend läuft.

Die API-Health-Route funktioniert.

Git wurde eingerichtet.

Version 1 wurde auf GitHub hochgeladen.
