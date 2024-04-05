import React from "react";
import waterBG from "../assets/waterBG.png";
import Navbar from "./Navbar-new";
import HeroContent from "./HeroContent";

function Hero() {
  return (
    <div
      className="bg-cover bg-center h-screen "
      style={{ backgroundImage: `url(${waterBG})` }}
    >
      <div className="mx-[10%]">
        <Navbar />
        <div className="">
          <HeroContent />
        </div>
      </div>
    </div>
  );
}

export default Hero;
