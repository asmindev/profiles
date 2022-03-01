import React, { useState } from 'react'
import { ViewGridIcon } from '@heroicons/react/outline'
import { ViewGridIcon as ViewGridIconSolid } from '@heroicons/react/solid'
import Home from './views/Home-Mo'
import About from './views/About'
import Skill from './views/Skill'

function App() {
  const [isDark, setIsDark] = useState(false)
  const themeToggle = () => {
    const html = document.querySelector('html').classList
    if (html.contains('dark')) {
      setIsDark(!isDark)
      html.remove('dark')
    } else {
      html.add('dark')
      setIsDark(!isDark)
    }
  }
  return (
    <div className="w-full flex font-popins">
      <div className="w-full">
        <button onClick={themeToggle} type="button" className="fixed z-50 m-4">
          { isDark ? <ViewGridIconSolid className="w-7" /> : <ViewGridIcon className="w-7" /> }
        </button>
        <div className="w-full h-screen">
          <Home />
        </div>
        <div id="about" className="w-full h-screen md:h-auto">
          <About />
        </div>
        <div id="skill" className="w-full h-screen md:h-auto">
          <Skill />
        </div>
      </div>
    </div>
  )
}
export default App
