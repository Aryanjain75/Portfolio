/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Quote, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypingAnimation } from './Typingtextanimation';
import { InteractiveHoverButton } from "./InteractiveHoverbutton";

function HeroSection({ darkMode, id }: { darkMode: boolean, id: string }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } }
    };

    const name = useRef<HTMLHeadingElement>(null);
    const title = useRef<HTMLHeadingElement>(null);
    const para = useRef<HTMLHeadingElement>(null);
    const boxref = useRef<HTMLDivElement>(null);
    const imageref = useRef<HTMLDivElement>(null);
    const photref = useRef<HTMLImageElement>(null);
    const linkdinref = useRef<HTMLDivElement>(null);
    const gitref = useRef<HTMLDivElement>(null);
    const mailref = useRef<HTMLDivElement>(null);
    const getstartedref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (name.current && title.current) {
            gsap.set([name.current, title.current, para.current], { 
                opacity: 0, 
                y: 50 
            });
            
            gsap.set(boxref.current, { 
                opacity: 0, 
                x: -50 
            });
            
            gsap.set(imageref.current, { 
                opacity: 0,
                rotateY: 1080, 
                x: 50 
            });
            
            gsap.set(photref.current, {
                opacity: 0,
                x: 50
            });
            
            gsap.set([gitref.current, mailref.current, getstartedref.current, linkdinref.current], {
                opacity: 0,
                scale: 0,
                rotateY: 1080
            });

            const tl = gsap.timeline();
            const t2 = gsap.timeline();

            tl.to(boxref.current, {
                duration: 1,
                opacity: 1,
                x: 0,
                delay: 0.5,
                ease: "power2.out",
            });

            t2.to(imageref.current, {
                duration: 2,
                opacity: 1,
                x: 0,
                delay: 0.5,
                rotateY: 0,
                ease: "power2.out",
            })
            .to(photref.current, {
                duration: 0.8,
                opacity: 1,
                x: 0,
                ease: "power2.out"
            });

            tl.to([name.current, title.current, para.current], {
                duration: 0.8,
                opacity: 1,
                y: 0,
                stagger: 0.2,
                ease: "power2.out"
            })
            .to([linkdinref.current, gitref.current, mailref.current, getstartedref.current], {
                duration: 1,
                opacity: 1,
                scale: 1,
                rotateY: 0,
                stagger: 0.1,
                ease: "back.out(1.7)",
            });
        }
    });

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="relative max-w-[1450px] mx-auto px-4 md:px-6 pt-12 md:pt-24 pb-8 md:pb-12 bg-[#171f2b]">
            <motion.div
                id={id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center"       
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div
                    className="order-2 lg:order-1 flex flex-col space-y-6 md:space-y-8 p-6 md:p-8 "
                    ref={boxref}
                >
                    <div ref={name} style={{ opacity: 0 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-0">
                        <h1 className="text-white text-3xl sm:text-1xl md:text-2xl lg:text-3xl font-bold leading-tight font-serif">
                            🚀 Hi, I'm
                        </h1>
                        <TypingAnimation duration={150} startOnView={true} className="text-white text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight bg-gradient-to-r from-[#00d7ff] to-[#0099ff] text-transparent bg-clip-text">
                            Aryan Jain
                        </TypingAnimation>
                    </div>
                    <h3
                        ref={title}
                        className="text-xl sm:text-xl md:text-1xl font-bold text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text"
                    >
                        Full-Stack Developer!
                    </h3>

                    <div
                        className="relative leading-relaxed text-base md:text-lg"
                        ref={para}
                    >
                        <Quote className="hidden md:block absolute -left-8 top-0 text-[#00d7ff] opacity-60" size={32} />
                        <p className="md:pl-4 text-gray-200">
                            I'm a Computer Science graduate with a strong passion for web development and software engineering.
                            Skilled in React.js, Next.js, and Node.js, I love turning ideas into dynamic, user-friendly applications.
                            Eager to learn, adapt, and contribute to innovative projects that make an impact.
                        </p>
                        <p className="mt-4 md:mt-6 md:pl-4 font-medium text-[#00d7ff]">
                            💡 Looking for opportunities to grow and collaborate!
                        </p>
                        <Quote className="hidden md:block absolute -right-8 bottom-0 text-[#00d7ff] opacity-60 rotate-180" size={32} />
                    </div>

                    <motion.div
                        className="flex flex-wrap gap-3 md:gap-4 pt-4"
                        variants={itemVariants}
                    >
                        <div ref={linkdinref}>
                        <InteractiveHoverButton className="text-white hover:text-[#00d7ff] transition-colors" href="https://www.linkedin.com/in/aryanjaincoder/" >
                            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                        </InteractiveHoverButton>
                        </div>
                        <div ref={gitref}>
                        <InteractiveHoverButton className="text-white hover:text-[#00d7ff] transition-colors" href="https://github.com/Aryanjain75" >
                            <Github className="w-5 h-5 md:w-6 md:h-6" />
                        </InteractiveHoverButton>
                       
                        </div>
                        <div ref={mailref}>
                        <InteractiveHoverButton className="text-white hover:text-[#00d7ff] transition-colors" href="mailto:jainaryanjain00@gmail.com" >
                            <Mail className="w-5 h-5 md:w-6 md:h-6" />
                        </InteractiveHoverButton>
                        </div>
                       
                       
                        <div className="text-white bg-gradient-to-r from-[#00d7ff] to-[#0099ff] rounded-full p-2 px-4 text-center shadow-[0_0_35px_#00c4e8] hover:shadow-[0_0_50px_#00c4e8] transition-all duration-300 cursor-pointer" ref={getstartedref}>
                            <a href="/RES_Aryan.pdf" className="block font-medium">Get Started</a>
                        </div>                    
                    </motion.div>
                </div>

                <div className="order-1 lg:order-2 relative border border-[#15d3fc] shadow-[0_0_50px_#15d3fc] rounded-full bg-gradient-to-b from-[#009abb] to-[#11222d] overflow-hidden w-[68%] h-[78%] m-auto transform hover:scale-105 transition-transform duration-300" ref={imageref}>
                    <img 
                        src="/photo.png"
                        ref={photref}
                        alt="background"
                        className="w-full h-[50vh] lg:h-[100vh] object-contain rounded-lg md:rounded-2xl"
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default HeroSection;
