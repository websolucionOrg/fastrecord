import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({titlePage, children, styleHeader}) => {
  return (
    <>
      <Head>
            <title> {titlePage ? titlePage + " - Fast Record":"Fast Record"}  </title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            
      <Script defer src='https://code.jquery.com/jquery-3.6.4.js' ></Script>
      <Script src='/js/main.js' ></Script>
      </Head>
      <Header style={styleHeader ? "normal": ""} />
      <main> {children} </main>
      <Footer />

    </>
  )
}

export default Layout
