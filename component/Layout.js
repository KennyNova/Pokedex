import React from 'react'
import Head from 'next/Head'

export default function Layout({ title, children }) {
    return (
        <div className='background'>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=" pt-8 min-h-screen">
                {children}
            </main>
            <style jsx>{`
        .background {
            background-color: #343e46;
            padding:0px 50px 50px 50px;
        }
      `}</style>
        </div>
    )
}

