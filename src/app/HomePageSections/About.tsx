import Image from "next/image";
import aboutPicture from "@/public/photo3.jpg";

export default function About() {
  return (
    <div className="bg-blue-500">
      <div className="wrapper">
        <div className="mt-10">
          <p className="text-5xl text-center font-serif font-semibold">
            About Me
          </p>

          <div className="mt-8 grid grid-cols-2 gap-2">
            <div className="whitespace-pre-wrap space-y-3">
              <p>
                I'm a tech enthusiast and I've been passionate about computers
                and technology from a young age.
              </p>
              <p>
                My journey started with exploring various tools and technologies
                to build projects, which led me to dive deeper into coding. Over
                time, I've gained hands-on experience with several programming
                languages and frameworks, working on backend APIs, desktop
                applications, mobile apps, and web solutions.
              </p>
              <p>
                I'm passionate about creating innovative solutions, automating
                tasks, and contributing to open source. My current focus is on
                Web Development and Machine Learning, DevOps, and advancing my
                skills in ML and Cloud Computing.
              </p>
            </div>
            <div>
              <Image
                alt="About Picture"
                src={aboutPicture}
                className="rounded w-[200px] md:w-[400px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
