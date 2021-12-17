import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Demos from "./components/Demos";
import Contact from "./components/Contact";
import ThreeJS from "./components/ThreeJS";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <Demos />
      <Contact />
      <ThreeJS />
    </main>
  )
}
