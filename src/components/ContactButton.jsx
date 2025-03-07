import { useState, useEffect, useRef } from "react";
import { LuArrowRight } from "react-icons/lu";

const ContactButton = () => {
  const [isPassed, setIsPassed] = useState(false);

  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) =>
        setIsPassed(
          (prev) => prev !== !entry.isIntersecting && !entry.isIntersecting
        ),
      { threshold: 0.1 }
    );

    observer.observe(target);

    return () => observer.unobserve(target);
  }, []);

  return (
    <div ref={targetRef} className="buttonWrapper relative col-start-2">
      <button
        className={`${
          isPassed
            ? "passed fixed m-4 bottom-0 left-0 backdrop-blur-3xl"
            : "bg-slate-800 "
        } buttonContact group h-fit text-zinc-100 gap-2 rounded-full p-2  border-1 border-zinc-700 flex items-center`}
      >
        <span className="hidden lg:flex">I'm available for work -</span>
        <i className="group-hover:text-yellow-100 transition-colors ease-in">
          get in touch!
        </i>
        <span className="text-xl transform rotate-315 group-hover:rotate-360 transition-all ease-in-out duration-300">
          <LuArrowRight className="group-hover:text-yellow-100 " />
        </span>
      </button>
    </div>
  );
};

export default ContactButton;
