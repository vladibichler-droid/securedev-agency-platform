# CHANGELOG

Alle wichtigen Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

## Version 3.0.0 - Backend-API mit Firmenstatus verbunden

### Erstellt

- neue Backend-Route für Firmenstatus erstellt
- neuer API-Endpunkt `/api/company-status` ergänzt
- Frontend-Service `companyStatusApi.ts` erstellt
- TypeScript-Typen für API-Daten ergänzt
- Frontend lädt Firmenstatus jetzt aus dem Backend
- Startseite zeigt API-Daten dynamisch an

### Geändert

- Backend-App mit neuer Firmenstatus-Route verbunden
- App.tsx auf API-Daten umgebaut
- Projektstatus auf Version 3 aktualisiert
- Hero-Bereich erklärt jetzt echte Fullstack-Kommunikation
- Statuskarten zeigen Daten aus der Backend-API

### Ziel dieser Version

Version 3 verbindet Frontend und Backend miteinander.

Das Frontend zeigt nicht mehr nur feste Texte aus dem Code, sondern lädt echte Projektdaten über die Backend-API.

### Test

Backend-API wurde im Browser getestet:

http://localhost:4000/api/company-status

Frontend wurde im Browser getestet:

http://localhost:5173

### Ergebnis

Version 3 läuft sichtbar im Browser.

Die Webseite zeigt:

- Live API Project
- Version 3.0.0
- API-Status
- Backend-geladene Leistungen
- Backend-geladene Projektstatus-Daten

## Version 2.0.0 - Professionelle Firmen-Startseite

### Geändert

- Frontend wieder sauber über React gestartet
- main.tsx auf echten React-Einstieg zurückgebaut
- professionelle Firmen-Startseite erstellt
- Header mit Markenbereich ergänzt
- Navigation ergänzt
- Hero-Bereich überarbeitet
- Leistungsbereich eingebaut
- Security-Bereich eingebaut
- Projektstatus-Bereich eingebaut
- modernes dunkles Developer-Firma-Design ergänzt

### Ziel dieser Version

Version 2 macht aus der einfachen Startseite eine professionelle Firmen-Webseite.

Die Plattform wirkt dadurch mehr wie ein echtes Fullstack-Projekt einer Developer-Firma.

### Status

Version 2 läuft im Browser und wurde über einen Pull Request in main übernommen.

## Version 1.0.0 - Projekt-Grundstruktur

### Erstellt

- Hauptprojekt vorbereitet
- Frontend-Ordner erstellt
- Backend-Ordner erstellt
- Dokumentationsordner erstellt
- README.md erstellt
- CHANGELOG.md erstellt
- PROJEKTJOURNAL.md erstellt
- SECURITY.md erstellt
- package.json im Hauptordner erstellt
- Frontend mit React, TypeScript und Vite vorbereitet
- Backend mit Node.js, Express und TypeScript vorbereitet
- erste API-Health-Route erstellt
- erste Security-Grundlage vorbereitet
- Git eingerichtet
- erster Commit erstellt
- Projekt auf GitHub hochgeladen

### Ziel dieser Version

Version 1 erstellt die technische Grundstruktur für ein professionelles Fullstack-Projekt.

### Status

Version 1 läuft lokal und ist auf GitHub gesichert.
