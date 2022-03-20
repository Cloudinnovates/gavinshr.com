import { Link, NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { posts } from "./BlogData";
import "./Blog.css"

export default function Blog() {
  return (
    <main>
      <div className="container subscreen-container">
        <i className="fa fa-book fa-2x" style={{ display: "inline-block", marginRight: "10px" }}></i>
        <h1 style={{ display: "inline-block" }}>Blog</h1>
        <p style={{ paddingTop: "25px" }}>Welcome to the blog page.</p>
        <p style={{ paddingTop: "15px" }}>This blog is a work in progress. Expect to see changes and updates in the near future!</p>
        <div style={{ paddingTop: "15px", paddingBottom: "2rem" }}><Link className="link" to="/">&larr; Homepage</Link></div>

        <hr/>
        <br/>
        <h2>Most Recent Posts</h2>
        <h3><i>Work In Progress</i></h3>
        <div className="blog-container">
          {posts.map((post) => (
            <div key={post.skill} className="blog-item">
              <span>
                <div className="blog-title-container">
                  <div style={{ backgroundColor: post.color }} className="skills-color"></div>
                  <h2 className="skills-title">{post.skill}</h2>
                </div>
                <h3 className="blog-subheading"><i>{post.subheading}</i></h3>
              </span>

              <span>
                {
                  post.moreInfo == null ? <br/> :
                  <p className="blog-item-subsection">{post.moreInfo}</p>
                }
              </span>
              <span>
                <div className="blog-item-subsection">
                {
                  post.url == null ? ""
                  :
                    post.urlIsNavLink === true ?
                      <NavLink className="link" to={post.url}>{post.urlName}</NavLink>
                      :
                        post.urlIsHashLink === true ?
                          <HashLink className="link" to={post.url}>{post.urlName}</HashLink>
                          :
                          post.urlOpensInNewTab === true ?
                            <a className="link" href={post.url} target="_blank" rel="noopener noreferrer">{post.urlName}</a>
                            :
                            <a className="link" href={post.url}>{post.urlName}</a>
                }
                </div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
