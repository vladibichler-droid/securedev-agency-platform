# SECURITY

Diese Datei beschreibt die Sicherheitsregeln und Sicherheitsziele der SecureDev Agency Platform.

## Grundsatz

Dieses Projekt verwendet ausschließlich defensive, legale und professionelle Sicherheitsmaßnahmen.

Das Ziel ist nicht Angriff, sondern Schutz.

## Erlaubte Sicherheitsfunktionen

In diesem Projekt dürfen folgende Sicherheitsfunktionen eingebaut werden:

- sichere HTTP-Header
- CORS-Konfiguration
- Rate-Limiting
- Eingabevalidierung
- Passwort-Hashing
- Login-Schutz
- sichere Fehlermeldungen
- Schutz vor zu vielen Anfragen
- Schutz sensibler Umgebungsvariablen
- Security-Logging
- klare Trennung von Frontend und Backend

## Nicht Teil dieses Projekts

Nicht eingebaut werden:

- Angriffe auf fremde Systeme
- Schadsoftware
- Phishing
- Credential-Diebstahl
- Umgehung fremder Sicherheitssysteme
- Exploits gegen echte Webseiten
- unbefugtes Scannen fremder Server

## Sicherheitsziel des Projekts

Die SecureDev Agency Platform soll zeigen, wie ein professionelles Webprojekt sicherer aufgebaut werden kann.

Dazu gehören später:

- geschützter Login
- sichere API-Struktur
- geschützte Adminbereiche
- validierte Benutzereingaben
- sichere Server-Konfiguration
- dokumentierte Sicherheitsentscheidungen

## Version 1

In Version 1 wird die Sicherheitsdokumentation vorbereitet.

Die echten Sicherheitsfunktionen werden später Schritt für Schritt eingebaut.

## Geplante Security-Schritte

Spätere Versionen können enthalten:

- Helmet für sichere HTTP-Header
- CORS-Regeln
- Rate-Limiting
- Passwort-Hashing mit bcrypt
- Authentifizierung mit Tokens
- Validierung von Formularen
- zentrale Fehlerbehandlung
- Security-Log im Adminbereich
