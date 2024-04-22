import React from "react";
import coli from "../assets/coliminder.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import Nproduct1 from "../assets/services/varun1.jpg";
// import Nproduct2 from "../assets/services/product2.png";
// import Nproduct3 from "../assets/services/product3.png";

function Products() {
  return (
    <div>
      <div className="flex items-center">
        <div className="w-[40%] pl-[6%] pt-[3%] ">
          <h2 className="uppercase text-blue-500 font-bold text-lg mb-3">
            Services
          </h2>

          <h3 className="text-4xl font-extrabold text- tracking-wider mb-10 text-sky-800">
            Monthly Report
          </h3>
          <p className="">
          Empower yourself with data-driven decision-making through our monthly reports. Understand the environmental ramifications of your water usage, foster community awareness, and drive positive change towards sustainable water management practices.          </p>
          <p className="my-4">
          Our monthly report feature offers users valuable insights into water consumption habits and environmental impact. Gain understanding of usage patterns, optimize resource allocation, and contribute to sustainable water management efforts through transparent reporting and continuous improvement.
          </p>
          <ul className="tracking-wide list-inside list-disc flex flex-col gap-2">
            <li>
            Gain valuable insights into your water usage patterns with detailed analytics and consumption trends.
            </li>
            <li>
            Understand the environmental impact of your water consumption and contribute to sustainability efforts.
            </li>
            <li>
            Optimize resource allocation based on monthly consumption data to ensure efficient water management.
            </li>
            <li>
            Raise awareness about water conservation and encourage community participation through transparent reporting.
            </li>
            <li>
            Use monthly reports as a tool for continuous improvement in water usage habits and conservation practices.
            </li>
          </ul>

          <button className="my-7 text-2xl text-sky-600 font-semibold ">
            Find out more --
          </button>

          <h2 className="uppercase text-blue-500 font-bold text-2xl mt-36">
            Add-on modules
          </h2>
        </div>
        <div className="w-[50%] flex justify-center items-start">
          <img src={Nproduct1} className="w-[350px] " alt="" />
        </div>
      </div>

      <div className="flex gap-10 justify-center mx-[5%] py-6 ">
        <div className="flex justify-center items-center">
          <img src={product2} className="" alt="" />
        </div>

        <div className="w-[80%] mt-2">
          <h3 className="text-3xl font-extrabold text- tracking-normal mb-3 text-sky-800">
            Actionable Insights
          </h3>
          <p className="">
            Unlock the power of data with our reporting feature. Easily report
            water-related issues and track consumption patterns through
            intuitive forms and detailed analytics. Empower your community to
            make informed decisions and drive sustainable water management
            practices. Click below to access the reporting form and contribute
            to a water-rich future.
          </p>

          <button className="mt-3 text-lg text-sky-600 font-semibold ">
            Find out more --
          </button>
        </div>
      </div>

      <div className="flex gap-10 justify-center items-center ml-[6%] py-6 ">
        <div className="w-[50%]">
          <h3 className="text-3xl font-extrabold text- tracking-normal mb-3 text-sky-800">
            Stay Informed
          </h3>

          <p className="">
            Never miss a beat with our water cut notification feature. Receive
            real-time alerts for scheduled and unscheduled water interruptions,
            ensuring timely preparation and minimal inconvenience. Stay updated
            on emergency situations and planned maintenance activities to better
            manage your water resources. Click below to view current
            notifications and stay informed.
          </p>

          <button className="mt-3 text-lg text-sky-600 font-semibold ">
            Find out more --
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img src={product3} className="w-[85%]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Products;
