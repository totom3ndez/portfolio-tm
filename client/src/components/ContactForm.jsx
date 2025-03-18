import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { inputStyle } from "../styles";

export const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submited, setSubmited] = useState(false);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jh0ctla", "template_uajcwjr", form.current, {
        publicKey: "q1ynnGWbwJFqN4G2i",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setName("");
          setEmail("");
          setMessage("");
          setSubmited(true);
          setTimeout(() => {
            setSubmited(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col w-full lg:w-1/3 mx-2 mb-15 gap-6 p-10"
    >
      <div className="flex flex-col">
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          value={name}
          onChange={handleNameChange}
          className={inputStyle}
          required
        />
      </div>
      <div className="flex flex-col">
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          value={email}
          onChange={handleEmailChange}
          className={inputStyle}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Message</label>
        <textarea
          name="message"
          value={message}
          rows={5}
          onChange={handleMessageChange}
          required
          className="border-2 border-yellow p-4 resize-none rounded-2xl"
        />
      </div>
      <input
        type="submit"
        value="Contact me!"
        className=" p-4 border-2 border-yellow row-start-3 col-span-2 rounded-2xl hover:bg-yellow hover:text-black cursor-pointer transition-colors ease-in-out duration-500"
      />
      <div className="relative w-full h-fit">
        {submited && (
          <p className="absolute transform translate-x-40 text-green-500">
            Message sent!
          </p>
        )}
      </div>
    </form>
  );
};
