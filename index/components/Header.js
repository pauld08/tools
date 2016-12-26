
import React from 'react'
import Head from 'next/head'

export const Header = ({ title }) => (
  <Head>
    <title>{title || 'Toolkit'}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css"
      rel="stylesheet"
    />
    <link
      href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      rel="stylesheet"
    />
    <style>
      {`html, body, a {
        color: #00386C;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        -webkit-font-smoothing: antialiased;
        font-weight: 500;
      }`}
    </style>
  </Head>
)

export default Header
