import React from "react";

function Navbar() {
  return (
    <div className="text-black">
      <div className="flex justify-between py-4">
        <div className="">
          <h2 className="text-white text-5xl font-medium tracking-wide">
            PaniSanket
          </h2>
        </div>

        <div className="flex flex-col justify-end items-end">
          <div className="w-[900px] bg-slate-700 mt-4 pb-[.5px] mb-2"></div>
          <ul className="flex text-white text-sm gap-6 uppercase font-normal tracking-wide">
            <li className=""><a href="/">Home</a></li>
            <li className=""><a href="/report">Reports</a></li>
            <li className=""><a href="/notify">Water Cuts</a></li>
            <li className=""><a href="/monthlyreport">History</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
