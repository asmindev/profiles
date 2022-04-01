import React from 'react';
import { motion } from 'framer-motion';
import TextAnimation from '../components/TextAnimation';
import Image from '../assets/img/user.png';

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
    <div className="px-4 w-full lg:w-8/12 mx-auto flex justify-center bg-gray-100/25 dark:bg-gray-800/50 shadow">
      <motion.div className="flex flex-col lg:flex-row justify-center">
        <motion.div
          initial={{ borderRadius: 0 }}
          whileInView={{
            borderRadius: '2%',
            transition: { duration: 0.5, delay: 0.5 },
          }}
          className="w-10/12 lg:w-1/2 mx-auto mt-10 overflow-hidden rounded bg-transparent"
        >
          <motion.img
            className="w-full"
            initial={{
              opacity: 9,
              y: 300,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            }}
            whileHover={{
              scale: 1.1,
              transition: {
                type: 'spring',
                duration: 0.6,
                ease: [0.6, 0.1, -0.05, 0.9],
                bounce: 0,
              },
            }}
            src={Image}
            alt="User alt"
          />
        </motion.div>
        <div className="w-fit mt-12 lg:pl-14 lg:flex items-center justify-center">
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
                University, majoring in Informatics Engineering. I really like to learn new things about technology, especially about web programming
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default About;
