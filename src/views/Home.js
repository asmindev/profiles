import React from 'react'
// import bgImage from '../assets/img/bg-image.webp'
import Fade from 'react-reveal/Fade'

export default function Home() {
  return (
    <section className="w-full h-full relative">
      <div className="relative w-full bg-cover bg-bottom h-[100vh] bg-[url(https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)] bg-no-repeat">
        <div className="absolute w-full h-full bg-gradient-to-t from-slate-800 via-slate-800/50 opacity-75" />
      </div>
      <div className="absolute top-0 w-full h-full text-white flex items-center justify-center flex-col">
        <div className="w-8/12">
          <div>
            <Fade top>
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, Welcome
              </h1>
            </Fade>
          </div>
          <div>
            <Fade bottom>
              <p className="text-gray-300">I'm Asmin. Front-end Developer.</p>
            </Fade>
          </div>
        </div>
        <div className="w-8/12 my-8 flex gap-4 items-center">
          <Fade left>
            <a
              href="#contact"
              className="px-5 py-2 border hover:bg-white hover:text-gray-800 transition-all duration-300"
            >
              Contact
            </a>
          </Fade>
          <Fade bottom>
            <a
              href="https://github.com/asmindev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl flex items-center"
            >
              <ion-icon name="logo-github" />
            </a>
          </Fade>
          <Fade right>
            <a
              href="https://twitter.com/iniasmin_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl flex items-center"
            >
              <ion-icon name="logo-twitter" />
            </a>
          </Fade>
        </div>
      </div>
    </section>
  )
}
