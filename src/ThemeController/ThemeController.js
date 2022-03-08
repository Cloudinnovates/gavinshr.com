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
      document.body.style.overflowY = "scroll"

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
              <p>This is a work in progress settings menu. This placeholder text showcases the ability for the settings menu to hold an interior scroll bar when the data overflows the boundaries.</p>
              <br/>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
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
