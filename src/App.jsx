/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Header from "./Component/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import HeroSection from "./Component/HeroSection";
import { Timeline } from "./Component/TimeLine";
import Skillset from "./Component/Skillset";
import { Canvas } from "@react-three/fiber";
import { useRef, useEffect, useState} from "react";
import  ContactUs  from "./Component/ContactUs";
import { Sun, Moon, Space } from "lucide-react";
import Projects from "./Component/Project";
import AnimatedFooter from "./Component/Footer";
gsap.registerPlugin(ScrollTrigger);
import Spacecraftmodel from "./Component/Spacecraftmodel";
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
      title: "Gradious Technology Training (2024 - ongoing)",
      institution: "Gradious Technology",
      location: "Remote",
      specialization: "Full Stack Development",
      achievement: "Completed Training",
      details: "Completed Full Stack Development training with hands-on experience in MERN stack",
  },
    {
      title: "Graduation (2021 - ongoing)",
      institution: "Walchand Institute of Technology",
      degree: "Bachelor's in Computer Science",
      achievement: "CGPA: 8.9",
      details: "Completed Bachelor's degree with honors",
    },
    {
      title: " InterCollege (2019 - 2021)",
      institution: "St. Thomas Sr. Sec School",
      location: "Mainpuri, Uttar Pradesh",
      specialization: "PCM",
      achievement: "Percentage: 78%",
    },
    {
      title: "High School (2018-2019)",
      institution: "St. Thomas Sr. Sec School",
      location: "Mainpuri, Uttar Pradesh",
      achievement: "Percentage: 71%",
    },
  ].map((item) => ({
    title: item.title,
    content: (
      <div className="space-y-4">
        <p className={`${darkMode?"text-white":"text-black"} text-black text-sm md:text-base font-medium`}>
          {item.institution}
          {item.location && (
            <span className={`block ${darkMode?"text-wheat-600":"text-gray-600"} text-xs`}>{item.location}</span>
          )}
        </p>
        {item.degree && <p className={`${darkMode?"text-wheat-800":"text-gray-800"} text-sm`}>{item.degree}</p>}
        {item.specialization && (
          <p className={`${darkMode?"text-wheat-800":"text-gray-800"} text-sm`}>Specialization: {item.specialization}</p>
        )}
        <p className="text-blue-600 font-semibold">{item.achievement}</p>
        {item.details && <p className={`${darkMode?"text-wheat-700":"text-gray-700"}  text-sm`}>{item.details}</p>}
      </div>
    ),
  }));

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
        <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md transition-all"
      >
        {darkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-white-800" />}
      </button>
      </motion.header>
      <div className="">
                  <Canvas className="bg-transparent">
                 <Spacecraftmodel/>
                  </Canvas>
                </div>
      <main id="home" className= {darkMode ? "bg-black":"bg-white"}      >
        <HeroSection darkMode={darkMode}/>
        <section id="education" className="w-full max-w-7xl mx-auto px-4 py-16">
          <Timeline data={educationData} darkMode={darkMode} />
        </section>
        <Skillset id="skills" darkMode={darkMode}/>
        <Projects id="projects" darkMode={darkMode} projects={projects} />
        <ContactUs id="contact" darkMode={darkMode}/>
        <AnimatedFooter  darkMode={darkMode}/>
      </main>
    </div>
  );
}

export default App;
