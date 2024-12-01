import {
  AndroidStudioChip,
  ASPChip,
  CSharpChip,
  ExpressChip,
  FlaskChip,
  GitChip,
  GoChip,
  JavaChip,
  JavascriptChip,
  JetpackChip,
  MaterialChip,
  MongoChip,
  MySQLChip,
  NextJsChip,
  PostgresChip,
  PowerBIChip,
  PrismaChip,
  PythonChip,
  ReactChip,
  ReactNativeChip,
  SeleniumChip,
  SequelizeChip,
  SQLServerChip,
  TailwindChip,
  TypescriptChip,
  VisualStudioChip,
} from "@/components/SkillChips";
import { SkillCardProps } from "@/interfaces";

export const skills: SkillCardProps[] = [
  {
    title: "Programming Languages",
    skills: [
      {
        chip: CSharpChip,
        rating: 4,
      },
      {
        chip: PythonChip,
        rating: 4,
      },
      {
        chip: TypescriptChip,
        rating: 4,
      },
      {
        chip: JavascriptChip,
        rating: 3,
      },
      {
        chip: JavaChip,
        rating: 3,
      },
      {
        chip: GoChip,
        rating: 2,
      },
    ],
  },
  {
    title: "Web Technologies & Frameworks",
    skills: [
      {
        chip: FlaskChip,
        rating: 4,
      },
      {
        chip: ExpressChip,
        rating: 4,
      },
      {
        chip: ReactChip,
        rating: 4,
      },
      {
        chip: ASPChip,
        rating: 3,
      },
      {
        chip: NextJsChip,
        rating: 3,
      },
      {
        chip: TailwindChip,
        rating: 3,
      },
    ],
  },
  {
    title: "Mobile Application Development",
    skills: [
      {
        chip: AndroidStudioChip,
        rating: 4,
      },
      {
        chip: ReactNativeChip,
        rating: 3,
      },
      {
        chip: MaterialChip,
        rating: 3,
      },
      {
        chip: JetpackChip,
        rating: 2,
      },
    ],
  },
  {
    title: "Databases & ORMs",
    skills: [
      {
        chip: PrismaChip,
        rating: 4,
      },
      {
        chip: SequelizeChip,
        rating: 4,
      },
      {
        chip: MySQLChip,
        rating: 3,
      },
      {
        chip: PostgresChip,
        rating: 3,
      },
      {
        chip: SQLServerChip,
        rating: 3,
      },
      {
        chip: MongoChip,
        rating: 3,
      },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      {
        chip: VisualStudioChip,
        rating: 4,
      },
      {
        chip: SeleniumChip,
        rating: 4,
      },
      {
        chip: GitChip,
        rating: 3,
      },
      {
        chip: PowerBIChip,
        rating: 3,
      },
    ],
  },
];
