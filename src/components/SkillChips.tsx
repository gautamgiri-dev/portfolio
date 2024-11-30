"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { IconType } from "react-icons";
import { BiLogoTypescript } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { FaAndroid, FaReact } from "react-icons/fa";
import { FaJava, FaNodeJs, FaNpm, FaPython } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { LuBrainCircuit } from "react-icons/lu";
import {
  SiAlwaysdata,
  SiDotnet,
  SiExpress,
  SiFlask,
  SiNumpy,
  SiPandas,
  SiPowerbi,
  SiSelenium,
  SiSwagger,
} from "react-icons/si";
import { TbApi, TbBrandCSharp, TbFileTypeXml, TbSql } from "react-icons/tb";

const skillColorMapper = {
  Python: "yellow",
  "Machine Learning": "blue",
  Flask: "emerald",
  Java: "amber",
  "Android Studio": "green",
  XML: "orange",
  React: "cyan",
  Typescript: "blue",
  npm: "red",
  "C#": "indigo",
  "ASP .NET": "violet",
  "Rest API": "slate",
  PowerBI: "orange",
  Express: "stone",
  MySQL: "sky",
  "Sql Server": "red",
  Pandas: "violet",
  Numpy: "purple",
  "Data Science": "blue",
  Selenium: "green",
  NodeJS: "emerald",
  Javascript: "yellow",
  Swagger: "zinc",
};

export function SkillChip(props: {
  icon: IconType;
  label: keyof typeof skillColorMapper;
}) {
  const color = skillColorMapper[props.label];
  return (
    <span
      className={cn(
        "rounded-lg py-1 px-2 text-sm flex items-center justify-center gap-2",
        `bg-${color}-100 text-${color}-700`
      )}
    >
      <props.icon />
      {props.label}
    </span>
  );
}

export function PythonChip() {
  return <SkillChip icon={FaPython} label="Python" />;
}

export function MachineLearningChip() {
  return <SkillChip icon={LuBrainCircuit} label="Machine Learning" />;
}

export function FlaskChip() {
  return <SkillChip icon={SiFlask} label="Flask" />;
}

export function JavaChip() {
  return <SkillChip icon={FaJava} label="Java" />;
}

export function AndroidStudioChip() {
  return <SkillChip icon={FaAndroid} label="Android Studio" />;
}

export function XMLChip() {
  return <SkillChip icon={TbFileTypeXml} label="XML" />;
}

export function ReactChip() {
  return <SkillChip icon={FaReact} label="React" />;
}

export function TypescriptChip() {
  return <SkillChip icon={BiLogoTypescript} label="Typescript" />;
}

export function ExpressChip() {
  return <SkillChip icon={SiExpress} label="Express" />;
}

export function NPMChip() {
  return <SkillChip icon={FaNpm} label="npm" />;
}

export function CSharpChip() {
  return <SkillChip icon={TbBrandCSharp} label="C#" />;
}

export function ASPChip() {
  return <SkillChip icon={SiDotnet} label="ASP .NET" />;
}

export function APIChip() {
  return <SkillChip icon={TbApi} label="Rest API" />;
}

export function PowerBIChip() {
  return <SkillChip icon={SiPowerbi} label="PowerBI" />;
}

export function MySQLChip() {
  return <SkillChip icon={GrMysql} label="MySQL" />;
}

export function SQLServerChip() {
  return <SkillChip icon={TbSql} label="Sql Server" />;
}

export function PandasChip() {
  return <SkillChip icon={SiPandas} label="Pandas" />;
}

export function NumpyChip() {
  return <SkillChip icon={SiNumpy} label="Numpy" />;
}

export function DataScienceChip() {
  return <SkillChip icon={SiAlwaysdata} label="Data Science" />;
}

export function SeleniumChip() {
  return <SkillChip icon={SiSelenium} label="Selenium" />;
}

export function JavascriptChip() {
  return <SkillChip icon={DiJavascript} label="Javascript" />;
}

export function NodeJsChip() {
  return <SkillChip icon={FaNodeJs} label="NodeJS" />;
}

export function SwaggerChip() {
  return <SkillChip icon={SiSwagger} label="Swagger" />;
}
