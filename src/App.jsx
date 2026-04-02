import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ResumeSection from "./components/ResumeSection"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import ResumePage from "./components/ResumePage"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ResumeSection />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App