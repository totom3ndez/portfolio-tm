import React from "react";
import { useEffect, useRef } from "react";

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
  //  ---------------- STYLES ---------------- //
  const st_skills = `p-2 text-zinc-100 rounded-full bg-gradient-to-br cursor-default from-slate-900 to-slate-700 hover:transform hover:scale-105 transition-all ease-in-out duration-300`;
  const st_project_card = `project_card flex hover:flex-col group relative items-center justify-center h-[600px] w-[1300px] bg-center  transition-all ease-in-out duration-500 rounded-full hover:w-[150%] gap-4 z-0`;
  //  ---------------- STYLES ---------------- //

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return; // Make sure cardRef is not null

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
      card.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);
  return (
    <div
      ref={cardRef}
      key={index}
      className={st_project_card}
      style={{ backgroundImage: `url(${imgUrl})` }}
      title={imgAlt}
    >
      <h2 id="project_name" className="text-8xl font-bold text-shadow z-10">
        {name}
      </h2>
      <p id="project_description" className="hidden w-3xl z-10">
        {description}
      </p>
      <p id="project_skills" className="hidden z-10 gap-4 mt-6">
        {skills.map((skill, skillIndex) => (
          <span key={skillIndex} className={st_skills}>
            {skill}
            <br />
          </span>
        ))}
      </p>
      <button className="z-10 hidden mt-6 button_TM_primary">
        <a href={url} target="blank">
          Visit project
        </a>
      </button>
    </div>
  );
};

export default ProjectCard;
