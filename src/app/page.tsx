import Achievements from "./HomePageSections/Achievements";
import Experience from "./HomePageSections/Experience";
import Home from "./HomePageSections/Home";
import Projects from "./HomePageSections/Projects";
import Skills from "./HomePageSections/Skills";

export default function PortfolioPage() {
  return (
    <>
      <Home />
      <Projects />
      <Experience />
      <Skills />
      <Achievements />
    </>
  );
}
