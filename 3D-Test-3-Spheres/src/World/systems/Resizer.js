const setSize = (container, camera, renderer) => {
  // Set the camera's aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;

  // Update the camera's frustum
  camera.updateProjectionMatrix();

  // Update the size of the renderer & canvas
  renderer.setSize(container.clientWidth, container.clientHeight);

  // Set the pixel ratio (for mobile devices)
  renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
  constructor(container, camera, renderer) {
    // Call the setSize function upon initial load
    setSize(container, camera, renderer);

    // Set the size again if a resize event occurs
    window.addEventListener('resize', () => {
      setSize(container, camera, renderer);
    });
  }
}

export { Resizer };
