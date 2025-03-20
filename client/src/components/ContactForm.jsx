import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { inputStyle, submitStyle } from "@/styles";
import { useStore } from "../store/store";

export const ContactForm = () => {
  const dark = useStore((state) => state.dark);
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
        <label htmlFor="user_name">Name</label>
        <input
          type="text"
          name="user_name"
          value={name}
          onChange={handleNameChange}
          className={`${inputStyle} ${dark ? "border-yellow" : "border-dark"}`}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="user_email">Email</label>
        <input
          type="email"
          name="user_email"
          value={email}
          onChange={handleEmailChange}
          className={`${inputStyle} ${dark ? "border-yellow" : "border-dark"}`}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={message}
          rows={5}
          onChange={handleMessageChange}
          required
          className={`border-2 p-4 resize-none rounded-2xl ${
            dark ? "border-yellow" : "border-dark"
          }`}
        />
      </div>
      <input
        type="submit"
        value="Contact me!"
        className={`${submitStyle} ${dark ? "border-yellow" : "border-dark"}`}
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
