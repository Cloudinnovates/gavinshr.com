import { World } from './World/World.js';

function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // Create an instance of our main World app
  const world = new World(container);

  // Start the World's animation loop
  world.start();
}

main();
