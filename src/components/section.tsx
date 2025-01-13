import {
  aboutData,
  educationData,
  experienceData,
  skillsData,
} from "@/data/info-data";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";
import List from "./list";

interface SectionHeaderProps {
  title: string;
  description: string;
  icon: string | StaticImport;
  other?: boolean;
}

// Component
const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  icon,
  other = false,
}) => {
  return (
    <div>
      {other ? (
        <>
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              {description}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center">
            <h3 className="text-4xl font-bold">{title}</h3>
            <Image
              src={icon}
              alt={`${title} Icon`}
              width={24}
              height={24}
              className="ml-3 mt-2 w-6 h-6"
            />
          </div>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {description}
          </p>
        </>
      )}
    </div>
  );
};

const Section = ({ children, alt }: { children: ReactNode; alt: boolean }) => {
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
};

const Education = () => {
  return (
    <>
      <SectionHeader
        title="My Education"
        description="Overview of my education"
        icon="/resume/cap.svg"
      />
      <List items={educationData} type="education" />
    </>
  );
};

Section.Education = Education;

const Experience = () => {
  return (
    <>
      <SectionHeader
        title="My Experience"
        description="Overview of my experience"
        icon="/resume/badge.svg"
      />
      <List items={experienceData} type="experience" />
    </>
  );
};

Section.Experience = Experience;

const Skills = () => {
  return (
    <>
      <SectionHeader
        title="My Skills"
        description="An overview of my best strengths"
        icon=""
        other={true}
      />
      <List items={skillsData.skillList} type="skills" />
    </>
  );
};

Section.Skills = Skills;

const About = () => {
  return (
    <>
      <SectionHeader
        title="About Me"
        description="A full description about myself"
        icon=""
        other={true}
      />
      <List items={aboutData.info} type="about" />
    </>
  );
};

Section.About = About;

export default Section;
