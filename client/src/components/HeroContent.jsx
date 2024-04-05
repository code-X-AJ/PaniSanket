import React from "react";

function HeroContent() {
  return (
    <div className="text-white pt-28 w-[70%]">
      <h2 className="text-6xl font-light my-4 leading-[60px]	">
        Real-time Monitoring for Water Resource Management
      </h2>
      <ul className="font-light tracking-wide text-xl list-inside list-disc	ml-3 mb-14">
        <li>Instant Notifications for Water Cuts</li>
        <li>Efficient Water Management Solutions</li>
        <li>Empowering Communities Through Technology</li>
      </ul>

      <button className="text-xl uppercase font-normal py-3 px-16 bg-cyan-950 rounded">
        Find out more
      </button>
    </div>
  );
}

export default HeroContent;
