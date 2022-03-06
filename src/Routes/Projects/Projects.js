import { Link } from "react-router-dom";
import "./Projects.css";

export default function Projects() {
  return (
    <main>
      <div className="container subscreen-container">
        <i className="fa fa-code fa-2x" style={{ display: "inline-block", marginRight: "10px" }}></i>
        <h1 style={{ display: "inline-block" }}>Projects</h1>

        <p style={{ paddingTop: "25px" }}>Welcome to the projects page.</p>
        <div style={{ paddingTop: "15px", paddingBottom: "2rem" }}><Link className="link" to="/">&larr; Homepage</Link></div>

        <section id="react-project">
          <hr/>
          <br/>
          <div style={{ paddingBottom: "2rem" }}>
            <h2>React Demo</h2>
            <h3><i>Front-End JavaScript Framework</i></h3>
            <br/>
            <div className="project-image-container">
              <img
                className="project-image"
                src={require("./DemoImages/PortfolioDemo.png")}
                alt="gavinshr.com Portfolio Screenshot"
              />
            </div>
            <br/>
            <p style={{ paddingTop: "15px" }}>This website is my React demo! My portfolio was built using React with some HTML5, CSS3, and JavaScript.</p>
            <div style={{ paddingTop: "15px"}}>
              <a className="link" href="https://gavinshr.com">React Demo - gavinshr.com</a>
              <br/>
              <a className="link" href="https://github.com/gshrdr/gavinshr.com" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a>
            </div>
          </div>
        </section>

        <section id="maze-project">
          <hr/>
          <br/>
          <div style={{ paddingBottom: "2rem" }}>
            <h2>Maze Solving Algorithm</h2>
            <h3><i>HTML5, CSS3 & JavaScript Demo</i></h3>
            <br/>
            <div className="project-image-container">
              <img
                className="project-image"
                src={require("./DemoImages/MazeDemo.png")}
                alt="Maze Algorithm Project Screenshot"
              />
            </div>
            <br/>
            <p style={{ paddingTop: "15px" }}>The purpose of this project is to showcase my knowledge of vanilla web-development using HTML5, CSS3 & JavaScript, without relying on the React framework. There are two algorithms used in this project, a maze solving algorithm (coded by me), and a maze generation algorithm. The maze-generation algorithm in this project is not originally mine (the <a className="link" href="https://codepen.io/mohamed9714/pen/dyPoaGx">source</a> is linked on the project's page).</p>
            <div style={{ paddingTop: "15px"}}>
              <a className="link" href="/MazeAlgorithm/index.html">Maze Algorithm Code Demo</a>
              <br/>
              <a className="link" href="https://github.com/gshrdr/MazeAlgorithm" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a>
            </div>
          </div>
        </section>

        <section id="threejs-project">
          <hr/>
          <br/>
          <div style={{ paddingBottom: "2rem" }}>
            <h2>ThreeJS Demo</h2>
            <h3><i>3D Rendering With JavaScript</i></h3>
            <br/>
            <div className="project-image-container">
              <img
                className="project-image"
                src={require("./DemoImages/3D_Demo.png")}
                alt="Three.JS 3D Graphics With JavaScript Demo"
              />
            </div>
            <br/>
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
        </section>

        <section id="database-project">
          <hr/>
          <br/>
          <div style={{ paddingBottom: "2rem" }}>
            <h2>PHP & MySQL Database Project</h2>
            <h3><i>Back-End Database System</i></h3>
            <p style={{ paddingTop: "15px" }}>This project is a PHP & MySQL database demo. I built this project primarily using <a className="link" href="https://codewithawa.com/posts/how-to-create-a-blog-in-php-and-mysql-database">this</a> tutorial. This project showcases my knowledge of how to create a database programmatically and update, read, and delete individual items in that database using code. I followed this tutorial in order to begin building a Blog from scratch using PHP/MySQL, but after completing the tutorial I opted to use Medium for a simpler approach (and in the future I will eventually upgrade to a Ghost CMS + Node.JS system).</p>
            <div style={{ paddingTop: "15px"}}>
              <a className="link" href="https://github.com/gshrdr/PHP-SQL-Blog" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a>
            </div>
          </div>
        </section>

      </div>

      <div style={{ width: "100%", height: "150px" }}/>
    </main>
  );
}
