import React from 'react'

export default function Corousel({data}) {
  return (
    <div>
        {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            // className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
    </div>
  )
}
