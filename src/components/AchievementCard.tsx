import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { cn, Divider } from "@nextui-org/react";
import { AchievementCardProps } from "@/interfaces";

export function AchievementCard(props: AchievementCardProps) {
  return (
    <Card className="max-w-[600px]">
      <CardHeader className="flex gap-3">
        <Image
          className="bg-white w-[40px] max-h-[40px]"
          src={props.logo}
          alt="achievement logo"
          width={40}
          height={40}
        />
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <span>{props.title}</span>
            <span className="text-sm">{props.monthYear}</span>
          </div>
          <div className="flex justify-between items-center text-sm text-default-500">
            <div>
              <Link
                className="underline text-sm text-default-500 text-left w-fit"
                href={props.issuer.href}
                target="_blank"
              >
                {props.issuer.name}
              </Link>
              {!props.isNotEvent && (
                <span>
                  {" "}
                  · {props.eventMode} {props.eventType} Event
                </span>
              )}
            </div>
            <span className="text-primary-600">{props.result}</span>
          </div>
        </div>
      </CardHeader>

      <Divider />
      <CardFooter
        className="justify-center"
        title={!props.credentialUrl ? "Available upon request" : undefined}
      >
        <Link
          className={cn(
            "flex gap-2 items-center justify-center text-sm text-default-500 hover:text-primary-500 duration-100",
            !props.credentialUrl && "pointer-events-none"
          )}
          href={props.credentialUrl ?? "#"}
          aria-disabled={!props.credentialUrl}
          target={"_blank"}
        >
          See Credential <FiExternalLink />
        </Link>
      </CardFooter>
    </Card>
  );
}
