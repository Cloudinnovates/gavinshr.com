import React, { Component } from "react";
import { CubeIcon } from "@heroicons/react/outline";
import ReactDOM from "react-dom";
import * as THREE from "three";

class ThreeJS extends Component {
  componentDidMount() {
    var sceneSizeModifier = 250;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, ((window.innerWidth-sceneSizeModifier)/(window.innerHeight-sceneSizeModifier)), 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth - sceneSizeModifier, window.innerHeight - sceneSizeModifier);
    this.mount.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  render() {
    return (
      <section id="threeJS">
        <div>
          <div className="container px-5 pt-10 pb-0 mx-auto">
            <div className="text-center mb-20">
              <CubeIcon className="mx-auto inline-block w-10 mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                ThreeJS Experiments
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                possimus est.
              </p>
            </div>
          </div>
          <div className="container mx-auto flex px-10 pt-0 pb-20 flex items-center justify-center">
            <div ref={ref => (this.mount = ref)} />
          </div>
        </div>
      </section>
    );
  }
}

export default ThreeJS;
