import React from "react";
import ContactButton from "./ContactButton";
import { useStore } from "../store/store";
import { st_hero_container, st_img, st_role, st_title } from "../styles";

// ---------------- STYLES ---------------- //

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
              <div className="flex mb-2 w-fit bg-yellow text-dark name_word ">
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
