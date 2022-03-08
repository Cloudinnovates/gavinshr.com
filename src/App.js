import { Outlet, NavLink, useLocation } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import React, { useState, useEffect, useRef } from "react"
import Starfield from './Starfield/Starfield'
import ThemeController from './ThemeController/ThemeController'
import './App.css'

function App() {

  /*
   * Handle Navigation Menu State Changes
   */

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

    window.addEventListener("resize", handleResize)

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

  /*
   * Handle Mobile Back-Swipe Gesture With Starfield Animation (Restart animation after back swipe occurs)
   */

  /*
    Attempting to fix issues with iOS back swipe. When you swipe back quickly on iOS sometimes the starfield stops
    animating entirely. The idea here is to determine when the BrowserRouter changes routes and then call a function to update
    the starfield animation by starting and stopping it. I have a boolean flag to block the first page refresh since this occurs
    right when you load the website and it causes issues. I also have a detection system that will only re-animate the starfield if
    it detects a back-swipe gesture before the page navigation change occurs.
  */

  const debugBackSwipeAnimation = false // show or hide these logs in the console
  const [recentSwipeBackState, setRecentSwipeBackState] = useState(false)
  const element = document.body

  // TODO: Remove this event listener upon return/unmount + handle e.pageX being null/undefined (return)

  // Back swipe detection on Safari thanks to: https://pqina.nl/blog/blocking-navigation-gestures-on-ios-13-4/ (with modifications)
  element.addEventListener("touchstart", (e) => {
    // is not near edge of view, exit
    if ((e.pageX > 18) && (e.pageX < window.innerWidth - 18)) { return; }
    if (debugBackSwipeAnimation) { console.log("Back swipe gesture - 18px buffer"); }

    setRecentSwipeBackState(true)
  });

  const [starfieldBlockState, setStarfieldBlockState] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (debugBackSwipeAnimation) { console.log("----------------------------------"); }
    if (debugBackSwipeAnimation) { console.log("BrowserRouter route changed."); }

    function updateStarfieldAnimation() {
      if (debugBackSwipeAnimation) { console.log("Attempt to update starfield animation."); }
      var starfield = document.getElementById('stars')
      if (starfield !== null && starfieldBlockState === false && recentSwipeBackState === true) {
        if (debugBackSwipeAnimation) { console.log(">>>>>> Restart starfield animation. <<<<<<"); }
        const clone = starfield.cloneNode(true)
        starfield.parentNode.replaceChild(clone, starfield)
        setRecentSwipeBackState(false)
      }
      setStarfieldBlockState(false)
    }

    updateStarfieldAnimation()
    // disable console warning for including dependencies in this useEffect hook - this is regarding my references to the starfieldBlockState & recentSwipeBackState
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  /*
   * Render the main application's backbone:
   * Animated starfield background, navigation bar, and an outlet for the currently selected page's content
   */

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

      <ThemeController />
      
      <Outlet />
    </div>
  );
}

export default App;
