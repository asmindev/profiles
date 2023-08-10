import React from 'react'
import '@/styles/globals.css'

export const metadata = {
    title: 'Asmin portfolio',
    description: 'Web profile of Asmin',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-zinc-800">{children}</body>
        </html>
    )
}
