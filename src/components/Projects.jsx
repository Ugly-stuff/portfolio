import React from "react";
const projectsData = [
  {
    id: 1,
    title: "Blog Platform",
    description: "Full stack blogging system with authentication, rich text editor, and real-time comments.",
    image: "/blog.svg",
    tags: ["React", "Node.js", "MongoDB", "JWT", "Firebase"],
    liveUrl: "https://tech-blog-page.vercel.app/",
    githubUrl: "https://github.com/Ugly-stuff/tech-blog-page",
    accent: "#3b82f6",
    number: "01",
  },
  {
    id: 2,
    title: "TalentMatch AI",
    description: "Modern e-commerce platform with payment integration, cart management, and admin dashboard.",
    image: "/talentmatch.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Razorpay", "OpenAI API"],
    liveUrl: "UNDER_DEVELOPMENT....",
    githubUrl: "Soon..",
    accent: "#a855f7",
    number: "02",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "Performing CRUD, status tracking, and REST API integration using React (TypeScript) and Node.js.",
    image: "/tasks.svg",
    tags: ["Node.js", "TypeScript", "Express", "Mongoose (ODM)"],
    liveUrl: "https://task-manager-khaki-pi-12.vercel.app/",
    githubUrl: "https://github.com/Ugly-stuff/task-manager",
    accent: "#10b981",
    number: "03",
  },
  {
    id: 4,
    title: "File Type Converter",
    description: "Cloud based file converter with multiple file support and ZIP download.",
    image: "/converter.svg",
    tags: ["React", "Node.js", "Express.js", "Rest API", "Multer"],
    liveUrl: "https://converter-files-wheat.vercel.app/",
    githubUrl: "https://github.com/Ugly-stuff/converter-files",
    accent: "#f97316",
    number: "04",
  },
  {
    id: 5,
    title: "Weather Forecast",
    description: "Real time weather app with forecasts, interactive maps, and location based alerts.",
    image: "/weather.svg",
    tags: ["React", "TypeScript", "OpenWeather API", "React Leaflet", "CSS"],
    liveUrl: "https://weather-forecast-tau-eight.vercel.app/",
    githubUrl: "https://github.com/Ugly-stuff/weather_forecast",
    accent: "#06b6d4",
    number: "05",
  },
  {
    id: 6,
    title: "Portfolio CMS",
    description: "Content management system for portfolio websites with drag-and-drop builder.",
    image: "/cms.svg",
    tags: ["React", "GraphQL", "Strapi", "AWS"],
    liveUrl: "https://portfolio-cms-demo.vercel.app/",
    githubUrl: "https://github.com/Ugly-stuff/portfolio-cms",
    accent: "#f43f5e",
    number: "06",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      style={{
        width: "100%",
        display: "block",
        background: "linear-gradient(180deg, #020617 0%, #0a0f1e 50%, #020617 100%)",
        padding: "8rem 0",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Ambient background grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Glow orbs */}
      <div style={{ position: "absolute", top: "10%", right: "5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Main centered container */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 10 }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>

          {/* Eyebrow label */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "2.5rem", height: "1px", background: "linear-gradient(to right, transparent, #6366f1)" }} />
            <span style={{
              fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#818cf8",
              background: "rgba(99,102,241,0.1)", padding: "0.35rem 1rem",
              borderRadius: "999px", border: "1px solid rgba(99,102,241,0.25)"
            }}>
              Selected Work
            </span>
            <div style={{ width: "2.5rem", height: "1px", background: "linear-gradient(to left, transparent, #6366f1)" }} />
          </div>

          {/* Title */}
          <h2 style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: "900",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            margin: "0 0 1.5rem 0",
            background: "linear-gradient(135deg, #e2e8f0 0%, #818cf8 50%, #c084fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Featured Projects
          </h2>

          <p style={{ color: "#64748b", fontSize: "1.125rem", maxWidth: "36rem", margin: "0 auto", lineHeight: 1.7 }}>
            A collection of things I've built — from full-stack platforms to AI-powered tools
          </p>
        </div>

        {/* ── PROJECTS GRID ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "1.5rem",
          marginBottom: "4rem",
        }}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* ── VIEW ALL BUTTON ── */}
        <div style={{ textAlign: "center" }}>
          <a
            href="https://github.com/Ugly-stuff"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.75rem",
              padding: "0.9rem 2.25rem", borderRadius: "0.75rem",
              fontWeight: "600", fontSize: "0.95rem",
              color: "#e2e8f0",
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.3)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(99,102,241,0.2)";
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.6)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(99,102,241,0.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(99,102,241,0.1)";
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
            </svg>
            View All on GitHub
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = React.useState(false);
  const [imgError, setImgError] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "1.25rem",
        overflow: "hidden",
        background: "rgba(15, 23, 42, 0.8)",
        border: `1px solid ${hovered ? project.accent + "55" : "rgba(71,85,105,0.3)"}`,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? `0 24px 60px ${project.accent}22, 0 0 0 1px ${project.accent}22` : "0 4px 20px rgba(0,0,0,0.3)",
        cursor: "pointer",
      }}
    >
      {/* Accent glow top */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: hovered ? `linear-gradient(90deg, transparent, ${project.accent}, transparent)` : "transparent",
        transition: "all 0.4s ease",
      }} />

      {/* Project number watermark */}
      <div style={{
        position: "absolute", top: "1rem", right: "1.25rem",
        fontSize: "4rem", fontWeight: "900", lineHeight: 1,
        color: "rgba(255,255,255,0.03)",
        fontFamily: "monospace",
        pointerEvents: "none",
        zIndex: 1,
      }}>
        {project.number}
      </div>

      {/* IMAGE AREA */}
      <div style={{ position: "relative", height: "13rem", overflow: "hidden", background: "rgba(15,23,42,0.9)" }}>
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              transition: "transform 0.6s ease",
              transform: hovered ? "scale(1.08)" : "scale(1)",
              opacity: hovered ? 0.7 : 0.85,
            }}
          />
        ) : (
          /* Beautiful placeholder when image missing */
          <div style={{
            width: "100%", height: "100%",
            background: `linear-gradient(135deg, rgba(15,23,42,1) 0%, ${project.accent}22 100%)`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "0.5rem", opacity: 0.4 }}>⬡</div>
              <div style={{ color: project.accent, fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.6 }}>
                {project.title}
              </div>
            </div>
          </div>
        )}

        {/* Hover overlay with links */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.5) 100%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem",
        }}>
          <LinkButton href={project.liveUrl} accent={project.accent} label="Live Demo">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live
          </LinkButton>
          <LinkButton href={project.githubUrl} accent={"#475569"} label="GitHub">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
            </svg>
            Code
          </LinkButton>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ padding: "1.5rem" }}>

        {/* Title row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.6rem" }}>
          <h3 style={{
            fontSize: "1.15rem", fontWeight: "700",
            color: hovered ? "#f1f5f9" : "#e2e8f0",
            margin: 0, lineHeight: 1.3,
            transition: "color 0.3s ease",
          }}>
            {project.title}
          </h3>
          {/* Accent dot */}
          <div style={{
            width: "8px", height: "8px", borderRadius: "50%",
            background: project.accent,
            marginTop: "6px", flexShrink: 0,
            boxShadow: hovered ? `0 0 12px ${project.accent}` : "none",
            transition: "box-shadow 0.3s ease",
          }} />
        </div>

        <p style={{
          color: "#64748b", fontSize: "0.875rem",
          lineHeight: 1.65, margin: "0 0 1.25rem 0",
        }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.tags.map((tag, i) => (
            <span key={i} style={{
              fontSize: "0.7rem", fontWeight: "600",
              padding: "0.25rem 0.65rem",
              borderRadius: "999px",
              background: `${project.accent}15`,
              color: project.accent,
              border: `1px solid ${project.accent}30`,
              letterSpacing: "0.05em",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0,
        height: "2px",
        width: hovered ? "100%" : "0%",
        background: `linear-gradient(to right, ${project.accent}, ${project.accent}88)`,
        transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }} />
    </div>
  );
}

function LinkButton({ href, accent, label, children }) {
  const [hov, setHov] = React.useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: "0.4rem",
        padding: "0.55rem 1.1rem",
        borderRadius: "0.6rem",
        background: hov ? accent : `${accent}cc`,
        color: "white",
        fontWeight: "600", fontSize: "0.8rem",
        textDecoration: "none",
        transition: "all 0.2s ease",
        transform: hov ? "scale(1.05)" : "scale(1)",
        boxShadow: hov ? `0 4px 20px ${accent}66` : "none",
        backdropFilter: "blur(8px)",
      }}
    >
      {children}
    </a>
  );
}

export default Projects;
