import { useState } from "react";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "qualification", label: "Qualification" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
];

const content = {
 introduction: {
  title: "Introduction",
  body: "I'm a Computer Science graduate and aspiring Full Stack Developer with hands on experience in building real world projects using React and Node.js. I focus on writing clean, understandable code and continuously improving my problem solving skills. Currently strengthening my backend development and system design fundamentals while actively working on personal projects."
},

qualification: {
  title: "Education & Certifications",
  body: "Bachelor of Technology (BTech) in Computer Science (2024). Alongside my degree, I have completed practical training in Full Stack Development and built multiple academic and personal projects. Currently learning advanced backend concepts and improving my understanding of databases and APIs."
},

experience: {
  title: "Projects & Practical Experience",
  body: "Developed a full stack blog platform with authentication and protected routes. Built frontend interfaces using React and Tailwind CSS and implemented backend APIs using Node.js and MongoDB. Experienced in handling authentication flows, API integration, and basic deployment. Continuously building projects to gain production level experience."
},

skills: {
  title: "Technical Skills",
  body: "Frontend: React, JavaScript, Tailwind CSS • Backend: Node.js, Express (Basic) • Database: MongoDB, Firebase • Tools: Git (Basic), VS Code, Postman • Concepts: REST APIs, Authentication, Component based Architecture"
}
};

function ResumeSection() {
  const [active, setActive] = useState("introduction");

  return (
    <section
      id="resume"
      style={{ width: "100%", display: "block" }}
      className="py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <style>{`
        @keyframes slideInContent {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .resume-content {
          animation: slideInContent 0.4s ease-out;
        }
      `}</style>

      {/* Wrapper  forces centering with inline style as backup */}
      <div
        style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}
        className="relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-blue-400 font-semibold tracking-widest uppercase text-sm px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20"
            style={{ transition: "all 0.3s ease" }}>
            About Me
          </span>
          <h2 className="text-5xl md:text-6xl font-black mt-6 mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              My Professional Journey
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Discover my experience, skills, and qualifications
          </p>
        </div>

        {/* Grid — inline style as backup for centering */}
        <div
          style={{ maxWidth: "64rem", margin: "0 auto", display: "grid", gap: "1.5rem", gridTemplateColumns: "1fr" }}
          className="md:grid-cols-4"
        >
          {/* Left Menu */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActive(section.id)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "0.875rem 1.5rem",
                  borderRadius: "0.75rem",
                  fontWeight: "600",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  background: active === section.id
                    ? "linear-gradient(to right, #2563eb, #4f46e5)"
                    : "rgba(30, 41, 59, 0.4)",
                  color: active === section.id ? "#ffffff" : "#cbd5e1",
                  border: active === section.id ? "1px solid rgba(59, 130, 246, 0.5)" : "1px solid rgba(71, 85, 105, 0.5)",
                  transform: active === section.id ? "scale(1.05) translateX(4px)" : "scale(1) translateX(0)",
                  boxShadow: active === section.id ? "0 10px 25px rgba(59, 130, 246, 0.3)" : "none",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  if (active !== section.id) {
                    e.target.style.background = "rgba(30, 41, 59, 0.7)";
                    e.target.style.borderColor = "rgba(71, 85, 105, 0.8)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== section.id) {
                    e.target.style.background = "rgba(30, 41, 59, 0.4)";
                    e.target.style.borderColor = "rgba(71, 85, 105, 0.5)";
                  }
                }}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div
            className="resume-content"
            style={{
              gridColumn: "span 3",
              background: "linear-gradient(to bottom right, rgba(30,41,59,0.4), rgba(30,41,59,0.2))",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(71, 85, 105, 0.5)",
              padding: "2.5rem",
              borderRadius: "1rem",
              boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
            }}
          >
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                marginBottom: "1.5rem",
                color: "#ffffff",
                background: "linear-gradient(to right, #60a5fa, #a78bfa)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              {content[active].title}
            </h3>
            <p style={{
              color: "#e2e8f0",
              fontSize: "1.125rem",
              lineHeight: "1.8",
              letterSpacing: "0.3px"
            }}>
              {content[active].body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;