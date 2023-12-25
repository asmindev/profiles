'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { IconBrandGithub, IconBrandInstagram } from '@irsyadadl/paranoid'

const stagger = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
}
const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.9],
        },
    },
}
export default function Jumbotron() {
    return (
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto lg:p-6 min-h-[70vh] flex flex-col justify-center items-center">
            <div className="relative w-fit mt-32">
                <h1 className="font-black text-6xl md:text-8xl uppercase text-gray-700 dark:text-gray-100">
                    Welcome
                </h1>
                <div className="absolute w-full h-2 bg-emerald-400" />
            </div>
            <div className="mt-24 flex flex-col-reverse md:flex-row">
                <div className="w-full flex flex-col lg:flex-row justify-between items-center">
                    <motion.div
                        variants={stagger}
                        animate="animate"
                        initial="initial"
                        className="w-11/12 flex flex-col md:justify-center md:items-center lg:items-start"
                    >
                        <motion.h3
                            variants={fadeInUp}
                            className="my-12 w-fit bg-emerald-400 px-2 text-white"
                        >
                            Front-End Developer
                        </motion.h3>
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl lg:text-6xl font-bold text-left text-gray-700 dark:text-gray-100"
                        >
                            Hi, I'm Asmin
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-justify text-gray-600 dark:text-gray-100 mt-4 lg:mt-8 leading-relaxed md:text-base"
                        >
                            I love to create beautiful and functional web
                            applications. Show me your project and I'll make it
                            look awesome. I design and code beautifully simple
                            things, and i love what i do.
                        </motion.p>
                        <div className="w-full flex items-center gap-4 mt-16">
                            <motion.a
                                variants={fadeInUp}
                                href="https://instagram.com/iniasmin_"
                                target="_blank"
                            >
                                <IconBrandInstagram className=" text-gray-400 hover:text-emerald-400 transition-all duration-300" />
                            </motion.a>
                            <motion.a
                                variants={fadeInUp}
                                href="https://github.com/asmindev"
                                target="_blank"
                            >
                                <IconBrandGithub className=" text-gray-400 hover:text-emerald-400 transition-all duration-300" />
                            </motion.a>
                            <div className="flex-1 flex justify-end">
                                <motion.button
                                    variants={fadeInUp}
                                    className="bg-emerald-400 px-3 py-1 w-fit justify-center flex items-center gap-2 text-white"
                                >
                                    <h3 className="text-sm">Hire me</h3>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 text-gray-100 animate-[wiggle_1s_ease-in-out_infinite]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="w-full h-full flex items-center md:justify-end group">
                    <div className="w-11/12 md:w-8/12 mx-auto h-[26rem] bg-emerald-400 shadow-[0_50px_80px_-15px_rgba(0,0,0,0.3)] hover:shadow-emerald-400/30 transition-all duration-300">
                        <Image
                            src="/photo.png"
                            className="object-cover w-full h-full"
                            alt="hero"
                            width={1200}
                            height={900}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
