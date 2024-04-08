import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Notification from "../components/Notification";

export default function Notify() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('PaniSanket-user')) {
      navigate("/login")
    }
  })
  return (
    <Notification />
  )
}
