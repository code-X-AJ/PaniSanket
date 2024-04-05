import React, { useState } from "react";
// import { AiOutlineMenu } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <>
      <nav className="bg-cyan-400">
        <div className="flex items-center justify-between p-4 ">
          <div className="text-3xl md:text-3xl lg:text-4xl outline-0 font-bold text-white">
            <a href="/">Pani Sanket</a>
          </div>

          <div
            className="sm:hidden"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <GiHamburgerMenu style={{fontSize: "30px", color: "#fff"}}/>
          </div>

          {/* <div class="bg-blue-500 md:bg-red-500 lg:bg-green-500 xl:bg-yellow-500"> */}
            <ul className="flex xl:flex-row md:flex-row sm:flex-row justify-between items-center">
              <li className="text-lg md:text-lg lg:text-xl text-white border-white sm:px-[5px] md:px-[10px] lg:px-2 ">
                <a href="/">Features</a>
              </li>
              <li className="text-lg md:text-lg lg:text-xl text-white border-white sm:px-[5px] md:px-[10px] lg:px-2 ">
                <a href="/">About Us</a>
              </li>
              <li className="text-lg md:text-lg lg:text-xl text-white border-white sm:px-[5px] md:px-[10px] lg:px-2 ">
                <a href="/">Events</a>
              </li>
              <li className="text-lg md:text-lg lg:text-xl text-white border-white sm:px-[5px] md:px-[10px] lg:px-2 ">
                <a href="/">Plans</a>
              </li>
              <li className="text-lg md:text-lg lg:text-xl text-white border-white sm:px-[5px] md:px-[10px] lg:px-2 ">
                <a href="/">Team</a>
              </li>
              <li className="text-lg md:text-lg lg:text-xl text-white border-white sm:px-[5px] md:px-[10px] lg:px-2 ">
                <a href="/">Contact Us</a>
              </li>
            </ul>
        </div>
      </nav>
    </>
  );
}
