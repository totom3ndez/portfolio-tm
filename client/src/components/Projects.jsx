import { useStore } from "../store/store";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const st_project_container = `mx-auto py-30 h-auto w-full flex flex-col gap-20 items-center overflow-hidden text-zinc-100  
  bg-gradient-to-b to-40% project_container`;

export const Projects = () => {
  const dark = useStore((state) => state.dark);

  return (
    <>
      <div
        id="projects"
        className={`${st_project_container} ${dark ? "bg-dark" : "bg-white"}`}
      >
        <h2 className="text-center text-3xl mb-10 font-bold">Projects</h2>
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
