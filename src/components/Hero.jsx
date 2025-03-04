import React from "react";

export const Hero = ({ dark }) => {
  return (
    <div className="flex flex-col justify-center text-center px-4 py-20 h-fit gap-4">
      <img
        className={`${
          dark
            ? " outline-yellow-200 hover:outline-solid hover:outline-offset-0"
            : "outline-none"
        } mx-auto size-52 rounded-full outline-2 outline-offset-4 transition-all ease-in  `}
        src="/photo-profile.webp"
        alt="Profile image of Tomas Mendez"
      />
      <h1 className={`${dark ? "text-white" : "text-slate-900"} text-4xl`}>
        Tomas S. Mendez
      </h1>
      <div
        className={`${
          dark ? "text-white" : "text-slate-900"
        } flex gap-2 justify-center`}
      >
        <span className="position">Front</span>
        <span className="position">End</span>
        <span className="position">Developer</span>
      </div>
      <p className={dark ? "text-white" : "text-slate-900"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores hic
        provident consequuntur tenetur tempore ipsam vero possimus animi
        asperiores eius?
      </p>
    </div>
  );
};
