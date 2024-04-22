import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { monthlyData } from "../utils/APIRoutes";

import "react-toastify/dist/ReactToastify.css";

import { Slide, ToastContainer, toast } from "react-toastify";

import axios from "axios";

const toastOptions = {
  theme: "light",
  position: "bottom-right",
  pauseOnHover: true,
  autoClose: 5000,
  draggable: true,
  transition: Slide,
};


const columns = [
  {
    title: "Title",
    dataIndex: "title",
    width: "25%",
  },
  {
    title: "Description",
    dataIndex: "description",
    width: "25%",
  },
  {
    title: "Address",
    dataIndex: "address",
    width: "25%",
  },
  {
    title: "City",
    dataIndex: "city",
    width: "25%",
  },
];
//   const getItems = (panelStyle) => {
//     return notify.map((noti, id) => ({
//         key: id,
//         label: (
//           <div>
//             <h1 className="font-bold text-xl font-[sans-serif]">{noti.title}</h1>
//             <div className="text-base font-[cursive]">{noti.time}</div>
//           </div>
//         ),
//         children: (
//           <div className="text-xl font-[cursive]">
//             <p>{noti.description}</p>
//             <div className="mt-8" htmlFor="">
//               <h1 className="font-bold">Areas Affected:</h1>
//               {noti.address}
//               <h1 className="float-right">{noti.date}</h1>
//             </div>
//           </div>
//         ),
//         style: panelStyle,
//       }));
//     };
    

const MReports = () => {
    const [monthData, setMonthData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
    async function fetchMonthlyData() {
      const { data } = await axios.get(monthlyData);
      if (data.status) {
        setMonthData(data.data);
        setIsLoaded(true);
      } else {
        console.error(data.msg);
  
        toast.error("Something went wrong", toastOptions);
      }
    }
    fetchMonthlyData();
  }, []);
  
  // useEffect(() => {
  //   console.log("thisis month data,.............", monthData);
  // }, [monthData]);

  // const data = () =>  {

  //   //   {
  //   //     key: "1",
  //   //     issue: "puddle in our area",
  //   //     description: "There is a puddle in our locality...",
  //   //     address: "#582/4",
  //   //   },
  //   isLoaded && [

  //       monthData.reports.reports.map((report, id) => ({
  //           key: id,
  //           title:report.title,
  //           description: report.description,
  //           address: report.address,
  //           city:report.city
  //       })
  //   ]
    
  // };
    
  

    
const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  
  return isLoaded && <Table columns={columns} dataSource={monthData.reports.reports} onChange={onChange} />

};
export default MReports;
