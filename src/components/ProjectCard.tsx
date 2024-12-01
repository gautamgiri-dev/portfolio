"use client";

import { ProjectCardProps } from "@/interfaces";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";

import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard(props: ProjectCardProps) {
  function openLink(link: string) {
    setTimeout(() => window.open(link, "_blank"), 100);
  }

  return (
    <Card
      className="max-w-[400px] h-[400px] md:flex-[45%] lg:flex-[30%]"
      isPressable
      onPress={() => (props.href != "#" ? openLink(props.href) : undefined)}
    >
      <CardBody className="p-0">
        <Image
          className="mx-auto w-full max-h-[200px] overflow-hidden object-cover"
          alt="feature image"
          src={props.image}
        />
      </CardBody>
      <CardHeader className="flex-col items-start justify-center gap-2">
        <Link
          href={props.href}
          className="w-full"
          target={props.href != "#" ? "_blank" : undefined}
        >
          <div className="font-semibold text-xl flex justify-between items-center">
            <span>{props.title}</span>
            {props.href != "#" && <FiExternalLink />}
            {props.href == "#" && (
              <span className="rounded-lg bg-gray-700 py-1 px-2 text-white text-xs">
                Under development
              </span>
            )}
          </div>
        </Link>

        <div className="flex flex-wrap gap-2 items-center">
          {props.skills.map((X, idx) => (
            <X key={idx} />
          ))}
        </div>
      </CardHeader>
      <Divider />
      <CardFooter>
        <div className="flex flex-col gap-1 text-sm text-center w-full">
          <span>{props.description}</span>

          {props.footer && (
            <>
              <Divider />
              <span className="text-xs text-gray-500">{props.footer}</span>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
