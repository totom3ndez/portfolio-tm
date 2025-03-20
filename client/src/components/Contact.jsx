import React from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { ContactForm } from "./ContactForm";

const Contact = () => {
  return (
    <section className="w-full h-[70%]" id="contact" aria-label="Contact Section">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4 text-center mt-30">Contact</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 p-6">
          I am always open to discussing new projects, creative ideas or
          opportunities to be part of your visions.
        </p>
        <ContactForm />
        <nav aria-label="Social Links">
          <ul className="flex flex-col justify-center items-left gap-8 lg:gap-4 text-2xl">
            <li className="opacity-50 hover:opacity-100 transition-opacity">
              <a
                href="https://github.com/totom3ndez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-center"
                aria-label="GitHub Profile"
              >
                <SiGithub className="size-10" aria-hidden="true" />
                <span>/totom3ndez</span>
              </a>
            </li>
            <li className="opacity-50 hover:opacity-100 transition-opacity">
              <a
                href="https://www.linkedin.com/in/ts-mendez/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-center"
                aria-label="LinkedIn Profile"
              >
                <SiLinkedin className="size-10" aria-hidden="true" />
                <span>/ts-mendez</span>
              </a>
            </li>
            <li className="opacity-50 hover:opacity-100 transition-opacity">
              <a
                href="https://www.instagram.com/to.mendez/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-center"
                aria-label="Instagram Profile"
              >
                <SiInstagram className="size-10" aria-hidden="true" />
                <span>/to.mendez</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Contact;
