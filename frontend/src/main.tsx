import "./styles/global.css";
import "./App.css";

const root = document.getElementById("root");

if (root) {
  root.innerHTML = `
    <main class="app-shell">
      <section class="hero-card">
        <p class="eyebrow">SecureDev Agency Platform</p>

        <h1>Professionelle Fullstack-Plattform für eine Developer-Firma</h1>

        <p class="hero-text">
          Dieses Projekt wird Schritt für Schritt als echtes Portfolio-Projekt aufgebaut:
          mit Frontend, Backend, API, Sicherheitsgrundlagen, Kundenportal und Adminbereich.
        </p>

        <div class="status-grid">
          <article class="status-card">
            <span>Frontend</span>
            <strong>Läuft</strong>
          </article>

          <article class="status-card">
            <span>Backend</span>
            <strong>Läuft</strong>
          </article>

          <article class="status-card">
            <span>Security</span>
            <strong>Vorbereitet</strong>
          </article>
        </div>
      </section>
    </main>
  `;
}
