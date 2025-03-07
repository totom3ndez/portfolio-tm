import React from "react";
import ContactButton from "./ContactButton";

export const Hero = ({ dark }) => {
  const text = `I am a dedicated student specializing in Web development. I possess a strong passion for creating visually appealing and user-centric web designs, transforming innovative concepts into functional and responsive digital interfaces. As I continue to enhance my skills and expertise, I am committed to contributing to the development of exceptional online experiences.`;

  return (
    <>
      <div
        id="hero_container"
        className=" lg:grid lg:grid-rows-2 lg:items-center lg:justify-items-center lg:grid-cols-3 lg:max-w-7xl lg:gap-10 lg:py-30 flex flex-col justify-center items-center text-center px-4 h-[85vh] z-2"
      >
        <div className="relative ">
          <img
            className="size-70 shadow-slate-600 shadow-2xl lg:size-80 mx-auto rounded-full transition-all ease-in"
            src="/photo-profile.webp"
            alt="Profile image of Tomas Mendez"
          />
        </div>
        <div className="flex flex-col gap-2 name ">
          <h1
            className={`${
              dark ? "text-white" : "text-slate-900"
            } flex flex-col mt-4 lg:mt-0 justify-center items-center lg:items-baseline text-7xl font-bold lg:flex-col`}
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
            className={`${
              dark ? "text-yellow-200" : "text-slate-900"
            } flex gap-1.5 justify-center`}
          >
            <span className="position">Front</span>
            <span className="position">End</span>
            <span className="position">Developer</span>
          </div>
        </div>
        <p
          id="hero_text"
          className={`${
            dark ? "text-white" : "text-slate-900"
          } text-sm lg:text-lg text-left mx-auto p-6 lg:p-0 flex flex-wrap cursor-default`}
        >
          {text.split(" ").map((word, index) => (
            <span key={index} className="hover-effect">
              {word}&nbsp;
            </span>
          ))}
        </p>
        <ContactButton />
      </div>
    </>
  );
};
