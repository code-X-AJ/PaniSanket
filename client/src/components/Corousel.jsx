import React, { useState,useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function Corousel({ data }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.slides.length - 1 : slide - 1); 
  };

    // Auto-advance the carousel
    useEffect(() => {
      const interval = setInterval(nextSlide, 5000); // Change image every 5 seconds
      return () => clearInterval(interval); // Clean up the interval on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slide, data.slides.length]);

  return (
    <div className="relative flex justify-center">
      {/* Ensure slides array exists in the data object */}
      <BsArrowLeftCircleFill onClick={prevSlide} className="absolute drop-shadow-lg h-8 w-8 left-4 self-center cursor-pointer" style={{ color: "white" }} />
      {data.slides && Array.isArray(data.slides) && data.slides.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={slide === idx ? "shadow-lg" : "shadow-lg hidden"}
        />
      ))}
      <BsArrowRightCircleFill onClick={nextSlide} className="absolute drop-shadow-lg h-8 w-8 right-4 self-center cursor-pointer" style={{ color: "white" }} />

      <span className="absolute flex bottom-4">
        {data.slides.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "bg-white h-2 w-2 rounded shadow-md my-0 mx-1 " : "h-2 w-2 rounded shadow-md my-0 mx-1 bg-stone-500"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};