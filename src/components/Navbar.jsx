import React from "react";
import { LuMoonStar, LuSun } from "react-icons/lu";

export const Navbar = ({ dark, handleTheme }) => {
  //  ---------------- STYLES ---------------- //
  const linkStyle = [
    "opacity-50 hover:opacity-100 transition-all ease-in duration-200",
  ];
  const listStyle = [
    `${
      dark ? "darkHover" : "lightHover"
    } flex items-center mx-auto my-0 gap-5 px-4 py-2 backdrop-blur-3xl rounded-full border-1 border-zinc-600`,
  ];

  return (
    <>
      <nav
        className={`${
          dark ? "text-zinc-100 " : "text-slate-900"
        } p-4 flex w-full sticky top-0 z-100 items-center transition-bg ease-in-out`}
      >
        <ul className={listStyle}>
          <li className={linkStyle}>
            <a href="#home">Home</a>
          </li>
          <span>|</span>
          <li className={linkStyle}>
            <a href="#projects">Projects</a>
          </li>
          <span>|</span>
          <li className={linkStyle}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button
          className={`${
            dark
              ? "text-slate-900 bg-yellow-200"
              : "text-yellow-200 bg-slate-900"
          } p-2 m-4 w-fit h-fit 0 rounded-full absolute right-0`}
          onClick={handleTheme}
        >
          {dark ? <LuSun /> : <LuMoonStar />}
        </button>
      </nav>
    </>
  );
};
