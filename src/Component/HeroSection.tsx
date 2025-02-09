/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Quote, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypingAnimation } from './Typingtextanimation';
import { InteractiveHoverButton } from "./InteractiveHoverbutton";

function HeroSection({ darkMode,id }: { darkMode: boolean }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, staggerChildren: 0.3 } }
    };

    const name = useRef<HTMLHeadingElement>(null);
    const title = useRef<HTMLHeadingElement>(null);
    const para = useRef<HTMLHeadingElement>(null);
    const boxref = useRef<HTMLHeadingElement>(null);
    const imageref = useRef<HTMLImageElement>(null);
    useGSAP(() => {
        if (name.current && title.current) {
            gsap.set(name.current, { opacity: 0, y: 50 });
            gsap.set(title.current, { opacity: 0, y: 50 });
            gsap.set(para.current, { opacity: 0, y: 50 });
            gsap.set(boxref.current, { opacity: 0, x: -50 });
            gsap.set(imageref.current, { opacity: 0, x: 50 });
            const tl = gsap.timeline();
            tl.to([boxref.current, imageref.current], {
                duration: 1,
                opacity: 1,
                x: 0,
                delay: 1,
                ease: "power2.out",
            });

            tl.to(name.current, {
                duration: 0.8,
                opacity: 1,
                y: 0,
                ease: "power2.out"
            });
            tl.to(title.current, {
                duration: 0.8,
                opacity: 1,
                y: 0,
                ease: "power2.out",
            });
            tl.to(para.current, {
                duration: 0.8,
                opacity: 1,
                y: 0,
                ease: "power2.out",
            })
        }
    });

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className={`relative max-w-[1200px] mx-auto px-4 md:px-6 pt-12 md:pt-24 pb-8 md:pb-12 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
            <motion.div
                id={id}

                className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center"       
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div
                    className={`order-2 lg:order-1 flex flex-col space-y-6 md:space-y-8 p-6 md:p-8 bg-opacity-70 ${darkMode ? 'dark:bg-gray-800' : 'bg-white'} rounded-xl md:rounded-2xl backdrop-blur-sm shadow-lg`}
                    ref={boxref}
                >
                    <h1 ref={name} style={{ opacity: 0 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        <TypingAnimation duration={150} startOnView={true}>
                            🚀 Hi, I'm Aryan Jain
                        </TypingAnimation>
                    </h1>
                    <h3
                        ref={title}
                        className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
                    >
                        A Passionate Full-Stack Developer!
                    </h3>

                    <div
                        className="relative leading-relaxed text-base md:text-lg"
                        ref={para}
                    >
                        <Quote className="hidden md:block absolute -left-8 top-0 text-blue-500 opacity-60" size={32} />
                        <p className="md:pl-4">
                            I'm a Computer Science graduate with a strong passion for web development and software engineering.
                            Skilled in React.js, Next.js, and Node.js, I love turning ideas into dynamic, user-friendly applications.
                            Eager to learn, adapt, and contribute to innovative projects that make an impact.
                        </p>
                        <p className="mt-4 md:mt-6 md:pl-4 font-medium text-blue-700">
                            💡 Looking for opportunities to grow and collaborate!
                        </p>
                        <Quote className="hidden md:block absolute -right-8 bottom-0 text-blue-500 opacity-60 rotate-180" size={32} />
                    </div>

                    <motion.div
                        className="flex flex-wrap gap-3 md:gap-4 pt-4"
                        variants={itemVariants}
                    >
                        <InteractiveHoverButton className="bg-blue-600 text-white" href="https://www.linkedin.com/in/aryanjaincoder/">
                            LinkedIn
                            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                        </InteractiveHoverButton>
                        <InteractiveHoverButton className="bg-gray-800 text-white" href="https://github.com/Aryanjain75">
                            Github
                            <Github className="w-5 h-5 md:w-6 md:h-6" />
                        </InteractiveHoverButton>
                        <InteractiveHoverButton className="bg-red-500 text-white" href="mailto:jainaryanjain00@gmail.com">
                            Gmail
                            <Mail className="w-5 h-5 md:w-6 md:h-6" />
                        </InteractiveHoverButton>
                        <InteractiveHoverButton className="bg-emerald-500 text-white" href="/RES_Aryan.pdf">
                            View Resume
                            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                        </InteractiveHoverButton>
                    </motion.div>
                </div>

                <div className="order-1 lg:order-2 relative h-full w-full" ref={imageref}>
                    <motion.img
                        src="/image(2).png"
                        alt="background"
                        className="w-full h-[50vh] lg:h-[100vh] object-contain rounded-lg sm:rounded-full md:rounded-2xl shadow-2xl "
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default HeroSection;
