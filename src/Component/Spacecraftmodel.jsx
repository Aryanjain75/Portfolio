import React, { useRef, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Model } from "./Aircraft";
import { PerspectiveCamera, Environment, OrbitControls } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

function Spacecraftmodel() {
  return (
    <><PerspectiveCamera makeDefault fov={45} near={0.1} far={1000} position={[-3, 2, 4]} /><Environment preset="city" /><Suspense fallback={null}>
      <Model />
      <OrbitControls />
    </Suspense></>
  )
}

export default Spacecraftmodel