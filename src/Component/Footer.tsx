import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';

function AnimatedFooter({id, darkMode }: {id:string, darkMode: boolean }) {
    const footerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (footerRef.current) {
            gsap.fromTo(
                footerRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
            );
        }
    });

    return (
        <footer
            ref={footerRef}
            id={id}

            className={`w-full py-8 px-4 md:px-12 text-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
        >
            <motion.div
                className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                {/* Logo or Brand Name */}
                <motion.h2
                    className="text-2xl font-bold tracking-wide"
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    MyPortfolio 🚀
                </motion.h2>

                {/* Navigation Links */}
                <motion.ul className="flex gap-6 text-lg font-medium">
                    {["Home", "Projects", "About", "Contact"].map((item, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ scale: 1.2, color: "#FF6B6B" }}
                            transition={{ type: "spring", stiffness: 250 }}
                        >
                            <a href={`#${item.toLowerCase()}`}>{item}</a>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Social Icons */}
                <motion.div className="flex gap-4 text-xl">
                    {["🔗", "📸", "🐦", "💼"].map((icon, index) => (
                        <motion.span
                            key={index}
                            whileHover={{ scale: 1.3, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 250 }}
                            className="cursor-pointer"
                        >
                            {icon}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>

            {/* Copyright */}
            <motion.p
                className="mt-6 text-sm opacity-75"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
            </motion.p>
        </footer>
    );
}

export default AnimatedFooter;
