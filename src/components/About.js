import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Gavin.
            <br className="hidden lg:inline-block" /> Welcome to my portfolio.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a self taught development looking to begin my career in web development. This portfolio is currently under construction. I am building this site using ReactJS, ThreeJS, & HTML/CSS/JavaScript.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./astronaut.svg"
          />
        </div>
      </div>
    </section>
  );
}
