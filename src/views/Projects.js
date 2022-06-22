import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Projects() {
  return (
    <div className="w-full h-full p-4 container mx-auto">
      <div className="">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="border-b w-max pb-1">My recents project are listed below</p>
      </div>
      <div className="mt-4 w-full flex flex-col md:flex-row flex-wrap">
        <div className="w-full md:w-1/2 py-6 md:py-0 md:p-4">
          <div className="w-full flex flex-col lg:flex-row lg:gap-4">
            <div className="w-full overflow-hidden">
              <Fade bottom>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
                  alt="Random "
                />
              </Fade>
            </div>

            <div className="w-full mt-4 overflow-hidden">
              <Fade bottom>
                <h1 className="text-lg font-semibold">Quran App</h1>
                <p className="text-gray-200 text-sm font-montserrat">
                  This is a web app that I made to learn React. I used the API
                  from the Quran API to get the data of the Quran.
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 py-6 md:py-0 md:p-4">
          <div className="w-full flex flex-col lg:flex-row lg:gap-4">
            <div className="w-full overflow-hidden">
              <Fade bottom>
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Random "
                />
              </Fade>
            </div>

            <div className="w-full mt-4 overflow-hidden">
              <Fade bottom>
                <h1 className="text-lg font-semibold">Clone Web</h1>
                <p className="text-gray-200 text-sm font-montserrat">
                  Build a clone of a website using Html and Tailwind CSS.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
