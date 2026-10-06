"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#080b12", color: "#f7f8fb", fontFamily: "system-ui, sans-serif" }}>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
          <div style={{ width: "min(680px, 100%)" }}>
            <p style={{ color: "#a9b9f8", fontSize: 12, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase" }}>
              Iskara Labs / Recovery
            </p>
            <h1 style={{ margin: "12px 0", fontSize: "clamp(2.2rem, 8vw, 4.8rem)", lineHeight: 1, letterSpacing: "-.05em" }}>
              The site hit a temporary error.
            </h1>
            <p style={{ color: "#9ba7b8", lineHeight: 1.7 }}>
              Retry the application. If the problem persists, return to the home page.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
              <button
                type="button"
                onClick={reset}
                style={{ minHeight: 46, padding: "0 18px", border: 0, borderRadius: 12, background: "#c9d4ff", color: "#080b12", fontWeight: 800, cursor: "pointer" }}
              >
                Retry
              </button>
              <a
                href="/"
                style={{ minHeight: 46, display: "inline-flex", alignItems: "center", padding: "0 18px", border: "1px solid rgba(255,255,255,.16)", borderRadius: 12, color: "#f7f8fb", textDecoration: "none", fontWeight: 800 }}
              >
                Home
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
