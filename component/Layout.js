import React from 'react'
import Head from 'next/Head'

export default function Layout({ title, children }) {
    return (
<<<<<<< HEAD
        <div className="bg-gray-400">
=======
        <div className='background'>
>>>>>>> e51c6e5 (fixed build script. changed color theme)
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=" pt-8 min-h-screen">
                {children}
            </main>
<<<<<<< HEAD
        </div>
    )
}
=======
            <style jsx>{`
        .background {
            background-color: #343e46;
            padding:0px 50px 50px 50px;
        }
      `}</style>
        </div>
    )
}

>>>>>>> e51c6e5 (fixed build script. changed color theme)
