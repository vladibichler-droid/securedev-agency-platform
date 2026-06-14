import { Router } from "express";

const router = Router();

router.get("/company-status", (_request, response) => {
  response.json({
    company: {
      name: "SecureDev Agency",
      slogan: "Fullstack Development & Security",
      project: "SecureDev Agency Platform",
      version: "3.0.0"
    },
    status: {
      frontend: "React + TypeScript",
      backend: "Node.js + Express",
      security: "Helmet + CORS",
      api: "Backend-API verbunden"
    },
    services: [
      {
        id: 1,
        title: "Frontend Development",
        description:
          "Moderne Benutzeroberflächen mit klarer Struktur, responsivem Design und professioneller Nutzerführung."
      },
      {
        id: 2,
        title: "Backend APIs",
        description:
          "Saubere Server-Strukturen, API-Endpunkte, Datenverarbeitung und vorbereitete Erweiterbarkeit für echte Anwendungen."
      },
      {
        id: 3,
        title: "Security Basics",
        description:
          "Defensive Sicherheitsmaßnahmen wie sichere Header, CORS-Regeln, Rate-Limits, Validierung und geschützte Konfiguration."
      }
    ],
    projectStatus: [
      {
        label: "Version 1",
        value: "Grundstruktur läuft"
      },
      {
        label: "Version 2",
        value: "Firmen-Startseite abgeschlossen"
      },
      {
        label: "Version 3",
        value: "Backend-Firmenstatus im Aufbau"
      }
    ]
  });
});

export default router;
