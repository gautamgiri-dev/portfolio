import faceFitCover from "@/public/projects/facefit-logo.png";
import margdarshanCover from "@/public/projects/career-guidance-system.jpeg";
import abacusViewCover from "@/public/projects/abacus-view.gif";
import simpleReactTableCover from "@/public/projects/simple-react-table.jpeg";
import expenseReporterCover from "@/public/projects/expense-reporter.png";
import cuhResultPortalCover from "@/public/projects/cuh-result-portal.png";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  AndroidStudioChip,
  FlaskChip,
  JavaChip,
  MachineLearningChip,
  NPMChip,
  PythonChip,
  ReactChip,
  TypescriptChip,
  XMLChip,
} from "@/components/SkillChips";
import { ComponentType } from "react";

export interface ProjectCardProps {
  image: string | StaticImport;
  title: string;
  href: string;
  description: string;
  skills: ComponentType[];
  footer?: string;
}

export const projects: ProjectCardProps[] = [
  {
    title: "FaceFit",
    description:
      "A smart tool that analyzes facial beauty and symmetry, offering insights and recommendations.",
    href: "#",
    footer: "Developed as a part of final year minor project.",
    image: faceFitCover,
    skills: [PythonChip, MachineLearningChip, FlaskChip],
  },
  {
    title: "AbacusView",
    description:
      "A custom reusable and cool abacus component library which is ready to use in other projects.",
    footer: "Developed as a embeddable component of another project CoAbacus.",
    href: "https://github.com/Coearners/abacusview",
    image: abacusViewCover,
    skills: [JavaChip, AndroidStudioChip, XMLChip],
  },
  {
    title: "MargDarshan",
    description:
      "It aims to provide future career choices based on several parameters of the student.",
    footer: "Developed as a part of Intra College Smart India Hackathon 2022.",
    href: "https://github.com/gautamgiri-dev/CareerGuidanceSystem",
    image: margdarshanCover,
    skills: [PythonChip, MachineLearningChip, FlaskChip],
  },
  {
    title: "Expense Reporter",
    description:
      "A user-friendly mobile application for tracking and managing expenses and reporting reimbursements.",
    footer: "Developed as a part of training of WorldSkills 2024.",
    href: "https://github.com/gautamgiri-dev/simple-react-table",
    image: expenseReporterCover,
    skills: [JavaChip, AndroidStudioChip],
  },
  {
    title: "Simple React Table",
    description:
      "A customizable and lightweight type-safe React table component with advanced features.",
    href: "https://github.com/gautamgiri-dev/ExpenseReporter",
    image: simpleReactTableCover,
    footer: "Developed during internship at Estrome Technologies",
    skills: [ReactChip, TypescriptChip, NPMChip],
  },
  {
    title: "CUH Result Portal",
    description:
      "Result Portal for Central University of Haryana. Supports server side rendered marksheets.",
    href: "https://github.com/gautamgiri-dev/CUH-Result-Portal",
    footer: "Developed as a part of College Science Day Competition.",
    image: cuhResultPortalCover,
    skills: [PythonChip, ReactChip, FlaskChip],
  },
];
