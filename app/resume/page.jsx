
"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaJava, FaGitAlt, FaDocker, FaAws, FaDatabase, FaPython} from "react-icons/fa"

import {SiTailwindcss, SiNextdotjs, SiSpringboot, SiMicrosoftazure } from "react-icons/si"

//about

const about = {
  title: 'About me',
  description: "I am a dynamic Software Development Engineer with a passion for architecting robust solutions and optimizing digital ecosystems. With a strong foundation in Java, Spring Boot, and cloud technologies like Azure and AWS, I have successfully led projects in cloud migration and microservices development, enhancing scalability and performance. My experience spans full-stack development, from crafting React-based SPAs to integrating RESTful APIs and implementing CI/CD pipelines for Agile environments. I thrive on collaborative project management, driving technical innovation while ensuring seamless teamwork across diverse, cross-functional teams. With expertise in database management, UI/UX design, and a Master's in Computer Science focused on cutting-edge technologies like cloud computing and machine learning, I am dedicated to delivering impactful solutions that elevate user experience and drive business growth.",
  info: [
    {
      fieldName: "Name",
      fieldvalue: "Swapnil Patil"
    },
    {
      fieldName: "Phone",
      fieldvalue: "(+1) 682 374 3589"
    },
    {
      fieldName: "Experience",
      fieldvalue: "5+ Years"
    },
    {
      fieldName: "Email",
      fieldvalue: "swapnildigambarpatil@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldvalue: "Available"
    },
    {
      fieldName: "Language",
      fieldvalue: "English, Hindi"
    }
  ]
}

// experience data

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: "As a seasoned Software Developer with over five years of expertise in crafting sophisticated multi-tier enterprise applications, I excel in turning complex ideas into seamless solutions. I've led teams to success, optimized intricate systems, and architected scalable solutions that stand the test of time. I am poised to drive innovation and add significant value to future projects.",
  items: [{
    company: "Xangar's Solutions Pvt Ltd",
    position: "Full Stack Software Engineer",
    duration: "2021 - 2022"
  },
  {
    company: "eMsys Solutions Pvt Ltd",
    position: "Web Developer Intern",
    duration: "2020 - 2021"
  },
  {
    company: "Bajaj Allianz Life Insurance Pvt Ltd",
    position: "Software Developer",
    duration: "2017 - 2020"
  },
]
  
};

// education data

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: "My academic journey was an incredible adventure! I got to dive deep into the fascinating world of computer science, developing my practical skills in software development, database management, and system architecture. My coursework took me on a journey through advanced algorithms, software engineering methodologies, and distributed systems. ",
  items: [
    {
    institution: "University of Texas, Arlington",
    degree: "Master's in Computer Science",
    duration: "2022 - 2024"
  },
  {
    institution: "Pune University",
    degree: "Bachelor's in Computer Science",
    duration: "2012 - 2016"
  },
]
  
};

//skills

const skills = {
  title: "My Skills",
  description: "I am a skilled professional with a diverse skill set covering Java, Spring Boot, RestAPI, Microservices, JavaScript, React.js, HTML5, CSS3, Tailwind CSS, Cloud platforms (Azure, AWS), Docker, Python, and a range of databases. Throughout my professional journey, I have excelled in team leadership, system optimization, and crafting scalable architectures that stand the test of time.",
  skillList: [
    
    {
      icon: <FaJava  />,
      name: "java"
    },
    {
      icon: <SiSpringboot  />,
      name: "SpringBoot"
    },
    {
      icon: <FaGitAlt  />,
      name: "Git"
    },
    {
      icon: <FaDocker   />,
      name: "docker"
    },
    {
      icon: <FaAws    />,
      name: "aws"
    },
    {
      icon: <SiMicrosoftazure    />,
      name: "azure"
    },
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "css 3"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon: <FaNodeJs />,
      name: "node js"
    },
    {
      icon: <FaFigma />,
      name: "figma"
    },
    {
      icon: <FaDatabase />,
      name: "sql/oracle"
    },
    {
      icon: <FaPython  />,
      name: "python"
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {
      delay: 2.4, duration: 0.4, ease: "easeIn"
    }
  ,}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                    return (
                      <li key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent"> {item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}  
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                    return (
                      <li key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent"> {item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}  
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300"
                              >
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>;
                    })}
                  </ul>
              </div>
            </TabsContent>


            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index) => {
                    return (
                    <li 
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldvalue}</span>
                    </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>


          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume