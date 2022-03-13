import { useState, useEffect } from "react"
import './Starfield.css'

export default function Starfield() {

  const [starfieldState, setStarfieldState] = useState('shown')

  useEffect(() => {
    let starfieldLocalValue = localStorage.getItem('starfield');
    if (starfieldLocalValue === null) {
      // Null - Enabled
      localStorage.setItem('starfield', 'enabled')
      setStarfieldState('shown')
    } else {
      if (starfieldLocalValue === 'enabled') {
        // Enabled
        setStarfieldState('shown')
      } else {
        // Disabled
        setStarfieldState('hidden')
      }
    }
  }, [starfieldState]);

  return (
    <div className={`stars-container ${starfieldState}`} id="starfield">
      <div id="stars" className="stars1"></div>
      <div id="stars" className="stars2"></div>
    </div>
  );
}
