import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export default function Skill() {
  return (
    <div className="w-full h-full p-4 container mx-auto text-justify lg:w-8/12">
      <div className="">
        <Slide bottom>
          <h1 className="text-4xl font-bold my-6">What I Do</h1>
        </Slide>
      </div>
      <div className="w-full flex flex-col lg:flex-row flex-wrap">
        <div className="w-full lg:w-1/2 py-6 lg:px-4">
          <div className="w-full">
            <div className="w-full overflow-hidden">
              <Slide bottom>
                <h1 className="text-4xl text-yellow-400">
                  <ion-icon name="code-slash-outline" />
                </h1>
                <h1 className="w-full text-xl font-bold">
                  Front-end Development
                </h1>
              </Slide>
            </div>
            <div className="mt-4 overflow-hidden">
              <Fade bottom>
                <p className="text-gray-200 text-sm leading-[1.8] font-montserrat">
                  I am a Front-end web developer with a passion for building
                  beautiful website that is user friendly and easy to use. I
                  have experience in web design and building and customization.
                  always try to make the user experience as good as possible.
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 py-6 lg:px-4">
          <div className="w-full">
            <div className="w-full overflow-hidden">
              <Slide bottom>
                <h1 className="text-4xl text-yellow-400">
                  <ion-icon name="search-outline" />
                </h1>
                <h1 className="w-full text-xl font-bold">Google Searching</h1>
              </Slide>
            </div>
            <div className="mt-4 overflow-hidden">
              <Fade bottom>
                <p className="text-gray-200 text-sm leading-[1.8] font-montserrat">
                  I am good to Google search and find the best solution to your
                  project. Feel free to contact me writing an email with your
                  project idea.
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 py-6 lg:px-4">
          <div className="w-full">
            <div className="w-full overflow-hidden">
              <Slide bottom>
                <h1 className="text-4xl text-yellow-400">
                  <ion-icon name="bug-outline" />
                </h1>
                <h1 className="w-full text-xl font-bold">Debugging</h1>
              </Slide>
            </div>
            <div className="mt-4 overflow-hidden">
              <Fade bottom>
                <p className="text-gray-200 text-sm leading-[1.8] font-montserrat">
                  I am a good to debug and fix your project. Find the best
                  solution and apply it to your project.
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 py-6 lg:px-4">
          <div className="w-full">
            <div className="w-full overflow-hidden">
              <Slide bottom>
                <h1 className="text-4xl text-yellow-400">
                  <ion-icon name="image-outline" />
                </h1>
                <h1 className="w-full text-xl font-bold">Lightroom edit</h1>
              </Slide>
            </div>
            <div className="mt-4 overflow-hidden">
              <Fade bottom>
                <p className="text-gray-200 text-sm leading-[1.8] font-montserrat">
                  Besides that, i am also a good to edit your photo with
                  Lightroom.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
