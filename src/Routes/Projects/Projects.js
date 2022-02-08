import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <main>
      <div className="container">
        <h1>Projects</h1>

        <p style={{ paddingTop: "25px" }}>Welcome to the projects page.</p>
        <div style={{ paddingTop: "15px" }}><Link className="link" to="/">&larr; Homepage</Link></div>

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

          <p style={{ paddingTop: 20 }}>HTML/CSS/JavaScript Maze generation & solving program with JavaScript algorithm.</p>
          <a className="link" href="/MazeAlgorithm/index.html">Maze Algorithm Code Demo</a>
          <br/>
          <a className="link" href="https://github.com/gshrdr/MazeAlgorithm" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a>
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

          <p style={{ paddingTop: 20 }}>This website is my ReactJS demo! My portfolio is built using ReactJS with some HTML5, CSS3, and JavaScript.</p>
          <a className="link" href="https://gavinshr.com">gavinshr.com ReactJS Demo</a>
          <br/>
          <a className="link" href="https://github.com/gshrdr/gavinshr.com" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a>
        </div>

        <hr/>
        <br/>
        <div style={{ paddingBottom: "2rem" }}>
          <h2>ThreeJS Demo</h2>
          <h3><i>3D Rendering With JavaScript</i></h3>

          <p style={{ paddingTop: 20 }}>These are a few simple projects that I built using the excellent resources at: <a className="link" href="https://discoverthreejs.com" target="_blank" rel="noopener noreferrer">DiscoverThreeJS.com</a></p>

          <div style={{ paddingTop: 15 }}>
            <div>
              <a className="link" href="/3D-Test/index.html">3D Test #1 - Cube</a>
              <br/>
              <a className="link" href="https://github.com/gshrdr/gavinshr.com/tree/main/public/3D-Test" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a>
              <br/>
            </div>

            <div style={{ paddingTop: 15 }}>
              <a className="link" href="/3D-Test-2-Orbital/index.html">3D Test #2 - Camera + Animation</a>
              <br/>
              <a className="link" href="https://github.com/gshrdr/gavinshr.com/tree/main/public/3D-Test-2-Orbital" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a>
              <br/>
            </div>

            <div style={{ paddingTop: 15 }}>
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
