import React from 'react'
import Home from './views/Home'
import About from './views/About'
import Skill from './views/Skill'
import Footer from './views/Footer'
import Projects from './views/Projects'
import Contact from './views/Contact'
import Nav from './components/Nav'

function App() {
  return (
    <main className="text-gray-50 font-popins w-full">
      <Nav />
      <section id="home" className="w-full">
        <Home />
      </section>
      <section id="about" className="w-full">
        <About />
      </section>
      <section id="skill" className="w-full bg-gray-700">
        <Skill />
      </section>
      <section id="projects" className="w-full">
        <Projects />
      </section>
      <section id="contact" className="w-full">
        <Contact />
      </section>
      <section className="w-full">
        <Footer />
      </section>

    </main>
  )
}
export default App
