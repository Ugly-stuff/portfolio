import { useState } from "react";
import { Link } from "react-router-dom";

function ResumePage() {
  const resumePath = "/resume.pdf";
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  const handleIframeLoad = () => {
    setPdfLoaded(true);
    setPdfError(false);
  };

  const handleIframeError = () => {
    setPdfLoaded(false);
    setPdfError(true);
  };

  return (
    <div className="w-full min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 pt-20">
      {/* Resume Display Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Resume Card */}
        <div className="bg-slate-900/50 backdrop-blur border border-slate-800/50 rounded-xl overflow-hidden shadow-2xl mb-8">
          {/* Loading state */}
          {!pdfLoaded && !pdfError && (
            <div className="w-full h-96 md:h-screen flex items-center justify-center bg-slate-800/20">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-slate-300">Loading your resume...</p>
              </div>
            </div>
          )}

          {/* PDF iframe */}
          {!pdfError && (
            <iframe
              src={resumePath}
              type="application/pdf"
              width="100%"
              height="800px"
              className={`rounded-xl ${!pdfLoaded ? 'hidden' : 'block'}`}
              title="Resume"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          )}

          {/* Error state with fallback */}
          {pdfError && (
            <div className="w-full h-96 md:h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6">
              <svg width="48" height="48" fill="currentColor" className="text-red-400 mb-4" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <h3 className="text-xl font-semibold text-slate-300 mb-2">Unable to load resume</h3>
              <p className="text-slate-400 text-center mb-6">The PDF viewer couldn't load. You can download your resume directly below.</p>
              <a
                href={resumePath}
                download="Resume_Souvik_Pramanik.pdf"
                className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                Download PDF
              </a>
            </div>
          )}
        </div>

        {/* Download button */}
        <div className="flex justify-center mb-8">
          <a
            href={resumePath}
            download="Resume_Souvik_Pramanik.pdf"
            className="flex items-center gap-2 px-8 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Info message */}
        <div className="text-center text-slate-400 text-sm">
          <p>Download resume PDF file at: <span className="text-slate-300 font-mono font-semibold">public/resume.pdf</span></p>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;