import React from "react";
import Navbar from "./components/Navbar";
import Starfield from "./components/Starfield";
import About from "./components/About";
import Skills from "./components/Skills";
import Demos from "./components/Demos";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import ThreeJS from "./components/ThreeJS/ThreeJS";
import Blog from "./components/Blog";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Starfield />
      <About />
      <Skills />
      <Certifications />
      <Demos />
      <Contact />
      <ThreeJS />
      <Blog />
    </main>
  )
}
