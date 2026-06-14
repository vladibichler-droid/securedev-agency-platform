import { useEffect, useState } from "react";
import {
  CompanyStatusResponse,
  fetchCompanyStatus
} from "./services/companyStatusApi";

function App() {
  const [companyData, setCompanyData] = useState<CompanyStatusResponse | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadCompanyStatus() {
      try {
        const data = await fetchCompanyStatus();
        setCompanyData(data);
      } catch {
        setErrorMessage("Backend-Daten konnten nicht geladen werden.");
      } finally {
        setIsLoading(false);
      }
    }

    loadCompanyStatus();
  }, []);

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

  if (errorMessage || !companyData) {
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
          <a href="#status">Status</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">{companyData.company.project}</p>

          <h1>Professionelle Weblösungen mit Frontend, Backend und Security.</h1>

          <p className="hero-text">
            Diese Plattform zeigt jetzt echte Fullstack-Kommunikation: Das
            Frontend lädt Firmenstatus, Leistungen und Projektinformationen
            direkt aus der Backend-API.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#services">
              Leistungen ansehen
            </a>
            <a className="secondary-button" href="#status">
              API-Status prüfen
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Projektübersicht">
          <div className="panel-header">
            <span>Live API Project</span>
            <strong>Version {companyData.company.version}</strong>
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
              <span>API</span>
              <strong>{companyData.status.api}</strong>
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
          Systeme. Die Sicherheitsinformationen kommen jetzt aus dem Backend und
          werden im Frontend angezeigt.
        </p>
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
        </div>
      </section>
    </main>
  );
}

export default App;
