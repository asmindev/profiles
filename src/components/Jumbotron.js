'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
        <div className="w-full md:w-11/12 lg:w-9/12 mx-auto lg:p-6 min-h-[70vh] flex flex-col justify-center items-center font-fira">
            <div className="relative w-fit mt-32">
                <h1 className="font-black text-8xl uppercase">Welcome</h1>
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
                            className="my-12 w-fit bg-emerald-400 px-2 text-white font-fira"
                        >
                            Front-End Developer
                        </motion.h3>
                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl lg:text-6xl font-fira font-bold text-left"
                        >
                            Hi, I'm Asmin
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-justify text-gray-700 dark:text-gray-100 mt-4 lg:mt-8 font-fira leading-relaxed text-sm md:text-base"
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-8 fill-gray-300 hover:fill-emerald-400 transition-all duration-300"
                                >
                                    <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                variants={fadeInUp}
                                href="https://instagram.com/iniasmin_"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-8 fill-gray-300 hover:fill-emerald-400 transition-all duration-300"
                                >
                                    <path d="M5.88401 18.6531C5.58404 18.4523 5.32587 18.1972 5.0239 17.8366C4.91473 17.7062 4.47283 17.1521 4.55811 17.258C4.09533 16.6831 3.80296 16.4168 3.50156 16.3087C2.9817 16.1223 2.7114 15.5497 2.89784 15.0298C3.08428 14.51 3.65685 14.2397 4.17672 14.4261C4.92936 14.696 5.43847 15.1609 6.12425 16.0141C6.03025 15.8972 6.46364 16.4408 6.55731 16.5526C6.74784 16.7802 6.88732 16.918 6.99629 16.9909C7.20118 17.128 7.58451 17.1871 8.14709 17.1308C8.17065 16.7487 8.24136 16.378 8.34919 16.0355C5.38097 15.3101 3.70116 13.3949 3.70116 9.63947C3.70116 8.4006 4.0704 7.28368 4.75917 6.34756C4.5415 5.45368 4.57433 4.37259 5.06092 3.15611C5.1725 2.87715 5.40361 2.66314 5.69031 2.57328C5.77242 2.54949 5.81791 2.5389 5.89878 2.52648C6.70167 2.40319 7.83573 2.69681 9.31449 3.62311C10.181 3.41855 11.0885 3.31476 12.0012 3.31476C12.9129 3.31476 13.8196 3.41835 14.6854 3.62253C16.1619 2.68976 17.2986 2.39625 18.1072 2.52627C18.1919 2.53988 18.2645 2.55758 18.3249 2.57741C18.6059 2.66967 18.8316 2.88155 18.9414 3.15611C19.4279 4.37232 19.4608 5.45319 19.2433 6.34695C19.9342 7.28313 20.3012 8.39184 20.3012 9.63947C20.3012 13.3966 18.627 15.3046 15.6588 16.0318C15.7837 16.4467 15.8496 16.9103 15.8496 17.4118C15.8496 18.0763 15.8471 18.7108 15.8424 19.4223C15.8412 19.6124 15.8397 19.8156 15.8375 20.1279C16.2129 20.2107 16.5229 20.5074 16.6031 20.9086C16.7114 21.4502 16.3602 21.977 15.8186 22.0853C14.6794 22.3132 13.8353 21.5535 13.8353 20.5608C13.8353 20.4705 13.836 20.3414 13.8375 20.1142C13.8398 19.8012 13.8412 19.5987 13.8425 19.4092C13.8471 18.7017 13.8496 18.0714 13.8496 17.4118C13.8496 16.7145 13.6664 16.26 13.4237 16.0508C12.7627 15.481 13.0977 14.3971 13.965 14.2996C16.9314 13.9663 18.3012 12.8174 18.3012 9.63947C18.3012 8.68484 17.9893 7.89547 17.3881 7.23534C17.1301 6.95209 17.0567 6.54634 17.199 6.19062C17.3647 5.77639 17.4354 5.2336 17.2941 4.57678L17.2847 4.57944C16.7928 4.71861 16.1744 5.01956 15.4261 5.52826C15.182 5.69413 14.8772 5.74377 14.5932 5.66388C13.7729 5.43319 12.8913 5.31476 12.0012 5.31476C11.111 5.31476 10.2294 5.43319 9.40916 5.66388C9.12662 5.74335 8.82344 5.69468 8.57997 5.53077C7.8274 5.02414 7.2056 4.72355 6.71079 4.58352C6.56735 5.23672 6.63814 5.77758 6.80336 6.19062C6.94565 6.54634 6.87219 6.95209 6.61423 7.23534C6.01715 7.89096 5.70116 8.69352 5.70116 9.63947C5.70116 12.8114 7.07225 13.9681 10.023 14.2996C10.8883 14.3969 11.2246 15.4767 10.5675 16.048C10.3751 16.2153 10.1384 16.7799 10.1384 17.4118V20.5608C10.1384 21.5472 9.30356 22.2866 8.17878 22.0898C7.63476 21.9946 7.27093 21.4764 7.36613 20.9324C7.43827 20.5201 7.75331 20.2114 8.13841 20.1274V19.1379C7.22829 19.1991 6.47656 19.0496 5.88401 18.6531Z" />
                                </svg>
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
