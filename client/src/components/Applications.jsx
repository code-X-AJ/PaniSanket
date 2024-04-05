import React from 'react'
import kaori from "../assets/kaori.png";

function Applications() {
  return (
    <div>
      <h2 className="uppercase text-blue-500 font-bold text-lg">Applications</h2>
      <div className="flex gap-6 justify-center my-10">
          <div className="">
            <img src={kaori} className='border-[20px] border-blue-200 rounded-md w-[350px] m-auto my-4' alt="" />
            <h3 className='uppercase text-center text-lg tracking-wide my-3'>Water Supply Interruptions</h3>
            <p className='text-center'>Stay informed about scheduled and unscheduled water supply interruptions. Our platform ensures residents and businesses can prepare effectively, with features including reporting, water cut notifications, and emergency management support.</p>
          </div>
          <div className="">
            <img src={kaori} className='border-[20px] border-blue-200 rounded-md w-[350px] m-auto my-4' alt="" />
            <h3 className='uppercase text-center text-lg tracking-wide my-3'>Emergency Water Management</h3>
            <p className='text-center'>Facilitate swift communication and response during water-related emergencies. Our system ensures affected communities receive essential support and guidance, with features including reporting, water cut notifications, and real-time emergency updates.</p>
          </div>
          <div className="">
            <img src={kaori} className='border-[20px] border-blue-200 rounded-md w-[350px] m-auto my-4' alt="" />
            <h3 className='uppercase text-center text-lg tracking-wide my-3'>Sustainable Water Usage</h3>
            <p className='text-center'>Empower communities with insights into water consumption patterns. Through detailed monthly reports, we promote responsible water usage, conservation efforts, and the cultivation of sustainable water management practices.</p>
          </div>
      </div>
      
    </div>
  )
}

export default Applications
