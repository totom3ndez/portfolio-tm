import { useState, useEffect, useRef } from "react";
import { LuArrowRight } from "react-icons/lu";

const ContactButton = () => {
  const [isPassed, setIsPassed] = useState(false);

  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the target is intersecting and the direction of scroll
        const boundingRect = entry.boundingClientRect;
        const isScrollingDown = boundingRect.top < 0;

        if (!entry.isIntersecting && isScrollingDown) {
          setIsPassed(true);
        } else {
          setIsPassed(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={targetRef}
      className="buttonWrapper relative col-start-2 group text-xl"
    >
      <a
        href="#contact"
        className={`${
          isPassed ? "passed fixed m-4 bottom-0 left-0 backdrop-blur-3xl" : ""
        } buttonContact group h-fit gap-2 rounded-full p-2  border-1 border-zinc-700 flex items-center`}
      >
        <span className="hidden lg:flex">I'm available for work -</span>
        <i className="group-hover:text-yellow-400 group-hover: transition-colors ease-in">
          get in touch!
        </i>
        <span className="text-xl transform rotate-315 group-hover:rotate-360 transition-all ease-in-out duration-300">
          <LuArrowRight className="group-hover:text-yellow-100 " />
        </span>
      </a>
    </div>
  );
};

export default ContactButton;
