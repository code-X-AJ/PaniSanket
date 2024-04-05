import React from "react";
import waterBG from "../assets/download4.png";
import example1 from "../assets/example1.jpg";
import example2 from "../assets/example2.jpg";

function Examples() {
  return (
    <div
      className="bg-cover bg-no-repeat h-[139vh] overflow-auto flex flex-col gap-5 justify-center"
      style={{ backgroundImage: `url(${waterBG})` }}
    >
      <div className="ml-[6%] mb-[6%]">
        <h2 className="uppercase pb-12  text-white font-bold text-xl ">
          Real life examples
        </h2>

        <div className="flex flex-col w-[70%] gap-4 justify-center">
          <div className="flex items-center">
            <img src={example1} className="w-[360px] h-[317px]" alt="" />
            <div className=" px-14 py-10 bg-white">
              <h4 className="font-bold mb-4 text-lg tracking-wide">
                Real-Life Impact:
              </h4>
              <p className="my-3">
                Discover how PaniSanket is making a difference in communities
                worldwide. Explore real-life examples of our platform in action,
                from improving water supply management to enhancing emergency
                response efforts. See firsthand how our technology is empowering
                individuals and authorities to tackle water challenges
                effectively.
              </p>
              <button className="px-4 py-2 mt-2 bg-blue-600 text-white capitalize tracking-wide">
                See how we Did it
              </button>
            </div>
          </div>

          <div className="flex items-center ">
            <img src={example2} className="w-[360px] h-[317px]" alt="" />
            <div className="px-14 py-10 bg-white">
              <h4 className="font-bold mb-4 text-lg tracking-wide">
                Case Studies:
              </h4>
              <p className="my-3">
                Delve into our case studies to witness the transformative impact
                of PaniSanket. Explore success stories from diverse regions,
                showcasing how our platform has revolutionized water management
                practices. Learn how communities have overcome challenges and
                achieved sustainability goals with the help of PaniSanket's
                innovative solutions.
              </p>
              <button className="px-4 py-2 mt-2 bg-blue-600 text-white capitalize tracking-wide">
                See how we Did it
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Examples;
