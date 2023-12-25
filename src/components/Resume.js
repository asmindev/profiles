'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { IconBag3, IconGraduate } from '@irsyadadl/paranoid'

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

export default function Resume() {
    return (
        <div className="w-11/12 lg:w-9/12 mx-auto lg:p-6 h-full">
            <div className="">
                <h1 className="text-3xl font-bold bg">Resume</h1>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="w-full">
                    <motion.div
                        variants={stagger}
                        initial="initial"
                        animate="animate"
                        className="relative flex flex-col gap-4 mt-8 before:absolute before:top-8 before:left-[11px] before:content-[''] before:block before:h-full before:w-[2px] before:bg-zinc-300 dark:before:bg-zinc-700"
                    >
                        <motion.span
                            variants={fadeInUp}
                            className="flex gap-2 text-gray-700 dark:text-zinc-100 mb-4"
                        >
                            <IconGraduate />
                            <h1 className="font-bold text-lg">Education</h1>
                        </motion.span>

                        <motion.div
                            variants={fadeInUp}
                            className="ml-8 relative before:absolute before:top-2 before:-left-[26px] before:border-2 before:border-gray-100 before:dark:border-zinc-800 before:content-[''] before:block before:w-3 before:h-3 before:bg-emerald-400 before:rounded-full after:animate-ping after:absolute after:content-[''] after:block after:w-3 after:h-3 after:bg-emerald-400 after:rounded-full after:top-2 after:-left-[26px]"
                        >
                            <div>
                                <h2 className="text-zinc-700 dark:text-zinc-200 font-medium">
                                    Haluoleo University
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    Informatics Engineering
                                </p>
                                <span className="text-gray-500 text-sm flex">
                                    2021-Now
                                    <p className="before:content-['-'] before:text-gray-500 before:mx-2 text-emerald-400">
                                        Ongoing
                                    </p>
                                </span>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="ml-8 relative before:absolute before:top-2 before:-left-[26px] before:border-2 before:border-gray-100 before:dark:border-zinc-800 before:content-[''] before:block before:w-3 before:h-3 before:bg-emerald-400 before:rounded-full"
                        >
                            <div>
                                <h2 className="text-zinc-700 dark:text-zinc-200 font-medium">
                                    Public Vocational High School 2 Baubau
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    Electronics Engineering
                                </p>
                                <span className="text-gray-500 text-sm flex">
                                    2016-2019
                                    <p className="before:content-['-'] before:text-gray-500 before:mx-2 italic text-emerald-400">
                                        Graduated
                                    </p>
                                </span>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="ml-8 relative before:absolute before:top-2 before:-left-[26px] before:border-2 before:border-gray-100 before:dark:border-zinc-800 before:content-[''] before:block before:w-3 before:h-3 before:bg-emerald-400 before:rounded-full"
                        >
                            <div>
                                <h2 className="text-zinc-700 dark:text-zinc-200 font-medium">
                                    Public Junior High School 11 Baubau
                                </h2>
                                <span className="text-gray-500 text-sm flex">
                                    2013-2016
                                    <p className="before:content-['-'] before:text-gray-500 before:mx-2 italic text-emerald-400">
                                        Graduated
                                    </p>
                                </span>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="ml-8 relative before:absolute before:top-2 before:-left-[26px] before:border-2 before:border-gray-100 before:dark:border-zinc-800 before:content-[''] before:block before:w-3 before:h-3 before:bg-emerald-400 before:rounded-full"
                        >
                            <div>
                                <h2 className="text-zinc-700 dark:text-zinc-200 font-medium">
                                    Public Elementary School 1 Baubau
                                </h2>
                                <span className="text-gray-500 text-sm flex">
                                    2007-2013
                                    <p className="before:content-['-'] before:text-gray-500 before:mx-2 italic text-emerald-400">
                                        Graduated
                                    </p>
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="w-full">
                    <motion.div
                        variants={stagger}
                        initial="initial"
                        animate="animate"
                        className="relative flex flex-col gap-4 mt-8 before:absolute before:top-8 before:left-[11px] before:content-[''] before:block before:h-full before:w-[2px] before:bg-zinc-300 dark:before:bg-zinc-700"
                    >
                        <motion.span
                            variants={fadeInUp}
                            className="flex gap-2 text-gray-700 dark:text-zinc-100 mb-4"
                        >
                            <IconBag3 />
                            <h1 className="font-bold text-lg">Experience</h1>
                        </motion.span>
                        <motion.div
                            variants={fadeInUp}
                            className="ml-8 relative before:absolute before:top-2 before:-left-[26px] before:border-2 before:border-gray-100 before:dark:border-zinc-800 before:content-[''] before:block before:w-3 before:h-3 before:bg-emerald-400 before:rounded-full after:animate-ping after:absolute after:content-[''] after:block after:w-3 after:h-3 after:bg-emerald-400 after:rounded-full after:top-2 after:-left-[26px]"
                        >
                            <div>
                                <h2 className="text-zinc-700 dark:text-zinc-200 font-medium">
                                    Freelancer Fullstack Web
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    Work with Javascript, Python, PHP and
                                    framework like React, Next, Laravel,
                                    Tailwind and database like MongoDB, MySQL
                                </p>
                                <span className="text-gray-500 text-sm flex">
                                    2021-Now
                                    <p className="before:content-['-'] before:text-gray-500 before:mx-2 text-emerald-400">
                                        Ongoing
                                    </p>
                                </span>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="ml-8 relative before:absolute before:top-2 before:-left-[26px] before:border-2 before:border-gray-100 before:dark:border-zinc-800 before:content-[''] before:block before:w-3 before:h-3 before:bg-emerald-400 before:rounded-full"
                        >
                            <div>
                                <h2 className="text-zinc-700 dark:text-zinc-200 font-medium">
                                    Konda Satu
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    Building Web Application with Express and
                                    MongoDB
                                </p>
                                <span className="text-gray-500 text-sm flex">
                                    Desember, 2022
                                </span>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="ml-8 relative before:absolute before:top-2 before:-left-[26px] before:border-2 before:border-gray-100 before:dark:border-zinc-800 before:content-[''] before:block before:w-3 before:h-3 before:bg-emerald-400 before:rounded-full"
                        >
                            <div>
                                <h2 className="text-zinc-700 dark:text-zinc-200 font-medium">
                                    Listy Amal
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    AC Technician
                                </p>
                                <span className="text-gray-500 text-sm flex">
                                    February, 2020 - September, 2020
                                </span>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="ml-8 relative before:absolute before:top-2 before:-left-[26px] before:border-2 before:border-gray-100 before:dark:border-zinc-800 before:content-[''] before:block before:w-3 before:h-3 before:bg-emerald-400 before:rounded-full"
                        >
                            <div>
                                <h2 className="text-zinc-700 dark:text-zinc-200 font-medium">
                                    Bravo Hotel Baubau
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    Housekeeping
                                </p>
                                <span className="text-gray-500 text-sm flex">
                                    August, 2019 - February, 2020
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
