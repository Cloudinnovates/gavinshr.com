import React from "react";
import { BookOpenIcon } from "@heroicons/react/outline";

export default function Acknowledgements() {
  return (
    <section id="acknowledgements" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="text-center mb-10">
          <BookOpenIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Acknowledgements
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-4">
            Resources & assets used to create this website.
          </p>

          <a href="https://www.freecodecamp.org/news/build-portfolio-website-react/" className="hover:text-white" target="_blank" rel="noopener noreferrer">ReactJS Portfolio Tutorial</a>
          <br/>
          <a href="https://jfelix.info/blog/create-a-mobile-friendly-navigation-with-react" className="hover:text-white" target="_blank" rel="noopener noreferrer">ReactJS Mobile NavBar Tutorial</a>
          <br/>
          <a href="https://heroicons.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">ReactJS Icon Pack</a>
          <br/>
          <a href="https://discoverthreejs.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">Discover Three JS</a>
          <br/>
          <a href="https://www.vecteezy.com/free-vector/astronaut" className="hover:text-white" target="_blank" rel="noopener noreferrer">Astronaut Vectors by Vecteezy</a>

          <br/>
          <br/>
          <u>
            <a href="#" className="hover:text-white">Back To Top</a>
          </u>
        </div>
      </div>
    </section>
  );
}
