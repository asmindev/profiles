import React from 'react';
import { motion } from 'framer-motion';
import TextAnimation from '../components/TextAnimation';
import Image from '../assets/img/asmin.png';

function About() {
  function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age -= 1;
    }
    return age;
  }
  return (
    <div className="w-full lg:w-8/12 mx-auto flex justify-center">
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="w-full relative lg:w-8/12 mx-auto mt-10 overflow-hidden rounded bg-transparent -translate-y-20">
          <img
            className="w-full lg:scale-150 object-top"
            src={Image}
            alt="User alt"
          />
          <span className="absolute -z-10 -bottom-20 block w-full">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#8A3FFC"
                d="M54.2,-60.8C68.9,-52.2,78.5,-33.9,82.4,-14.2C86.3,5.5,84.4,26.6,74.4,42.2C64.5,57.9,46.6,68.3,28.3,72.8C10,77.3,-8.6,76,-26.4,70.5C-44.3,64.9,-61.4,55.1,-72.9,39.8C-84.5,24.5,-90.6,3.7,-85.3,-13C-79.9,-29.8,-63.2,-42.6,-47.1,-50.9C-31,-59.2,-15.5,-63,2.1,-65.5C19.7,-68.1,39.5,-69.3,54.2,-60.8Z"
                transform="translate(100 100)"
              />
            </svg>
          </span>
        </div>
        <div className="px-4 w-fit lg:pl-14 lg:flex items-center justify-center">
          <div className="">
            <div className="overflow-hidden">
              <div className="lg:mx-0 text-2xl font-black flex w-fit gap-2 mx-auto text-slate-800 dark:text-slate-50 smooth">
                <TextAnimation text="About" />
                <TextAnimation text="Me" />
              </div>
            </div>
            <div className="w-1/2 mx-auto lg:w-1/4 lg:mx-0">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%', transition: { duration: 1 } }}
                className="bg-indigo-500 h-[2px] mx-auto"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.2,
                  ease: 'easeInOut',
                  transitionDelay: 10,
                  animationDelay: 10,
                },
              }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="dark:text-slate-100 py-8 text-slate-600 smooth leading-normal text-base font-extralight text-justify">
                I am
                <a
                  href="https://instagram.com/iniasmin_"
                  className="ml-1 text-indigo-400 hover:text-indigo-300 focus:text-indigo-500 transition-all duration-150"
                >
                  Asmin
                </a>
                , {getAge('09/10/2001')} years old. Student at Haluoleo
                University, majoring in Informatics Engineering. I really like
                to learn new things about technology, especially about web
                programming
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
