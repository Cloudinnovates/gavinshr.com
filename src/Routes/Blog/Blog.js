import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <main>
      <div className="container">
        <h1>Blog</h1>

        <p style={{ paddingTop: "15px" }}>Welcome to the blog page.</p>
        <div style={{ paddingTop: "15px" }}><Link className="link" to="/">&larr; Homepage</Link></div>

        <p style={{ paddingTop: "15px" }}>Hide the starfield on the blog page - animate in/out a background cover open page navigation (?) -- Or potentially just have a list of blog posts and when you click to read the post it brings you to a new screen with a solid background-color and no starfield.</p>
        <p style={{ paddingTop: "15px" }}>Setup basic blog component with REST API backend (Create Read Update Delete).</p>

        <div style={{ paddingTop: "15px" }}>
          <p><a className="link" href="https://www.youtube.com/watch?v=LelifxOrzvw" target="_blank" rel="noopener noreferrer">React/Node Full Stack Blog (MERN) - YouTube</a></p>
          <p><a className="link" href="https://www.youtube.com/watch?v=HYv55DhgTuA" target="_blank" rel="noopener noreferrer">React/NextJS/GraphQL/TailwindCSS Blog - YouTube</a></p>
          <p><a className="link" href="https://javascript.plainenglish.io/build-a-blog-app-with-react-intro-and-set-up-part-1-ddf5c674d25b" target="_blank" rel="noopener noreferrer">React/Node Blog - Medium... Simple tutorial, start here?</a></p>
        </div>

        <div style={{ width: "100%", height: "300px" }}/>
      </div>
    </main>
  );
}
