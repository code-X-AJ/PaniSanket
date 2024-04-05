import React from "react";
import About_us from "../assets/about_us.jpg";

export default function AboutUs() {
  return (
    <div className="flex gap-5 items-start ">
      <div className="text-right w-[300%]">
        <h2 className="text-4xl uppercase text-blue-900 font-medium mb-8">
          About panisanket
        </h2>
        <p className="">
          PaniSanket is a leading platform dedicated to revolutionizing water
          management through technology and community engagement. Our mission is
          to empower individuals and organizations to monitor, manage, and
          protect their water resources effectively. With a commitment to
          innovation and sustainability, we strive to create a water-rich future
          for generations to come. Explore our journey and join us in making a
          difference.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img src={About_us} className="w-[2700px]" alt="" />
      </div>
    </div>
  );
}
