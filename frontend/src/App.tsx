function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px",
        color: "white"
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "920px",
          padding: "42px",
          borderRadius: "28px",
          background: "rgba(15, 23, 42, 0.88)",
          border: "1px solid rgba(148, 163, 184, 0.25)",
          boxShadow: "0 24px 80px rgba(0, 0, 0, 0.35)"
        }}
      >
        <p
          style={{
            margin: "0 0 14px",
            color: "#93c5fd",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase"
          }}
        >
          SecureDev Agency Platform
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2.2rem, 6vw, 4.8rem)",
            lineHeight: 1,
            letterSpacing: "-0.05em"
          }}
        >
          Professionelle Fullstack-Plattform für eine Developer-Firma
        </h1>

        <p
          style={{
            maxWidth: "720px",
            margin: "26px 0 0",
            color: "#cbd5e1",
            fontSize: "1.08rem",
            lineHeight: 1.8
          }}
        >
          Dieses Projekt wird Schritt für Schritt als echtes Portfolio-Projekt
          aufgebaut: mit Frontend, Backend, API, Sicherheitsgrundlagen,
          Kundenportal und Adminbereich.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "18px",
            marginTop: "34px"
          }}
        >
          <article
            style={{
              padding: "20px",
              borderRadius: "20px",
              background: "rgba(30, 41, 59, 0.75)",
              border: "1px solid rgba(148, 163, 184, 0.18)"
            }}
          >
            <span style={{ color: "#94a3b8" }}>Frontend</span>
            <strong style={{ display: "block", marginTop: "8px" }}>
              Läuft
            </strong>
          </article>

          <article
            style={{
              padding: "20px",
              borderRadius: "20px",
              background: "rgba(30, 41, 59, 0.75)",
              border: "1px solid rgba(148, 163, 184, 0.18)"
            }}
          >
            <span style={{ color: "#94a3b8" }}>Backend</span>
            <strong style={{ display: "block", marginTop: "8px" }}>
              Läuft
            </strong>
          </article>

          <article
            style={{
              padding: "20px",
              borderRadius: "20px",
              background: "rgba(30, 41, 59, 0.75)",
              border: "1px solid rgba(148, 163, 184, 0.18)"
            }}
          >
            <span style={{ color: "#94a3b8" }}>Security</span>
            <strong style={{ display: "block", marginTop: "8px" }}>
              Vorbereitet
            </strong>
          </article>
        </div>
      </section>
    </main>
  );
}

export default App;
