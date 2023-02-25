import React from 'react'
import { motion } from 'framer-motion'

export default function Jumbotron() {
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

    return (
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto lg:p-6 h-[70vh] flex flex-col justify-center items-center">
            <div className="w-full flex flex-col lg:flex-row justify-between items-center">
                <motion.div
                    variants={stagger}
                    animate="animate"
                    initial="initial"
                    className="w-11/12 lg:w-1/2 flex flex-col md:justify-center md:items-center lg:items-start"
                >
                    <motion.h3
                        variants={fadeInUp}
                        className="w-fit bg-emerald-400 px-2 text-gray-800 font-fira my-14"
                    >
                        Front-End Developer
                    </motion.h3>
                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl lg:text-6xl font-fira font-bold text-white text-left"
                    >
                        Hi, I'm Asmin
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-gray-300 text-left mt-4 lg:mt-8 font-fira leading-relaxed text-sm md:text-base"
                    >
                        I love to create beautiful and functional web
                        applications. Show me your project and I'll make it look
                        awesome. I design and code beautifully simple things,
                        and i love what i do.
                    </motion.p>
                    <div className="flex gap-4 mt-16">
                        <motion.a
                            variants={fadeInUp}
                            href="#"
                            className="text-emerald-400 decoration-clone font-fira font-medium tracking-widest underline decoration-emerald-400 underline-offset-4"
                        >
                            Hire Me
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
