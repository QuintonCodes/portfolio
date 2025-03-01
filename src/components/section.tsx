import { aboutData, education, experience, skills } from "@/lib/data";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";
import List from "./list";

interface SectionHeaderProps {
  description: string;
  icon: string | StaticImport;
  other?: boolean;
  title: string;
}

export default function Section({
  alt,
  children,
}: {
  alt: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`${
        alt
          ? "flex flex-col gap-[30px]"
          : "flex flex-col gap-[30px] text-center xl:text-left"
      }`}
    >
      {children}
    </div>
  );
}

function SectionHeader({
  description,
  icon,
  other = false,
  title,
}: SectionHeaderProps) {
  return (
    <div>
      {other ? (
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
          <h3 className="text-4xl font-bold">{title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {description}
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-center">
            <h3 className="text-4xl font-bold">{title}</h3>
            <Image
              alt={`${title} Icon`}
              className="w-6 h-6 mt-2 ml-3"
              height={24}
              src={icon}
              width={24}
            />
          </div>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {description}
          </p>
        </>
      )}
    </div>
  );
}

function Education() {
  return (
    <>
      <SectionHeader
        description="Overview of my education"
        icon="/resume/cap.svg"
        title="My Education"
      />
      <List items={education} type="education" />
    </>
  );
}

Section.Education = Education;

function Experience() {
  return (
    <>
      <SectionHeader
        description="Overview of my experience"
        icon="/resume/badge.svg"
        title="My Experience"
      />
      <List items={experience} type="experience" />
    </>
  );
}

Section.Experience = Experience;

function Skills() {
  return (
    <>
      <SectionHeader
        description="An overview of my best strengths"
        icon=""
        other={true}
        title="My Skills"
      />
      <List items={skills.skillList} type="skills" />
    </>
  );
}

Section.Skills = Skills;

function About() {
  return (
    <>
      <SectionHeader
        description="A full description about myself"
        icon=""
        other={true}
        title="About Me"
      />
      <List items={aboutData.info} type="about" />
    </>
  );
}

Section.About = About;
