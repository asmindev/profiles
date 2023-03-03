import React from 'react'
import Countdown from './CountDown'

export default function Index() {
    return (
        <div className="font-jakarta">
            <Countdown targetDate={new Date('2023-03-23')} />
        </div>
    )
}
