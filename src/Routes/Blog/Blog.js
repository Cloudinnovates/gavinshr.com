import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <main>
      <div className="container subscreen-container">
        <i className="fa fa-book fa-2x" style={{ display: "inline-block", marginRight: "10px" }}></i>
        <h1 style={{ display: "inline-block" }}>Blog</h1>

        <p style={{ paddingTop: "25px" }}>Welcome to the blog page.</p>
        <div style={{ paddingTop: "15px" }}><Link className="link" to="/">&larr; Homepage</Link></div>

        <p style={{ paddingTop: "15px" }}>This blog is a work in progress. Expect to see changes and updates in the near future!</p>

        <div style={{ width: "100%", height: "300px" }}/>
      </div>
    </main>
  );
}
