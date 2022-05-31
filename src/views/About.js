import React from 'react'
// import TextAnimation from '../components/TextAnimation'
import Image from '../assets/img/asmin.png'

function About() {
  // function getAge(dateString) {
  // const today = new Date();
  // const birthDate = new Date(dateString);
  // let age = today.getFullYear() - birthDate.getFullYear();
  // const m = today.getMonth() - birthDate.getMonth();
  // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  // age -= 1;
  // }
  // return age;
  // }
  return (
    <div className="w-full lg:w-8/12 mx-auto flex flex-col justify-center">
      <div>
        <div className="mt-12 lg:mx-0 w-full text-slate-800 dark:text-slate-50 smooth">
          <h1 className="text-4xl font-bold">HI, I am <span className="before:block before:absolute before:bg-indigo-100 before:w-3/4 before:h-4 before:inset-5 before:-inset-x-1 before:dark:bg-indigo-600 relative inline-block smooth"><span className="relative text-indigo-600 dark:text-indigo-200">Asmin</span></span></h1>
          <div className="mt-4 text-xl font-light text-gray-600 dark:text-gray-300">
            <h2>Front-end Developer</h2>
            <h2>Informatics Engineering Student</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="w-full relative lg:w-8/12 mx-auto mt-10 overflow-hidden rounded bg-transparent -translate-y-20">
          <img className="w-[200%]" src={Image} alt="User alt" />
          <span className="absolute -z-10 -bottom-16 block w-full">
            <svg
              className=""
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#818CF8"
                d="M54.2,-60.8C68.9,-52.2,78.5,-33.9,82.4,-14.2C86.3,5.5,84.4,26.6,74.4,42.2C64.5,57.9,46.6,68.3,28.3,72.8C10,77.3,-8.6,76,-26.4,70.5C-44.3,64.9,-61.4,55.1,-72.9,39.8C-84.5,24.5,-90.6,3.7,-85.3,-13C-79.9,-29.8,-63.2,-42.6,-47.1,-50.9C-31,-59.2,-15.5,-63,2.1,-65.5C19.7,-68.1,39.5,-69.3,54.2,-60.8Z"
                transform="translate(100 100)"
              />
            </svg>
          </span>
        </div>
        <div className="px-4 w-fit lg:pl-14 lg:flex items-center justify-center">
          <div className="">
            <div className="lg:mx-0 text-md font-black w-fit text-slate-800 dark:text-slate-50 smooth">
              <h1 className="pr-2">About Me</h1>
              <span className="block w-full bg-indigo-500 h-[2px] mx-auto" />
            </div>
            <div className="text-center pt-4">
              <p className="font-montserrat dark:text-slate-100 text-slate-600 smooth leading-normal text-base font-extralight text-justify">
                I am front-end developer based in the city of Baubau, Indonesia.
                I am also student at Haluoleo University, majoring in
                Informatics Engineering. I really like to learn new things about
                technology, especially about web programming
              </p>
            </div>
            <div className="mt-6 px-4 w-full justify-between flex items-center">
              <div className="text-2xl mt-1 flex items-center gap-4 text-indigo-800/75 dark:text-indigo-200">
                <span className="inline-block">
                  <a
                    className=""
                    href="https://github.com/asmindev"
                    aria-label="asu"
                  >
                    <ion-icon name="logo-github" />
                  </a>
                </span>
                <span className="inline-block">
                  <a
                    className=""
                    href="https://instagram.com/iniasmin_"
                    aria-label="asu"
                  >
                    <ion-icon name="logo-instagram" />
                  </a>
                </span>
              </div>
              {/* Contact email */}
              <div className="">
                <span className="block">
                  <a
                    className="flex gap-2 px-4 py-3 rounded bg-indigo-400 text-slate-50 text-sm"
                    href="mailto:asminmin477@gmail.com"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Contact Me
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
