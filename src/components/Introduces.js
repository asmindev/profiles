'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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
        y: 80,
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

export default function Introduces() {
    const ref = useRef(null)
    const inView = useInView(ref, { threshold: 0.5, once: true })

    return (
        <div id="about" className="relative w-full my-32">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-t from-transparent to-zinc-800/30 -z-10" />
            <div className="md:w-11/12 lg:w-9/12 mx-auto lg:p-6 h-full">
                <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center mt-24">
                    <motion.div
                        ref={ref}
                        // IN VIEW
                        variants={stagger}
                        animate={inView ? 'animate' : 'initial'}
                        initial={inView ? 'initial' : 'animate'}
                        className="w-11/12 md:w-1/2 font-fira"
                    >
                        <motion.div
                            variants={fadeInUp}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="lg:w-10/12 mx-auto md:mx-0 my-4"
                        >
                            <div className="w-full p-6 group bg-zinc-700/20 rounded-sm hover:shadow-2xl transition duration-300 backdrop-blur-xl backdrop-filter">
                                <h3 className="text-gray-50 group-hover:text-emerald-400 font-bold text-md transition-all duration-300">
                                    Front-End
                                </h3>
                                <p className="text-gray-300 text-[10px]">
                                    I build and develop with clean and modern
                                    design.
                                </p>
                                <a
                                    href="#"
                                    className="block text-gray-100 font-medium text-[10px] decoration-clone font-fira tracking-widest underline underline-offset-4 mt-2"
                                >
                                    Projects
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="lg:w-10/12 mx-auto md:mx-0 my-4"
                        >
                            <div className="w-full p-6 group bg-zinc-700/20 rounded-sm hover:shadow-2xl transition duration-300 backdrop-blur-xl backdrop-filter">
                                <h3 className="text-gray-50 group-hover:text-emerald-400 font-bold text-md transition-all duration-300">
                                    Design
                                </h3>
                                <p className="text-gray-300 text-[10px]">
                                    Create a beautiful for your project.
                                </p>
                                <a
                                    href="#"
                                    className="block text-gray-100 font-medium text-[10px] decoration-clone font-fira tracking-widest underline underline-offset-4 mt-2"
                                >
                                    Projects
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="lg:w-10/12 mx-auto md:mx-0 my-4"
                        >
                            <div className="w-full p-6 group bg-zinc-700/20 rounded-sm hover:shadow-2xl transition duration-300 backdrop-blur-xl backdrop-filter">
                                <h3 className="text-gray-50 group-hover:text-emerald-400 font-bold text-md transition-all duration-300">
                                    Web Scraping
                                </h3>
                                <p className="text-gray-300 text-[10px]">
                                    I can help you to get data from website.
                                </p>
                                <a
                                    href="#"
                                    className="block text-gray-100 font-medium text-[10px] decoration-clone font-fira tracking-widest underline underline-offset-4 mt-2"
                                >
                                    Projects
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="lg:w-10/12 mx-auto md:mx-0 my-4"
                        >
                            <div className="w-full p-6 group bg-zinc-700/20 rounded-sm hover:shadow-2xl transition duration-300 backdrop-blur-xl backdrop-filter">
                                <h3 className="text-gray-50 group-hover:text-emerald-400 font-bold text-md transition-all duration-300">
                                    Telegram Bot
                                </h3>
                                <p className="text-gray-300 text-[10px]">
                                    I can help you to create a telegram bot.
                                </p>
                                <a
                                    href="#"
                                    className="block text-gray-100 font-medium text-[10px] decoration-clone font-fira tracking-widest underline underline-offset-4 mt-2"
                                >
                                    Projects
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                    <div className="w-11/12 md:w-1/2 font-fira flex flex-col justify-around">
                        <span className="text-gray-300 text-sm my-14 block text-left">
                            Introduce
                        </span>
                        <h1 className="text-2xl lg:text-4xl my-4 font-fira font-thin text-white text-left">
                            Hello, i'm Asmin
                        </h1>
                        <h2 className="text-gray-300 text-lg lg:text-2xl font-fira font-thin text-left">
                            Every project is a new challenge for me.
                        </h2>
                        <p className="my-8 leading-loose text-gray-300 text-xs font-fira">
                            Since beggining my journey intered in design and
                            development, i am so passionate about it. I love to
                            create beautiful and modern websites. I have a lot
                            of experience in web development and design. I am a
                            hard worker and always ready to learn new things. I
                            am a fast learner and i am always ready to work with
                            you.
                        </p>
                        <div className="flex justify-start items-center gap-10">
                            <span className="flex gap-3 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                                        className="fill-white"
                                    />
                                </svg>
                                <a
                                    href="https://github.com/asmindev"
                                    target="_blank"
                                    className="text-gray-50 hover:text-emerald-400"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>
                            </span>
                            {/* twitter */}
                            <span className="flex gap-3 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                                        className="fill-white"
                                    />
                                </svg>
                                <a
                                    href="https://twitter.com/iniasmin_"
                                    target="_blank"
                                    className="text-gray-50 hover:text-emerald-400"
                                    rel="noreferrer"
                                >
                                    Twitter
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
