import React, { useState, useEffect, useRef } from "react";
import Slider from "./Slider";
import Footer from "./Footer";
import {
  LuMessageCircleHeart,
  LuMessageCircleCode,
  LuMessageCircleMore,
  LuSend,
} from "react-icons/lu";
import NewInput from "./newInput";

const Contact = () => {
  const [isPassed, setIsPassed] = useState(false);
  const targetRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsPassed(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(target);

    return () => observer.disconnect(); // Properly clean up the observer
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

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
        <form
          ref={targetRef}
          className={`relative lg:w-1/3 w-full mx-auto ${
            isPassed ? "opacity-0" : "passed"
          }`}
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl m-4">Let's work together</h3>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 mb-4">
            <NewInput
              type="text"
              label="First name"
              name="firstName"
              style="div1"
              value={name}
              onChange={handleChange}
            />
            <NewInput
              type="email"
              label="Email"
              name="email"
              style="div2 relative"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="input_group relative">
            <textarea
              className="input resize-none invalid:text-red-300 invalid:border-red-300"
              name="message"
              id="message"
              value={message}
              onChange={handleChange}
              required
              autoComplete="off"
            ></textarea>
            <label htmlFor="message" className="user-label">
              Message
            </label>
          </div>
          <div className="flex mt-4">
            <button
              className="flex gap-2 items-center justify-center mx-auto w-full lg:w-1/2 p-4 bg-yellow-200 lg:opacity-50 text-slate-900 rounded-full hover:opacity-100 group"
              type="submit"
            >
              Send message!
              <LuSend className="group-hover:transform group-hover:rotate-45 transition ease-in-out" />
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
