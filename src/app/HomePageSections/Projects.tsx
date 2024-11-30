import React from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="bg-primary-50">
      <div className="wrapper py-20 space-y-4">
        <p className="text-4xl text-center font-serif font-semibold leading-relaxed">
          Projects
        </p>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-3">
          {projects.map((x, idx) => (
            <ProjectCard {...x} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
