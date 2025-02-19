/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  timming: string;
  title: string;
  institution: string,
  location: string,
  achievement: string,
  specialization?:string,
  description:string,
  degree?:string
}
import { useInView } from "react-intersection-observer";
export const Timeline = ({id, data, darkMode }: {id:string, data: TimelineEntry[]; darkMode: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const {  inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      id={id}
      className="w-full overflow-hidden min-h-screen text-white font-sans"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className={`text-5xl md:text-7xl font-bold text-center mb-12 text-white`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 } }
        transition={{ duration: 0.6 }}
      >
        Education & skills
      </motion.h1>

        <div className="relative" ref={ref}>
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"
            style={{ height: heightTransform }}
          />
          
          <div className="space-y-12">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-1/2 p-6">
                  <motion.div 
                    className={`absolute  md:left-auto transform -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_#00c4e8] z-10`}                  />
                  
                  <div className="bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-cyan-400/20 transition-all duration-300">
                    <div className="flex justify-between items-center text-cyan-400 mb-4">
                      <span className="text-sm font-semibold">{item.timming}</span>
                      <span className="text-sm font-medium">{item.achievement}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                      {item.title}
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        <span className="text-gray-300">{item.institution}</span>
                      </div>
                      
                      {(item.specialization || item.degree) && (
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                          <span className="text-gray-300">{item.specialization || item.degree}</span>
                        </div>
                      )}
                      
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
