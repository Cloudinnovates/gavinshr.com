/* https://reactrouter.com/docs/en/v6/getting-started/tutorial */

import { Outlet, NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import React, { useState, useEffect, useRef } from "react"
import Starfield from './Starfield/Starfield'
import './App.css'

function App() {
  const [navListState, setNavListState] = useState('navListClosedNoTransition')
  const [overlayState, setOverlayState] = useState('overlayHidden')
  const drawerRef = useRef(null)

  useEffect(() => {
    /* If the screen resizes beyond our breakpoint, close the nav bar */
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setNavListState('navListClosedNoTransition')
        setOverlayState('overlayHidden')
      }
    }

    window.addEventListener("resize", handleResize);

    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      setNavListState('navListClosed')
      setOverlayState('overlayHidden')
    };

    document.addEventListener("mouseup", closeDrawer)
    return () => {
      document.removeEventListener("mouseup", closeDrawer)
      document.removeEventListener("resize", handleResize)
    }
  }, []);

  return (
    <div className="main-screen-fill">
      <div id="home"></div> {/* Anchor used to scroll to "home" - this is at the top of the nav bar so the home button scrolls to the top of the page */}

      <div className="backgroundFixed">
        <Starfield />
      </div>

      <div className={`overlay ${overlayState}`}></div>

      <div className="navWrapper">
        <nav className="navigation">
          <h1 className="logo"><HashLink style={{ color: "white", textDecoration: "none" }} smooth to="/#home">Gavin Shrader</HashLink></h1>

          <button className="hamburgerButton" onClick={() => {
            setNavListState('navListOpen')
            setOverlayState('overlayShown')
          }}>
            <div className="hamburgerLines"></div>
          </button>

          <ul ref={drawerRef} className={`navUl ${navListState}`}>
            <li className="navUlLi"><HashLink className="navLink" smooth to="/#home">Home</HashLink></li>
            <li className="navUlLi"><HashLink className="navLink" smooth to="/#skills">Skills</HashLink></li>
            <li className="navUlLi"><HashLink className="navLink" smooth to="/#resume">Resume</HashLink></li>
            <li className="navUlLi"><HashLink className="navLink" smooth to="/#contact">Contact</HashLink></li>
            <li className="navUlLi"><NavLink className="navLink" to="/projects">Projects</NavLink></li>
            <li className="navUlLi"><NavLink className="navLink" to="/blog">Blog</NavLink></li>
            <li className="navUlLi"><a className="navLink" href="https://github.com/gshrdr/" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a></li>
            <li className="navUlLi liBottom">
              <button className="navLink liExitButton" onClick={() => {
                setNavListState('navListClosed')
                setOverlayState('overlayHidden')
              }}>
                &laquo; Close
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </div>
  );
}

export default App;
