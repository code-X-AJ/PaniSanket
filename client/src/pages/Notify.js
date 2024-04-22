import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Slide, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";
import Notification from "../components/Notification";
import Navbar from '../components/Navbar-new'
import CreateNewN from '../components/CreateNewN';


export default function Notify() {
  const navigate = useNavigate();
  const [official, setOfficial] = useState(false) || false;


  const toastOptions = {
    theme: "light",
    position: "bottom-right",
    pauseOnHover: true,
    autoClose: 5000,
    draggable: true,
    transition: Slide,
  };


  useEffect(() => {
    if (!localStorage.getItem('PaniSanket-user')) {
      navigate("/login")
    }else{
      const isOfficial = JSON.parse(localStorage.getItem("PaniSanket-user")).isOfficial;
      if(isOfficial) setOfficial(true);
    }
  })

  return (
    <div
      className="bg-cover bg-center h-screen bg-gradient-to-b from-blue-600 to-white"
      // style={{ backgroundImage: `url(${waterBG})` }}
    >
      <div className="mx-[10%]">
        <Navbar />
      </div>

      <h1 className="text-center text-5xl m-4 font-bold text-white">Water Cut Notifications</h1>

      <Notification />
      {official && <CreateNewN/>}
      <ToastContainer />
    </div>

  )
}
