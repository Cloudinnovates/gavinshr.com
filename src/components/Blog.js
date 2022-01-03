import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { blog } from "../data";

export default function Blog() {
  return (
    <section id="blog">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <UsersIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Blog
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Top 3-5 Posts & URL Link to view full blog.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {blog.map((post) => (
            <div key={post.name} className="p-4 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-6 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{post.text}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={post.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {post.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {post.url}
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
