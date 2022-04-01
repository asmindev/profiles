import React from 'react';
import { motion } from 'framer-motion';
import TextAnimation from '../components/TextAnimation';
import ReactLogo from '../assets/img/svg/React-icon.svg';
import Tailwind from '../assets/img/svg/Tailwind_CSS_Logo.svg';

function Skill() {
  const banner = {
    animate: {
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.15,
        duration: 4,
        delay: 2,
      },
    },
  };
  const letterAnimation = {
    initial: {
      y: 300,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transitions: {
        ease: [0.6, 0.1, -0.05, 0.9],
        duration: 1,
      },
    },
  };
  return (
    <div className="w-full h-full lg:w-9/12 mx-auto">
      <motion.div
        className=""
        variants={banner}
        initial="initial"
        whileInView="animate"
      >
        <div className="w-fit mx-auto">
          <div className="px-2">
            <div className="text-2xl font-black flex gap-2 text-slate-800 dark:text-slate-50 smooth">
              <TextAnimation text="Skill" />
            </div>
          </div>
          <div className="w-full mx-auto">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%', transition: { duration: 1 } }}
              className="bg-indigo-500 rounded h-[3px]"
            />
          </div>
        </div>
        <div className="w-full mx-auto mt-8 flex flex-wrap px-4 justify-center">
          <div className="text-slate-700 dark:text-slate-100 smooth">
            <p className="text-justify lg:text-center text-base mb-8">
              I'm honing my Front-End skills from mid 2021 Until now. I have
              experience but but I'm no expert. I really enjoy learning:
            </p>
          </div>
          <div className="w-1/2 lg:w-1/3">
            <div className="p-2 overflow-hidden">
              <motion.div
                variants={letterAnimation}
                className="group p-4 w-full mx-auto shadow rounded border border-gray-200 dark:bg-slate-700 dark:border-slate-500 smooth"
              >
                <div className="w-fit mx-auto">
                  <svg
                    className="h-28"
                    viewBox="0 0 256 255"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin meet"
                  >
                    <defs>
                      <linearGradient
                        x1="12.959%"
                        y1="12.039%"
                        x2="79.639%"
                        y2="78.201%"
                        id="a"
                      >
                        <stop stopColor="#387EB8" offset="0%" />
                        <stop stopColor="#366994" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="19.128%"
                        y1="20.579%"
                        x2="90.742%"
                        y2="88.429%"
                        id="b"
                      >
                        <stop stopColor="#FFE052" offset="0%" />
                        <stop stopColor="#FFC331" offset="100%" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
                      fill="url(#a)"
                    />
                    <path
                      d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
                      fill="url(#b)"
                    />
                  </svg>
                </div>

                <h1 className="mt-8 text-center opacity-0 group-hover:opacity-100 smooth">
                  Python
                </h1>
              </motion.div>
            </div>
          </div>
          <div className="w-1/2 lg:w-1/3">
            <div className="p-2 overflow-hidden">
              <motion.div
                variants={letterAnimation}
                className="group p-4 w-full mx-auto shadow rounded border border-gray-200 dark:bg-slate-700 dark:border-slate-500 smooth"
              >
                <div className="w-fit mx-auto">
                  <svg
                    className="h-28 w-full"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin meet"
                  >
                    <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
                    <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
                  </svg>
                </div>

                <h1 className="mt-8 text-center opacity-0 group-hover:opacity-100 smooth">
                  Javascript
                </h1>
              </motion.div>
            </div>
          </div>
          <div className="w-1/2 lg:w-1/3">
            <div className="p-2 overflow-hidden">
              <motion.div
                variants={letterAnimation}
                className="group p-4 w-full mx-auto shadow rounded border border-gray-200 dark:bg-slate-700 dark:border-slate-500 smooth"
              >
                <div className="w-fit mx-auto">
                  <svg
                    className="h-28 w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 2249 2249"
                    viewBox="0 0 2249 2249"
                  >
                    <path
                      d="m2249 1124.5c0 621-503.5 1124.5-1124.5 1124.5-573 0-1045.9-428.5-1115.6-982.6-5.9-47.1-8.9-94.5-8.9-141.9 0-88 10.1-173.7 29.2-255.9 115.9-497.7 562.3-868.6 1095.3-868.6 531.7 0 977.2 369 1094.3 864.9 15.6 65.8 25.1 132.9 28.6 200.5 1.1 19.7 1.6 39.4 1.6 59.1z"
                      fill="#f2f2f2"
                    />
                    <path
                      d="m1068.3 1214.8v-292.4l-253.2-146.1-253.2 146.1v292.4l253.2 146.2z"
                      fill="#3b8739"
                    />
                    <path
                      d="m2065.4 1170.4 165 95.3-165 95.3-253.2-146.2v-292.3l253.2-146.2 153.4 88.6c15.6 65.8 25.1 132.9 28.6 200.5l-93.8 54.2v-101.8l-88.2-50.9-88.2 50.9v101.8z"
                      fill="#333"
                    />
                    <path
                      d="m2114.6 1097v-56.8l-49.1-28.4-49.2 28.4v56.8l49.2 28.4z"
                      fill="#66a060"
                    />
                    <path
                      d="m442.3 922.5v385.5l-168.9-96.3v-197.7l-84.3-48.7-84.3 48.7v197.6l-95.9 54.7c-5.9-47-8.9-94.4-8.9-141.8 0-88 10.1-173.7 29.2-255.9l159.9-92.3z"
                      fill="#333"
                    />
                    <path
                      d="m815 776.2 253.2 438.5-253.2 146.2-253.1-438.5z"
                      fill="#6da75d"
                    />
                    <path
                      d="m561.9 1214.8 86.9-141.8-86.9-150.6z"
                      fill="#55a344"
                    />
                    <path
                      d="m983.8 1068.6 84.4-146.2-253.1-146.1z"
                      fill="#639d57"
                    />
                    <path
                      d="m1522.3 437.4v387.9l-84.9-49-253.2 146.2v292.4l253.2 146.2 253.2-146.2v-687.4zm-.5 679.9-84.4 48.7-84.4-48.7v-97.4l84.4-48.7 84.4 48.7z"
                      fill="#333"
                    />
                    <g fill="#66a060">
                      <path d="m1239.4 1575.7s-5-42.7-50.7-42.7-77 6-77 31.3 88.9 25.3 122.7 35.3c33.8 9.9 63.6 35.8 48.7 81.5s-60.6 50.7-131.2 50.7-86.5-58.6-86.5-81.5h39.8s-5 35.8 41.7 41.7 91.4 9.3 97.4-26.8c8-47.7-151.1-23.9-165-70.6-11.8-39.5-5-91.4 74.5-99.4s123.2 27.2 123.2 79.5z" />
                      <path d="m855.3 1762 87.9 50.7c44.2 25.5 99.4-6.4 99.4-57.4v-252.6h-35.8v242.6c0 27.8-30.1 45.3-54.3 31.3l-61.3-35.4v-258.9l224.2-129.4 224.2 129.4v258.9l-224.2 129.4-64.6-37.3-42.2 17 106.8 61.6 260-150.1v-300.2l-260-150.1-260 150.1z" />
                    </g>
                  </svg>
                </div>

                <h1 className="mt-8 text-center opacity-0 group-hover:opacity-100 smooth">
                  NodeJS
                </h1>
              </motion.div>
            </div>
          </div>
          <div className="w-1/2 lg:w-1/3">
            <div className="p-2 overflow-hidden">
              <motion.div
                variants={letterAnimation}
                className="group p-4 shadow rounded border border-gray-200 dark:bg-slate-700 dark:border-slate-500 smooth"
              >
                <motion.img src={ReactLogo} className="w-full h-28" />
                <h1 className="mt-8 text-center opacity-0 group-hover:opacity-100 smooth">
                  ReactJs
                </h1>
              </motion.div>
            </div>
          </div>
          <div className="w-1/2 lg:w-1/3">
            <div className="p-2 overflow-hidden">
              <motion.div
                variants={letterAnimation}
                className="group p-4 w-full mx-auto shadow rounded border border-gray-200 dark:bg-slate-700 dark:border-slate-500 smooth"
              >
                <div className="w-fit mx-auto">
                  <svg
                    className="h-28 w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 261.76 226.69"
                  >
                    <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
                      <g transform="translate(178.06 235.01)">
                        <path
                          d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
                          fill="#41b883"
                        />
                      </g>
                      <g transform="translate(178.06 235.01)">
                        <path
                          d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
                          fill="#34495e"
                        />
                      </g>
                    </g>
                  </svg>
                </div>

                <h1 className="mt-8 text-center opacity-0 group-hover:opacity-100 smooth">
                  VueJS
                </h1>
              </motion.div>
            </div>
          </div>
          <div className="w-1/2  lg:w-1/3">
            <div className="p-2 overflow-hidden">
              <motion.div
                variants={letterAnimation}
                className="group p-4 shadow rounded border border-gray-200 dark:bg-slate-700 dark:border-slate-500 smooth"
              >
                <motion.img src={Tailwind} className="w-full h-28" />
                <h1 className="mt-8 text-center opacity-0 group-hover:opacity-100 smooth">
                  TailwindCSS
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default Skill;
