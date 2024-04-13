
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { Slide, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Buffer } from "buffer";

import Navbar from '../components/Navbar-new'
import Reports from '../components/Reports'
import ShowMore from '../components/ShowMore'
import CreateNew from '../components/CreateNew'
import sampleImg from '../assets/kaori.png'
import { allReports, newReport } from '../utils/APIRoutes'
import waterBG from "../assets/BG.png";
import Hero from '../components/Hero';

export default function Reporting() {

    const [postImage, setPostImage] = useState(undefined)
    // const [reports, setReports] = useState(null);


    const toastOptions = {
        theme: "light",
        position: "bottom-right",
        pauseOnHover: true,
        autoClose: 5000,
        draggable: true,
        transition: Slide,
    };

    const navigate = useNavigate();


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


    // useEffect(() => {
    //     async function fetchReports() {
    //         const { data } = await axios.get(allReports);
    //         if (data.status) {
    //             console.log(data.reports);
    //             setReports(data.reports)
    //         }
    //     }
    //     fetchReports();
    // }, []);

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
            {/* <div
                className="bg-cover bg-center h-screen "
                style={{ backgroundImage: `url(${waterBG})` }}
            ></div>

            <div className="mx-[10%]">
            <Navbar />
            </div> */}

            {/* <input
                type="file"
                lable="Image"
                name="myFile"
                id='file-upload'
                accept='.jpeg, .png, .jpg'
                onChange={(e) => handleFileUpload(e)}
            /> */}
{/* to-blue-500 */}
            <div
                className="bg-cover bg-center h-screen bg-gradient-to-b from-blue-600 to-white "
                // className="bg-cover bg-center h-screen "
                // style={{ backgroundImage: `url(${waterBG})` }}
            >
                <div className="mx-[10%]">
                    <Navbar />
                </div>
                <div className="mx-[3%]">
                <Reports />
                </div>
            </div>


            <CreateNew />
            <ToastContainer />
        </div>
    )
}
