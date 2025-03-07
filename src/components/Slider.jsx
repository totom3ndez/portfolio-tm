import React from "react";

const Slider = ({ text, side, id, icon1, icon2, icon3 }) => {
  const copies = Array(50).fill([text, icon1, text, icon2, text, icon3]);
  return (
    <div id={id} className="slider bg-yellow-200 py-2">
      <div className={`slide-track-${side} flex gap-2 text-2xl text-black`}>
        {copies.map((text, index) => (
          <div
            key={index}
            id={index === 0 ? "slide_project" : undefined}
            className="flex items-center"
          >
            <span className="flex gap-2 items-center">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
