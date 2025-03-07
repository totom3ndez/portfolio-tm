import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Slider from "./Slider";
import { HiMiniCodeBracket } from "react-icons/hi2";

export const Projects = () => {
  //  ---------------- STYLES ---------------- //
  const st_project_container = `mx-auto py-50 h-auto w-full flex flex-col gap-20 items-center overflow-hidden text-zinc-100 lg:bg-radial-[at_60%_50%] to-slate-900 from-slate-700 lg:to-70% 
  bg-gradient-to-b to-40% project_container`;
  //  ---------------- STYLES ---------------- //
  return (
    <>
      <Slider
        id="projects"
        text="Projects"
        side="left"
        icon1={<HiMiniCodeBracket />}
        icon2={<HiMiniCodeBracket />}
        icon3={<HiMiniCodeBracket />}
      />
      <div className={st_project_container}>
        {projects.map(
          ({ name, description, skills, url, imgUrl, imgAlt }, index) => (
            <ProjectCard
              name={name}
              description={description}
              skills={skills}
              key={index}
              url={url}
              imgUrl={imgUrl}
              imgAlt={imgAlt}
            />
          )
        )}
      </div>
    </>
  );
};
