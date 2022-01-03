import React from "react";
import { AcademicCapIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { certifications } from "../data";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <AcademicCapIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Certifications
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            These are courses I have taken in order to teach myself the essential aspects of web development. Also include Kirupa, DiscoverThreeJS, iOS Courses, etc... + include an image that showcases the official certification.
          </p>
        </div>
        <div className="flex flex-wrap m-4 lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {certifications.map((certification) => (
            <div key={certification.title} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-6 rounded">

                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {certification.title}
                    </span>
                    <span className="text-gray-500 text-sm">
                        {certification.time}
                    </span>
                    <span className="text-gray-500 text-sm mb-4">
                      <i>
                        {certification.company}
                      </i>
                    </span>

                    <p className="leading-relaxed mb-2">
                      {certification.text}
                    </p>

                    <span className="container mx-auto flex flex-col items-center pt-2">
                      <span className="text-gray-500">
                          <a className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" href={certification.url} target="_blank" rel="noopener noreferrer">Course Details<ArrowRightIcon className="w-4 h-4 ml-1" /></a>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
