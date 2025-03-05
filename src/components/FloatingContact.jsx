import React from "react";
import { LuArrowRight } from "react-icons/lu";

const FloatingContact = () => {
  return (
    <button
      className={`text-zinc-100 gap-2 m-4 flex items-center absolute bottom-0 left-0 p-2 bg-slate-700 rounded-full group backdrop-blur-3xl`}
    >
      <span className="hidden lg:flex">I'm available for work -</span>
      <i className="group-hover:text-yellow-100 transition-colors ease-in">
        get in touch!
      </i>
      <span className="text-xl transform rotate-315 group-hover:rotate-360 transition-all ease-in-out duration-300">
        <LuArrowRight />
      </span>
    </button>
  );
};

export default FloatingContact;
