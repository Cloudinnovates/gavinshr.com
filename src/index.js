import { render } from "react-dom"
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
import ScrollToTop from "./Utils/ScrollToTop"
import "./index.css"
import App from "./App"
import Homepage from "./Routes/Homepage/Homepage"
import Acknowledgements from "./Routes/Homepage/Acknowledgements"
import Blog from "./Routes/Blog/Blog"
import Projects from "./Routes/Projects/Projects"

const rootElement = document.getElementById("root")
render(
  <BrowserRouter>
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="projects" element={<Projects />} />
          <Route path="acknowledgements" element={<Acknowledgements />} />
          <Route
            path="*"
            element={
              <main>
                <h1>404: Path not found.</h1>

                <p style={{ paddingTop: "15px" }}>I don't know what yer lookin fer partner but ya found yerself round the wrong part a' town.</p>

                <div style={{ paddingTop: "15px" }}>
                  <Link className="link" to="/">&larr; Homepage</Link>
                </div>
              </main>
            }
            />
        </Route>
      </Routes>
    </ScrollToTop>
  </BrowserRouter>,
  rootElement
);
