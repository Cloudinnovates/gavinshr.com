import { CheckCircleIcon, CodeIcon, ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"></p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.skill} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-6 rounded">

                <span>
                  <CheckCircleIcon className="absolute block w-8 text-green-400" />
                  <span className="flex items-center justify-center mb-4">
                    <span className="pt-1 title-font font-medium text-white">
                      {skill.skill}
                    </span>
                  </span>
                </span>

                <span>
                  {
                    skill.moreInfo == null ? <br/> :
                    <p className="leading-relaxed mb-4">{skill.moreInfo}</p>
                  }
                </span>
                <span className="container mx-auto flex flex-col items-center">
                  <span className="text-gray-500">
                    {
                      skill.url == null ? "" :
                      skill.urlOpensInNewTab == true ?
                        <a className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" href={skill.url} target="_blank" rel="noopener noreferrer">{skill.urlName}<ArrowRightIcon className="w-4 h-4 ml-1" /></a>
                        :
                        <a className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" href={skill.url}>{skill.urlName}<ArrowRightIcon className="w-4 h-4 ml-1" /></a>
                      }
                  </span>
                </span>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
