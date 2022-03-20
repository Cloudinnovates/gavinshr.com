import { Link } from "react-router-dom";

export default function Resources() {
  return (
    <main>
      <div className="container subscreen-container">
        <i className="fa fa-globe fa-2x" style={{ display: "inline-block", marginRight: "10px" }}></i>
        <h1 style={{ display: "inline-block" }}>Resources</h1>

        <p style={{ paddingTop: "25px" }}>Welcome to the resources page.</p>
        <div style={{ paddingTop: "15px" }}><Link className="link" to="/">&larr; Homepage</Link></div>

        <p style={{ paddingTop: "15px" }}>These are the great resources & assets that were used to assist in the creation of this site, thank you!</p>
        <ul style={{ paddingTop: "15px", paddingLeft: "15px", paddingRight: "15px" }}>
          <li><a className="link" href="https://www.kirupa.com" target="_blank" rel="noopener noreferrer">Kirupa.com - Lots Of Great Tutorials</a></li>
          <li><a className="link" href="https://www.freecodecamp.org/news/build-portfolio-website-react/" target="_blank" rel="noopener noreferrer">ReactJS Portfolio Design Inspiration + Tutorial</a></li>
          <li><a className="link" href="https://jfelix.info/blog/create-a-mobile-friendly-navigation-with-react" target="_blank" rel="noopener noreferrer">ReactJS Mobile Friendly Menu Inspiration + Tutorial</a></li>
          <li><a className="link" href="https://www.vecteezy.com/free-vector/astronaut" target="_blank" rel="noopener noreferrer">Astronaut Vectors by Vecteezy</a></li>
          <li><a className="link" href="https://www.vecteezy.com/free-vector/404" target="_blank" rel="noopener noreferrer">404 Vectors by Vecteezy</a></li>
          <li><a className="link" href="https://codepen.io/keithclark/pen/ibEnk" target="_blank" rel="noopener noreferrer">CSS Starfield Animation</a></li>
          <li><a className="link" href="https://fontawesome.com/v4.7/icons/" target="_blank" rel="noopener noreferrer">Font-Awesome Icon Pack</a></li>
          <li><a className="link" href="https://tailwindcss.com/docs/customizing-colors" target="_blank" rel="noopener noreferrer">Tailwind CSS Color Schemes</a></li>
          <li><a className="link" href="https://zellwk.com/about/" target="_blank" rel="noopener noreferrer">Link Hover Animation Inspiration - Zell Liew</a></li>
          <li><a className="link" href="https://www.pluralsight.com/guides/re-render-react-component-on-window-resize" target="_blank" rel="noopener noreferrer">ReactJS - Handle Re-Rendering Components With Window Resize</a></li>
          <li><a className="link" href="https://mailtrap.io/blog/react-contact-form/" target="_blank" rel="noopener noreferrer">ReactJS + PHP Email Based Contact Form</a></li>
          <li><a className="link" href="https://favicon.io" target="_blank" rel="noopener noreferrer">Favicon Generator</a></li>
          <li><a className="link" href="https://cloudconvert.com/pdf-to-html" target="_blank" rel="noopener noreferrer">PDF To HTML Converter</a></li>
          <li><a className="link" href="https://codewithawa.com/posts/how-to-create-a-blog-in-php-and-mysql-database" target="_blank" rel="noopener noreferrer">PHP & MySQL Blog Tutorial</a></li>
        </ul>
      </div>

      <div style={{ width: "100%", height: "150px" }}/>
    </main>
  );
}
