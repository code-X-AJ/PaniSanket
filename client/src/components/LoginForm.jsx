import { RiLockPasswordFill } from "react-icons/ri";
import { loginRoute } from "../utils/APIRoutes";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function LoginForm() {
  const navigate = useNavigate();
  const secretKey = "PaniSanket-user";

  const [values, setValues] = useState({
    username: "username",
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
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      console.log(data);
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
    const { username, password } = values;
    console.log(username, password);
    if (username.length <= 2 || username.length > 10) {
      toast.error(
        "username should be more than 2 characters and less than 10 characters",
        toastOptions
      );
      return false;
    } else if (password.length <= 3 || password.length > 20) {
      toast.error(
        "password should be more than 3 characters and less than 20 characters",
        toastOptions
      );
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center ">
      <h1 className="text-4xl font-bold">Login</h1>
      <form
        method="post"
        className="flex flex-col gap-3 w-full max-w-[310px]  "
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="bg-[#f0f0f0] flex items-center py-2.5 rounded hover:bg-[#e7e7e7]  ease-in-out">
          <i className="fas fa-user pl-5 " htmlFor="fname"></i>
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
          Login
        </button>
      </form>

      <div className="flex flex-col items-center">
        <p className="mb-2">Or Login up with social platforms</p>
        <div className="flex gap-2 ">
          <a className="border-2 p-2 rounded-[50%] flex justify-center items-center h-[46px] w-[46px] border-slate-500 hover:cursor-pointer hover:bg-slate-400 ease-out duration-300">
            <i className="fab fa-facebook-f"> </i>
          </a>
          <a href="http://localhost:5000/api/auth/google" className="border-2 p-2 rounded-[50%] flex justify-center items-center h-[46px] w-[46px] border-slate-500 hover:cursor-pointer hover:bg-slate-400 ease-out duration-300">
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
      <ToastContainer />
    </div>
  );
}

export default LoginForm;
