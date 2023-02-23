import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Jumbotron from '@/components/Jumbotron'
import Introduces from '@/components/Introduces'
import MobileNav from '@/components/Mobile-Nav'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'

export default function Index() {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        // use dom to listen to resize event
        window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        })
        window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
        return () => {
            window.removeEventListener('resize', () => {
                if (window.innerWidth < 768) {
                    setIsMobile(true)
                } else {
                    setIsMobile(false)
                }
            })
        }
    }, [])
    return (
        <>
            {isMobile ? <MobileNav /> : <Navbar />}
            <Jumbotron />
            <Introduces />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}
