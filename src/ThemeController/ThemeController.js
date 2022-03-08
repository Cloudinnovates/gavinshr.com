import { useState, useEffect, useRef } from "react"
import './ThemeController.css'

export default function ThemeController() {
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
    };

    document.addEventListener("mouseup", closeDrawer)
    return () => {
      document.removeEventListener("mouseup", closeDrawer)
    }
  }, []);

  return (
    <div>
      <div className={`theme-controller-background ${bgState}`}></div>
      <div className="theme-controller-container">
        <button ref={toggleButtonRef} className={`toggle-button ${buttonState}`} onClick={() => {
          setBgState('theme-controller-shown')
          setTimeout(function() { setButtonState('toggle-button-hidden') }, 200);
          setPanelState('selector-panel-shown')
        }}>
          <i className="fa fa-cog"></i>
        </button>

        <div ref={selectPanelRef} className={`selector-panel ${panelState}`}>
          <div className="selector-panel-inner center">
            <div>
              <i className="fa fa-cog"></i>
              <h1 style={{ display: "inline-block" }}>Settings</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
