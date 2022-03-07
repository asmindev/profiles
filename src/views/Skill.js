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
            <div className="flex gap-2 text-slate-800 dark:text-slate-50 smooth">
              <TextAnimation text="Skill" />
            </div>
          </div>
          <div className="w-full mx-auto">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%', transition: { duration: 1 } }}
              className="bg-indigo-500 rounded h-1"
            />
          </div>
        </div>
        <div className="w-full mx-auto mt-8 flex flex-wrap px-4">
          <div className="text-slate-700 dark:text-slate-100 smooth">
            <p className="text-justify lg:text-center text-base mb-8">
              I'm honing my Front-End skills from mid 2021 Until now. I have
              experience but but I'm no expert. I really enjoy learning:
            </p>
          </div>
          <div className="w-1/2">
            <div className="p-2 overflow-hidden">
              <motion.div
                variants={letterAnimation}
                className="p-4 shadow rounded border border-gray-200 dark:bg-slate-700 dark:border-slate-500 smooth"
              >
                <div className="w-fit mx-auto">
                  <svg
                    className="h-28 w-full"
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

                <h1 className="mt-8 text-center">Python</h1>
              </motion.div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-2 overflow-hidden">
              <motion.div
                variants={letterAnimation}
                className="p-4 w-full mx-auto shadow rounded border border-gray-200 dark:bg-slate-700 dark:border-slate-500 smooth"
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

                <h1 className="mt-8 text-center">Javascript</h1>
              </motion.div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-2 overflow-hidden">
              <motion.div
                variants={letterAnimation}
                className="p-4 shadow rounded border border-gray-200 dark:bg-slate-700 dark:border-slate-500 smooth"
              >
                <motion.img src={ReactLogo} className="w-full h-28" />
                <h1 className="mt-8 text-center">ReactJs</h1>
              </motion.div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-2 overflow-hidden">
              <motion.div
                variants={letterAnimation}
                className="p-4 shadow rounded border border-gray-200 dark:bg-slate-700 dark:border-slate-500 smooth"
              >
                <motion.img src={Tailwind} className="w-full h-28" />
                <h1 className="mt-8 text-center">TailwindCSS</h1>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default Skill;
