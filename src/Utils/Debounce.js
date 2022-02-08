// https://www.pluralsight.com/guides/re-render-react-component-on-window-resize

export default function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

/* Usage:
import debounce from "../../Utils/Debounce"


const [dimensions, setDimensions] = useState({ height: window.innerHeight + 150, width: window.innerWidth })

useEffect(() => {
  setDimensions({ height: window.innerHeight + 150, width: window.innerWidth })

  const debouncedHandleResize = debounce(function handleResize() {
    setDimensions({
      height: window.innerHeight + 150,
      width: window.innerWidth
    })
  }, 50)

  window.addEventListener("resize", debouncedHandleResize);
  return () => {
    document.removeEventListener("resize", debouncedHandleResize)
  }
}, []);

<div style={{width: dimensions.width, height: dimensions.height}}>
</div>

<p style={{ paddingTop: "25px" }}>Safari iOS Window Resize Test V1.0.4 - Debounce | Rendered at {dimensions.width} x {dimensions.height}</p>
*/
