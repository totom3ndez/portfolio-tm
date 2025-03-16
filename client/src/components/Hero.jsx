import React from "react";
import ContactButton from "./ContactButton";
import { useStore } from "../store/store";

// ---------------- STYLES ---------------- //
const st_hero_container = `container lg:items-center lg:justify-items-center lg:grid-cols-3 lg:gap-10 lg:py-30 flex flex-col justify-center items-center text-center px-4 mb-8 z-2`;

const st_img = `size-70 shadow-yellow text-dark shadow-lg lg:size-80 mx-auto rounded-full transition-all ease-in`;

const st_title = `flex flex-col mt-4 lg:mt-0 justify-center items-center lg:items-center text-7xl font-bold lg:flex-col`;

const st_role = `flex gap-1.5 justify-center `;
// ---------------- STYLES ---------------- //

export const Hero = () => {
  const dark = useStore((state) => state.dark);
  return (
    <>
      <div className={st_hero_container}>
        <div className="relative floating">
          <img
            className={st_img}
            src="/photo-profile.webp"
            alt="Profile image of Tomas Mendez"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-2 ">
          <div className="flex flex-col">
            <h1
              className={`${st_title} 
            ${dark ? "text-white" : "text-dark"}`}
            >
              <div className="flex w-fit bgHover delay-400 name_word">
                Tomas
              </div>
              <div className="flex mb-2 w-fit bg-yellow text-dark name_word">
                Mendez
              </div>
            </h1>
            <div className={`${st_role} ${dark ? "text-yellow" : "text-dark"}`}>
              <span className="position">Front</span>
              <span className="position">End</span>
              <span className="position">Developer</span>
            </div>
          </div>
        </div>
        <ContactButton />
      </div>
    </>
  );
};
