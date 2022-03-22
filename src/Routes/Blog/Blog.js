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
        <div className="blog-container">
          {posts.map((post) => (
            <div key={post.uniqueKey} className="blog-item">
              <span>
                <div className="blog-title-container">
                  <h2 className="skills-title">{post.title}</h2>
                </div>
                <h3 className="blog-subheading"><i>{post.subheading}</i></h3>
              </span>

              <span>
              <div className="blog-image-container">
                <img
                  className="blog-image"
                  src={require('../Projects/DemoImages/' + post.imageUrlName)}
                  alt="Python Jupyter Notebook Demo"
                />
              </div>
              </span>

              { /* post.imageUrl
                "../Projects/DemoImages/MediumTutorialDemo.png"*/ }

              <span>
                {post.moreInfo.map((moreInfoItem) => (
                  <p key={moreInfoItem} className="blog-item-subsection">{moreInfoItem}</p>
                ))}
              </span>
              <span>
              {post.urls.map((urlEntity) => (
                <div key={urlEntity.uniqueKey} className="blog-item-subsection">
                {
                  urlEntity.url == null ? ""
                  :
                    urlEntity.urlIsNavLink === true ?
                      <NavLink className="link" to={urlEntity.url}>{urlEntity.urlName}</NavLink>
                      :
                        urlEntity.urlIsHashLink === true ?
                          <HashLink className="link" to={urlEntity.url}>{urlEntity.urlName}</HashLink>
                          :
                          urlEntity.urlOpensInNewTab === true ?
                            <a className="link" href={urlEntity.url} target="_blank" rel="noopener noreferrer">{urlEntity.urlName}</a>
                            :
                            <a className="link" href={urlEntity.url}>{urlEntity.urlName}</a>
                }
                </div>
              ))}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: "100%", height: "150px" }}/>
    </main>
  );
}
