import { Contact } from "./sections/Contact";
import { Navbar } from "./components/Navbar";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Project } from "./sections/Project";
import { AISection } from "./sections/AISection";
import { GitHubProjects } from "./sections/GitHubProjects";
import { useState } from "react";
import {Testimonials} from "./sections/Testimonials";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
  className={`min-h-screen transition-all duration-500 ${
    darkMode
      ? "bg-[#050509] text-white"
      : "bg-gray-100 text-black"
  }`}
>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Project />
        <AISection />
        <GitHubProjects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App
