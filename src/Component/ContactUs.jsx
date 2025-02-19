
import React, { useRef, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Model } from "./Social";
import { PerspectiveCamera, Environment, OrbitControls } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = ({id,darkMode}) => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-heading", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
      });

      gsap.from(formRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
    id={id}
      ref={sectionRef}
      className={`min-h-screen  py-20 px-6 lg:px-20 `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div 
      className={`max-w-[1200px] mx-auto px-4 md:px-6 pt-12 md:pt-24 pb-8 md:pb-12 text-white`}      >
        <motion.h1
          className="section-heading text-6xl font-bold text-center mb-20 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Model Section */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl ">
            <Canvas>
              <PerspectiveCamera makeDefault fov={45} near={0.1} far={1000} position={[-3, 2, 4]} />
              <Environment preset="city" />
              <Suspense fallback={null}>
                <Model />
                <OrbitControls autoRotate  />
              </Suspense>
            </Canvas>
          </div>

          {/* Contact Form Section */}
          <motion.div
            ref={formRef}
            className="text-white p-10 rounded-3xl shadow-xl relative overflow-hidden"
            whileHover={{ y: -5 }}
          >
            <form className="space-y-8 relative" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block  font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                  placeholder="hello@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                  placeholder="Let's create something amazing..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>

            <div className="mt-12 border-t pt-8 border-gray-100">
              <div className="flex flex-col gap-4 text-white">
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-indigo-600 text-xl" />
                  <span>162 karahalroad mainpuri Uttarpradesh - 205001</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone className="text-indigo-600 text-xl" />
                  <span>+91 7579733133</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMail className="text-indigo-600 text-xl" />
                  <span>jainaryanjain00@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactUs;
