import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <main>
      <div className="container subscreen-container">
        <i className="fa fa-book fa-2x" style={{ display: "inline-block", marginRight: "10px" }}></i>
        <h1 style={{ display: "inline-block" }}>Blog</h1>
        <h2 style={{ color: "#ef4444" }}><i>Work In Progress</i></h2>

        <p style={{ paddingTop: "25px" }}>Welcome to the blog page.</p>
        <div style={{ paddingTop: "15px" }}><Link className="link" to="/">&larr; Homepage</Link></div>

        <p style={{ paddingTop: "15px" }}>Custom blog component using the Ghost-CMS system in progress.</p>

        <div style={{ paddingTop: "15px" }}>
          <p><a className="link" href="https://ghost.org" target="_blank" rel="noopener noreferrer">Ghost CMS</a></p>
          <p><a className="link" href="https://github.com/gshrdr/Ghost-CMS" target="_blank" rel="noopener noreferrer">GitHub Repo</a></p>
        </div>

        <div style={{ width: "100%", height: "300px" }}/>
      </div>
    </main>
  );
}
