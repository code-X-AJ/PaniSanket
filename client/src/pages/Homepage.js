import React from 'react'
import ContactUs from '../components/ContactUs'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import FuturePlans from '../components/FuturePlans'
import AboutUs from '../components/AboutUs'
import Scroller from '../components/Scroller'
import Corousel from '../components/Corousel'

import slides from '../components/data/corouseldata.json'

function home() {
  return (
    <>
      <Navbar />

      <Corousel data={slides}/>

      <Features orient={true} feature={1} />

      <Features orient={false} feature={2} />

      <Features orient={true} feature={3} />

      <FuturePlans />

      <AboutUs />

      <ContactUs />

      <Scroller />
    </>
  )
}

export default home
