import React, {useState, useEffect} from "react";
import { LuMoonStar, LuSun } from "react-icons/lu";
import { useStore } from "../store/store";
import { GoHome, GoPersonFill, GoStack } from "react-icons/go";

export const Navbar = () => {

  const [isMobile, setIsMobile] = useState()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const dark = useStore((state) => state.dark);

  const handleTheme = useStore((state) => state.setTheme);

  //  ---------------- STYLES ---------------- //
  const st_link = [
    "opacity-50 hover:opacity-100 transition-all ease-in duration-200",
  ];
  const st_list = [
    `${
      dark ? "darkHover" : "lightHover bg-dark text-white"
    } flex items-center mx-auto my-0 gap-5 px-4 py-2 backdrop-blur-3xl rounded-full border-1 border-zinc-600`,
  ];
  const st_nav = `${
    dark ? "text-white" : "text-dark"
  } p-4 flex w-full sticky top-0 z-50 items-center transition-bg ease-in-out`;
  const st_button = `${
    dark ? "text-dark bg-yellow" : "text-yellow bg-dark"
  } p-2 m-4 w-fit h-fit 0 rounded-full absolute right-0`;
  //  ---------------- STYLES ---------------- //

  

  return (
    <>
      <nav className={st_nav}>
        <ul className={st_list}>
          <li className={st_link}>
            <a href="#home">{isMobile ? <GoHome /> : 'Home'}</a>
          </li>
          <span>|</span>
          <li className={st_link}>
            <a href="#projects">
              {isMobile ? <GoStack /> : 'Projects'}
            </a>
          </li>
          <span>|</span>
          <li className={st_link}>
            <a href="#contact">{isMobile ? <GoPersonFill /> : 'Contact'}</a>
          </li>
        </ul>
        <button className={st_button} onClick={handleTheme}>
          {dark ? <LuSun /> : <LuMoonStar />}
        </button>
      </nav>
    </>
  );
};
