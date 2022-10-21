import React from 'react'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name='description' content='Welcome to our Contact Form' />
        <link rel='canonical' href='/contact' />
      </Helmet>
      <h1>This is contact page</h1>
    </>
  )
}

export default Contact
