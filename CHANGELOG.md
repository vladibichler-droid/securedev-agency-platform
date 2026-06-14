# CHANGELOG

Alle wichtigen Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

## Version 4.0.0 - Kontakt-API und Kontaktbereich

### Erstellt

- neue Backend-Route `contact.routes.ts` erstellt
- API-Endpunkt `/api/contact-info` ergänzt
- API-Endpunkt `/api/contact-request` ergänzt
- Frontend-Service `contactApi.ts` erstellt
- Kontaktbereich auf der Startseite ergänzt
- Kontaktformular eingebaut
- Kontaktformular sendet Daten an das Backend
- Kontaktfeedback im Frontend ergänzt

### Geändert

- Backend-App mit Kontakt-Routen verbunden
- App.tsx um Kontaktbereich und Kontaktformular erweitert
- App.css um Kontaktbereich, Formularfelder und Feedback erweitert
- Navigation um Kontakt-Link ergänzt
- Projektanzeige auf Version 4.0.0 aktualisiert

### Ziel dieser Version

Version 4 ergänzt eine echte Kontaktstruktur zwischen Frontend und Backend.

Das Frontend kann Kontaktinformationen aus dem Backend laden und Kontaktanfragen per POST an die Backend-API senden.

### Test

Backend-Endpunkte:

http://localhost:4000/api/contact-info

http://localhost:4000/api/contact-request

Frontend:

http://localhost:5173

### Ergebnis

Version 4 verbindet Kontaktbereich und Kontakt-API.

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

### Status

Version 3 läuft im Browser und wurde über einen Pull Request in main übernommen.

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

### Status

Version 1 läuft lokal und ist auf GitHub gesichert.
