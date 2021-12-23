import React from "react";

export default function Starfield() {
  return (
    <section id="starfield">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Starfield Animation Test
          </h1>
        </div>
        <div className="container mx-auto flex px-10 pt-0 pb-20 flex items-center justify-center">
        <div class="starfield"/>
        </div>
      </div>
    </section>
  );
}
