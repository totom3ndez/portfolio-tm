import React from "react";
import ContactButton from "./ContactButton";
import { useStore } from "../store/store";

// ---------------- STYLES ---------------- //
const st_hero_container = `lg:grid lg:grid-rows-2 lg:items-center lg:justify-items-center lg:grid-cols-3 lg:max-w-7xl lg:gap-10 lg:py-30 flex flex-col justify-center items-center text-center px-4 mb-8 z-2`;

const st_img = `size-70 shadow-slate-600 shadow-2xl lg:size-80 mx-auto rounded-full transition-all ease-in`;

const st_title = `flex flex-col mt-4 lg:mt-0 justify-center items-center lg:items-baseline text-7xl font-bold lg:flex-col`;

const st_text = `lg:text-lg text-left mx-auto p-6 lg:p-0 flex flex-wrap cursor-default hero_text`;

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
        <div className="flex flex-col gap-2 name ">
          <h1
            className={`${st_title} 
            ${dark ? "text-white" : "text-slate-900"}`}
          >
            <div className="flex w-fit bgHover delay-400 name_word">
              <span>T</span>
              <span>o</span>
              <span>m</span>
              <span>a</span>
              <span>s</span>
            </div>
            <div className="flex mb-2 w-fit bg-yellow-200 text-slate-900 name_word">
              <span>M</span>
              <span>e</span>
              <span>n</span>
              <span>d</span>
              <span>e</span>
              <span>z</span>
            </div>
          </h1>
          <div
            className={`${st_role} ${
              dark ? "text-yellow-200" : "text-slate-900"
            }`}
          >
            <span className="position">Front</span>
            <span className="position">End</span>
            <span className="position">Developer</span>
          </div>
        </div>
        <p className={`${st_text} ${dark ? "text-white" : "text-slate-900"}`}>
          Hey there<span className="waving">👋</span> I'm a web dev student with
          a knack for turning creative sparks into dazzling web realities. ✨ My
          superpower? 🦸‍♂️ Crafting websites that not only look great but also
          make users go 'Wow, this is awesome!' 🤩 I'm all about creating
          smooth, intuitive, and visually captivating online experiences that
          leave a smile on your face. 😊 Whether it's wrangling CSS or taming
          JavaScript, I'm always up for a web development adventure! 🚀 Let's
          make some magic happen! 🪄
        </p>
        <ContactButton />
      </div>
    </>
  );
};
