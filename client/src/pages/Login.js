import React from 'react'
import LoginContent from '../components/LoginContent'
import LoginForm from '../components/LoginForm'

function Login() {
  return (
    <div className='flex justify-evenly items-center overflow-y-hidden'>
      <div className="w-[50vw] bg-[#0cb097] rounded-br-[100%] ">
        <LoginContent />
      </div>
      <div className="w-[50vw]">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
