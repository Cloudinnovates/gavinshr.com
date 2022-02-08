import { NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import "./Footer.css"

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>This website was coded using HTML, CSS, JavaScript, and ReactJS; it is a work in progress and will continue to be updated. Thank you for viewing my site, any feedback is appreciated!</p>
        <p style={{ paddingTop: "15px" }}>Contact, Blog, GitHub, Twitter & YouTube:</p>
        <p><i>Blog, Twitter & YouTube Are Unfinished.</i></p>

        <ul className="socials">
          <li><HashLink className="footer-navLink" smooth to="/#contact"><i className="fa fa-envelope-o"></i></HashLink></li>
          <li><NavLink className="footer-navLink" to="/blog"><i className="fa fa-newspaper-o"></i></NavLink></li>
          <li><a className="footer-navLink" href="https://github.com/gshrdr/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
          <li><a className="footer-navLink" href="https://twitter.com/gshrdr" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
          <li><a className="footer-navLink" href="https://www.youtube.com/channel/UC9DsBMXe9AgzTIh_OuBt2sw" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a></li>
        </ul>

        <div style={{ display: "flex", flexDirection: "row", paddingTop: "15px" }}>
          <HashLink className="link" smooth to="/#home">Top Of Page</HashLink>
          <div style={{ width: "10px" }}></div>
          <HashLink className="link" smooth to="/acknowledgements">Acknowledgements</HashLink>
        </div>

        <div className="footer-bottom">
          <p>Copyright &copy;2022 Gavin Shrader</p>
        </div>
      </div>
    </footer>
  );
}
