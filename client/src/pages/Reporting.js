import React from 'react'
import Navbar from '../components/Navbar-new'
import Reports from '../components/Reports'
import ShowMore from '../components/ShowMore'
import CreateNew from '../components/CreateNew'
import waterBG from "../assets/waterBG.png";

export default function Reporting() {
    return (
            <div
                className="bg-cover bg-center h-screen "
                style={{ backgroundImage: `url(${waterBG})` }}
            >
                <div className="mx-[10%]">
                    <Navbar />
                </div>
           
            <Reports />

            <ShowMore />

            <CreateNew />
        </div>
    )
}
