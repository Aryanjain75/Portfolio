/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({id, data, darkMode }: {id:string, data: TimelineEntry[]; darkMode: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
    id={id}
      className={`w-full font-sans px-4 sm:px-6 md:px-10 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 font-bold">
          Education & Experience
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-12 sm:pb-16 md:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-8 sm:pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 md:top-40 self-start w-full md:max-w-xs lg:max-w-sm">
              <div className={`h-8 sm:h-10 absolute left-3 md:left-3 w-8 sm:w-10 rounded-full flex items-center justify-center ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <div className={`h-3 sm:h-4 w-3 sm:w-4 rounded-full border p-2 ${darkMode ? "bg-gray-700 border-gray-600" : "bg-neutral-200 border-neutral-300"}`} />
              </div>
              <h3 className="hidden md:block text-lg sm:text-xl md:text-3xl lg:text-5xl md:pl-20 font-bold">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-12 sm:pl-16 md:pl-4 pr-4 w-full">
              <h3 className="md:hidden block text-xl sm:text-2xl mb-3 sm:mb-4 text-left font-bold">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base">{item.content}</p>
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute left-4 sm:left-6 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-gray-600 to-transparent to-[99%] mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
