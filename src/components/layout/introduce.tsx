import React from "react";
import Section from "./section";
import Tags from "./tags";
import Image from "next/image";
const LinkTags = [
  { title: "Blog", to: "/blogs" },
  { title: "Process", to: "/blogs" },
  { title: "Github", to: "/github" },
  { title: "LinkedIn", to: "/linkedin" },
  { title: "Resume", to: "/resume" },
];
const TechTags = [
  "React-Next",
  "React Native",
  "Typescript",
  "Python",
  "MongoDB",
  "SQL",
  "Redis",
];
export default function Introduce() {
  return (
    <Section>
      <div className="flex flex-row gap-[60px] justify-center items-center">
        <div className="flex-1 hidden lg:block">
          <Image
            src="https://wilson.tv/images/introduction/jason-wilson@2x.jpg"
            alt="image of dinh vinh khuong"
            layout="responsive"
            width={500}
            height={500}
            objectFit="contain"
          />
        </div>
        <h1 className="flex-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-bold text-silver !leading-[1.3]">
          Hi, im a frontend developer, aiming at creating seamless user
          experiences and contributing to agile, scalable web solutions.
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-10  mt-[60px] ">
        <Tags title="Links" tags={LinkTags} isLink />
        <Tags title="Techs" tags={TechTags} />
      </div>
    </Section>
  );
}
