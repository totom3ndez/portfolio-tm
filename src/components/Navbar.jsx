import React from "react";
import { LuMoonStar, LuSun, LuArrowRight } from "react-icons/lu";

export const Navbar = ({ dark, handleTheme }) => {
  return (
    <>
      <button
        className={`text-zinc-100 gap-2 m-4 flex hover:cursor-pointer items-center absolute bottom-0 left-0 p-2 bg-slate-700 rounded-full group backdrop-blur-3xl`}
      >
        <span className="hidden lg:flex">I'm available for work -</span>
        <i className="group-hover:text-yellow-100 transition-colors ease-in">
          get in touch!
        </i>
        <span className="text-xl transform rotate-315 group-hover:rotate-360 transition-all ease-in-out duration-300">
          <LuArrowRight />
        </span>
      </button>
      <nav
        className={`${
          dark ? "text-zinc-100 " : "text-slate-900"
        } m-2 flex w-full sticky top-0 z-10 items-center transition-bg ease-in-out duration-600`}
      >
        <ul
          className={`${
            dark ? "darkHover" : "lightHover"
          } flex items-center mx-auto my-0`}
        >
          <li className="p-4 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <span>|</span>
          <li className="p-4 cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <button
          className={`${
            dark
              ? "text-slate-900 bg-yellow-200"
              : "text-yellow-200 bg-slate-900"
          } p-2 m-4 w-fit h-fit cursor-pointer 0 rounded-full absolute right-0`}
          onClick={handleTheme}
        >
          {dark ? <LuSun /> : <LuMoonStar />}
        </button>
      </nav>
    </>
  );
};
