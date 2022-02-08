import {
  SphereBufferGeometry,
  Group,
  Mesh,
  MeshStandardMaterial,
  MathUtils,
 } from '../../../vendor/three/build/three.module.js';

function createMeshGroup() {
  const group = new Group();

  let sphere = createSphereGeometry();
  group.add(sphere);

  for (let i = 0; i < 1; i += 0.05) {
    const clonedSphere = sphere.clone();

    clonedSphere.position.x = Math.cos(2 * Math.PI * i);
    clonedSphere.position.y = Math.sin(2 * Math.PI * i);

    clonedSphere.scale.multiplyScalar(0.01 + i);

    group.add(clonedSphere);
  }

  group.scale.multiplyScalar(2);

  const radiansPerSecond = MathUtils.degToRad(30);

  group.tick = (delta) => {
    group.rotation.z -= delta * radiansPerSecond;
  }

  return group;
}

function createSphereGeometry() {
  const geometry = new SphereBufferGeometry(0.25, 16, 16);

  const material = new MeshStandardMaterial({ color: 'indigo',});

  const protoSphere = new Mesh(geometry, material);

  return protoSphere;
}

export { createMeshGroup };
