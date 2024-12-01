import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ComponentType } from "react";

export type SkillRating = 1 | 2 | 3 | 4 | 5;

export interface ProjectCardProps {
  image: string | StaticImport;
  title: string;
  href: string;
  description: string;
  skills: ComponentType[];
  footer?: string;
}

export interface ExperienceCardProps {
  company: {
    name: string;
    logo: StaticImport | string;
    location: string;
    href: string;
  };
  position: {
    title: string;
    type: string;
    startMonthYear: string;
    endMonthYear: string;
    availability: "On-Site" | "Remote" | "Hybrid";
  };
  skills: ComponentType[];
  description: string[];
  credentialUrl?: string | null;
}

export interface SkillCardProps {
  title: string;
  skills: {
    chip: React.ComponentType<{ rating: SkillRating }>;
    rating: SkillRating;
  }[];
}

export interface AchievementCardProps {
  logo: StaticImport | string;
  title: string;
  monthYear: string;
  issuer: {
    name: string;
    href: string;
  };
  eventType?: "Individual" | "Team";
  eventMode?: "Online" | "On-Site";
  credentialUrl?: string;
  result: string;
  isNotEvent?: boolean;
}
