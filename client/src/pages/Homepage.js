import React from 'react'
import ContactUs from '../components/ContactUs'
import Navbar from '../components/Navbar'
import FeatureBlock from '../components/Feature_block'
import FuturePlans from '../components/FuturePlans'
import AboutUs from '../components/AboutUs'
import Scroller from '../components/Scroller'
import Corousel from '../components/Corousel'

import slides from '../components/data/corouseldata'

function home() {
  return (
    <>
      <Navbar />

      <Corousel data={slides} />

      <FeatureBlock />

      <FuturePlans />

      <AboutUs />
      <ContactUs /> 
  

      <Scroller />
    </>
  )
}

export default home
