// Import components (objects that exist within our universe)
import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

// Import systems (processes that run on our Components)
import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

// These variables are module-scoped: we can not access them outside the module
let camera;
let renderer;
let scene;
let loop;

let animationStatus = true;

class World {
  // Create an instance of the World app
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);

    const cube = createCube();
    const light = createLights();

    loop.updatables.push(controls);

    //loop.updatables.push(cube);

    scene.add(cube, light);

    const resizer = new Resizer(container, camera, renderer);

    /*
    // If we're disabling the animation loop, we need to ensure the scene is re-rendered once the camera is updated/moved
    controls.addEventListener('change', () => {
      this.render();
    });

    and in main.js replace:
    // Start the World's animation loop
    world.start();

    ... with:
    // render the inital frame
    world.render();
    */
  }

  // Render the scene
  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  // Start the animation Loop
  start() {
    console.warn("Start animation");
    loop.start();
  }

  // Stop the animation Loop
  stop() {
    console.warn("Stop animation");
    loop.stop();
  }

  // Toggle the animation Loop + return status
  toggleAnimationLoop() {
    animationStatus = !animationStatus;

    if (animationStatus == true) {
      this.start();
    } else {
      this.stop();
    }
  }
}

export { World };
