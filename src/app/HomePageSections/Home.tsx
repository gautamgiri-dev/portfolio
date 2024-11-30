import Image from "next/image";
import profilePicture from "@/public/photo2.jpg";
import { Button } from "@nextui-org/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    <div className="full-height">
      <div className="wrapper">
        <div className="p-4 sm:p-2 lg:p-0 flex items-center justify-center">
          <div className="flex flex-col-reverse gap-6 md:gap-0 md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl lg:text-4xl font-semibold text-primary-600">
                Hey There! I&apos;m-
              </h2>
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">
                Gautam Giri.
              </h1>

              <p className="text-3xl lg:text-4xl font-medium tracking-tight mt-4 md:mt-10 whitespace-pre-wrap text-center md:text-left">
                <span className="text-primary-600 font-semibold">
                  Software Developer.
                </span>{" "}
                <span className="text-gray-600">
                  I&apos;m passionate about creating efficient, scalable
                  software solutions and automation tools.
                </span>
              </p>

              <div className="space-x-2 mt-6">
                <Button
                  as={Link}
                  href="https://github.com/gautamgiri-dev"
                  target="_blank"
                  radius="sm"
                  startContent={<FaGithub />}
                  color="primary"
                >
                  Github
                </Button>
                <Button
                  as={Link}
                  href="https://www.linkedin.com/in/gautamgiriforyou/"
                  target="_blank"
                  radius="sm"
                  startContent={<FaLinkedin />}
                  color="primary"
                >
                  LinkedIn
                </Button>
                <Button
                  as={Link}
                  href="mailto:personal.gautamgiri@gmail.com"
                  target="_blank"
                  radius="sm"
                  startContent={<MdEmail />}
                  color="primary"
                >
                  Email
                </Button>
              </div>
            </div>
            <div>
              <Image
                alt="Profile Photo"
                src={profilePicture}
                className="rounded-full w-[200px] md:w-[600px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
