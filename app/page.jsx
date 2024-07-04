"use client"

import React, {useState, useEffect} from "react";
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

import Social from "@/components/Social"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"


const Home = () => {

  const roles = ['Software Engineer', 'Full Stack Software Developer', 'Web Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [roles.length]);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{roles[currentRoleIndex]}</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Swapnil Patil</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            I create beautifully crafted digital experiences, blending creativity and technology to bring ideas to life. With proficiency in a variety of programming languages and tools, I build online spaces that are both elegant and highly functional.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/Swapnil-Resume.pdf" download>
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl"/>
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text accent text-base 
                  hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
    
  )
}

export default Home