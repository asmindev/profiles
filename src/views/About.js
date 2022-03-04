import React from 'react'
import { motion } from 'framer-motion'
import TextAnimation from '../components/TextAnimation'
import Image from '../assets/img/user.png'

function About() {
  function getAge(dateString) {
    const today = new Date()
    const birthDate = new Date(dateString)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age -= 1
    }
    return age
  }
  return (
    <div className="px-4 h-screen md:h-max w-full flex justify-center">
      <motion.div className="w-full">
        <div className="w-fit mx-auto">
          <div className="px-2">
            <div className="flex gap-2 text-slate-800 dark:text-slate-50 smooth">
              <TextAnimation text="About" />
              <TextAnimation text="Me" />
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
        <motion.div
          initial={{ borderRadius: 0 }}
          whileInView={{ borderRadius: '50%', transition: { duration: 0.5, delay: 0.5 } }}
          className="overflow-hidden w-10/12 mx-auto mt-10"
        >
          <motion.img
            initial={{
              scale: 1,
              opacity: 1,
              y: 300,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.6, ease: [0.6, 0.1, -0.05, 0.9] },
            }}
            src={Image}
            alt="User alt"
          />
        </motion.div>
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
          className="px-4"
        >
          <p className="dark:text-slate-100 py-8 text-slate-600 smooth leading-normal text-base font-extralight text-justify">
            I am
            <a
              href="https://instagram.com/iniasmin_"
              className="ml-1 text-indigo-400 hover:text-indigo-300 focus:text-indigo-500 transition-all duration-150"
            >
              Asmin
            </a>
            ,
            {' '}
            {getAge('09/10/2001')}
            {' '}
            years old. Student at Haluoleo University,
            majoring in Informatics Engineering. I was born at 10 September 2001
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
export default About
