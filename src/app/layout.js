import React from 'react'
import '@/styles/globals.css'

export const metadata = {
    title: 'Asmin portfolio',
    description: 'Web profile of Asmin',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className="bg-gray-100 text-zinc-800 dark:bg-zinc-800 dark:text-gray-50">
                {children}
            </body>
        </html>
    )
}
