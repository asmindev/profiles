import React from 'react'
import { Poppins } from 'next/font/google'

import '@/styles/globals.css'

export const metadata = {
    title: 'Asmin portfolio',
    description: 'Web profile of Asmin',
}
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700', '800'],
    display: 'swap',
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`dark scroll-smooth ${poppins.className}`}>
            <body
                className={`${poppins.className} bg-gray-100 text-zinc-800 dark:bg-zinc-800 dark:text-gray-50`}
            >
                {children}
            </body>
        </html>
    )
}
