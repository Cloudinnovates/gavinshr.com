import { Clock } from '../../../vendor/three/build/three.module.js';

const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      // tell every animated object to tick forward one frame
      this.tick();

      // render a frame
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() { /* Runs 60 times per second - keep this simple/minimal */
    // Retrieve delta to ensure each frame is rendered smoothly
    // only call the getDelta function once per frame!
    let delta = clock.getDelta();
    // Frame rates are never perfectly steady, delta/frame-rate log:
    //console.log(`The last frame rendered in ${delta * 1000} milliseconds`);

    // If we start/stop the animation, the delta becomes massive
    // and then the animation moves rapidly upon re-start...
    // if we encounter a massive delta, we should set it to 0 to ensure
    // no massive animation steps occurs
    if (delta > 0.1) {
      delta = 0;
    }

    // Loop over animated objects and call their .tick method
    // update each animatable object by 1 frame
    for (const object of this.updatables) {
      object.tick(delta);
    }
  }
}

export { Loop }
