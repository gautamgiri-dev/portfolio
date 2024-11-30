import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";
import React from "react";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrapper py-20 space-y-4">
        <p className="text-4xl text-center font-serif font-semibold leading-relaxed">
          Experience
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {experiences.map((x, idx) => (
            <div className="mx-auto text-sm lg:text-base" key={idx}>
              <ExperienceCard {...x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
