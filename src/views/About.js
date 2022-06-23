import React from 'react';
import Fade from 'react-reveal/Fade';
import User from '../assets/img/asmin.png (2)';

export default function About() {
  return (
    <div className="w-full h-full p-4 container mx-auto lg:w-8/12">
      <div className="w-full md:flex gap-2">
        <div className="w-full md:w-1/2 md:p-4">
          <div className="w-full h-full">
            <div className="relative w-full h-[30rem] overflow-hidden">
              <Fade bottom>
                <div className="absolute w-full h-full bg-yellow-500">
                  <img
                    src={User}
                    alt="Profile"
                    className="w-[70%] md:scale-100 scale-75 object-top pt-8 object-cover mx-auto grayscale"
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:p-4">
          <div className="w-full mt-4 mb-2 overflow-hidden">
            <Fade bottom>
              <h1 className="text-3xl font-semibold">I am Asmin</h1>
              <h2 className="text-xl font-medium">
                Front-end Developer from Baubau, Indonesia
              </h2>
            </Fade>
          </div>
          <Fade bottom>
            <div className="mt-4 text-gray-200 text-sm leading-[1.8]">
              <p className="font-montserrat text-justify">
                I have experience in web site design & building and
                customization. I am good to building web use{' '}
                <strong>Html, Css, Javascript, ReactJs and TailwindCss</strong>.
                But, i'm really like use ReactJs and TailwindCss. I love to talk
                with you about our unique approach. Also, i am good to Google
                search and find the best solution for you. Feel free to contact
                me writing an email with your project idea.
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="w-full mt-8">
              <a
                className="text-sm py-3 px-4 border border-gray-50 hover:bg-gray-50 hover:text-gray-800 smooth"
                href="#id"
              >
                Download Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
