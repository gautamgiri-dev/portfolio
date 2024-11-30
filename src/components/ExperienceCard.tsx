import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { Divider } from "@nextui-org/react";
import { ExperienceCardProps } from "@/data/experiences";

export default function ExperienceCard(props: ExperienceCardProps) {
  return (
    <Card isFooterBlurred className="max-w-[600px] h-full">
      <CardHeader className="flex gap-3">
        <Image
          className="bg-white"
          src={props.company.logo}
          alt="company logo"
          height={40}
          width={40}
        />
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <span>{props.position.title}</span>
            <span className="text-sm">
              {props.position.startMonthYear} - {props.position.endMonthYear}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm text-default-500">
            <div>
              <Link className="underline" href={props.company.href}>
                {props.company.name}
              </Link>
              <span> · {props.position.type}</span>
            </div>
            <span>
              {props.company.location} · {props.position.availability}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardBody className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {props.skills.map((X, idx) => (
            <X key={idx} />
          ))}
        </div>
        <div className="space-y-2 text-sm list-disc">
          {props.description.map((x, idx) => (
            <p key={idx}>• {x}</p>
          ))}
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="justify-center">
        <Link
          className="flex gap-2 items-center justify-center text-sm text-default-500 hover:text-primary-500 duration-100"
          href={props.credentialUrl ?? "#"}
          target={props.credentialUrl ? "_blank" : undefined}
          title={!props.credentialUrl ? "Available upon request" : undefined}
        >
          See Credential <FiExternalLink />
        </Link>
      </CardFooter>
    </Card>
  );
}
