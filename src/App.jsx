import { Navbar, Hero, Projects } from "./components";
import Contact from "./components/Contact";
import smoothscroll from "smoothscroll-polyfill";
import Footer from "./components/Footer";
import { useStore } from "./store/store";

// Activate polyfill
smoothscroll.polyfill();

function App() {
  const dark = useStore((state) => state.dark);
  // STYLE
  const st_home = `${
    dark
      ? `bg-dark text-white`
      : "bg-zinc-100 text-dark"
  } w-full flex flex-col items-center transition-all ease-in-out duration-600`;

  // HANDLERS

  return (
    <>
      <div id="home" className={st_home}>
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
