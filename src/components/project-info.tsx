import { projectsData } from "@/data/info-data";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const ProjectInfo = ({ project }: { project: (typeof projectsData)[0] }) => (
  <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
    <div className="flex flex-col gap-[30px] h-[50%]">
      <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
        {project.num}
      </div>
      <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
        {project.category} project
      </h2>
      <p className="text-white/60">{project.description}</p>
      <ul className="flex gap-4 flex-wrap">
        {project.stack.map((item, index) => (
          <li key={index} className="text-xl text-accent text-wrap">
            {item.name}
            {index !== project.stack.length - 1 && ","}
          </li>
        ))}
      </ul>
      <div className="border border-white/20"></div>
      <div className="flex items-center gap-4">
        {project.live && (
          <ProjectLink
            href={project.live}
            icon={
              <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
            }
            tooltip="Live project"
          />
        )}
        {project.github && (
          <ProjectLink
            href={project.github}
            icon={
              <BsGithub className="text-white text-3xl group-hover:text-accent" />
            }
            tooltip="Github repository"
          />
        )}
      </div>
    </div>
  </div>
);

const ProjectLink = ({
  href,
  icon,
  tooltip,
}: {
  href: string;
  icon: React.JSX.Element;
  tooltip: string;
}) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
          {icon}
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Link>
);

export default ProjectInfo;
