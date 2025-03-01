"use client";

import Section from "@/components/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";

export default function ResumePage() {
  return (
    <motion.div
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      initial={{ opacity: 0 }}
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <Tabs
          className="flex flex-col xl:flex-row gap-[60px]"
          defaultValue="experience"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience Section */}
            <TabsContent className="w-full" value="experience">
              <Section alt={false}>
                <Section.Experience />
              </Section>
            </TabsContent>

            {/* Education Section */}
            <TabsContent className="w-full" value="education">
              <Section alt={false}>
                <Section.Education />
              </Section>
            </TabsContent>

            {/* Skills Section */}
            <TabsContent className="w-full h-full" value="skills">
              <Section alt={true}>
                <Section.Skills />
              </Section>
            </TabsContent>

            {/* About Section */}
            <TabsContent
              className="w-full text-center xl:text-left"
              value="about"
            >
              <Section alt={true}>
                <Section.About />
              </Section>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
