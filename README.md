# Prototyp REST Schnittstelle Kundenverwaltung
# Ihre Aufgabe ist die Umsetzung des folgenden REST Befehls:  
- GET: api/product?idFr=myIdFrom&idTo=myIdTo    
- (Folgende Zusatzinfo: myIdFrom: 1. zu liefernde Produkt-ID, myIdTo: letzte zu liefernde Produkt-ID (sortiert nach ProduktID))

- Kundenadministration mittels RESTful Schnittstelle
- Warpshop DB,  Datenmodell, response als JSON
- Fehlermeldungen JSON: {replyInfo: infostring}
  - infostring werte
- http statuscodes sinnvoll einsetzen
- Daten für Erzeugung und Änderung serverseitiger Datensätze im JSON Format
- SQL Anfrage mit async await
- db zugang in: config/dbconfig.js
- geeignetes Logging in der Konsole für alle relevanten Fehlermeldungen
- Trennung Routen, Modell und sonstiger funktionaler Code
# Abgeben
## Code als Zip
## Dokumentation
- 5 Seiten pdf
### Inhalt
- Usecase
- Archtiekturgrafik
- Beschreibung der Tätigkeiten
- relevante technische Details
- NICHT:
  - Beschreibung wirtschaftliche und organisatorische Vorgaben
  - fachliche Qualität

# REST
- Representational State Transfer
- stateless:
  - Client immer alle informationen mitgeben und Kontext
  - egal welcher Server, flexible Lastverteilung, da kein Zugriff auf History
- dagegen stateful:
  - z.b aktulle session wird auf server gespeichert
  - nur informationen die für den aktullen request benötigt werden

## RESTful Design
- REST best practices, pattern
  
## constraints
- Uniform Interface
  - alle Clients dieselbe Schnittstelle
  - alle Ressourcen eindeutig über URI identifizierbar
  - angefragte Ressourcen werden als Ressourcenpräsentation geschickt (JSON, XML)
  - selbstbeschreibende Nachrichten
  - HATEOAS
- Client-Server Architektur
- zustandslose Kommunikation
- cachable
- mehrschichtiges System