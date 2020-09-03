import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo.client";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MyProfiles from "./components/MyProfiles";

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <LandingPage />
        <MyProfiles />
        {/* <Navbar /> */}
        {/* <MobileMenu /> */}
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </ApolloProvider>
    </div>
  );
}

export default App;
