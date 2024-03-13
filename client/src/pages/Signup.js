import SignupForm from '../components/SignupForm'
import SignupContent from '../components/SignupContent'
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const navigate = useNavigate();
  document.body.style.overflow = "hidden";
  
  useEffect(()=>{
    if(localStorage.getItem('PaniSanket-user')){
      navigate("/home")
    }
  })
  
  return (
    <>
      <div className='flex justify-evenly items-center '>
        <div className="w-[50vw]">
          <SignupForm />
        </div>
        <div className="w-[50vw] bg-[#0cb097] rounded-bl-[100%] ">
          <SignupContent />
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default Signup
