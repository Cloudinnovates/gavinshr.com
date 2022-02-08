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

          <p style={{ paddingTop: 20 }}>This website is my ReactJS demo! My portfolio is built using React with some Vanilla HTML5, CSS3, and JavaScript.</p>
          <a className="link" href="https://gavinshr.com">gavinshr.com ReactJS Demo</a>
          <br/>
          <a className="link" href="https://github.com/gshrdr/gavinshr.com" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a>
        </div>

        <hr/>
        <br/>
        <div style={{ paddingBottom: "2rem" }}>
          <h2>ThreeJS Demo</h2>
          <h3><i>3D Rendering With JavaScript</i></h3>

          <p style={{ paddingTop: 20 }}>3D Rendering Demo Project. ** Include ThreeJS Demo Projects from gavinshr.com Static page **</p>
        </div>
      </div>

      <div style={{ width: "100%", height: "150px" }}/>
    </main>
  );
}
