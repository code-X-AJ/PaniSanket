import { CaretRightOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Collapse, theme } from "antd";
import axios from "axios";
import { newNotify, allNotify } from "../utils/APIRoutes";


const App = () => {
  const [notify, setNotify] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: "#F4F4F4",
    borderRadius: token.borderRadiusSM,
    border: "none",
  };

  const [values, setValues] = useState({
    userId: "",
    title: "",
    description: "",
    address: "",
    date: "",
    time: ""
  });


  useEffect(() => {
    async function fetchNotifications() {
      const { data } = await axios.get(allNotify);
      if (data.status) {
        setNotify(data.notifications);
        setIsLoaded(true);
      }
    }
    fetchNotifications();
  }, []);

  // useEffect(()=>{
  //   console.log("notificatiokns ........", notify);
  // },[notify])

  // const getItems = (panelStyle) => {
  //   return [

  //     {
  //       key: "1",
  //       label: (
  //         <div>
  //           <h1 className="font-bold text-xl font-[sans-serif]">{Title}</h1>
  //           <div className="text-base font-[sans-serif]">{Timeline}</div>
  //         </div>
  //       ),
  //       children: (
  //         <div className="text-xl font-[sans-serif]">
  //           <p>{Description}</p>
  //           <div className="mt-8" htmlFor="">
  //             <h1 className="font-bold">Areas Affected:</h1>
  //             {location}
  //             <h1 className="float-right">{date}</h1>
  //           </div>
  //         </div>
  //       ),
  //       style: panelStyle,
  //     },
  //     {
  //       key: "2",
  //       label: <h1 className="text-lg">{Title}</h1>,
  //       children: (
  //         <div className="text-lg">
  //           <p>{Description}</p>
  //           <label className="font-bold">Timeline: </label>
  //           {Timeline}
  //           <br />{" "}
  //           <label className="font-bold" htmlFor="">
  //             Address:{" "}
  //           </label>{" "}
  //           {location} <br />
  //           {date}
  //         </div>
  //       ),
  //       style: panelStyle,
  //     },
  //     {
  //       key: "3",
  //       label: <h1 className="text-lg">{Title}</h1>,
  //       children: (
  //         <div className="text-lg">
  //           <p>{Description}</p>
  //           <label className="font-bold">Timeline: </label>
  //           {Timeline}
  //           <br />{" "}
  //           <label className="font-bold" htmlFor="">
  //             Address:{" "}
  //           </label>{" "}
  //           {location} <br />
  //           {date}
  //         </div>
  //       ),
  //       style: panelStyle,
  //     },
  //   ];
  // };

  const getItems = (panelStyle) => {
    return notify.map((noti, id) => ({
      key: id,
      label: (
        <div>
          <h1 className="font-bold text-xl font-[sans-serif]">{noti.title}</h1>
          
        </div>
      ),
      children: (
        <div className="text-xl flex flex-col font-[sans-serif]">
          <div className="container flex w-[34rem] justify-between">
          <h1 className="font-bold">Details:</h1>
          <p>{noti.description}</p>
          </div>
          <div className="container flex w-[34rem] justify-between">
            <h1 className="font-bold">Areas Affected:</h1>
            {noti.address}
            
          </div>
          <div className="container flex w-[34rem] justify-between">
          <h1 className="font-bold">Date:</h1>
            <h1 className="">{noti.date}</h1>
          </div>
          <div className="container flex w-[34rem] justify-between">
          <h1 className="font-bold">Timings:</h1>
          <div className="">{noti.time}</div>
          </div>
        </div>
      ),
      style: panelStyle,
    }));
  };
  
  return (
    <div className="mt-8 flex justify-center">
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        style={{
          background: "transparent",
          width: "70rem",
        }}
        items={getItems(panelStyle)}
      />
    </div>
  );
};
export default App;
