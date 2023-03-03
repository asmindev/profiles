/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function Counter({ value }) {
    const counterVariants = {
        hidden: {
            opacity: 0,
            y: '-100%',
        },
        visible: {
            opacity: 1,
            y: '0%',
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
            },
        },
        exit: {
            opacity: 0,
            y: '100%',
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
            },
        },
    }

    const digits = value
        .toString()
        .split('')
        .map((digit, index) => (
            <motion.div
                key={`${digit}-${index}`}
                variants={counterVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-4xl lg:text-8xl font-black"
            >
                {value < 10 ? `0${digit}` : digit}
            </motion.div>
        ))

    return digits
}

function Countdown({ targetDate }) {
    const [remainingTime, setRemainingTime] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(targetDate - new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [targetDate])

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((remainingTime / 1000 / 60) % 60)
    const seconds = Math.floor((remainingTime / 1000) % 60)

    const countdownVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
    }

    return (
        <AnimatePresence exitBeforeEnter>
            <div className="w-full h-screen">
                <motion.div
                    variants={countdownVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full h-full flex flex-col items-center justify-center gap-8"
                >
                    <h1 className="uppercase text-xl lg:text-6xl font-bold text-center text-gray-700">
                        Ramadhan 1442 H
                    </h1>

                    <div className="w-fit h-fit flex items-center justify-center gap-8">
                        <div className="w-fit flex flex-col items-center text-gray-700">
                            <div className="w-full flex flex-row items-center justify-center overflow-hidden">
                                <Counter value={days} />
                            </div>
                            <span>Hari</span>
                        </div>
                        <div className="w-fit flex flex-col items-center text-gray-700">
                            <div className="w-full flex flex-row items-center justify-center overflow-hidden">
                                <Counter value={hours} />
                            </div>
                            <span>jam</span>
                        </div>
                        <div className="w-fit flex flex-col items-center text-gray-700">
                            <div className="w-full flex flex-row items-center justify-center overflow-hidden">
                                <Counter value={minutes} />
                            </div>
                            <span>Menit</span>
                        </div>
                        <div className="w-fit flex flex-col items-center text-gray-700">
                            <div className="w-full flex flex-row items-center justify-center overflow-hidden">
                                <Counter value={seconds} />
                            </div>
                            <span> Detik </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default Countdown
