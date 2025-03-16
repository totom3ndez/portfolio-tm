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
} from "react-icons/si";

const About = () => {
  const dark = useStore((state) => state.dark);
  const skills = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "jQuery", icon: <SiJquery /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Sass", icon: <SiSass /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "React", icon: <SiReact /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "npm", icon: <SiNpm /> },
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator /> },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Express", icon: <SiExpress /> },
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
      <h2 className="text-3xl font-bold text-center mt-10">Skills</h2>
      <ul className="w-2/3 p-10 flex gap-4 mx-auto flex-wrap justify-center">
        {skills.map(({ icon }) => (
          <li className="text-5xl flex gap-4 text-white items-center">
            {icon}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
