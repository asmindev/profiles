/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const counterVariants = {
        hidden: {
            opacity: 0,
            y: '100%',
        },
        visible: {
            opacity: 1,
            y: '0%',
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
            },
        },
    }

    const digits = count
        .toString()
        .split('')
        .map((digit, index) => (
            <motion.div
                key={`${digit}-${index}`}
                variants={counterVariants}
                initial="hidden"
                animate="visible"
            >
                {digit}
            </motion.div>
        ))

    return <div>{digits}</div>
}

export default Counter
