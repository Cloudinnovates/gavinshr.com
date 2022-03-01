import { Component } from "react"
import {
  hydrate,
  render
} from "react-dom"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import ScrollToTop from "./Utils/ScrollToTop"
import "./index.css"
import App from "./App"
import Homepage from "./Routes/Homepage/Homepage"
import Resources from "./Routes/Homepage/Resources"
import Blog from "./Routes/Blog/Blog"
import Projects from "./Routes/Projects/Projects"
import NotFound from "./Routes/Utilities/NotFound"

class AppBrowser extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Homepage />} />
              <Route path="blog" element={<Blog />} />
              <Route path="projects" element={<Projects />} />
              <Route path="resources" element={<Resources />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root")
if (rootElement.hasChildNodes()) {
  hydrate(<AppBrowser />, rootElement);
} else {
  render(<AppBrowser />, rootElement);
}
