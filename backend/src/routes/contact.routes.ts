import { Router } from "express";

const router = Router();

router.get("/contact-info", (_request, response) => {
  response.json({
    company: "SecureDev Agency",
    email: "contact@securedev-agency.dev",
    phone: "+49 000 000000",
    location: "Deutschland",
    responseTime: "Antwort meistens innerhalb von 24 Stunden",
    topics: [
      "Webentwicklung",
      "Backend-API",
      "Security-Grundlagen",
      "Kundenportal",
      "Adminbereich"
    ]
  });
});

router.post("/contact-request", (request, response) => {
  const { name, email, topic, message } = request.body;

  if (!name || !email || !topic || !message) {
    return response.status(400).json({
      status: "error",
      message: "Bitte alle Kontaktfelder ausfüllen."
    });
  }

  return response.status(201).json({
    status: "success",
    message: "Kontaktanfrage wurde erfolgreich an die SecureDev Agency API übermittelt.",
    request: {
      id: `REQ-${Date.now()}`,
      name,
      email,
      topic,
      message,
      receivedAt: new Date().toISOString()
    }
  });
});

export default router;
