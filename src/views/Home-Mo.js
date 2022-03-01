import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

export default function Home() {
  const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.5,
        duration: 4,
        bounce: 0,
      },
    },
  }
  const letterAnimation = {
    initial: {
      y: 10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transitions: {
        ease: 'easeInOut',
        duration: 1,
        bounce: 0,
      },
    },
  }
  return (
    <div className="w-full h-full dark:text-slate-50 text-slate-800 smooth">
      <div className="relative w-full h-full">
        <motion.div
          animate={{
            scale: [1, 1.1, 0.9, 1],
            y: [0, 640, 420, 0],
            x: [10, 200, 100, 10],
          }}
          transition={{
            duration: 8,
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
          className="-z-10 opacity-60 absolute w-44 h-44 bg-rose-500 rounded-full blur-2xl mix-blend-multiply dark:opacity-1 dark:mix-blend-screen transition-colors duration-500"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 0.9, 1],
            y: [5, 550, 230, 5],
            x: [0, 20, 10, 0],
          }}
          transition={{
            duration: 5,
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
          className="-z-10 opacity-60 absolute w-44 h-44 bg-sky-500 rounded-full blur-2xl mix-blend-multiply dark:opacity-1 dark:mix-blend-screen transition-colors duration-500"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 0.9, 1],
            x: [0, 8, -12, 0],
            y: [0, 400, 320, 0],
          }}
          transition={{
            duration: 7,
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
          className="-z-10 opacity-60 dark:opacity-1 absolute right-0 w-44 h-44 bg-violet-500 rounded-full blur-2xl mix-blend-multiply dark:mix-blend-screen transition-colors duration-500"
        />
        <div className="w-full h-full flex items-center justify-center">
          <motion.div
            variants={banner}
            initial="initial"
            animate="animate"
            className="w-2/3 p-4"
          >
            <motion.h1
              variants={letterAnimation}
              className="font-popins font-black text-4xl"
            >
              Wellcome to my Profile.
            </motion.h1>
            <Link
              activeClass="active"
              to="about"
              spy
              smooth
              offset={-50}
              duration={700}
            >
              <motion.button
                variants={letterAnimation}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className="font-popins tracking-wider mt-4 text-xs uppercase font-bold bg-indigo-500 text-white px-4 py-3 rounded-full"
              >
                Scrool down
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
