// https://medium.com/better-programming/fun-with-html-canvas-lets-create-a-star-field-a46b0fed5002

// Initialize the canvas
const canvas = document.getElementById('starField');
const c = canvas.getContext('2d');

// Setup variables for the height & width + setup window-resizing
let w;
let h;

const setCanvasExtents = () => {
  w = document.body.clientWidth;
  h = document.body.clientHeight;
  canvas.width = w;
  canvas.height = h;
};

setCanvasExtents();

window.onresize = () => {
  setCanvasExtents();
};

// Create an array of stars
const makeStars = (count) => {
  const out = [];
  for (let i = 0; i < count; i++) {
    const s = {
      x: Math.random() * 1600 - 800, /* Generate # between -800 to 800 */
      y: Math.random() * 900 - 450,  /* Generate # between -450 to 450 */
      z: Math.random() * 1000        /* Generate # between 0 to 1000 */
    };
    out.push(s);
  }
  return out;
}

let stars = makeStars(5000);

// Clear the background
const clear = () => {
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
};

// Draw an individual star
const putPixel = (x, y, brightness) => {
  const intensity = brightness * 255;
  const rgb = "rgb(" + intensity + "," + intensity + "," + intensity + ")";
  c.fillStyle = rgb;
  c.fillRect(x, y, 1.75, 1.75);
};

// Move the stars
const moveStars = (distance) => {
  const count = stars.length;
  for (var i = 0; i < count; i++) {
    const s = stars[i];
    s.z -= distance;
    while (s.z <= 1){
      s.z += 1000;
    }
  }
}

/* Timing functions - make the starfield run */

// Initiate timing
let prevTime;
const init = time => {
  prevTime = time;
  requestAnimationFrame(tick);
};

requestAnimationFrame(init);

// Individual tick function
const tick = time => {
  let elapsed = time - prevTime;
  prevTime = time;

  moveStars(elapsed*0.075);

  clear();

  const cx = w/2;
  const cy = h/2;

  const count = stars.length;

  /* Draw each star */
  for (var i = 0; i < count; i++) {
    const star = stars[i];

    const x = cx + star.x/(star.z * 0.001);
    const y = cy + star.y/(star.z * 0.001);

    if (x < 0 || x >= w || y < 0 || y >= h){
      continue;
    }

    const d = (star.z/2500.0)
    const b = 1-d*d

    putPixel(x, y, b);
  }

  requestAnimationFrame(tick);
};
