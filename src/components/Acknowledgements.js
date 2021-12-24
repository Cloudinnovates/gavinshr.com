import React from "react";
import { BookOpenIcon } from "@heroicons/react/outline";

export default function Acknowledgements() {
  return (
    <section id="acknowledgements">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="text-center mb-10">
          <BookOpenIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Acknowledgements
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-10">
            Resources & assets used to create this website.
          </p>
          <a href="https://www.vecteezy.com/free-vector/astronaut">Astronaut Vectors by Vecteezy</a>
        </div>
      </div>
    </section>
  );
}
