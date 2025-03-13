import React from "react";

const Slider = ({
  text,
  side = "left",
  id,
  icon1,
  icon2,
  icon3,
  repeat = 50,
}) => {
  const items = Array.from({ length: repeat }, () => [
    text,
    icon1,
    text,
    icon2,
    text,
    icon3,
  ]).flat();

  return (
    <div id={id} className="slider bg-yellow py-2">
      <div className={`slide-track-${side} flex gap-2 text-2xl text-black`}>
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="flex gap-2 items-center">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
