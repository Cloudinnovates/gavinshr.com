import React, { Component } from "react";
//import ReactDOM from "react-dom";
//import * as THREE from "three";

class ThreeJS extends Component {
  render() {
    return (
      <section id="threeJS">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Gavin.
              <br className="hidden lg:inline-block" /> Welcome to my portfolio.
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
              Laborum, voluptas natus?
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default ThreeJS;
