import React from 'react'
import ContactUs from '../components/ContactUs'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import Scroller from '../components/Scroller'

function home() {
  return (
    <>
      <Navbar />
      <AboutUs/>
      <ContactUs />
      <Scroller/>
    </>
  )
}

export default home
