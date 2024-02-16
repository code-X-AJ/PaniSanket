import React from "react";

function SignupContent() {
  return (
      <div className="flex flex-col items-end ">
        <div className="gap-1 text-white flex flex-col items-center mt-16 mr-20">
          <h3 className="font-bold text-2xl">One of us ?</h3>
          <p className="font-light text-md">
            Welcome Back! Signin to Continue Your Journey
          </p>
          <button className="border-white border-[2px] px-[35px] py-2 uppercase rounded text-xs mt-1 hover:bg-[#45e193]">
            login
          </button>
        </div>
          <img
            src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"
            alt=""
            className="w-[530px] mr-20 pb-[80px] "
          />
      </div>
  );
}

export default SignupContent;
