import React from 'react'
import About_us  from "../assets/about_us.jpg";

export default function AboutUs() {
    return (
        <div className='m-8'>
            <h1 className='text-center text-7xl font-bold'>About Us</h1>
            <h3 className='text-center m-4 text-xl'>Empowering Communities Through Technology and Collaboration</h3>
            <div className='sm:flex'>
                <img src={About_us} alt="" width="100%" height="100%"></img>
                <p className='p-5 text-justify text-2xl'>PaniSanket uses technology and community
                    engagement to address water scarcity and promote
                    sustainable water management. The platform allows
                    real-time issue reporting, water cut notifications,
                    and transparent consumption summaries. Founded
                    by a diverse team, PaniSanket aims to revolutionize
                    water resource management through collaboration
                    and innovation for a water-rich future.</p>
            </div>
        </div>
    )
}
