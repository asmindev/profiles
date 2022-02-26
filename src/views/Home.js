import React from 'react'
import Image from '../assets/img/user.png'

function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative w-2/3 md:w-1/3 mx-auto">
        <div className="absolute -left-4 w-44 h-44 bg-yellow-400 rounded-full blur-xl opacity-70 mix-blend-multiply animate-blob animations-delay-2000" />
        <div className="absolute left-16 top-4 w-44 h-44 bg-purple-400 rounded-full  blur-xl opacity-70 mix-blend-multiply animate-blob animations-delay-4000" />
        <div className="absolute -right-4 w-44 h-44 bg-rose-400 rounded-full  blur-xl opacity-70 mix-blend-multiply animate-blob animations-delay-2000" />
        <div className="-top-14 bg-white/60 filter backdrop-blur-sm border border-gray-200 w-full rounded shadow relative text-center overflow-hidden">
          <div className="text-left text-4xl text-slate-800">
            <img className="w-full" src={Image} alt="my profile" />
          </div>
          <div className="mt-2 p-2 text-left text-base">
            <p className="text-slate-700">
              Hi, wellcome to my site. I am
              <a className="text-indigo-500" href="https://instagram.com/iniasmin_"> Asmin</a>
              , front end developer.
            </p>
          </div>
          <div className="mt-2 w-full bg-indigo-500 py-2">
            <a className="w-full h-full" href="https://github.com/asmindev" target="_blank" rel="noreferrer"><p className="text-gray-200 text-base">See my work</p></a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
