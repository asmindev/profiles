import React from 'react'
// import Navbar from '@/components/Navbar'
import Jumbotron from '@/components/Jumbotron'
import Introduces from '@/components/Introduces'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'

export default function Home() {
    return (
        <>
            <Jumbotron />
            <Introduces />
            <Resume />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}
