
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { Slide, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/Navbar-new'
import Reports from '../components/Reports'
import CreateNew from '../components/CreateNew'
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

    useEffect(() => {
        if (!localStorage.getItem('PaniSanket-user')) {
            navigate("/login")
        }
    })
    
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
