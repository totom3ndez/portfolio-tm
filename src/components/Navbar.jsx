import React from "react";
import { LuMoonStar, LuSun, LuArrowRight } from "react-icons/lu";
import FloatingContact from "./FloatingContact";

export const Navbar = ({ dark, handleTheme }) => {
  return (
    <>
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
