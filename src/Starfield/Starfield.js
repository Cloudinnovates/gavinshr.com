import './Starfield.css'

export default function Starfield() {

  const getStarfieldInitialDisplayState = () => {
    const starfield = localStorage.getItem('starfield');

    if (starfield === null) {
      // Null - enabled
      return "block";
    } else {
      if (starfield === 'enabled') {
        // Enabled
        return "block";
      } else {
        // Disabled
        return "none";
      }
    }
  }

  return (
    <div className="stars-container" id="starfield" style={{ display: getStarfieldInitialDisplayState() }}>
      <div id="stars" className="stars"></div>
    </div>
  );
}
