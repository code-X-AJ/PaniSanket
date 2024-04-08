import React, { useState } from 'react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav className="sm:flex justify-around p-2 bg-cyan-400 z-50">
                <div className="m-4">
                    <a href='/' className="p-4 text-2xl font-black text-white">Pani Sanket</a>
                </div>
                <div className='menu absolute top-8 right-6 flex-col justify-between w-[2rem] h-[1.6rem] flex sm:hidden' onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                    <span className='h-[0.3rem] w-full bg-white rounded'></span>
                    <span className='h-[0.3rem] w-full bg-white rounded'></span>
                    <span className='h-[0.3rem] w-full bg-white rounded'></span>
                </div>
                <div>
                    <ul className={menuOpen ? "sm:flex m-4 justify-between" : "sm:flex m-4 hidden justify-between"}>
                        <li className="text-center"><a href='/' className="p-2 m-2 text-white border-white">Home</a></li>
                        <li className="text-center"><a href='/' className="p-2 m-1 text-white border-white">Features</a></li>
                        <li className="text-center"><a href='/' className="p-2 m-1 text-white border-white">About Us</a></li>
                        <li className="text-center"><a href='/' className="p-2 m-1 text-white border-white">Events</a></li>
                        <li className="text-center"><a href='/' className="p-2 m-1 text-white border-white">Plans</a></li>
                        <li className="text-center"><a href='/' className="p-2 m-1 text-white border-white">Team</a></li>
                        <li className="text-center"><a href='/' className="p-2 m-1 text-white border-white">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}