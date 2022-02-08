import "./About.css"

export default function About() {
  return (
    <div className="center">
    <div className="about">
      <div className="center">
        <div style={{ textAlign: "center" }}>
          <h1>Hello! I'm Gavin.</h1>
          <h2>Welcome To My Portfolio.</h2>
        </div>
      </div>

      <div className="container">
        <div className="container-half-width">
          <div className="image-container">
            <img  className="cover-image"  alt="About Me Cover Artwork - Image Of Astronaut" src="./astronaut.svg" />
          </div>
        </div>
        <div className="container-half-width">
          <p>I have been working on web development consistently since the end of 2021. I am a self taught developer and my goal is to land a job as a Front-End Web Developer.</p>
          <p style={{ paddingTop: "15px" }}>This portfolio showcases my website design progress, resume, skills, projects, contact information, and blog.</p>
        </div>
      </div>
    </div>
    </div>
  );
}
