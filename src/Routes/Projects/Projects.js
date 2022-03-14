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

        <section id="python-notebooks-project">
          <hr/>
          <br/>
          <div style={{ paddingBottom: "2rem" }}>
            <h2>Python Interactive Jupyter Notebooks</h2>
            <h3><i>Data Structures, Algorithms, Time Complexity, NumPy, Pandas, and Matplotlib Demo</i></h3>
            <br/>
            <div className="project-image-container">
              <img
                className="project-image"
                src={require("./DemoImages/Python_Demo.png")}
                alt="Python Jupyter Notebook Demo"
              />
            </div>
            <br/>
            <p style={{ paddingTop: "15px" }}>I put together a GitHub repository of Jupyter Notebooks (.ipynb files that allow you to run Python code in a browser editor) - I then hosted these notebook files on a Binder instance so that people can open the notebooks directly in a browser, without needing to install a local copy of the software. These Jupyter Notebooks demonstrate the basic concepts of Python data engineering such as data structures, algorithms, time complexity, and 3 of the most basic data science libraries: NumPy, Pandas, and Matplotlib.</p>
            <p style={{ paddingTop: "15px" }}>This series of notebooks contains around 10,000 words worth of information on the key knowledge used in Python data engineering.</p>
            <ul style={{ paddingTop: "15px", paddingLeft: "15px", paddingRight: "15px" }}>
              <li><a className="link" href="https://github.com/gshrdr/Learning-Python" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a></li>
            </ul>
            <ul style={{ paddingTop: "15px", paddingLeft: "15px", paddingRight: "15px" }}>
              <li><a className="link" href="https://mybinder.org/v2/gh/gshrdr/Learning-Python/HEAD?labpath=notebooks%2FStructs-Algos-Complexity-Demo.ipynb" target="_blank" rel="noopener noreferrer">Launch Demo #1 - Data Structures, Algorithms, and Time Complexity</a></li>
              <li><a className="link" href="https://mybinder.org/v2/gh/gshrdr/Learning-Python/HEAD?labpath=notebooks%2FGeneral-Data-Engineering.ipynb" target="_blank" rel="noopener noreferrer">Launch Demo #2 - Database + General Data Engineering Concepts</a></li>
              <li><a className="link" href="https://mybinder.org/v2/gh/gshrdr/Learning-Python/HEAD?labpath=notebooks%2FMatplotlib-Numpy-Demo.ipynb" target="_blank" rel="noopener noreferrer">Launch Demo #3 - NumPy & Matplotlib Data Visualization Library Demo</a></li>
              <li><a className="link" href="https://mybinder.org/v2/gh/gshrdr/Learning-Python/HEAD?labpath=notebooks%2FPandas-Demo.ipynb" target="_blank" rel="noopener noreferrer">Launch Demo #4 - Pandas Data Manipulation Library Demo</a></li>
            </ul>
          </div>
        </section>

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
            <ul style={{ paddingTop: "15px", paddingLeft: "15px", paddingRight: "15px" }}>
              <li><a className="link" href="https://gavinshr.com">React Demo - gavinshr.com</a></li>
              <li><a className="link" href="https://github.com/gshrdr/gavinshr.com" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a></li>
            </ul>
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
            <ul style={{ paddingTop: "15px", paddingLeft: "15px", paddingRight: "15px" }}>
              <li><a className="link" href="/MazeAlgorithm/index.html">Maze Algorithm Code Demo</a></li>
              <li><a className="link" href="https://github.com/gshrdr/MazeAlgorithm" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a></li>
            </ul>
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
              <ul style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                <li><a className="link" href="/3D-Test/index.html">3D Test #1 - Cube</a></li>
                <li><a className="link" href="https://github.com/gshrdr/gavinshr.com/tree/main/public/3D-Test" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a></li>
              </ul>

              <ul style={{ paddingTop: "15px", paddingLeft: "15px", paddingRight: "15px" }}>
                <li><a className="link" href="/3D-Test-2-Orbital/index.html">3D Test #2 - Camera + Animation</a></li>
                <li><a className="link" href="https://github.com/gshrdr/gavinshr.com/tree/main/public/3D-Test-2-Orbital" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a></li>
              </ul>

              <ul style={{ paddingTop: "15px", paddingLeft: "15px", paddingRight: "15px" }}>
                <li><a className="link" href="/3D-Test-3-Spheres/index.html">3D Test #3 - Multiple Objects</a></li>
                <li><a className="link" href="https://github.com/gshrdr/gavinshr.com/tree/main/public/3D-Test-3-Spheres" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="database-project">
          <hr/>
          <br/>
          <div style={{ paddingBottom: "2rem" }}>
            <h2>PHP & MySQL Database Project</h2>
            <h3><i>Back-End Database System</i></h3>
            <br/>
            <div className="project-image-container">
              <img
                className="project-image"
                src={require("./DemoImages/PHP_Demo.png")}
                alt="PHP Database Code Configuration File Demo"
              />
            </div>
            <br/>
            <p style={{ paddingTop: "15px" }}>This project is a PHP & MySQL database demo. I built this project primarily using <a className="link" href="https://codewithawa.com/posts/how-to-create-a-blog-in-php-and-mysql-database">this</a> tutorial. This project showcases my knowledge of how to create a database programmatically and update, read, and delete individual items in that database using code. I followed this tutorial in order to begin building a Blog from scratch using PHP/MySQL, but after completing the tutorial I opted to use Medium for a simpler approach (and in the future I will eventually upgrade to a Ghost CMS + Node.JS system).</p>
            <ul style={{ paddingTop: "15px", paddingLeft: "15px", paddingRight: "15px" }}>
              <li><a className="link" href="https://github.com/gshrdr/PHP-SQL-Blog" target="_blank" rel="noopener noreferrer">GitHub Source &rarr;</a></li>
            </ul>
          </div>
        </section>

      </div>

      <div style={{ width: "100%", height: "150px" }}/>
    </main>
  );
}
