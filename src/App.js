import React from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";
import MyProfiles from "./components/MyProfiles";

function App() {
  return (
    <div>
      <LandingPage />
      <MyProfiles />
      {/* <Navbar /> */}
      {/* <MobileMenu /> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
