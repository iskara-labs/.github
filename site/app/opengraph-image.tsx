import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Iskara Labs — Build systems. Not demos.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#080b12",
          color: "#f7f8fb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: 999,
            right: -160,
            top: -210,
            background: "radial-gradient(circle, rgba(111,168,255,.55), rgba(143,124,255,.18) 42%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: 999,
            left: -170,
            bottom: -280,
            background: "radial-gradient(circle, rgba(96,228,255,.25), transparent 70%)",
          }}
        />
        <div
          style={{
            padding: "64px 72px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 15,
                letterSpacing: 2,
                background: "rgba(255,255,255,.05)",
              }}
            >
              IL
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 26, fontWeight: 700 }}>Iskara Labs</span>
              <span style={{ fontSize: 13, color: "#7f8ba0", marginTop: 5, letterSpacing: 2 }}>
                PRODUCT STUDIO / EU
              </span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 24, color: "#8ea0bc", marginBottom: 16 }}>
              Focused products. Governed systems.
            </span>
            <span style={{ fontSize: 82, fontWeight: 800, lineHeight: .95, letterSpacing: -5 }}>
              Build systems.
            </span>
            <span
              style={{
                fontSize: 82,
                fontWeight: 800,
                lineHeight: .95,
                letterSpacing: -5,
                marginTop: 6,
                color: "#aebeff",
              }}
            >
              Not demos.
            </span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", color: "#748198", fontSize: 15 }}>
            <span>iskaralabs.co</span>
            <span>Estonia structure planned · incorporation in progress</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
