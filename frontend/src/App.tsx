function App() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="brand">
          <div className="brand-mark">SD</div>
          <div>
            <strong>SecureDev Agency</strong>
            <span>Fullstack Development & Security</span>
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
          <p className="eyebrow">SecureDev Agency Platform</p>

          <h1>Professionelle Weblösungen mit Frontend, Backend und Security.</h1>

          <p className="hero-text">
            Diese Plattform wird als echtes Fullstack-Portfolio-Projekt aufgebaut:
            mit moderner Firmen-Webseite, Backend-API, Sicherheitsgrundlagen,
            Kundenportal und späterem Adminbereich.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#services">
              Leistungen ansehen
            </a>
            <a className="secondary-button" href="#status">
              Projektstatus prüfen
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Projektübersicht">
          <div className="panel-header">
            <span>Live Project</span>
            <strong>Version 2</strong>
          </div>

          <div className="metric-list">
            <div className="metric-card">
              <span>Frontend</span>
              <strong>React + TypeScript</strong>
            </div>

            <div className="metric-card">
              <span>Backend</span>
              <strong>Node.js + Express</strong>
            </div>

            <div className="metric-card">
              <span>Security</span>
              <strong>Helmet + CORS</strong>
            </div>
          </div>
        </aside>
      </section>

      <section id="services" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Leistungen</p>
          <h2>Was diese Developer-Firma anbietet</h2>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <span className="service-number">01</span>
            <h3>Frontend Development</h3>
            <p>
              Moderne Benutzeroberflächen mit klarer Struktur, responsivem
              Design und professioneller Nutzerführung.
            </p>
          </article>

          <article className="service-card">
            <span className="service-number">02</span>
            <h3>Backend APIs</h3>
            <p>
              Saubere Server-Strukturen, API-Endpunkte, Datenverarbeitung und
              vorbereitete Erweiterbarkeit für echte Anwendungen.
            </p>
          </article>

          <article className="service-card">
            <span className="service-number">03</span>
            <h3>Security Basics</h3>
            <p>
              Defensive Sicherheitsmaßnahmen wie sichere Header, CORS-Regeln,
              Rate-Limits, Validierung und geschützte Konfiguration.
            </p>
          </article>
        </div>
      </section>

      <section id="security" className="security-section">
        <div>
          <p className="eyebrow">Security</p>
          <h2>Defensiv, sauber und legal aufgebaut.</h2>
        </div>

        <p>
          Das Projekt setzt ausschließlich auf Schutzmaßnahmen für eigene Systeme.
          Es geht nicht um Angriffe, sondern um professionelle Absicherung einer
          Webplattform.
        </p>
      </section>

      <section id="status" className="status-section">
        <div className="section-heading">
          <p className="eyebrow">Projektstatus</p>
          <h2>Aktueller Entwicklungsstand</h2>
        </div>

        <div className="status-grid">
          <article className="status-card">
            <span>Version 1</span>
            <strong>Grundstruktur läuft</strong>
          </article>

          <article className="status-card">
            <span>Version 2</span>
            <strong>Firmen-Startseite im Aufbau</strong>
          </article>

          <article className="status-card">
            <span>Nächster Schritt</span>
            <strong>Design verfeinern</strong>
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;
