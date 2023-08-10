'use client'

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
            toast.success('Email Sent, Thank you for contacting me!', {
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
            // clear form
            form.reset()
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
    }
    const contacts = [
        {
            id: 1,
            name: 'Email',
            value: 'Asminmin477@gmail.com',
            icon: 'mail-outline',
        },
        {
            id: 4,
            name: 'Address',
            value: 'Baubau, Sulawesi Tenggara',
            icon: 'location-outline',
        },
    ]

    return (
        <div id="contact" className="w-full container mx-auto lg:w-9/12 my-32">
            <div className="container mx-auto px-4">
                <div className="w-full">
                    <h3 className="uppercase tracking-[0.5em] font-medium font-fira tetx-zinc-800 bg-emerald-400 w-fit px-4 py-1">
                        Get in touch
                    </h3>
                    <h1 className="py-4 text-3xl font-bold text-white mb-6 font-fira uppercase tracking-wider">
                        Let's build something together.
                    </h1>
                </div>
                <div className="flex flex-col flex-wrap lg:flex-row font-fira">
                    <div className="w-full lg:w-1/2 lg:px-2">
                        <div className="w-full">
                            <h2 className="font-thin text-gray-50">
                                Contact Info
                            </h2>
                        </div>
                        <table className="table-auto w-full mt-7">
                            <tbody className="text-gray-200">
                                {contacts.map((contact) => (
                                    <tr key={contact.id}>
                                        <td className="flex gap-2">
                                            <span className="flex items-center text-white">
                                                <ion-icon name={contact.icon} />
                                            </span>
                                            {contact.name}
                                        </td>
                                        <td>{contact.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="w-full lg:w-1/2 lg:px-2 mt-6 lg:mt-0">
                        <div className="w-full">
                            <h2 className="font-thin text-gray-50">
                                Contact Form
                            </h2>
                        </div>
                        <form
                            onSubmit={onSubmit}
                            className="p-2 w-full max-w-lg my-6"
                        >
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-0 md:pr-2 text-gray-200">
                                    <label
                                        className="block uppercase tracking-wide text-xs mb-2 text-gray-50 font-thin"
                                        htmlFor="grid-first-name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        required
                                        className="outline-none w-full py-2 border-b border-gray-400 focus:outline-none focus:border-gray-50 bg-transparent smooth"
                                        id="grid-first-name"
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-0 md:pr-2">
                                    <label
                                        className="block uppercase tracking-wide text-xs mb-2 text-gray-50 font-thin"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        name="email"
                                        required
                                        className="outline-none w-full py-2 border-b border-gray-400 focus:outline-none focus:border-gray-50 bg-transparent smooth text-gray-200"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="w-full mt-4 md:px-0">
                                    <label
                                        className="block uppercase tracking-wide text-xs mb-2 text-gray-50 font-thin"
                                        htmlFor="messages"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        name="message"
                                        className="outline-none w-full py-2 border-b border-gray-400 focus:outline-none focus:border-gray-50 bg-transparent smooth text-gray-200"
                                        id="messages"
                                        type="text"
                                        placeholder="Message"
                                    />
                                </div>
                                <div className="w-full mt-4 md:px-0 flex flex-col-reverse md:flex-row gap-2 items-center justify-between">
                                    <button
                                        type="submit"
                                        className="bg-emerald-500 hover:bg-emerald-500 text-gray-800 font-thin py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
