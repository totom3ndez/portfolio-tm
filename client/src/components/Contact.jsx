import React from "react";
import Slider from "./Slider";
import {
  LuMessageCircleHeart,
  LuMessageCircleCode,
  LuMessageCircleMore,
  LuSend,
} from "react-icons/lu";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <section className="w-full h-[70%]">
      <Slider
        id="contact"
        text="Contact"
        side="left"
        icon1={<LuMessageCircleCode />}
        icon2={<LuMessageCircleHeart className="text-center" />}
        icon3={<LuMessageCircleMore />}
      />
      <div className="p-20">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-gray-600 mb-8">
            I am always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
          <ul className="flex flex-col justify-center items-left gap-8 lg:gap-4 text-2xl">
            <li className="opacity-50 hover:opacity-100">
              <a
                href="https://github.com/totom3ndez"
                target="blank"
                className="flex gap-4 items-center "
              >
                <SiGithub className="size-10" />
                /totom3ndez
              </a>
            </li>
            <li className="opacity-50 hover:opacity-100">
              <a
                href="https://www.linkedin.com/in/ts-mendez/"
                target="blank"
                className="flex gap-4 items-center "
              >
                <SiLinkedin className="size-10" />
                /ts-mendez
              </a>
            </li>
            <li className="opacity-50 hover:opacity-100">
              <a
                href="https://www.instagram.com/to.mendez/"
                target="blank"
                className="flex gap-4 items-center "
              >
                <SiInstagram className="size-10" />
                /to.mendez
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
