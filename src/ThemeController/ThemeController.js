import { useState, useEffect, useRef } from "react"
import './ThemeController.css'

export default function ThemeController() {
  const [bgState, setBgState] = useState('hidden')
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

      setBgState('hidden')
    };

    document.addEventListener("mouseup", closeDrawer)
    return () => {
      document.removeEventListener("mouseup", closeDrawer)
    }
  }, []);

  return (
    <div>
      <div className={`themeController-background ${bgState}`}></div>
      <div className="themeController-container">
        <button ref={toggleButtonRef} className="toggle-button" onClick={() => {
          setBgState('shown')
          /* document.body.style.overflow = "hidden" */
        }}>
          <i className="fa fa-cog"></i>
        </button>

        <div ref={selectPanelRef} className={`selector-panel ${bgState}`}></div>
      </div>
    </div>
  );
}
