import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
  MathUtils,
  TextureLoader
} from '../../../vendor/three/build/three.module.js';

function createMaterial() {
  // create a texture loader
  const textureLoader = new TextureLoader();

  // load a texture
  const texture = textureLoader.load(
    './assets/textures/uv-test-bw.png',
  );

  // create a mesh standard material which will react to our physically correct lighting
  const material = new MeshStandardMaterial({
    map: texture,
  });

  return material;
}

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  const material = createMaterial();

  // create a mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  // rotate the cube so we can see the effects of the phsyically correct lighting model
  cube.rotation.set(-0.5, -0.1, 0.8);

  /* Note: adding a property to an existing class at run-time like this is
  known as monkey-patching (here, we’re adding .tick to an instance of
  Mesh). It’s common practice, and in our simple app won’t cause any
  problems. However, we shouldn’t get into the habit of doing this
  carelessly since in certain situations it can cause performance
  issues. We’ll only allow ourselves to do this here as the
  alternatives are more complex. */
  const radiansPerSecond = MathUtils.degToRad(30);
  // this method will be called once per frame
  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  }

  return cube;
}

export { createCube };
