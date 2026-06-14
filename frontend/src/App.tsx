import { FormEvent, useEffect, useState } from "react";
import {
  CompanyStatusResponse,
  fetchCompanyStatus
} from "./services/companyStatusApi";
import {
  ContactInfo,
  ContactRequestPayload,
  fetchContactInfo,
  sendContactRequest
} from "./services/contactApi";

function App() {
  const [companyData, setCompanyData] = useState<CompanyStatusResponse | null>(
    null
  );
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [contactForm, setContactForm] = useState<ContactRequestPayload>({
    name: "",
    email: "",
    topic: "Webentwicklung",
    message: ""
  });

  const [contactFeedback, setContactFeedback] = useState("");

  useEffect(() => {
    async function loadPageData() {
      try {
        const [companyStatusData, contactInfoData] = await Promise.all([
          fetchCompanyStatus(),
          fetchContactInfo()
        ]);

        setCompanyData(companyStatusData);
        setContactInfo(contactInfoData);
      } catch {
        setErrorMessage("Backend-Daten konnten nicht geladen werden.");
      } finally {
        setIsLoading(false);
      }
    }

    loadPageData();
  }, []);

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setContactFeedback("Kontaktanfrage wird gesendet...");

    try {
      const response = await sendContactRequest(contactForm);

      setContactFeedback(`${response.message} Anfrage-ID: ${response.request?.id}`);
      setContactForm({
        name: "",
        email: "",
        topic: "Webentwicklung",
        message: ""
      });
    } catch (error) {
      if (error instanceof Error) {
        setContactFeedback(error.message);
        return;
      }

      setContactFeedback("Kontaktanfrage konnte nicht gesendet werden.");
    }
  }

  if (isLoading) {
    return (
      <main className="page-shell">
        <section className="content-section">
          <p className="eyebrow">API-Verbindung</p>
          <h1>Firmenstatus wird geladen...</h1>
          <p className="hero-text">
            Das Frontend fragt gerade die Backend-API ab.
          </p>
        </section>
      </main>
    );
  }

  if (errorMessage || !companyData || !contactInfo) {
    return (
      <main className="page-shell">
        <section className="content-section">
          <p className="eyebrow">API-Fehler</p>
          <h1>Backend nicht erreichbar.</h1>
          <p className="hero-text">
            {errorMessage} Bitte prüfe, ob der Backend-Server auf
            http://localhost:4000 läuft.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="brand">
          <div className="brand-mark">SD</div>
          <div>
            <strong>{companyData.company.name}</strong>
            <span>{companyData.company.slogan}</span>
          </div>
        </div>

        <nav className="main-nav" aria-label="Hauptnavigation">
          <a href="#services">Leistungen</a>
          <a href="#security">Security</a>
          <a href="#contact">Kontakt</a>
          <a href="#status">Status</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">{companyData.company.project}</p>

          <h1>Professionelle Weblösungen mit Frontend, Backend und Security.</h1>

          <p className="hero-text">
            Diese Plattform zeigt echte Fullstack-Kommunikation: Das Frontend
            lädt Firmenstatus, Leistungen, Kontaktinformationen und
            Projektinformationen direkt aus der Backend-API.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Kontakt aufnehmen
            </a>
            <a className="secondary-button" href="#status">
              API-Status prüfen
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Projektübersicht">
          <div className="panel-header">
            <span>Live API Project</span>
            <strong>Version 4.0.0</strong>
          </div>

          <div className="metric-list">
            <div className="metric-card">
              <span>Frontend</span>
              <strong>{companyData.status.frontend}</strong>
            </div>

            <div className="metric-card">
              <span>Backend</span>
              <strong>{companyData.status.backend}</strong>
            </div>

            <div className="metric-card">
              <span>Security</span>
              <strong>{companyData.status.security}</strong>
            </div>

            <div className="metric-card">
              <span>Kontakt-API</span>
              <strong>Aktiv</strong>
            </div>
          </div>
        </aside>
      </section>

      <section id="services" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Leistungen aus der API</p>
          <h2>Was diese Developer-Firma anbietet</h2>
        </div>

        <div className="service-grid">
          {companyData.services.map((service) => (
            <article className="service-card" key={service.id}>
              <span className="service-number">
                {String(service.id).padStart(2, "0")}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="security" className="security-section">
        <div>
          <p className="eyebrow">Security</p>
          <h2>Defensiv, sauber und legal aufgebaut.</h2>
        </div>

        <p>
          Das Projekt setzt ausschließlich auf Schutzmaßnahmen für eigene
          Systeme. Die Sicherheitsinformationen kommen aus dem Backend und werden
          im Frontend angezeigt.
        </p>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-heading">
          <p className="eyebrow">Kontakt-API</p>
          <h2>Projektanfrage an SecureDev senden</h2>
        </div>

        <div className="contact-layout">
          <aside className="contact-info-card">
            <h3>{contactInfo.company}</h3>
            <p>
              Für Projektanfragen, Webentwicklung, Backend-APIs und
              Security-Grundlagen.
            </p>

            <div className="contact-list">
              <div>
                <span>E-Mail</span>
                <strong>{contactInfo.email}</strong>
              </div>

              <div>
                <span>Telefon</span>
                <strong>{contactInfo.phone}</strong>
              </div>

              <div>
                <span>Standort</span>
                <strong>{contactInfo.location}</strong>
              </div>

              <div>
                <span>Antwortzeit</span>
                <strong>{contactInfo.responseTime}</strong>
              </div>
            </div>
          </aside>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label>
              Name
              <input
                value={contactForm.name}
                onChange={(event) =>
                  setContactForm({
                    ...contactForm,
                    name: event.target.value
                  })
                }
                placeholder="Dein Name"
              />
            </label>

            <label>
              E-Mail
              <input
                type="email"
                value={contactForm.email}
                onChange={(event) =>
                  setContactForm({
                    ...contactForm,
                    email: event.target.value
                  })
                }
                placeholder="name@example.com"
              />
            </label>

            <label>
              Thema
              <select
                value={contactForm.topic}
                onChange={(event) =>
                  setContactForm({
                    ...contactForm,
                    topic: event.target.value
                  })
                }
              >
                {contactInfo.topics.map((topic) => (
                  <option value={topic} key={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Nachricht
              <textarea
                value={contactForm.message}
                onChange={(event) =>
                  setContactForm({
                    ...contactForm,
                    message: event.target.value
                  })
                }
                placeholder="Kurze Beschreibung deiner Anfrage"
                rows={5}
              />
            </label>

            <button className="primary-button" type="submit">
              Anfrage an Backend senden
            </button>

            {contactFeedback && (
              <p className="contact-feedback">{contactFeedback}</p>
            )}
          </form>
        </div>
      </section>

      <section id="status" className="status-section">
        <div className="section-heading">
          <p className="eyebrow">Projektstatus aus der API</p>
          <h2>Aktueller Entwicklungsstand</h2>
        </div>

        <div className="status-grid">
          {companyData.projectStatus.map((item) => (
            <article className="status-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}

          <article className="status-card">
            <span>Version 4</span>
            <strong>Kontakt-API + Kontaktbereich aktiv</strong>
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;
