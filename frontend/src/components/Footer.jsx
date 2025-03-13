import React from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-50 ">
      <ul className="flex justify-center items-center gap-8 lg:gap-4 text-2xl">
        <li>
          <a href="https://github.com/totom3ndez" target="blank">
            <SiGithub className="opacity-50 hover:opacity-100" />
          </a>
        </li>
        <a href="https://www.linkedin.com/in/ts-mendez/" target="blank">
          <SiLinkedin className="opacity-50 hover:opacity-100" />
        </a>
        <li>
          <a href="https://www.instagram.com/to.mendez/" target="blank">
            <SiInstagram className="opacity-50 hover:opacity-100" />
          </a>
        </li>
        <li></li>
      </ul>
      <p className="flex flex-col text-center opacity-50 w-3/4">
        <span>Copyright © 2025 Tomas Mendez.</span>
        <span> All Rights Reserved.</span>
      </p>
    </div>
  );
};

export default Footer;
