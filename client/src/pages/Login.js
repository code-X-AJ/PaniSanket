import { useNavigate } from "react-router-dom";
import React,{ useEffect } from 'react'
import LoginContent from '../components/LoginContent'
import LoginForm from '../components/LoginForm'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  document.body.style.overflow = "hidden";
  
  // useEffect(()=>{
  //   if(localStorage.getItem('PaniSanket-user')){
  //     navigate("/home")
  //   }
  // },[])
  
  return (
    <div className='flex justify-evenly items-center overflow-y-hidden'>
      <div className="w-[50vw] bg-[#0cb097] rounded-br-[100%] ">
        <LoginContent />
      </div>
      <div className="w-[50vw]">
        <LoginForm />
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Login