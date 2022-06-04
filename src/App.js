import React from 'react'
import Navigation from './components/Navigation'
import Home from './views/Home-Mo'
import About from './views/About'
import Skill from './views/Skill'
import Footer from './views/Footer'
import Projects from './views/Projects'

function App() {
  return (
    <div className="w-full flex font-popins overflow-hidden">
      <div className="w-full">
        <div className="w-full h-12 fixed z-10">
          <Navigation />
        </div>
        <div className="px-4 lg:px-0">
          <div id="home" className="w-full h-screen">
            <Home />
          </div>
          <div id="about" className="pt-2 w-full mt-16">
            <About />
          </div>
          <div id="skill" className="pt-4 w-full mt-40">
            <Skill />
          </div>
          <div id="projects" className="pt-4 w-full mt-40">
            <Projects />
          </div>
        </div>
        <div id="footer" className="w-full mt-24">
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default App
