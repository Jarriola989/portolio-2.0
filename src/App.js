import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={LandingPage} />
      <Route path="/" component={Navbar} />
      <Route path="/" component={Skills} />
      <Route path="/" component={Projects} />
      <Route path="/" component={Contact} />
    </BrowserRouter>
  );
}

export default App;
