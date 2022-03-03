import "./About.css"

export default function About() {
  return (
    <div className="center center-text-about-me">
      <div className="about">
        <div className="center">
          <div style={{ textAlign: "center" }}>
            <h1>Hello! I'm Gavin.</h1>
            <h2>Welcome To My Portfolio.</h2>
          </div>
        </div>

        <div style={{ paddingTop: "15px" }}>
          <div className="container">
            <div className="container-half-width">
              <div className="image-container">
                <img  className="cover-image"  alt="About Me Cover Artwork" src="./astronaut.png" />
              </div>
            </div>
            <div className="container-half-width">
              <p>I am a self taught developer and my goal is to land a job as a Front-End Web Developer by the end of 2022. I have been working on web-development consistently since the end of 2021; I have also been coding across various other disciplines as a hobby for several years.</p>
              <p style={{ paddingTop: "15px" }}>This portfolio showcases my website design progress, resume, skills, projects, contact information, and blog.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
