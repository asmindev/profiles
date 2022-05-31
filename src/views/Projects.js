import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const fetchRepos = async (repos) => {
    const token = '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'
    const response = await axios.get(
      `https://api.github.com/repos/asmindev/${repos}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${token}`,
        },
      }
      // push to projects array
    )
    setProjects((oldProjects) => [...oldProjects, response.data])
    console.log(projects)
  }
  useEffect(() => {
    const repos = ['profiles', 'crud-contacts']
    repos.map((repo) => fetchRepos(repo))
  }, [])
  return (
    <div className="w-full lg:w-8/12 mx-auto flex flex-col justify-center">
      <div className="w-11/12 mx-auto my-4">
        <h1 className="text-3xl font-bold text-center mb-4">Projects</h1>
        <span>
          <p className="font-montserrat text-justify lg:text-center text-base mb-8">
            I have worked on a few projects, some of which are listed below.
            Click on the project to see the code on github.
          </p>
        </span>
      </div>
      <div className="projects w-full lg:flex flex-wrap justify-center lg:w-10/12">
        {projects
          && projects.map((project) => (
            <div key={project.id} className="py-2 px-3 lg:w-1/2">
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-xl overflow-hidden">
                  <div className="relative w-full h-72 object-fill">
                    <img src="https://api.pikwy.com/web/6296018381ebe86bf345e459.jpg" alt="project pic" className="w-full h-full absolute z-10 object-cover" />
                    <div className="w-full absolute h-full z-10 bg-gradient-to-t from-black to-transparent opacity-80" />
                    <div className="p-2 absolute z-10 bottom-4 text-gray-50">
                      <div className="flex flex-col">
                        <h3 className="first-letter:uppercase font-bold text-xl">
                          {project.name}
                        </h3>
                        <p className="text-sm font-light text-gray-300">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
      </div>
    </div>
  )
}
