import { Link } from "react-router-dom";

function ResumePage() {
  const resumePath = "/Souvik_Pramanik_CV.pdf";

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20">
      {/* Resume Display Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-900/50 backdrop-blur border border-slate-800/50 rounded-xl overflow-hidden shadow-2xl">
          {/* Check if resume exists, otherwise show placeholder */}
          <iframe
            src={resumePath}
            type="application/pdf"
            width="100%"
            height="800px"
            className="rounded-xl"
            title="Resume"
          />
        </div>

        {/* Download button */}
        <div className="mt-8 flex justify-center">
          <a
            href={resumePath}
            download="Resume_Souvik_Pramanik.pdf"
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Info message */}
        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>Download resume PDF file at: <span className="text-slate-300 font-mono font-semibold">public/resume.pdf</span></p>
          {/* <p className="mt-2 text-xs">Configure path in: <span className="text-slate-300 font-mono font-semibold">.env (VITE_RESUME_PATH)</span></p> */}
        </div>
      </div>
    </div>
  );
}

export default ResumePage;