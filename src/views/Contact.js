import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Contact() {
  const [success, setSuccess] = useState(false)
  const [captcha, setCaptcha] = useState('')
  const onSubmit = async (e) => {
    e.preventDefault()
    if (!captcha) {
      toast.warn('Please verify that you are not a robot.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return
    }
    const form = e.target
    try {
      const response = await emailjs.sendForm(
        'service_2qc93pn',
        'template_8klonnk',
        form,
        'g6Za6QDbwJ9ufQFAt'
      )
      toast.success('Email Sent!', {
        position: 'top-center',
        autoClose: 5000,
        closeOnClick: true,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      console.log(response)
      setSuccess(true)
    } catch (error) {
      toast.error(error.text, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setSuccess(false)
    }
  }
  const onChange = (value) => {
    if (value) {
      console.log(success)
      setCaptcha(value)
    }
    console.log('Captcha value:', captcha)
  }

  return (
    <div className="bg-slate-700 py-4">
      <div className="container mx-auto px-4">
        <div className="w-full">
          <h3 className="uppercase tracking-[0.5em] font-medium">
            Get in touch
          </h3>
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
                  <td className="flex gap-2">
                    <span className="flex items-center text-white">
                      <ion-icon name="mail-outline" />
                    </span>
                    Email
                  </td>
                  <td>Asminmin477@gmail.com</td>
                </tr>
                <tr>
                  <td className="flex gap-2">
                    <span className="flex items-center text-white">
                      <ion-icon name="call-outline" />
                    </span>
                    Phone
                  </td>
                  <td>+62 81242873775</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full lg:w-1/2 lg:px-2 mt-6 lg:mt-0">
            <div className="w-full">
              <h2 className="font-semibold">Contact Form</h2>
            </div>
            <form onSubmit={onSubmit} className="w-full max-w-lg my-6">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-0 md:pr-2">
                  <label
                    className="block uppercase tracking-wide text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Name
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-first-name"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-0 md:pr-2">
                  <label
                    className="block uppercase tracking-wide text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-first-name"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="w-full mt-4 md:px-0">
                  <label
                    className="block uppercase tracking-wide text-xs font-bold mb-2"
                    htmlFor="messages"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="messages"
                    type="text"
                    placeholder="Message"
                  />
                </div>
                <div className="w-full mt-4 md:px-0 flex flex-col-reverse md:flex-row gap-2">
                  <button
                    type="submit"
                    className="px-5 w-1/4 py-2 border rounded focus:bg-white focus:text-gray-800 transition-all duration-300"
                  >
                    Submit
                  </button>
                  <div className="max-full">
                    <ToastContainer />
                    <ReCAPTCHA
                      className="w-full"
                      sitekey="6Ld7Y4ggAAAAAHbd-Nw12x6mcosm9EVxZG2ncXWA"
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
