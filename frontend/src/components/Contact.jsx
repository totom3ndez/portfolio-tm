import React, { useState, useEffect, useRef } from "react";
import Slider from "./Slider";
import {
  LuMessageCircleHeart,
  LuMessageCircleCode,
  LuMessageCircleMore,
  LuSend,
} from "react-icons/lu";
import NewInput from "./NewInput";
import { useStore } from "../store/store";

const Contact = () => {
  const dark = useStore((state) => state.dark);
  const [isPassed, setIsPassed] = useState(false);
  const targetRef = useRef(null);

  const [data, setData] = useState({ name: "", email: "", message: "" });
  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsPassed(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(target);

    return () => observer.disconnect(); // Properly clean up the observer
  }, [targetRef, setIsPassed]); //Added dependencies to useEffect

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const form = targetRef.current;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = data.email
      const subject = `Email send from portfolio by ${data.name}`
      const message = data.message

      try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL, { // or your backend URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, subject, message }),
        });

        if (response.ok) {
          alert('Email sent successfully!');
        } else {
          alert('Failed to send email.');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred.');
      }
    });
  })

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
        >
          <h3 className="text-xl m-4">Let's work together</h3>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 mb-4">
            <NewInput
              type="text"
              label="Name"
              name="name"
              style="div2 relative col-span-2"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 mb-4">
            <NewInput
              type="email"
              label="Email"
              name="email"
              style="div2 relative col-span-2"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="input_group relative">
            <textarea
              className="input resize-none rounded-full invalid:text-red-300 invalid:border-red-300"
              name="message"
              id="message"
              value={data.message}
              onChange={handleChange}
              required
              autoComplete="off"
            ></textarea>
            <label
              htmlFor="message"
              className={`${
                dark ? "bg-dark p-2" : "bg-zinc-100 p-2 text-dark"
              } user-label`}
            >
              Message
            </label>
          </div>
          <div className="flex mt-4">
            <button
              className="flex gap-2 items-center justify-center mx-auto w-full lg:w-1/2 p-4 bg-yellow lg:opacity-50 text-dark rounded-full hover:opacity-100 group"
              type="submit"
            >
              Send message!
              <LuSend className="group-hover:transform group-hover:rotate-45 transition ease-in-out" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
