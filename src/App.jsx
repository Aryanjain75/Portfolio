/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Header from "./Component/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import HeroSection from "./Component/HeroSection";
import { Timeline } from "./Component/TimeLine";
import Skillset from "./Component/Skillset";
import { useRef, useEffect, useState} from "react";
import  ContactUs  from "./Component/ContactUs";
import { Sun, Moon, Space } from "lucide-react";
import Projects from "./Component/Project";
import AnimatedFooter from "./Component/Footer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./Component/ui/tabs";
 
gsap.registerPlugin(ScrollTrigger);
function App() {
  // Education timeline data
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const educationData = [,{
      timming: "2024 - ongoing",
      title: "Gradious Technology Training ",
      institution: "Gradious Technology",
      location: "Remote",
      specialization: "Full Stack Development", 
      achievement: "Completed Training",
      description: "Intensive training program focused on modern web development technologies including MongoDB, Express.js, React.js and Node.js"
  },
    {
      timming: "2021 - 2025",
      title: "Graduation",
      institution: "Walchand Institute of Technology",
      degree: "Bachelor's in Computer Science",
      achievement: "CGPA: 8.9",
      description: "Four year undergraduate program covering core computer science concepts, data structures, algorithms, and software engineering principles"
    },
    {
      timming:"2019 - 2021", 
      title: " InterCollege ",
      institution: "St. Thomas Sr. Sec School",
      location: "Mainpuri, Uttar Pradesh",
      specialization: "PCM",
    "achievement":"78%",
      description: "Higher secondary education with focus on Physics, Chemistry and Mathematics, building strong analytical and problem-solving skills"
    },
    {
      timming: "2018 - 2019",
      title: "High School",
      institution: "St. Thomas Sr. Sec School", 
      location: "Mainpuri, Uttar Pradesh",
      "achievement":"71%",
      description: "Completed secondary education with strong foundation in science and mathematics"
    },
  ];

  const projectHeading = useRef(null);
  const projectitems= useRef(null);
  useEffect(() => {
    if (projectHeading.current && projectitems.current) {
      gsap.fromTo(
        projectHeading.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectHeading.current,
            start: "top 90%",
          },
        }
      );
  
      gsap.fromTo(
        projectitems.current,
        { scale: 0 },
        {
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectitems.current,
            start: "top 90%",
          },
        }
      );
    }
  }, []);
  
  const projects = [
    {
      title: "Sparsha In-house",
      href: "https://sparshainhouse.vercel.app/",
      description: "Customizable Tailwind CSS and Framer Motion Components.",
    },
    {
      title: "Movie Review Project",
      href: "https://moviesreviewsystem.netlify.app/",
      description: "An interactive platform for reviewing and rating movies.",
    },
    {
      title: "Portfolio",
      href: "https://aryanjainportfolio.netlify.app/",
      description: "My personal portfolio website.",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <motion.header
        className="fixed top-0 left-0 w-full z-20 bg-transparent"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Header />
        
      </motion.header>
   
      <main id="home" className= "bg-[#171f2b]"      >
        <HeroSection darkMode={darkMode}/>
        <Tabs defaultValue="Projects" className="">
        <TabsList className="grid w-[80%] h-auto m-auto lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 text-white border-1 border-white">
        <TabsTrigger value="Projects">Projects</TabsTrigger>
        <TabsTrigger value="Skills">Skills</TabsTrigger>
        <TabsTrigger value="Education">Education</TabsTrigger>
      </TabsList>
      <TabsContent value="Education">
      <section id="education" className="w-full max-w-7xl mx-auto px-4 py-16">
      <Timeline data={educationData} darkMode={darkMode} />
      </section>
      </TabsContent>
      <TabsContent value="Skills">
      <section id="Skills" className="w-full max-w-7xl mx-auto px-4 py-16">
      <Skillset id="skills" darkMode={darkMode}/>
      </section>
      </TabsContent>
      <TabsContent value="Projects">
      <Projects id="projects" darkMode={darkMode} projects={projects} />
      </TabsContent>
      
        </Tabs>
       
        <ContactUs id="contact" darkMode={darkMode}/>
        <AnimatedFooter  darkMode={darkMode}/>
      </main>
    </div>
  );
}

export default App;
