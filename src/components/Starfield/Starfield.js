import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

class Starfield extends Component {

  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.stars = [];
  }

  componentDidMount() {
        // setup window sizing + resizing
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        window.addEventListener("resize", this.updateDimensions);

        // scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0x111827 );

        // camera
        this.camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        this.camera.position.z = 5;

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

        // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position.
        for ( var z= -1000; z < 1000; z+=20 ) {

          // Make a sphere (exactly the same as before).
          var geometry   = new THREE.SphereGeometry(0.5, 32, 32)
          var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
          var sphere = new THREE.Mesh(geometry, material)

          // This time we give the sphere random x and y positions between -500 and 500
          sphere.position.x = Math.random() * 1000 - 500;
          sphere.position.y = Math.random() * 1000 - 500;

          // Then set the z position to where it is in the loop (distance of camera)
          sphere.position.z = z;

          // scale it up a bit
          sphere.scale.x = sphere.scale.y = 1.25;

          //add the sphere to the scene
          this.scene.add( sphere );

          //finally push it to the stars array
          this.stars.push( sphere );
        }

        this.animate();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
        this.mount.removeChild(this.renderer.domElement);
    }

    animate() {
        requestAnimationFrame(this.animate);

		    for(var i = 0; i < this.stars.length; i++) {
          console.log("found star!");
			    this.stars[i].position.z +=  i/10;
			    if(this.stars[i].position.z>1000) this.stars[i].position.z-=2000;
		    }

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
            <div>
              <div className="starfield" ref={mount => {this.mount = mount;}}/>
              <div className="alphaDimmer"/>
            </div>
        );
    }
}

export default Starfield;
