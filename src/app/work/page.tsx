"use client";

import ProjectInfo from "@/components/project-info";
import ProjectSlider from "@/components/project-slider";
import { projectsData } from "@/lib/data";
import { motion } from "motion/react";
import { useState } from "react";
import "swiper/css";

export default function WorkPage() {
  const [project, setProject] = useState(projectsData[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-7 xl:px-0 overflow-hidden"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <ProjectInfo project={project} />
          <ProjectSlider
            onSlideChange={(project) => setProject(project)}
            projects={projectsData}
          />
        </div>
      </div>
    </motion.section>
  );
}
