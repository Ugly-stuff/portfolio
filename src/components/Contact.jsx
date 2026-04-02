import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        width: "100%",
        display: "block",
        background: "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)",
        padding: "8rem 0",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Background grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Glow orbs */}
      <div style={{ position: "absolute", top: "20%", right: "10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "20%", left: "10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* MAIN CENTERED CONTAINER */}
      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 10 }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>

          {/* Eyebrow */}
          <div style={{ marginBottom: "1.5rem" }}>
            <span style={{
              display: "inline-block",
              fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#818cf8",
              background: "rgba(99,102,241,0.1)", padding: "0.35rem 1rem",
              borderRadius: "999px", border: "1px solid rgba(99,102,241,0.25)"
            }}>
              Get In Touch
            </span>
          </div>

          {/* Title */}
          <h2 style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: "900",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            margin: "0 0 1.5rem 0",
            background: "linear-gradient(135deg, #e2e8f0 0%, #a78bfa 50%, #818cf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Let's Work Together
          </h2>

          <p style={{
            color: "#64748b",
            fontSize: "1.125rem",
            lineHeight: 1.7,
            maxWidth: "36rem",
            margin: "0 auto",
          }}>
            Have a project in mind? Let's create something amazing together. I'd love to hear from you!
          </p>
        </div>

        {/* ── CONTACT BUTTONS ── */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "28rem",
          margin: "0 auto 4rem auto",
        }}>
          <ContactButton
            href="https://github.com/Ugly-stuff"
            icon={<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" /></svg>}
            label="GitHub"
            accent="#6366f1"
            type="secondary"
          />

          <ContactButton
            href="https://linkedin.com/in/souvik-pramanik"
            icon={<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z" /></svg>}
            label="LinkedIn"
            accent="#a78bfa"
            type="secondary"
          />

          <ContactButton
           href="https://mail.google.com/mail/?view=cm&fs=1&to=souvikpramanik0007@gmail.com"
            icon={<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>}
            label="Send Email"
            accent="#6366f1"
            type="primary"
          />
        </div>

        {/* ── FOOTER ── */}
        <div style={{
          paddingTop: "2.5rem",
          borderTop: "1px solid rgba(71,85,105,0.3)",
          textAlign: "center",
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
          }}>
            <p style={{
              color: "#475569",
              fontSize: "0.875rem",
              margin: 0,
            }}>
              📍 Based in <span style={{ color: "#64748b", fontWeight: "600" }}>Kolkata, India</span>
            </p>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1.25rem",
              background: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.2)",
              borderRadius: "999px",
              fontSize: "0.8rem",
              color: "#4ade80",
              fontWeight: "600",
            }}>
              <span style={{
                width: "8px",
                height: "8px",
                background: "#22c55e",
                borderRadius: "50%",
                display: "inline-block",
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }} />
              Available for opportunities
            </div>
          </div>
        </div>

      </div>

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}

function ContactButton({ href, icon, label, accent, type = "secondary" }) {
  const [hovered, setHovered] = React.useState(false);

  const isPrimary = type === "primary";
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        padding: "1rem 2rem",
        borderRadius: "0.75rem",
        fontSize: "0.95rem",
        fontWeight: "600",
        textDecoration: "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",

        ...(isPrimary && {
          background: hovered
            ? `linear-gradient(135deg, ${accent}dd, ${accent}bb)`
            : `linear-gradient(135deg, ${accent}cc, ${accent}99)`,
          border: `1px solid ${accent}66`,
          color: "#ffffff",
          boxShadow: hovered
            ? `0 12px 40px ${accent}44, 0 0 0 1px ${accent}33`
            : `0 4px 20px ${accent}33`,
        }),

        ...(!isPrimary && {
          background: hovered
            ? "rgba(30,41,59,0.8)"
            : "rgba(30,41,59,0.5)",
          border: hovered
            ? `1px solid ${accent}88`
            : "1px solid rgba(71,85,105,0.4)",
          color: hovered ? accent : "#cbd5e1",
          boxShadow: hovered
            ? `0 8px 30px ${accent}22`
            : "none",
        }),

        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <span style={{ display: "flex", alignItems: "center" }}>
        {icon}
      </span>

      {label}

      {isPrimary && (
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{
            transition: "transform 0.3s ease",
            transform: hovered ? "translateX(3px)" : "translateX(0)",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      )}
    </a>
  );
}

export default Contact;