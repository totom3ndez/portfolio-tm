import React from "react";

export const Hero = ({ dark }) => {
  return (
    <div className="lg:flex-row lg:max-w-6xl lg:gap-10 lg:items-center flex flex-col justify-center text-center px-4 py-20 h-fit ">
      <div className="relative">
        <img
          className="size-60 lg:size-fit mx-auto rounded-full transition-all ease-in"
          src="/photo-profile.webp"
          alt="Profile image of Tomas Mendez"
        />
        <span className="image_line"></span>
      </div>
      <div className="flex flex-col gap-2 name">
        <h1
          className={`${
            dark ? "text-white" : "text-slate-900"
          } flex justify-center items-center lg:items-baseline text-7xl font-bold lg:flex-col`}
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
          } flex gap-1.5 -my-2`}
        >
          <span className="position">Front</span>
          <span className="position">End</span>
          <span className="position">Developer</span>
        </div>
      </div>
      <p id="hero_text" className={`${dark ? "text-white" : "text-slate-900"}`}>
        I am a dedicated student specializing in <b>Web development</b>. I
        possess a strong passion for creating visually appealing and
        user-centric web designs, transforming innovative concepts into
        functional and responsive digital interfaces. As I continue to enhance
        my skills and expertise, I am committed to contributing to the
        development of exceptional online experiences.
      </p>
    </div>
  );
};
