import React from 'react'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full">
        <motion.div
          animate={{
            scale: [1, 1.1, 0.9, 1],
            y: [10, 640, 320, 10],
            x: [10, 400, 200, 10],
          }}
          transition={{
            duration: 7,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
          className="absolute w-44 h-44 bg-blue-500 rounded-full blur-2xl mix-blend-multiply"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 0.9, 1],
            y: [10, 100, 420, 10],
            x: [10, 200, 160, 10],
          }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
          className="absolute w-44 h-44 bg-sky-500 rounded-full blur-2xl mix-blend-multiply"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 0.9, 1],
            x: [0, -80, -20, 0],
            y: [0, 400, 100, 0],
          }}
          transition={{
            duration: 7,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
          className="absolute right-0 w-44 h-44 bg-violet-500 rounded-full blur-2xl mix-blend-multiply"
        />
        <div className="w-full h-full flex items-center justify-center">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '33%' }}
            exit={{ height: 0 }}
            viewport={{ once: false }}
            transition={{
                delayChildren: 5,
                damping: 20,
                duration: 1,
                ease: 'backInOut',
                repeat: false,
              }}
            className="w-2/3 p-4"
          >
            <h1 className="font-popins font-black text-4xl text-slate-800">Wellcome to my site.</h1>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
