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

          <div style={{ width: "100%", height: "100px" }}/>

          <Skills />

          <div style={{ width: "100%", height: "75px" }}/> {/* Height of spacer is 25px less than others to account for 25px margin-bottom of skills list items */}

          <Resume />

          <div style={{ width: "100%", height: "100px" }}/>

          <Contact />

          <div style={{ width: "100%", height: "150px" }}/>

        </div>
      </main>
      <Footer />
    </div>
  );
}
