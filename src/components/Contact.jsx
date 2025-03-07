import React from "react";
import Slider from "./Slider";
import {
  LuMessageCircleHeart,
  LuMessageCircleCode,
  LuMessageCircleMore,
} from "react-icons/lu";

const Contact = () => {
  return (
    <>
      <Slider
        id="contact"
        text="Contact"
        side="left"
        icon1={<LuMessageCircleCode />}
        icon2={<LuMessageCircleHeart className="text-center" />}
        icon3={<LuMessageCircleMore />}
      />
      <div className="h-screen">Contact</div>
    </>
  );
};

export default Contact;
