import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function LoginForm() {
  return (
<div className="flex flex-col gap-4 items-center ">
      <h1 className="text-4xl font-bold">Login</h1>
      <form method="post" className="flex flex-col gap-3 w-full max-w-[310px]  ">
        <div className="bg-[#f0f0f0] flex items-center py-2.5 rounded hover:bg-[#e7e7e7]  ease-in-out">
          <i className="fas fa-user pl-5 " htmlFor="fname"></i>
          <input
            type="text"
            className="bg-inherit ml-4 grow w-[0] outline-[0]"
            placeholder="Username"
          />
        </div>
        <div className="bg-[#f0f0f0] flex items-center py-2.5 rounded hover:bg-[#e7e7e7] ease-in-out">
          <i className="pl-5 " htmlFor="fname"><RiLockPasswordFill /></i>
          <input
            type="password"
            className="bg-inherit ml-4 grow w-[0] outline-[0]"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="bg-[#0cb097] m-auto uppercase w-[50%] text-white font-semibold px-3 py-2.5 rounded-lg hover:cursor-pointer hover:bg-[#23a490] hover:ease-in" 
        >
          Login
        </button>
      </form>

      <div className="flex flex-col items-center">
        <p className="mb-2">Or Login up with social platforms</p>
        <div className="flex gap-2 ">
          <a className="border-2 p-2 rounded-[50%] flex justify-center items-center h-[46px] w-[46px] border-slate-500 hover:cursor-pointer hover:bg-slate-400 ease-out duration-300">
            <i className="fab fa-facebook-f"> </i>
          </a>
          <a className="border-2 p-2 rounded-[50%] flex justify-center items-center h-[46px] w-[46px] border-slate-500 hover:cursor-pointer hover:bg-slate-400 ease-out duration-300">
            <i className="fab fa-google"> </i>
          </a>
          <a className="border-2 p-2 rounded-[50%] flex justify-center items-center h-[46px] w-[46px] border-slate-500 hover:cursor-pointer hover:bg-slate-400 ease-out duration-300">
            <i className="fab fa-linkedin-in"> </i>
          </a>
          <a className="border-2 p-2 rounded-[50%] flex justify-center items-center h-[46px] w-[46px] border-slate-500 hover:cursor-pointer hover:bg-slate-400 ease-out duration-300">
            <i className="fab fa-twitter"> </i>
          </a>
        </div>
      </div>
    </div>  )
}

export default LoginForm

/**
 * import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function SignupForm() {
  return (
    <div className="flex flex-col gap-4 items-center ">
      <h1 className="text-4xl font-bold">Sign up</h1>
      <form method="post" className="flex flex-col gap-3 w-full max-w-[310px]  ">
        <div className="bg-[#f0f0f0] flex items-center py-2.5 rounded hover:bg-[#e7e7e7] ease-in-out ">
          <i className="fas fa-user pl-5" htmlFor="fname"></i>
          <input
            type="text"
            className="bg-inherit ml-4 grow w-[0] outline-[0] "
            placeholder="Name"
          />
        </div>
        <div className="bg-[#f0f0f0] flex items-center py-2.5 rounded hover:bg-[#e7e7e7]  ease-in-out">
          <i className="fas fa-user pl-5 " htmlFor="fname"></i>
          <input
            type="text"
            className="bg-inherit ml-4 grow w-[0] outline-[0]"
            placeholder="Username"
          />
        </div>
        <div className="bg-[#f0f0f0] flex items-center py-2.5 rounded hover:bg-[#e7e7e7]  ease-in-out">
          <i className="pl-5"><MdEmail /></i>
          <input
            type="email"
            className="bg-inherit ml-4 grow w-[0] outline-[0]"
            placeholder="Email"
          />
        </div>
        <div className="bg-[#f0f0f0] flex items-center py-2.5 rounded hover:bg-[#e7e7e7]  ease-in-out">
          <i className="pl-5 " htmlFor="fname"><FaPhoneAlt /></i>
          <input
            type="phone"
            className="bg-inherit ml-4 grow w-[0] outline-[0]"
            placeholder="Phone"
          />
        </div>
        <div className="bg-[#f0f0f0] flex items-center py-2.5 rounded hover:bg-[#e7e7e7] ease-in-out">
          <i className="pl-5 " htmlFor="fname"><RiLockPasswordFill /></i>
          <input
            type="password"
            className="bg-inherit ml-4 grow w-[0] outline-[0]"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="bg-[#0cb097] m-auto uppercase w-[50%] text-white font-semibold px-3 py-2.5 rounded-lg hover:cursor-pointer hover:bg-[#23a490] hover:ease-in" 
        >
          Signup
        </button>
      </form>

      <div className="flex flex-col items-center">
        <p className="mb-2">Or Sign up with social platforms</p>
        <div className="flex gap-2 ">
          <a className="border-2 p-2 rounded-[50%] flex justify-center items-center h-[46px] w-[46px] border-slate-500 hover:cursor-pointer hover:bg-slate-400 ease-out duration-300">
            <i className="fab fa-facebook-f"> </i>
          </a>
          <a className="border-2 p-2 rounded-[50%] flex justify-center items-center h-[46px] w-[46px] border-slate-500 hover:cursor-pointer hover:bg-slate-400 ease-out duration-300">
            <i className="fab fa-google"> </i>
          </a>
          <a className="border-2 p-2 rounded-[50%] flex justify-center items-center h-[46px] w-[46px] border-slate-500 hover:cursor-pointer hover:bg-slate-400 ease-out duration-300">
            <i className="fab fa-linkedin-in"> </i>
          </a>
          <a className="border-2 p-2 rounded-[50%] flex justify-center items-center h-[46px] w-[46px] border-slate-500 hover:cursor-pointer hover:bg-slate-400 ease-out duration-300">
            <i className="fab fa-twitter"> </i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;

 */

