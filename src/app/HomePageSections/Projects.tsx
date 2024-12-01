import React from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Projects() {
  return (
    <section id="projects" className="bg-primary-50">
      <div className="wrapper py-20 space-y-4">
        <p className="flex flex-col text-4xl text-center font-serif font-semibold leading-relaxed">
          Projects
        </p>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-3">
          {projects.map((x, idx) => (
            <ProjectCard {...x} key={idx} />
          ))}
        </div>
        <Link
          className="flex w-fit mx-auto gap-2 hover:gap-3 duration-100 items-center text-lg text-primary-500 font-normal"
          href="/projects"
        >
          Explore more
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}
