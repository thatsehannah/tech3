"use client";

import { projects } from "@/data";
import { ProjectCard } from "./ProjectCard";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const directionRef = useRef<"next" | "prev">("next");

  const projectsLength = projects.length;
  const currentProject = projects[currentIndex];

  const goToNextProject = () => {
    directionRef.current = "next";
    let nextIndex = currentIndex + 1;
    if (nextIndex > projectsLength - 1) {
      nextIndex = 0;
    }

    setCurrentIndex(nextIndex);
  };

  const goToPrevProject = () => {
    directionRef.current = "prev";
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = projectsLength - 1;
    }

    setCurrentIndex(prevIndex);
  };

  useGSAP(() => {
    gsap.fromTo(
      "#project-card",
      { autoAlpha: 0, xPercent: directionRef.current === "next" ? -40 : 40 },
      { autoAlpha: 1, xPercent: 0, duration: 1, ease: "power1.inOut" },
    );
  }, [currentIndex]);

  return (
    <div className='flex flex-col gap-4 lg:flex-row lg:gap-0 w-full h-[90vh]'>
      <div className='hidden lg:flex w-1/6 items-center justify-center'>
        <div
          className='p-6 ring-2 ring-accent3 rounded-md bg-linear-to-r from-accent1 to-accent1 bg-no-repeat bg-size-[0_100%] duration-500 hover:bg-size-[100%_100%] cursor-pointer'
          onClick={() => goToPrevProject()}
        >
          <ChevronLeft size={36} />
        </div>
      </div>
      <div className='w-full lg:w-2/3 flex items-center justify-center'>
        <div id='project-card'>
          <ProjectCard project={currentProject} />
        </div>
      </div>
      <div className='flex lg:hidden items-center justify-center gap-8'>
        <div
          className='p-6 ring-2 ring-accent3 rounded-md bg-linear-to-r from-accent4 to-accent4 bg-no-repeat bg-size-[0_100%] duration-500 hover:bg-size-[100%_100%] cursor-pointer'
          onClick={() => goToPrevProject()}
        >
          <ChevronLeft />
        </div>
        <div
          className='p-6 ring-2 ring-accent3 rounded-md bg-linear-to-r from-accent4 to-accent4 bg-no-repeat bg-size-[0_100%] duration-500 hover:bg-size-[100%_100%] cursor-pointer'
          onClick={() => goToNextProject()}
        >
          <ChevronRight />
        </div>
      </div>
      <div className='hidden lg:flex w-1/6 items-center justify-center'>
        <div
          className='p-6 ring-2 ring-accent3 rounded-md bg-linear-to-r from-accent1 to-accent1 bg-no-repeat bg-size-[0_100%] duration-500 hover:bg-size-[100%_100%] cursor-pointer'
          onClick={() => goToNextProject()}
        >
          <ChevronRight size={36} />
        </div>
      </div>
    </div>
  );
};
