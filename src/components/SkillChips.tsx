"use client";

import { SkillRating } from "@/interfaces";
import { cn } from "@/lib/utils";
import React from "react";
import { IconType } from "react-icons";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { FaAndroid, FaReact, FaRegStar, FaStar } from "react-icons/fa";
import { FaGolang, FaJava, FaNodeJs, FaNpm, FaPython } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { LuBrainCircuit } from "react-icons/lu";
import {
  SiAlwaysdata,
  SiDotnet,
  SiExpress,
  SiFlask,
  SiGit,
  SiJetpackcompose,
  SiMaterialdesign,
  SiMongodb,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiPowerbi,
  SiPrisma,
  SiSelenium,
  SiSequelize,
  SiSwagger,
  SiTailwindcss,
  SiVisualstudio,
} from "react-icons/si";
import {
  TbApi,
  TbBrandCSharp,
  TbBrandReactNative,
  TbFileTypeXml,
  TbSql,
} from "react-icons/tb";

const skillColorMapper = {
  Python: "yellow",
  "Machine Learning": "blue",
  Flask: "emerald",
  Java: "amber",
  "Android Studio": "green",
  XML: "orange",
  React: "cyan",
  "React Native": "blue",
  Typescript: "blue",
  npm: "red",
  "C#": "indigo",
  "ASP .NET": "violet",
  "Rest API": "slate",
  PowerBI: "orange",
  Express: "stone",
  MySQL: "sky",
  "MS Sql Server": "red",
  Pandas: "violet",
  Numpy: "purple",
  "Data Science": "blue",
  Selenium: "green",
  NodeJS: "emerald",
  Javascript: "yellow",
  Swagger: "zinc",
  GO: "blue",
  NextJS: "default",
  TailwindCSS: "sky",
  Material3: "pink",
  "Jetpack Compose": "emerald",
  Sequelize: "indigo",
  Prisma: "default",
  Postgres: "primary",
  MongoDB: "green",
  "Visual Studio": "violet",
  Git: "red",
};

export function SkillChip(props: {
  icon: IconType;
  label: keyof typeof skillColorMapper;
  rating?: SkillRating;
}) {
  const color = skillColorMapper[props.label];

  if (props.rating)
    return (
      <div
        className={cn(
          "rounded-lg py-1 px-2 text-sm flex items-center justify-between",
          `bg-${color}-100 text-${color}-700`,
          "w-full"
        )}
      >
        <span className="flex items-center gap-2">
          <props.icon />
          {props.label}
        </span>
        <div className="flex items-center">
          {[...Array(5)].map((_, idx) =>
            idx + 1 <= props.rating! ? (
              <FaStar key={idx} />
            ) : (
              <FaRegStar key={idx} />
            )
          )}
        </div>
      </div>
    );

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

export function PythonChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={FaPython} label="Python" rating={props.rating} />;
}

export function MachineLearningChip(props: { rating?: SkillRating }) {
  return (
    <SkillChip
      icon={LuBrainCircuit}
      label="Machine Learning"
      rating={props.rating}
    />
  );
}

export function FlaskChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={SiFlask} label="Flask" rating={props.rating} />;
}

export function JavaChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={FaJava} label="Java" rating={props.rating} />;
}

export function AndroidStudioChip(props: { rating?: SkillRating }) {
  return (
    <SkillChip icon={FaAndroid} label="Android Studio" rating={props.rating} />
  );
}

export function XMLChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={TbFileTypeXml} label="XML" rating={props.rating} />;
}

export function ReactChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={FaReact} label="React" rating={props.rating} />;
}

export function ReactNativeChip(props: { rating?: SkillRating }) {
  return (
    <SkillChip
      icon={TbBrandReactNative}
      label="React Native"
      rating={props.rating}
    />
  );
}

export function TypescriptChip(props: { rating?: SkillRating }) {
  return (
    <SkillChip
      icon={BiLogoTypescript}
      label="Typescript"
      rating={props.rating}
    />
  );
}

export function ExpressChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={SiExpress} label="Express" rating={props.rating} />;
}

export function NPMChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={FaNpm} label="npm" rating={props.rating} />;
}

export function CSharpChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={TbBrandCSharp} label="C#" rating={props.rating} />;
}

export function ASPChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={SiDotnet} label="ASP .NET" rating={props.rating} />;
}

export function APIChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={TbApi} label="Rest API" rating={props.rating} />;
}

export function PowerBIChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={SiPowerbi} label="PowerBI" rating={props.rating} />;
}

export function MySQLChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={GrMysql} label="MySQL" rating={props.rating} />;
}

export function SQLServerChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={TbSql} label="MS Sql Server" rating={props.rating} />;
}

export function PandasChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={SiPandas} label="Pandas" rating={props.rating} />;
}

export function NumpyChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={SiNumpy} label="Numpy" rating={props.rating} />;
}

export function DataScienceChip(props: { rating?: SkillRating }) {
  return (
    <SkillChip icon={SiAlwaysdata} label="Data Science" rating={props.rating} />
  );
}

export function SeleniumChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={SiSelenium} label="Selenium" rating={props.rating} />;
}

export function JavascriptChip(props: { rating?: SkillRating }) {
  return (
    <SkillChip icon={DiJavascript} label="Javascript" rating={props.rating} />
  );
}

export function NodeJsChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={FaNodeJs} label="NodeJS" rating={props.rating} />;
}

export function SwaggerChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={SiSwagger} label="Swagger" rating={props.rating} />;
}

export function GoChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={FaGolang} label="GO" rating={props.rating} />;
}

export function NextJsChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={SiNextdotjs} label="NextJS" rating={props.rating} />;
}

export function TailwindChip(props: { rating?: SkillRating }) {
  return (
    <SkillChip icon={SiTailwindcss} label="TailwindCSS" rating={props.rating} />
  );
}

export function MaterialChip(props: { rating?: SkillRating }) {
  return (
    <SkillChip
      icon={SiMaterialdesign}
      label="Material3"
      rating={props.rating}
    />
  );
}

export function JetpackChip(props: { rating?: SkillRating }) {
  return (
    <SkillChip
      icon={SiJetpackcompose}
      label="Jetpack Compose"
      rating={props.rating}
    />
  );
}

export function PrismaChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={SiPrisma} label="Prisma" rating={props.rating} />;
}

export function SequelizeChip(props: { rating?: SkillRating }) {
  return (
    <SkillChip icon={SiSequelize} label="Sequelize" rating={props.rating} />
  );
}

export function PostgresChip(props: { rating?: SkillRating }) {
  return (
    <SkillChip icon={BiLogoPostgresql} label="Postgres" rating={props.rating} />
  );
}

export function MongoChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={SiMongodb} label="MongoDB" rating={props.rating} />;
}

export function VisualStudioChip(props: { rating?: SkillRating }) {
  return (
    <SkillChip
      icon={SiVisualstudio}
      label="Visual Studio"
      rating={props.rating}
    />
  );
}

export function GitChip(props: { rating?: SkillRating }) {
  return <SkillChip icon={SiGit} label="Git" rating={props.rating} />;
}
