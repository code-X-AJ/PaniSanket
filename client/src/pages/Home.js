import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Hero from '../components/Hero'
import Applications from '../components/Applications'
import AboutUs from '../components/AboutUs'
import Examples from '../components/Examples'
import Products from '../components/Products'
import Footer from '../components/Footer'

function Home() {
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(!localStorage.getItem('PaniSanket-user')){
      navigate("/login")
    }
  })
  
  return (
    <div>
      <div className="flex flex-col gap-24">

        <div className="">
          <Hero />
        </div>

        <div className="mx-[6%]">
          <Applications />
        </div>
        
        <div className="">
          <Products/>
        </div>

        <div className="">
          <Examples />
        </div>

        <div className="w-[85%] m-auto">
          <AboutUs />
        </div>

        <div className="">
          <Footer />
        </div>

      </div>

    </div>
  )
}

export default Home
