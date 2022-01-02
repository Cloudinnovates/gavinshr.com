import React from "react";
import { AcademicCapIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { certifications } from "../data";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container px-5 py-10 mx-auto text-center">
        <AcademicCapIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Certifications
        </h1>
        <div className="flex flex-wrap m-4">
          {certifications.map((certification) => (
            <div key={certification.title} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">

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
                          <a className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" href={certification.url}>Course Details<ArrowRightIcon className="w-4 h-4 ml-1" /></a>
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
