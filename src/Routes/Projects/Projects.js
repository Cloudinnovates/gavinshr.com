import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <main>
      <div className="container">
        <h1>Projects</h1>

        <p style={{ paddingTop: "15px" }}>Welcome to the projects page.</p>
        <div style={{ paddingTop: "15px", paddingBottom: "2rem" }}><Link className="link" to="/">&larr; Homepage</Link></div>

        <hr/>
        <br/>
        <div style={{ paddingBottom: "2rem" }}>
          <h2>Maze Generation & Solving Algorithm</h2>
          <h3><i>Work In Progress</i></h3>
          <br/>

          <img
            className="projectImage"
            src={require("./DemoImages/EvolutionDemo.png")}
            alt="Maze Algorithm Project Screenshot"
          />
          <br/>

          <p style={{ paddingTop: "15px" }}>HTML/CSS/JavaScript Maze generation & solving program with JavaScript algorithm.</p>
          <div style={{ paddingTop: "15px"}}>
            <a className="link" href="/MazeAlgorithm/index.html">Maze Algorithm Code Demo</a>
            <br/>
            <a className="link" href="https://github.com/gshrdr/MazeAlgorithm" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a>
          </div>
        </div>

        <hr/>
        <br/>
        <div style={{ paddingBottom: "2rem" }}>
          <h2>ReactJS Demo</h2>
          <h3><i>Advanced Front-End JavaScript Framework</i></h3>
          <br/>

          <img
            className="projectImage"
            src={require("./DemoImages/PortfolioDemo.png")}
            alt="gavinshr.com Portfolio Screenshot"
          />
          <br/>

          <p style={{ paddingTop: "15px" }}>This website is my ReactJS demo! My portfolio was built using ReactJS with some HTML5, CSS3, and JavaScript.</p>
          <div style={{ paddingTop: "15px"}}>
            <a className="link" href="https://gavinshr.com">ReactJS Demo - gavinshr.com</a>
            <br/>
            <a className="link" href="https://github.com/gshrdr/gavinshr.com" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a>
          </div>
        </div>

        <hr/>
        <br/>
        <div style={{ paddingBottom: "2rem" }}>
          <h2>ThreeJS Demo</h2>
          <h3><i>3D Rendering With JavaScript</i></h3>

          <p style={{ paddingTop: "15px" }}>These are a few simple projects that I built using the excellent resources at: <a className="link" href="https://discoverthreejs.com" target="_blank" rel="noopener noreferrer">DiscoverThreeJS.com</a>. For now I have a basic understanding of setting up an environment and rendering 3D graphics in a browser. In the future I plan on extending this knowledge with the goal of developing a full 3D simulation and/or game.</p>

          <div style={{ paddingTop: "15px" }}>
            <div>
              <a className="link" href="/3D-Test/index.html">3D Test #1 - Cube</a>
              <br/>
              <a className="link" href="https://github.com/gshrdr/gavinshr.com/tree/main/public/3D-Test" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a>
              <br/>
            </div>

            <div style={{ paddingTop: "15px" }}>
              <a className="link" href="/3D-Test-2-Orbital/index.html">3D Test #2 - Camera + Animation</a>
              <br/>
              <a className="link" href="https://github.com/gshrdr/gavinshr.com/tree/main/public/3D-Test-2-Orbital" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a>
              <br/>
            </div>

            <div style={{ paddingTop: "15px" }}>
              <a className="link" href="/3D-Test-3-Spheres/index.html">3D Test #3 - Multiple Objects</a>
              <br/>
              <a className="link" href="https://github.com/gshrdr/gavinshr.com/tree/main/public/3D-Test-3-Spheres" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", height: "150px" }}/>
    </main>
  );
}
