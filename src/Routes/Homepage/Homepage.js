import About from "./About"
import Skills from "./Skills"
import Resume from "./Resume"
import Contact from "./Contact"
import Footer from "../../Footers/Footer"

export default function Homepage() {
  return (
    <div>
      <main>
        <div className="container">
          <About />

          <div style={{ width: "100%", height: "75px" }}/>

          <Skills />

          <div style={{ width: "100%", height: "75px" }}/>

          <Resume />

          <div style={{ width: "100%", height: "75px" }}/>

          <Contact />

          <div style={{ width: "100%", height: "150px" }}/>

        </div>
      </main>
      <Footer />
    </div>
  );
}
