import React from 'react'

export default function Contact () {
  return (
    <div className="bg-slate-700 py-4">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <h3 className="uppercase tracking-[0.5em] font-medium">Get in touch</h3>
          <h1 className="py-4 text-3xl font-bold text-white mb-6">
            Let's build something together.
          </h1>
        </div>
        <div className="flex flex-col flex-wrap lg:flex-row">
          <div className="w-full lg:w-1/2 lg:px-2">
            <div className="w-full">
              <h2 className="font-semibold">Contact Info</h2>
            </div>
            <table className="table-auto w-full mt-7">
              <tbody className="text-gray-200">
                <tr>
                  <td className="flex gap-2"> <span className="flex items-center text-white"><ion-icon name="mail-outline" /></span>Email</td>
                  <td>Asminmin477@gmail.com</td>
                </tr>
                <tr>
                  <td className="flex gap-2"> <span className="flex items-center text-white"><ion-icon name="call-outline" /></span>Phone</td>
                  <td>+62 81242873775</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full lg:w-1/2 lg:px-2 mt-6 lg:mt-0">
            <div className="w-full">
              <h2 className="font-semibold">Contact Form</h2>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-lg my-6">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-0 md:pr-2">
                  <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Name
                  </label>
                  <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Name" />
                </div>
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-0 md:pr-2">
                  <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Email
                  </label>
                  <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="email" placeholder="Email" />
                </div>
                <div className="w-full mt-4 md:px-0">
                  <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="messages">
                    Message
                  </label>
                  <textarea required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="messages" type="text" placeholder="Message" />
                </div>
                <div className="w-full mt-4 md:px-0">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
