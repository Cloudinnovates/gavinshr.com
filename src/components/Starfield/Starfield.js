import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

class Starfield extends Component {

  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        window.addEventListener("resize", this.updateDimensions);

        // scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0x111827 );

        // camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            50
        );
        this.camera.position.z = 15;
        this.camera.position.x = 0;
        this.camera.position.y = 0;

        // rendering
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(width, height, false);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.render(this.scene, this.camera);
        this.mount.appendChild(this.renderer.domElement);

        // setup geo
        const geometry = new THREE.BoxGeometry(5, 5, 5);
        const material = new THREE.MeshNormalMaterial();
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(0, 0, 0);
        cube.name = "cube"
        this.scene.add(cube);

        this.renderer.render(this.scene, this.camera);

        this.animate();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
        this.mount.removeChild(this.renderer.domElement);
    }

    animate() {
        requestAnimationFrame(this.animate);
        const cube = this.scene.getObjectByName("cube");
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;
        cube.rotation.z += 0.005;
        this.renderer.render(this.scene, this.camera);
    }

    updateDimensions() {
        if (this.mount !== null) {
            this.renderer.setSize(
                this.mount.clientWidth,
                this.mount.clientHeight
            );
            this.camera.aspect =
                this.mount.clientWidth / this.mount.clientHeight;
            this.camera.updateProjectionMatrix();

            this.renderer.render(this.scene, this.camera);
        }
    }

    render() {
        return (
            <div className="starfield" ref={mount => {this.mount = mount;}}/>
        );
    }
}

export default Starfield;
