'use client'

/* eslint-disable max-len */
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, buttons } from '@/utils/project'

export default function Projects() {
    const [selected, setSelected] = useState('all')
    const [filteredProjects, setFilteredProjects] = useState([])
    const [show, setShow] = useState(false)
    const filterHandler = (type) => {
        setSelected(type)
        if (type === 'all') {
            setFilteredProjects(projects)
            return
        }
        const filteredData = projects.filter((project) => project.type === type)
        setFilteredProjects(filteredData)
    }
    useEffect(() => {
        setFilteredProjects(projects)
        setShow(true)
        setSelected('all')
    }, [])

    return (
        <div id="projects" className="relative w-full my-32">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-t from-transparent to-white/30 dark:to-black/30 -z-10" />
            <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto lg:p-6 h-full ">
                <h1 className="font-bold text-3xl lg:text-4xl mt-24 font-fira">
                    Projects
                </h1>
                <h3 className="text-gray-500 dark:text-gray-300 mt-1 text-[10px] font-fira">
                    Some projects are listed below.
                </h3>
                <div className="w-full flex gap-2 mt-4">
                    {buttons.map((e) => (
                        <button
                            key={e.id}
                            type="button"
                            onClick={() => {
                                filterHandler(e.value)
                                setSelected(e.value)
                            }}
                            className={`text-gray-600 dark:text-gray-50 font-medium text-[10px] decoration-clone font-fira tracking-widest underline underline-offset-2 ${
                                selected === e.value && 'decoration-emerald-400'
                            }`}
                        >
                            {e.value}
                        </button>
                    ))}
                </div>
                <AnimatePresence layoutId>
                    {show && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full flex flex-col md:flex-row flex-wrap justify-start items-center mt-24"
                        >
                            {
                                // Map projects
                                filteredProjects.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        layoutId={project.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="w-11/12 md:w-1/2 lg:w-1/3 font-fira"
                                    >
                                        <div className="lg:w-10/12 h-full mx-auto md:mx-0 my-4 relative group">
                                            <div className="absolute top-0 left-0 bg-emerald-400 w-full h-full bg-transparent rounded-sm group-hover:bg-emerald-400 transition-all duration-500 group-hover:rotate-3 delay-75" />
                                            <div className="w-full p-6 group bg-gradient-to-tr from-white/[0.95] to-white/[0.8] dark:from-zinc-700/95 dark:to-zinc-700/90 rounded-sm group-hover:shadow-2xl group-hover:shadow-emerald-400/10 transition duration-300 backdrop-blur-3xl backdrop-filter dark:border-[0.1px border-emerald-400 group-hover:border-transparent">
                                                <h3 className="text-gray-700 dark:text-gray-50 group-hover:text-emerald-400 font-bold text-md transition-all duration-300">
                                                    {project.title}
                                                </h3>
                                                <p className="text-gray-500 dark:text-gray-300 text-[10px]">
                                                    {project.description}
                                                </p>
                                                <div className="w-full mt-2 flex gap-2 items-center h-full">
                                                    {project.tech?.map(
                                                        (tech) => (
                                                            <img
                                                                key={tech}
                                                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}`}
                                                                alt={tech}
                                                                className="w-4 h-4 grayscale group-hover:grayscale-0 transition-all duration-300"
                                                            />
                                                        )
                                                    )}
                                                </div>
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="block text-gray-100 font-medium text-[10px] decoration-clone font-fira tracking-widest underline underline-offset-2 mt-2"
                                                >
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="w-full flex justify-center items-center mt-12 relative">
                    <motion.a
                        href="https://github.com/asmindev"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-800 bg-emerald-400 px-3 py-1 hover:shadow-2xl hover:shadow-emerald-400/30 transition duration-300 rounded-sm"
                    >
                        View More
                    </motion.a>
                </div>
            </div>
        </div>
    )
}
