import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  CSharpChip,
  ASPChip,
  MachineLearningChip,
  PythonChip,
  APIChip,
  JavaChip,
  AndroidStudioChip,
  PowerBIChip,
  TypescriptChip,
  ExpressChip,
  MySQLChip,
  ReactChip,
  SQLServerChip,
  PandasChip,
  NumpyChip,
  DataScienceChip,
  SeleniumChip,
  JavascriptChip,
  SwaggerChip,
} from "@/components/SkillChips";

import k12Logo from "@/public/experience/k12-aa.png";
import estromeLogo from "@/public/experience/estrome_technologies_logo.jpeg";
import aiCanLogo from "@/public/experience/ai_can_co_in_logo.jpeg";
import designAndCodeLogo from "@/public/experience/designandcode-logo.png";
import { ExperienceCardProps } from "@/interfaces";

export const experiences: ExperienceCardProps[] = [
  {
    company: {
      name: "K12 Activity Academy",
      logo: k12Logo,
      location: "Bengaluru, Karnataka",
      href: "https://www.k12aa.com/",
    },
    position: {
      title: "ITSSB Competitor WorldSkills 2024",
      type: "Training",
      startMonthYear: "Jun 2024",
      endMonthYear: "Aug 2024",
      availability: "On-Site",
    },
    skills: [
      CSharpChip,
      PythonChip,
      JavaChip,
      ASPChip,
      SQLServerChip,
      AndroidStudioChip,
      PowerBIChip,
      MachineLearningChip,
      APIChip,
    ],
    description: [
      "Trained to represent India at the 47th WorldSkills Competition",
      "Secured 14th position globally in ITSSB, achieving India's second-best performance in the skill's history till 2024.",
    ],
    credentialUrl:
      "https://drive.google.com/file/d/1z4WXZLo_W8Bb682HB12wxtD9GXzoQ7d-/view?usp=sharing",
  },
  {
    company: {
      name: "Estrome Technologies",
      logo: estromeLogo,
      location: "Lucknow, Uttar Pradesh",
      href: "https://www.estrome.com/",
    },
    position: {
      title: "Backend Web Developer Intern",
      type: "Internship",
      startMonthYear: "Jun 2023",
      endMonthYear: "Aug 2023",
      availability: "On-Site",
    },
    skills: [TypescriptChip, ExpressChip, ReactChip, MySQLChip, APIChip],
    description: [
      "Developed backend APIs for company's lead management system including role based access control, authorization, etc.",
      "Deployed the project to production on cPanel.",
      "Worked on company's landing page.",
    ],
    credentialUrl:
      "https://drive.google.com/file/d/19hPVxeiFMGJccggl7A7P2Hd4iC5A8DQk/view?usp=drive_link",
  },
  {
    company: {
      name: "AICAN Automate",
      logo: aiCanLogo,
      location: "Mumbai, Maharashtra",
      href: "https://aican.co.in/",
    },
    position: {
      title: "Data Science Intern",
      type: "Internship",
      startMonthYear: "Jul 2022",
      endMonthYear: "Aug 2022",
      availability: "Remote",
    },
    skills: [PythonChip, PandasChip, NumpyChip, DataScienceChip],
    description: [
      "Developed a Countdown Timer application using Python and Tkinter, showcasing proficiency in GUI programming and time-based logic.",
      "Performed Exploratory Data Analysis (EDA), including data cleaning, visualization, and training machine learning models tailored to diverse datasets.",
      "Collaborated with interns to develop a Bike Price Prediction model, applying data preprocessing, feature engineering, and predictive analytics.",
    ],
    credentialUrl:
      "https://drive.google.com/file/d/1WorN5l1dHoSmfU0MrpuWry-favY_lDos/view?usp=sharing",
  },
  {
    company: {
      name: "D&C Studios",
      logo: designAndCodeLogo,
      location: "Mumbai, Maharashtra",
      href: "https://designandcode.tech/",
    },
    position: {
      title: "Software Engineer Intern",
      type: "Internship",
      startMonthYear: "Oct 2021",
      endMonthYear: "Mar 2022",
      availability: "Remote",
    },
    skills: [JavascriptChip, CSharpChip, PythonChip, SeleniumChip, SwaggerChip],
    description: [
      "Developed responsive websites using HTML, CSS, JavaScript, and Node.js, showcasing proficiency in full-stack web development.",
      "Built a desktop application using C# for email marketing and implemented web automation scripts using proxies and Selenium.",
      "Maintained well-documented, reusable code and provided post-production technical support for seamless application functionality.",
    ],
    credentialUrl:
      "https://drive.google.com/file/d/1hFiX2XLnTsRjCAwGBsZ2BqnnUzl0tkNM/view?usp=sharing",
  },
];
