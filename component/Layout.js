import React from 'react'
import Head from 'next/Head'

export default function Layout({ title, children }) {
    return (
        <div className="bg-gray-400">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=" pt-8 min-h-screen">
                {children}
            </main>
        </div>
    )
}
