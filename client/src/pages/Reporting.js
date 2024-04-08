import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

import { Slide, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/Navbar'
import Reports from '../components/Reports'
import ShowMore from '../components/ShowMore'
import CreateNew from '../components/CreateNew'
import { allReports, newReport } from '../utils/APIRoutes'

export default function Reporting() {
    
  const toastOptions = {
    theme: "light",
    position: "bottom-right",
    pauseOnHover: true,
    autoClose: 5000,
    draggable: true,
    transition: Slide,
  };

    const navigate = useNavigate();

    const [reports, setReports] = useState(undefined);
    
    const [values, setValues] = useState({
        title: "",
        userId: "",
        description: "",
        city: "",
        address: "",
        image: "",
    });

    useEffect(() => {
        if (!localStorage.getItem('PaniSanket-user')) {
            navigate("/login")
        }
    })

    const handleReportSubmit = async (event) => {
        event.preventDefault();
        // if (handleValidation()) {
            const { title, userId, description, city, address, image } = values;
            const { data } = await axios.post(newReport, { title, userId, description, city, address, image });
            if (data.status === false) {
                toast.error(data.msg, toastOptions);
            }
            if (data.status === true) {
                toast.success(data.msg, toastOptions);
                navigate("/report");
            }
        // }
    }


    useEffect(() => {
        async function fetchReports() {
            const { data } = await axios.get(allReports);
            if (data.status) {
                console.log("reports",data.reports[2].description );
                setReports(data.reports)
            }
        }
        fetchReports();
    }, []);


    return (
        <div>

            <Navbar />

            <Reports />

            <ShowMore />

            <CreateNew />
            <ToastContainer/>
        </div>
    )
}
