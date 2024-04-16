import React from "react";
// import kaori1 from "../assets/Vector1";
// import kaori2 from "../assets/Vector2";
// import kaori3 from "../assets/Vector3";

function Applications() {
  return (
    <div>
      <h2 className="uppercase text-blue-500 font-bold text-lg">
        Applications
      </h2>
      <div className="flex gap-6 justify-center my-10">
        <div className="">
          <div className="flex justify-center items-center">
            <div className="border-[10px] border-blue-200 rounded-[100%] p-2">
              <img
                // src={kaori1}
                className="p-2 rounded-[100%] w-[105px]"
                alt=""
              />
            </div>
          </div>
          <h3 className="uppercase text-center text-xl tracking-wide font-medium my-3">
            Water Supply Interruptions
          </h3>
          <p className="text-center">
            Stay informed about scheduled and unscheduled water supply
            interruptions. Our platform ensures residents and businesses can
            prepare effectively, with features including reporting, water cut
            notifications, and emergency management support.
          </p>
        </div>
        <div className="">
          <div className="flex justify-center items-center">
            <div className="border-[10px] border-blue-200 rounded-[100%] p-3 ">
              <img
                // src={kaori2}
                className="rounded-[100%] w-[93px]"
                alt=""
              />
            </div>
          </div>

          <h3 className="uppercase text-center text-xl tracking-wide font-medium my-3">
            Emergency Water Management
          </h3>
          <p className="text-center">
            Facilitate swift communication and response during water-related
            emergencies. Our system ensures affected communities receive
            essential support and guidance, with features including reporting,
            water cut notifications, and real-time emergency updates.
          </p>
        </div>
        <div className="">
          <div className="flex justify-center items-center">
            <div className="border-[10px] border-blue-200 rounded-[100%] p-3">
              <img
                // src={kaori3}
                className="rounded-[100%] w-[93px]"
                alt=""
              />
            </div>
          </div>

          <h3 className="uppercase text-center text-xl tracking-wide font-medium my-3">
            Sustainable Water Usage
          </h3>
          <p className="text-center">
            Empower communities with insights into water consumption patterns.
            Through detailed monthly reports, we promote responsible water
            usage, conservation efforts, and the cultivation of sustainable
            water management practices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Applications;
