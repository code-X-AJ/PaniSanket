import React from 'react'
import { useNavigate } from 'react-router-dom';

function LoginContent() {
  const navigate = useNavigate();
  const handleNavigation = ()=>{
    navigate("/signup")
  }  

  return (
    <div className="flex flex-col items-end ">
      <div className="gap-1 text-white flex flex-col items-center mt-16 mr-20">
        <h3 className="font-bold text-2xl">New here ?</h3>
        <p className="font-light text-md">
          Join Us Today and Unlock a World of Possibilites!
        </p>
        <button onClick={handleNavigation} className="border-white border-[2px] px-[35px] py-2 uppercase rounded text-xs mt-1 hover:bg-[#45e193]">
          Signin
        </button>
      </div>
        <img
          src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png"
          alt=""
          className="w-[530px] mr-20 pb-[80px] "
        />
    </div>
  )
}

export default LoginContent
