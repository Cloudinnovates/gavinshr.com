import { PerspectiveCamera } from '../../../vendor/three/build/three.module.js';

function createCamera() {
  const camera = new PerspectiveCamera(
    35,   // field of view
    1,    // aspect ratio (dummy value)
    0.1,  // near clipping plan
    100,  // far clipping plane
  );

  // move the camera back so we can see the scene
  camera.position.set(0, 0, 10);

  return camera;
}

export { createCamera };
