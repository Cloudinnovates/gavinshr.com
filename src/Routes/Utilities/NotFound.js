import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main>
      <div className="center container subscreen-container">
        <div>
          <i className="fa fa-question-circle fa-2x" style={{ display: "inline-block", marginRight: "10px" }}></i>
          <h1 style={{ display: "inline-block" }}>404: Path Not Found</h1>
        </div>

        <img style={{ paddingTop: "25px", width: "80%", opacity: "0.88" }} alt="404 Path Not Found" src="./404.jpg" />

        <div style={{ paddingTop: "25px" }}><Link className="link" to="/">&larr; Homepage</Link></div>

        <div style={{ width: "100%", height: "300px" }}/>
      </div>
    </main>
  );
}
