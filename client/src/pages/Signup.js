import SignupForm from '../components/SignupForm'
import SignupContent from '../components/SignupContent'
import React from 'react'

function Signup() {
  document.body.style.overflow = "hidden";

  return (
    <>
      <div className='flex justify-evenly items-center overflow-y-hidden'>
        <div className="w-[50vw]">
          <SignupForm />
        </div>
        <div className="w-[50vw] bg-[#0cb097] rounded-bl-[100%] ">
          <SignupContent />
        </div>
      </div>
    </>
  )
}

export default Signup
