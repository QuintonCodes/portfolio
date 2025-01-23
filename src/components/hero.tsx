"use client";

import { Download } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "./ui/button";

interface HeroData {
  description: string;
  role: string;
  subtitle: string;
  title: string;
}

const Hero = ({
  children,
  data,
}: {
  children: React.ReactNode;
  data: HeroData;
}) => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-2 xl:pb-8">
      {/* Text */}
      <div className="text-center xl:text-left order-2 xl:order-none">
        <span className="text-xl">{data.role}</span>
        <h1 className="h1 mb-6">
          {data.title} <br />
          <span className="text-accent">{data.subtitle}</span>
        </h1>
        <p className="max-w-[500px] mb-9 text-white/80">{data.description}</p>
        {/* Button and socials */}
        <div className="flex flex-col xl:flex-row items-center gap-8">
          <a href="/resume.pdf" download="Quinton's Resume">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              <span>Download CV</span>
              <Download />
            </Button>
          </a>
          {/* Socials */}
          <div className="mb-8 xl:mb-0">{children}</div>
        </div>
      </div>
      {/* Photo */}
      <div className="order-1 xl:order-none mb-8 xl:mb-0">
        <Photo />
      </div>
    </div>
  );
};

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.3, ease: "easeOut" },
        }}
        className="w-[298px] h-[298px] xl:w-[490px] xl:h-[490px] relative"
      >
        {/* Image */}
        <Image
          src="/potrait.webp"
          quality={90}
          priority
          fill
          sizes="(max-width: 768px) 298px, (max-width: 1024px) 490px, 490px"
          alt="Kagiso Jiyane"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
