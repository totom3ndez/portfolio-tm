import React from "react";
import { LuMoonStar, LuSun } from "react-icons/lu";
import { useStore } from "../store/store";

export const Navbar = () => {
  const dark = useStore((state) => state.dark);

  const handleTheme = useStore((state) => state.setTheme);

  //  ---------------- STYLES ---------------- //
  const st_link = [
    "opacity-50 hover:opacity-100 transition-all ease-in duration-200",
  ];
  const st_list = [
    `${
      dark ? "darkHover" : "lightHover"
    } flex items-center mx-auto my-0 gap-5 px-4 py-2 backdrop-blur-3xl rounded-full border-1 border-zinc-600`,
  ];
  const st_nav = `${
    dark ? "text-zinc-100 " : "text-slate-900"
  } p-4 flex w-full sticky top-0 z-50 items-center transition-bg ease-in-out`;
  const st_button = `${
    dark ? "text-slate-900 bg-yellow-200" : "text-yellow-200 bg-slate-900"
  } p-2 m-4 w-fit h-fit 0 rounded-full absolute right-0`;
  //  ---------------- STYLES ---------------- //

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav className={st_nav}>
        <ul className={st_list}>
          <li className={st_link}>
            <button onClick={() => scrollToSection("home")}>Home</button>
          </li>
          <span>|</span>
          <li className={st_link}>
            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>
          </li>
          <span>|</span>
          <li className={st_link}>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </li>
        </ul>
        <button className={st_button} onClick={handleTheme}>
          {dark ? <LuSun /> : <LuMoonStar />}
        </button>
      </nav>
    </>
  );
};
