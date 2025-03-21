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

export const skills = [
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

export const interest = [
  "👨🏼‍💻 Coding",
  "⚽ Soccer",
  "📷 Photography",
  "🎮 Games",
  "✈️ Travel",
  "🐕 Animals",
];

export const certificates = [
  {
    name: "React Basics",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/C4E0BAQFdNatYGiBelg/company-logo_100_100/company-logo_100_100/0/1636138754252/facebook_logo?e=1747872000&v=beta&t=lxxe8tHe6uCWBQ6NmF_oZx9Q08B2x4ZTt5jIyYCmU8k",
    imgAlt: "Meta logo",
    credential:
      "https://www.coursera.org/account/accomplishments/verify/RN15K335TJOO",
  },
  {
    name: "HTML & CSS in depth",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/C4E0BAQFdNatYGiBelg/company-logo_100_100/company-logo_100_100/0/1636138754252/facebook_logo?e=1747872000&v=beta&t=lxxe8tHe6uCWBQ6NmF_oZx9Q08B2x4ZTt5jIyYCmU8k",
    imgAlt: "Meta logo",
    credential: "https://coursera.org/share/fdc2f2a8ee314d8f8a7429e44630c914",
  },
  {
    name: "Version Control",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/C4E0BAQFdNatYGiBelg/company-logo_100_100/company-logo_100_100/0/1636138754252/facebook_logo?e=1747872000&v=beta&t=lxxe8tHe6uCWBQ6NmF_oZx9Q08B2x4ZTt5jIyYCmU8k",
    imgAlt: "Meta logo",
    credential:
      "https://www.coursera.org/account/accomplishments/records/T6JMKNOSKJ9O",
  },
  {
    name: "Responsive Web Design",
    imgUrl:
      "https://media.licdn.com/dms/image/v2/C4E0BAQGLKj3JHcof0w/company-logo_100_100/company-logo_100_100/0/1630639684997/free_code_camp_logo?e=1747872000&v=beta&t=qkpKVO7zgYbUiqThO1mZ4eBIYudXcuKml5u-iNLVknQ",
    imgAlt: "freeCodeCamp logo",
    credential:
      "https://freecodecamp.org/certification/TotoMendez/responsive-web-design",
  },
];

export const boxStyle = `relative flex flex-col lg:w-full w-3/4 mx-auto text-left p-4 border-1 border-slate-700 rounded-2xl h-fit`;
export const pillStyle = `py-2 px-4 rounded-full bg-slate-800 h-fit w-fit text-white`;
export const flagText = "hidden lg:flex gap-4";
export const subTitleStyle =
  "text-xl mb-4 text-center lg:text-left font-bold z-5";
export const certificateStyle =
  "flex gap-2 w-full text-white lg:w-fit items-center p-2 bg-slate-800 hover:bg-slate-700 transition ease-in-out rounded-full";
