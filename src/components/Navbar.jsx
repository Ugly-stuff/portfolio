import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only detect sections when on home page
      if (location.pathname === "/") {
        const sections = ["profile", "resume", "projects", "contact"];
        const current = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });

        if (current) setActiveSection(current);
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/resume", label: "Resume" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    if (href === "/resume") return location.pathname === "/resume";
    return activeSection === href.slice(1);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-gradient-to-r from-slate-950/95 via-indigo-950/95 to-slate-950/95 backdrop-blur-xl border-b border-slate-800/50"
        : "bg-gradient-to-r from-slate-950/70 via-indigo-950/70 to-slate-950/70 backdrop-blur-lg"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-400 flex-shrink-0 ml-4">
            ֆօʊʋiӄ
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-semibold transition-colors duration-200 ${active
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-white"
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="/#contact"
              className="flex items-center gap-2 px-8 py-3 border-2 border-indigo-500/50 hover:border-indigo-400 text-indigo-300 hover:text-indigo-200 rounded-xl font-semibold hover:bg-indigo-500/10 transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: '0 0 25px rgba(99, 102, 241, 0.25)'
              }}
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-10 h-10 items-center justify-center text-white hover:bg-slate-800/50 rounded-lg transition-colors duration-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-lg border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${active
                    ? "text-blue-400 bg-slate-800/50"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/30"
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="
    flex items-center gap-2 px-8 py-3
    border border-indigo-500/40
    text-indigo-300 hover:text-indigo-200
    rounded-xl font-semibold
    bg-indigo-500/5 hover:bg-indigo-500/10
    transition-all duration-300
    hover:scale-105 hover:border-indigo-400
  "
            >
              Let's Talk

            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;