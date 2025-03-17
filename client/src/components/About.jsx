import { useStore } from "../store/store";
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiReact,
  SiGithub,
  SiNpm,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiVercel,
  SiExpress,
  SiSass,
  SiJquery,
  SiAstro,
} from "react-icons/si";

const About = () => {
  const dark = useStore((state) => state.dark);
  const skills = [
    { name: "JavaScript", icon: <SiJavascript />, color: "#efd81d" },
    { name: "CSS3", icon: <SiCss3 />, color: "#0663f4" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#e96228" },
    { name: "jQuery", icon: <SiJquery />, color: "#1066a9" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#15b8c5" },
    { name: "Sass", icon: <SiSass />, color: "#c66394" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#5c9352" },
    { name: "React", icon: <SiReact />, color: "#1399c4" },
    { name: "GitHub", icon: <SiGithub />, color: "882e95" },
    { name: "npm", icon: <SiNpm />, color: "#cd3e3d" },
    {
      name: "Adobe Illustrator",
      icon: <SiAdobeillustrator />,
      color: "#ff9d08",
    },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop />, color: "#37abff" },
    { name: "Vercel", icon: <SiVercel />, color: "#882e95" },
    { name: "Express", icon: <SiExpress />, color: "#f7e124" },
    { name: "Astro", icon: <SiAstro />, color: "#df3070" },
  ];

  return (
    <section id="about">
      <h2 className="text-3xl font-bold text-center mt-30">About me</h2>
      <p
        className={`p-10 lg:text-xl lg:w-1/2 mx-auto ${
          dark ? "text-white" : "text-dark"
        }`}
      >
        Hey there 👋 I'm a web dev student who loves turning ideas into
        stunning, user-friendly websites. ✨ Whether it's CSS or JavaScript, I'm
        all in for creating smooth, eye-catching online experiences. 🚀 Let's
        make something awesome! 🪄
      </p>
      <div className="items-center skills_container h-[800px] perspective-dramatic">
        <h2 className="text-3xl font-bold text-center mt-10 w-fit mx-auto">
          Skills
        </h2>
        <ul className="w-fit p-10 grid grid-cols-4 gap-4 grid-rows-4 mx-auto justify-center">
          {skills.map(({ icon, name }) => (
            <li key={name} className={`flex gap-4 items-center ${name}`}>
              {icon}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
