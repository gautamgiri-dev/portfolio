import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";
import React from "react";

export default function Skills() {
  return (
    <section id="projects" className="bg-primary-50">
      <div className="wrapper py-20 space-y-4">
        <p className="text-4xl text-center font-serif font-semibold leading-relaxed">
          Skills
        </p>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-3">
          {skills.map((x, idx) => (
            <SkillCard {...x} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
