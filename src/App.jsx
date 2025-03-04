import { useState } from "react";
import { Navbar, Hero } from "./components";
import { useEffect } from "react";
import FloatingContact from "./components/FloatingContact";

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
          dark ? "bg-slate-900 text-white" : "bg-zinc-100 text-slate-900"
        } w-full flex flex-col items-center h-screen transition-all ease-in-out duration-600 `}
      >
        <FloatingContact />
        <Navbar dark={dark} handleTheme={handleTheme} />
        <Hero dark={dark} />
      </div>
    </>
  );
}

export default App;
