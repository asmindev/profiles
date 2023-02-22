import React from "react";

export default function Jumbotron() {
  return (
    <div className="w-full md:w-11/12 lg:w-9/12 mx-auto lg:p-6 h-[70vh] flex flex-col justify-center items-center">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center">
        <div className="w-11/12 lg:w-1/2 flex flex-col md:justify-center md:items-center lg:items-start">
          <h3 className="w-fit bg-emerald-400 px-2 text-gray-800 font-fira my-14">
            Front-End Developer
          </h3>
          <h1 className="text-4xl lg:text-6xl font-fira font-bold text-white text-left">
            Hi, I'm Asmin
          </h1>
          <p className="text-gray-300 text-left mt-4 lg:mt-8 font-fira leading-relaxed text-sm md:text-base">
            I love to create beautiful and functional web applications. Show me
            your project and I'll make it look awesome. I design and code
            beautifully simple things, and i love what i do.
          </p>
          <div className="flex gap-4 mt-16">
            <a
              href="#"
              className="text-emerald-400 decoration-clone font-fira font-medium tracking-widest underline decoration-emerald-400 underline-offset-4"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
