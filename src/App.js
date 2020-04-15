import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={LandingPage} />
      <Route path="/" component={Navbar} />
      <Route path="/" component={Projects} />
      {/* <Navbar />
      <LandingPage />
      <Projects /> */}
    </BrowserRouter>
  );
}

export default App;
