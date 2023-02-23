import React from 'react'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...pageProps} />
}
