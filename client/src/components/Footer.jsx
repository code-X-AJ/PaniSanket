import React from "react";
import footer from "../assets/footer.png";

function Footer() {
  return (
    <div>
      <div
        className="h-[30vh] flex justify-between items-center"
        style={{ backgroundImage: `url(${footer})` }}
      >
        <div className="text-white uppercase mx-[5%]">
          <h4 className="">
            We are Proud to be Supported by <br/>
          </h4>
          <p className="text-center text-4xl ">OURSELF</p>
        </div>

        <div className="text-blue-400 mx-[5%]">
          <h2 className="text-6xl uppercase">
            PaniSanket
          </h2>
          <h6 className="text-center">water reporting solutions</h6>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
