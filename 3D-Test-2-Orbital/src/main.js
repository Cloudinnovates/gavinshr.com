import { World } from './World/World.js';

function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // Create an instance of our main World app
  const world = new World(container);

  // Start the World's animation loop
  world.start();

  /* Handle Animation Toggle Button Click */

  // Get a reference to the animation toggle button
  const animationToggle = document.querySelector('#toggle-animation');

  // always checking if the element is clicked, if so, do alert('hello')
  animationToggle.addEventListener("click", () => {
	   world.toggleAnimationLoop();
   });
}

main();
