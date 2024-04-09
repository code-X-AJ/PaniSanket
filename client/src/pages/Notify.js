import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Slide, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";
import Notification from "../components/Notification";
import { allNotify, newNotify } from '../utils/APIRoutes'


export default function Notify() {
  const navigate = useNavigate();


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
    }
  })

  const [notification, setNotification] = useState(null);
  const [values, setValues] = useState({
    userId: "",
    title: "",
    description: "",
    address: "",
    date: "",
    time: ""
  });

  const handleReportSubmit = async (event) => {
    event.preventDefault();
    // if (handleValidation()) {
    const { userId, title, description, address, date, time } = notification;
    const { data } = await axios.post(newNotify, { userId, title, description, address, date, time });
    if (data.status === false) {
      toast.error(data.msg, toastOptions);
    }
    if (data.status === true) {
      toast.success(data.msg, toastOptions);
      navigate("/Notify");
    }
    // }
  }

  useEffect(() => {
    async function fetchReports() {
      const { data } = await axios.get(allNotify);
      console.log("axios all data........", data);
      if (data.status) {
        setNotification(data.notifications)
      }
    }
    fetchReports();
  }, []);

  useEffect(() => {
    console.log("notificatoins there..... ", notification);

  }, [notification]);


  return (
    <>
      <Notification />
      <ToastContainer />
    </>
  )
}
