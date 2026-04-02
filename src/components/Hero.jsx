import profile from "../assets/profile.jpg"

const socials = [
  {
    href: "https://github.com/Ugly-stuff",
    label: "GitHub",
    icon: (
      <svg width="24" height="24" fill="currentColor" className="text-slate-300 hover:text-white transition-colors" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
    )
  },
  {
    href: "https://linkedin.com/in/souvik-pramanik",
    label: "LinkedIn",
    icon: (
      <svg width="24" height="24" fill="currentColor" className="text-slate-300 hover:text-blue-400 transition-colors" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
    )
  }
];

function Hero() {
  return (
    <section 
      id="profile"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '700ms'}}></div>
        <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-indigo-700/10 via-blue-400/10 to-purple-500/10 rounded-full blur-2xl" style={{animation: 'spin 18s linear infinite'}}></div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        
        .hero-title {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .hero-subtitle {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
        
        .hero-description {
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }
        
        .hero-buttons {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }
        
        .hero-image {
          animation: fadeInUp 0.8s ease-out 0.1s both;
        }
      `}</style>

      {/* Content - CENTERED */}
      <div className="w-full max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="flex justify-center mb-8 hero-image">
          <div className="relative w-36 h-36 group">
            <div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-lg opacity-70 group-hover:scale-105 transition-transform duration-300"
              style={{animation: 'spin 3s linear infinite', animationDuration: '4s'}}
            ></div>
            <img
              src={profile}
              alt="Souvik Pramanik"
              className="relative w-36 h-36 rounded-full border-4 border-slate-800 shadow-2xl z-10 object-cover transition-transform duration-300 group-hover:shadow-2xl"
              style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)' }}
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-3 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg hero-title">
          Souvik Pramanik
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-indigo-300 font-medium mb-4 tracking-wide hero-subtitle">
          Full Stack Developer
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          {socials.map((s, idx) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="hover:scale-110 transition-transform duration-300"
              style={{
                animation: `fadeInUp 0.8s ease-out ${0.5 + idx * 0.1}s both`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.6))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'none';
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed tracking-wide hero-description">
  Crafting scalable, modern web applications with{" "}
  <span className="text-blue-400 font-semibold">React</span>,{" "}
  <span className="text-green-400 font-semibold">Node.js</span>,{" "}
  <span className="text-yellow-400 font-semibold">Tailwind CSS</span>,{" "}
  <span className="text-cyan-400 font-semibold">TypeScript</span>,{" "}
  and <span className="text-purple-400 font-semibold">Figma</span>.
</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center hero-buttons">
          <a href="#projects">
            <button 
             className="flex items-center gap-2 px-8 py-3 border-2 border-indigo-500/50 hover:border-indigo-400 text-indigo-300 hover:text-indigo-200 rounded-xl font-semibold hover:bg-indigo-500/10 transition-all duration-300 hover:scale-105"
style={{
  boxShadow: '0 0 25px rgba(99, 102, 241, 0.25)'
}}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(37, 99, 235, 0.3)';
              }}
            >
              View Projects
            </button>
          </a>
          <a href="#contact">
            <button 
              className="flex items-center gap-2 px-8 py-3 border-2 border-indigo-500/50 hover:border-indigo-400 text-indigo-300 hover:text-indigo-200 rounded-xl font-semibold hover:bg-indigo-500/10 transition-all duration-300 hover:scale-105"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M2.94 6.94a1.5 1.5 0 0 1 2.12 0L10 11.88l4.94-4.94a1.5 1.5 0 1 1 2.12 2.12l-6 6a1.5 1.5 0 0 1-2.12 0l-6-6a1.5 1.5 0 0 1 0-2.12z"/></svg>
              Get In Touch
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero