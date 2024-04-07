import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signupRoute } from "../utils/APIRoutes";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignupForm() {
  const secretKey = "PaniSanket-user";
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "name",
    username: "username",
    email: "email",
    phone: "phone",
    password: "password",
  });

  const toastOptions = {
    theme: "light",
    position: "bottom-right",
    pauseOnHover: true,
    autoClose: 5000,
    draggable: true,
    transition: Slide,
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { name, username, password, email, phone } = values;
      const { data } = await axios.post(signupRoute, {
        name,
        username,
        password,
        email,
        phone
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
        return false;
      }
      if (data.status === true) {
        console.log(data.user);
        localStorage.setItem(secretKey, JSON.stringify(data.user));
        navigate("/");
      }
    }
  };

  const handleValidation = () => {
    const { name, username, password, email, phone } = values;
    if (username.length <= 2 || username.length > 10) {
      toast.error(
        "username should be more than 2 characters and less than 10 characters",
        toastOptions
      );
      return false;
    }
    if (name.length <= 1 || name.length > 20) {
      toast.error(
        "name should be more than 1 characters and less than 20 characters",
        toastOptions
      );
      return false;
    }
    if (password.length <= 3 || password.length > 20) {
      toast.error(
        "password should be more than 3 characters and less than 20 characters",
        toastOptions
      );
      return false;
    } else if (phone.length !== 10) {
      toast.error("Phone Number should be of 10 digit", toastOptions);
      return false;
    } else if (email.length === "") {
      toast.error("email should not be blank", toastOptions);
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-4xl font-bold">Sign up</h1>
      <form
        method="post"
        className="flex flex-col gap-3 w-full max-w-[310px]"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="bg-[#f0f0f0] flex items-center py-2.5 rounded hover:bg-[#e7e7e7] ease-in-out ">
          <i className="fas fa-user pl-5" htmlFor="name"></i>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            type="text"
            className="bg-inherit ml-4 grow w-[0] outline-[0] "
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="bg-[#f0f0f0] flex items-center py-2.5 rounded hover:bg-[#e7e7e7]  ease-in-out">
          <i className="fas fa-user pl-5 " htmlFor="username"></i>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            type="text"
            className="bg-inherit ml-4 grow w-[0] outline-[0]"
            placeholder="Username"
            name="username"
          />
        </div>
        <div className="bg-[#f0f0f0] flex items-center py-2.5 rounded hover:bg-[#e7e7e7]  ease-in-out">
          <i className="pl-5">
            <MdEmail />
          </i>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            type="email"
            className="bg-inherit ml-4 grow w-[0] outline-[0]"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="bg-[#f0f0f0] flex items-center py-2.5 rounded hover:bg-[#e7e7e7]  ease-in-out">
          <i className="pl-5 " htmlFor="fname">
            <FaPhoneAlt />
          </i>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            type="tel"
            className="bg-inherit ml-4 grow w-[0] outline-[0]"
            placeholder="Phone"
            name="phone"
          />
        </div>
        <div className="bg-[#f0f0f0] flex items-center py-2.5 rounded hover:bg-[#e7e7e7] ease-in-out">
          <i className="pl-5 " htmlFor="fname">
            <RiLockPasswordFill />
          </i>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            type="password"
            className="bg-inherit ml-4 grow w-[0] outline-[0]"
            placeholder="Password"
            name="password"
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
          <a href="/" className="border-2 p-2 rounded-[50%] flex justify-center items-center h-[46px] w-[46px] border-slate-500 hover:cursor-pointer hover:bg-slate-400 ease-out duration-300">
            <i className="fab fa-facebook-f"> </i>
          </a>
          <a href="http://localhost:5000/api/auth/google" className="border-2 p-2 rounded-[50%] flex justify-center items-center h-[46px] w-[46px] border-slate-500 hover:cursor-pointer hover:bg-slate-400 ease-out duration-300">
            <i className="fab fa-google"> </i>
          </a>
          <a href="/" className="border-2 p-2 rounded-[50%] flex justify-center items-center h-[46px] w-[46px] border-slate-500 hover:cursor-pointer hover:bg-slate-400 ease-out duration-300">
            <i className="fab fa-linkedin-in"> </i>
          </a>
          <a href="/" className="border-2 p-2 rounded-[50%] flex justify-center items-center h-[46px] w-[46px] border-slate-500 hover:cursor-pointer hover:bg-slate-400 ease-out duration-300">
            <i className="fab fa-twitter"> </i>
          </a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignupForm;
