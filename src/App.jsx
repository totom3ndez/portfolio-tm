import { useState } from "react";
import { Navbar, Hero, Projects } from "./components";
import { useEffect } from "react";
import Contact from "./components/Contact";

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("preferred-theme");
    if (savedTheme) {
      setDark(savedTheme);
    }
  }, []);

  const handleTheme = () => {
    const newTheme = dark ? "light" : "dark";
    setDark(!dark);
    localStorage.setItem("preferred-theme", newTheme);
  };

  return (
    <>
      <div
        id="home"
        className={`${
          dark
            ? `lg:bg-radial-[at_30%_15%] to-slate-900 from-slate-700 lg:to-30% text-white 
            bg-gradient-to-b to-40%`
            : "bg-zinc-100 text-slate-900"
        } w-full flex flex-col items-center transition-all ease-in-out duration-600`}
      >
        <Navbar dark={dark} handleTheme={handleTheme} />
        <Hero dark={dark} />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
