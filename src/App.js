import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import MobileMenu from "./components/MobileMenu";

function App() {
  return (
    <div>
      <LandingPage />
      <Navbar />
      <MobileMenu />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
