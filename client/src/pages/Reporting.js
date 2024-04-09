import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { Slide, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Buffer } from "buffer";

import Navbar from '../components/Navbar'
import Reports from '../components/Reports'
import ShowMore from '../components/ShowMore'
import CreateNew from '../components/CreateNew'
import sampleImg from '../assets/kaori.png'
import { allReports, newReport } from '../utils/APIRoutes'

export default function Reporting() {

    const [postImage, setPostImage] = useState(undefined)


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
        image: ""
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
                setReports(data.reports)
            }
        }
        fetchReports();
    }, []);

    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            };
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        console.log(base64);
        setPostImage({ ...postImage, base64 })
    }


    postImage && console.log("data ", postImage);

    return (
        <div>
            <input
                type="file"
                lable="Image"
                name="myFile"
                id='file-upload'
                accept='.jpeg, .png, .jpg'
                onChange={(e) => handleFileUpload(e)}
            />

            <input type="time" placeholder='Time entering ' />
            

            {
                // <img src={values.image} alt={`Description`} />

            }

            <Navbar />

            <Reports />

            <ShowMore />

            <CreateNew />
            <ToastContainer />
        </div>
    )
}
