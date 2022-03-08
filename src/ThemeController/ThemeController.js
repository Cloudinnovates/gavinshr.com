import { useState, useEffect, useRef } from "react"
import './ThemeController.css'

export default function ThemeController() {
  /*
   * Handle State Changes For UI - Toggle Button, Close Select Panel, etc.
   */

  const [bgState, setBgState] = useState('theme-controller-hidden')
  const [buttonState, setButtonState] = useState('toggle-button-shown')
  const [panelState, setPanelState] = useState('selector-panel-hidden')
  const toggleButtonRef = useRef(null)
  const selectPanelRef = useRef(null)

  useEffect(() => {
    /* Close the settings menu when the user clicks outside of it */
    const closeDrawer = (event) => {
      if (toggleButtonRef.current && toggleButtonRef.current.contains(event.target)) {
        return;
      }
      if (selectPanelRef.current && selectPanelRef.current.contains(event.target)) {
        return;
      }

      setBgState('theme-controller-hidden')
      setButtonState('toggle-button-shown')
      setPanelState('selector-panel-hidden')
      document.body.style.overflowY = "scroll"

    };

    document.addEventListener("mouseup", closeDrawer)
    return () => {
      document.removeEventListener("mouseup", closeDrawer)
    }
  }, []);

  /*
   * Handle Theme Toggling
   */

   const toggleTheme = () => {
     const theme = localStorage.getItem('theme')
     if (theme === 'dark') {
       // Toggle to light
       setTheme('light')
     } else {
       // Toggle to dark
       setTheme('dark')
     }
   }

   const setTheme = (theme) => {
     document.documentElement.className = theme
     localStorage.setItem('theme', theme)
   }

   const getTheme = () => {
     let theme = localStorage.getItem('theme')

     if (theme === null) {
       localStorage.setItem('theme', 'dark')
       console.log("Manual override dark theme - unset in ls")
       theme = 'dark'
     }

     theme && setTheme(theme)
   }

   getTheme()

   /*
    * Handle Starfield Toggling
    */

    const toggleStarfield = () => {
      let starfield = localStorage.getItem('starfield')

      if (starfield === null) {
        localStorage.setItem('starfield', 'enabled')
        starfield = 'enabled'
      }

      if (starfield === 'enabled') {
        // Toggle to disabled
        setStarfield('disabled')
      } else {
        // Toggle to enabled
        setStarfield('enabled')
      }
    }

    const setStarfield = (starfield) => {
      localStorage.setItem('starfield', starfield)

      if (starfield === 'enabled') {
        document.getElementById('starfield').style.display = 'block'
      } else {
        document.getElementById('starfield').style.display = 'none'
      }
    }

  /*
   * Render The ThemeController
   */

  return (
    <div>
      <div className={`theme-controller-background ${bgState}`}></div>
      <div className="theme-controller-container">
        <button ref={toggleButtonRef} className={`toggle-button ${buttonState}`} onClick={() => {
          setBgState('theme-controller-shown')
          setButtonState('toggle-button-hidden')
          setPanelState('selector-panel-shown')
          document.body.style.overflowY = "hidden"
        }}>
          <i className="fa fa-cog"></i>
        </button>

        <div ref={selectPanelRef} className={`selector-panel ${panelState}`}>
          <div className="selector-panel-inner">
            <div className="selector-panel-title-group">
              <div className="selector-panel-title-group-center">
              <i className="fa fa-cog"></i>
              <h1>Settings</h1>
              </div>
            </div>

            <div className="settings-main-content">
              <p>Switch between light & dark mode:</p>
              <button className="settings-button" onClick={toggleTheme}>Toggle Theme</button>

              <p>Enable & disable starfield animation:</p>
              <button className="settings-button" onClick={toggleStarfield}>Toggle Starfield</button>

              <p style={{ paddingTop: "25px" }}>More settings coming soon...</p>
            </div>

            <button className="exit-button" onClick={() => {
              setBgState('theme-controller-hidden')
              setButtonState('toggle-button-shown')
              setPanelState('selector-panel-hidden')
              document.body.style.overflowY = "scroll"
            }}>
              &laquo; Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
