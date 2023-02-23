import React from 'react'
// eslint-disable-next-line object-curly-newline
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" className="scroll-smooth">
            <Head>
                <title>
                    Web Profile - Asmin | Front-End Web Developer using Next.js
                </title>
                <meta
                    name="description"
                    content="Hi, I'm Asmin, a Front-End Web Developer using Next.js. View my portfolio and learn more about my experience and skills in developing responsive and user-friendly websites."
                />
                <meta
                    name="keywords"
                    content="front-end developer, next.js, web development, responsive design, user experience, portfolio"
                />
                <meta name="author" content="Asmin" />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dph249ste/image/upload/v1677162346/asmindev-my-id-1024x768desktop-88d296_dtnzqc.jpg"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:url" content="https://asmindev.my.id" />
                <meta
                    property="og:title"
                    content="Web Profile - Asmin | Front-End Web Developer using Next.js"
                />
                <meta
                    property="og:description"
                    content="Hi, I'm Asmin, a Front-End Web Developer using Next.js. View my portfolio and learn more about my experience and skills in developing responsive and user-friendly websites."
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
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
