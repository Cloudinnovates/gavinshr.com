import React from "react";
import Navbar from "./components/Navbar";
import Starfield from "./components/Starfield/Starfield";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Acknowledgements from "./components/Acknowledgements";

export default function App() {
  return (
    <main className="text-gray-400 body-font"> {/*bg-gray-900*/}
      <Starfield />
      <Navbar />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Blog />
      <Acknowledgements />
    </main>
  )
}
