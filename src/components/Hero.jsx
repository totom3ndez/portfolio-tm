import React from "react";

export const Hero = ({ dark }) => {
  return (
    <div className="lg:flex-row lg:max-w-6xl lg:gap-10 lg:items-center flex flex-col justify-center text-center px-4 py-20 h-fit gap-4 ">
      <img
        className={`${
          dark
            ? " outline-yellow-200 hover:outline-solid hover:outline-offset-0"
            : "outline-none"
        } mx-auto size-52 rounded-full outline-2 outline-offset-4 transition-all ease-in  `}
        src="/photo-profile.webp"
        alt="Profile image of Tomas Mendez"
      />
      <div className="flex flex-col gap-4">
        <h1 className={`${dark ? "text-white" : "text-slate-900"} text-4xl`}>
          Tomas S. Mendez
        </h1>
        <div
          className={`${
            dark ? "text-yellow-200" : "text-slate-900"
          } flex gap-2 justify-center`}
        >
          <span className="position">Front</span>
          <span className="position">End</span>
          <span className="position">Developer</span>
        </div>
      </div>
      <p className={dark ? "text-white" : "text-slate-900"}>
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
