import React from 'react'
// eslint-disable-next-line object-curly-newline
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" className="scroll-smooth">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&family=Poppins:wght@400;800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="bg-zinc-800">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
