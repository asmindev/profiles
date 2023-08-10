import React from 'react'
// import Navbar from '@/components/Navbar'
import Jumbotron from '@/components/Jumbotron'
import Introduces from '@/components/Introduces'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'

export default function Home() {
    return (
        <div className="bg-zinc-800">
            <Jumbotron />
            <Introduces />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}
