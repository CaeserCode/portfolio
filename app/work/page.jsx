"use client"

import { motion } from "framer-motion"; 
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"

import {BsArrowUpRight, BsGithub} from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Recipe Shop",
    title: "project 1",
    description: "Developed a Web application using Angular 13.0 & TypeScript for managing the whole front-end with various services implemented along with back-end using Firebase API’s for Authentication, storing and retrieval of customer data.",
    stack: [{name: "Angular 13.0"}, {name: "TypeScript"}, {name: "Firebase API"}],
    image: "/assets/work/RecipeShop1.png",
    live: "https://ng-course-recipe-book-15b25.web.app/",
    github: ""
  },
  {
    num: "02",
    category: "FurniFind",
    title: "project 2",
    description: "Spearheaded the conception and development of FurniFind, a user-friendly Web application designed to revolutionize furniture selection for students",
    stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "React/Javascript"}, {name: "ASP.NET"}, ],
    image: "/assets/work/Furni.png",
    live: "",
    github: ""
  },
  /* {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "Lorem ipsum dolor sit amet consectetur asdrg slfgkf lsigvnso oskgnsediofgjo",
    stack: [{name: "Next.js"}, {name: "Tailwind.css"}],
    image: "/assets/work/thumb3.png",
    live: "",
    github: ""
  }, */
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex])
  }
  return (
    <motion.section
      initial={{ opacity: 0}}
      animate={{ opacity: 1,
        transition: {delay: 2.4, duration:0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline num */}
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              {/*project.category */}
              <h2 className="text-[42px] font-bold leading-none text-white
               group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
               </h2>
               {/* project description */}
               <p className="text-white/60">{project.description}</p>
               {/* stack */}
               <ul className="flex gap-4">
                {project.stack.map((item,index) => {
                  return(
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the las comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
               </ul>
               {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
            <div className="flex items-center gap-4">
              {/* live project button */}
            <Link href={project.live}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                bg-white/5 flex justify-center items-center group">
                <BsArrowUpRight className="text-white text-3xl 
                group-hover:text-accent"/>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Live project</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </Link>  
            {/* github project button */}
            <Link href={project.github}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                bg-white/5 flex justify-center items-center group">
                <BsGithub className="text-white text-3xl 
                group-hover:text-accent"/>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github repository</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </Link>  
            </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                 <div className ="h-[460px] relative group flex justify-center
                 items-center bg-pink-50/20">
                  {/* overlay */}
                  <div className="absolute top-0 bottom-0 e-full h-full bg-black/10 z-10"></div>
                  {/* image */}
                  <div className="relative w-full h-full">
                    <Image
                    src={project.image}
                    fill
                    className="object-cover"
                    alt=""
                    />
                  </div>
                 </div>
                </SwiperSlide>;
              })}
              {/* slider buttons */}
              <WorkSliderBtns
               containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max
              xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
               />
            </Swiper>
            </div>
        </div>
      </div>
      </motion.section>
  );
};

export default Work;