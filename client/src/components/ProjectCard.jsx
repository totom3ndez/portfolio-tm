import React, { useState, useEffect, useRef } from "react";
import { st_skills, st_project_card } from "../styles";

const ProjectCard = ({
  index,
  name,
  description,
  skills,
  url,
  imgUrl,
  imgAlt,
}) => {
  const cardRef = useRef(null);

  const [isPassed, setIsPassed] = useState(false);
  useEffect(() => {
    const card = cardRef.current;

    if (!card) return; // Make sure cardRef is not null

    const observer = new IntersectionObserver(
      ([entry]) => setIsPassed(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(card);

    const handleMouseEnter = () => {
      const skillElements = card.querySelectorAll("#project_skills span");

      skillElements.forEach((skill, skillIndex) => {
        // Use requestAnimationFrame for smoother animations
        requestAnimationFrame(() => {
          skill.style.animation = `fadeDown 1s ease forwards`;
          skill.style.animationDelay = `${0.2 * (skillIndex + 1)}s`;
        });
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      observer.disconnect();
      card.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);
  return (
    <div
      ref={cardRef}
      key={index}
      className={`${isPassed ? "opacity-0" : "cardPassed"} ${st_project_card}`}
      style={{ backgroundImage: `url(${imgUrl})` }}
      title={imgAlt}
    >
      <h2
        id="project_name"
        className="text-4xl lg:text-8xl font-bold text-shadow z-10"
      >
        {name}
      </h2>
      <p id="project_description" className="lg:hidden lg:w-3xl z-10">
        {description}
      </p>
      <p
        id="project_skills"
        className="lg:hidden z-10 gap-4 mt-6 flex flex-wrap"
      >
        {skills.map((skill, skillIndex) => (
          <span key={skillIndex} className={st_skills}>
            {skill}
            <br />
          </span>
        ))}
      </p>
      <button className="z-10 lg:hidden mt-6 button_TM_primary rounded-2xl">
        <a href={url} target="blank">
          Visit project
        </a>
      </button>
    </div>
  );
};

export default ProjectCard;
