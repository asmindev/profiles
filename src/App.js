import React, { useState } from 'react'
import { HomeIcon, ViewGridIcon } from '@heroicons/react/outline'
import { ViewGridIcon as ViewGridIconSolid } from '@heroicons/react/solid'
import Home from './views/Home-Mo'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="w-full flex overflow-hidden">
      <div
        className={`w-12 overflow-hidden bg-indigo-500 transition-all duration-300 ${
          isOpen ? 'ml-0' : '-ml-12'
        }`}
      >
        <div className="h-screen w-full text-white">
          <div className="w-full pt-24">
            <HomeIcon className="w-full px-2" />
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <button onClick={() => setIsOpen(!isOpen)} type="button">
          { isOpen ? <ViewGridIconSolid className="w-6 text-indigo-500" /> : <ViewGridIcon className="w-6" /> }
        </button>
        <Home />
      </div>
    </div>
  )
}
export default App
