import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { ProfileProvider } from "./context/ProfileContext";

import HeaderNavbar from "./sections/HeaderNavbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import DSA from "./sections/DSA";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const AppProviders = ({ children }) => (
  <ThemeProvider>
    <ProfileProvider>{children}</ProfileProvider>
  </ThemeProvider>
);

const Portfolio = () => {
  return (
    <AppProviders>
      <HeaderNavbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DSA />
      <Certifications />
      <Contact />
      <Footer />
    </AppProviders>
  );
};

export default Portfolio;
