import React from "react";

export default function Introduces() {
  return (
    <div id="about" className="relative w-full my-32">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-t from-transparent to-black/30 -z-10" />
      <div className="md:w-11/12 lg:w-9/12 mx-auto lg:p-6 h-full">
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center mt-24">
          <div className="w-11/12 md:w-1/2 font-fira">
            <div className="lg:w-10/12 mx-auto md:mx-0 my-4">
              <div className="w-full p-8 group bg-zinc-700/20 rounded-sm hover:shadow-2xl transition duration-300 backdrop-blur-xl backdrop-filter">
                <h3 className="text-gray-50 group-hover:text-emerald-400 font-bold text-lg transition-all duration-300">
                  Front-End
                </h3>
                <p className="text-gray-300 my-1 text-xs">
                  I build and develop with clean and modern design.
                </p>
                <a
                  href="#"
                  className="block text-gray-100 font-medium text-xs decoration-clone font-fira tracking-widest underline underline-offset-4 mt-4"
                >
                  Projects
                </a>
              </div>
            </div>
            <div className="lg:w-10/12 mx-auto md:mx-0 my-4">
              <div className="w-full p-8 group bg-zinc-700/20 rounded-sm hover:shadow-2xl transition duration-300 backdrop-blur-xl backdrop-filter">
                <h3 className="text-gray-50 group-hover:text-emerald-400 font-bold text-lg transition-all duration-300">
                  Design
                </h3>
                <p className="text-gray-300 my-1 text-xs">
                  Create a beautiful for your project.
                </p>
                <a
                  href="#"
                  className="block text-gray-100 font-medium text-xs decoration-clone font-fira tracking-widest underline underline-offset-4 mt-4"
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
          <div className="w-11/12 md:w-1/2 font-fira">
            <span className="text-gray-300 text-xs my-4 text-left">
              Introduce
            </span>
            <h1 className="text-2xl lg:text-4xl my-4 font-fira font-thin text-white text-left">
              Hello, i'm Asmin
            </h1>
            <h2 className="text-gray-300 text-lg lg:text-2xl font-fira font-thin text-left">
              Every project is a new challenge for me.
            </h2>
            <p className="my-4 leading-loose text-gray-300 text-xs font-fira">
              Since beggining my journey intered in design and development, i am
              so passionate about it. I love to create beautiful and modern
              websites. I have a lot of experience in web development and
              design. I am a hard worker and always ready to learn new things. I
              am a fast learner and i am always ready to work with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
