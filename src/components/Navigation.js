// Hambuger Menu
import React, { useState } from 'react'
import { ViewGridIcon } from '@heroicons/react/outline'
import {
  ViewGridIcon as ViewGridIconSolid,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/solid'
import { Link } from 'react-scroll'

export default function Navigation() {
  const urls = [
    {
      id: 1,
      name: 'Home',
      path: 'home',
    },
    {
      id: 2,
      name: 'About',
      path: 'about',
    },
    {
      id: 3,
      name: 'Skill',
      path: 'skill',
    },
  ]
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const theme = () => {
    const root = document.querySelector('html')
    root.classList.toggle('dark')
    setIsDark(!isDark)
  }
  return (
    <div
      className="w-full h-full text-slate-700 font-popins bg-white/50 backdrop-blur-lg dark:bg-gray-800/50 dark:text-gray-50 smooth"
    >
      <div className="flex p-4 h-full items-center justify-between relative z-[99999] lg:w-10/12 lg:pr-4">
        <div className="logo">
          <Link
            to="home"
            spy
            smooth
            duration={700}
            className="font-bold text-xl"
          >
            <h1 className="font-black">Zett</h1>
          </Link>
        </div>
        <div className="flex items-center justify-end gap-4 lg:relative z-[99999]">
          <button type="button" className="w-6 h-6 lg:mr-4 relative" onClick={theme}>
            <SunIcon className={`${isDark ? 'opacity-0 rotate-45' : 'delay-100 rotate-0'} text-gray-800 duration-200 transition-all absolute top-0`} />
            <MoonIcon className={`${isDark ? 'delay-100 rotate-0' : 'rotate-45 opacity-0'} text-white duration-100 transition-all absolute top-0`} />
          </button>
          <button
            className="w-6 h-6 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            id="toggle"
          >
            {isOpen ? <ViewGridIconSolid /> : <ViewGridIcon />}
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen
            ? 'scale-100 opacity-100'
            : 'scale-0 ease-in-out opacity-0 lg:scale-100 lg:opacity-100'
        } mt-1 ml-2 absolute py-4 px-6 bg-white/80 backdrop-blur-xl rounded-2xl w-1/2 z-50 transition-all duration-300 shadow lg:shadow-none lg:top-1 lg:right-4 lg:w-max lg:p-0 lg:bg-trasnparent dark:bg-gray-800/80 smooth`}
      >
        <ul className="flex w-full justify-end flex-col lg:flex-row gap-[5px] lg:gap-10">
          {urls.map((url) => (
            <li key={url.id}>
              <Link
                onClick={() => setIsOpen(false)}
                to={url.path}
                activeClass="text-teal-500 border-l-2 lg:border-b-2 border-teal-500"
                spy
                smooth
                offset={-30}
                duration={700}
                className="text-gray-800 py-1 px-2 w-full block lg:border-none hover:cursor-pointer dark:text-gray-50"
              >
                {url.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
