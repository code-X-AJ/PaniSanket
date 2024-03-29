import React from 'react'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import Scroller from '../components/Scroller'
import Reports from '../components/Reports'
import ContactUs from '../components/ContactUs'

export default function Reporting() {
    return (
        <div>
            <Navbar />

            <Reports/>

            <AboutUs />

            <ContactUs />
            
            <Scroller />
        </div>
    )
}
