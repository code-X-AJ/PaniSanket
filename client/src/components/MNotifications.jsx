import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { background } from "@chakra-ui/react";
import { monthlyData } from "../utils/APIRoutes";
import { Slide, ToastContainer, toast } from "react-toastify";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

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
    width: "20%",
  },
  {
    title: "Description",
    dataIndex: "description",
    width: "20%",
  },
  {
    title: "Address",
    dataIndex: "address",
    width: "20%",
  },
  {
    title: "Date",
    dataIndex: "date",
    width: "20%",
  },
  {
    title: "Timings",
    dataIndex: "time",
    width: "20%",
  },
];
// const data = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//     },
//     {
//         key: '3',
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sydney No. 1 Lake Park',
//     },
//     {
//         key: '4',
//         name: 'Jim Red',
//         age: 32,
//         address: 'London No. 2 Lake Park',
//     },
// ];


const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};



const App = () => {
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

  useEffect(() => {
    console.log("thisis month data,.............", monthData);
  }, [monthData]);

  return isLoaded && <Table columns={columns} dataSource={monthData.notify.notifications} onChange={onChange} />
};

export default App;
