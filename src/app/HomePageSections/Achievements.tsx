import { AchievementCard } from "@/components/AchievementCard";
import { achievements } from "@/data/achievements";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="wrapper py-20 space-y-4">
        <p className="text-4xl text-center font-serif font-semibold leading-relaxed">
          Achievements
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {achievements.map((x, idx) => (
            <AchievementCard {...x} key={idx} />
          ))}
        </div>
        <Link
          className="flex w-fit mx-auto gap-2 hover:gap-3 duration-100 items-center text-lg text-primary-500 font-normal"
          href="/under-development"
        >
          View more
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}
