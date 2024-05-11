"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { ReactNode } from "react";

import "./style.css";

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  const { scrollY } = useScroll();

  const Ycirclie1 = useTransform(scrollY, (value) => value * -0.3);
  const Ycirclie2 = useTransform(scrollY, (value) => value * 0.5);
  const Ycirclie3 = useTransform(scrollY, (value) => value * 1.2);

  return (
    <div className="mt-8 inset-0 justify-center flex w-full overflow-x-hidden;">
      <motion.div
        id="circle1"
        className="bg-shape absolute bg-indigo-500 opacity-50 blur-2xl rounded-full  "
        style={{
          translateY: Ycirclie1,
          translateX: Ycirclie1,
        }}></motion.div>
      <motion.div
        id="circle2"
        className="bg-shape absolute bg-indigo-700 opacity-50 blur-2xl rounded-full "
        style={{
          translateY: Ycirclie2,
          translateX: Ycirclie1,
        }}></motion.div>
      <motion.div
        id="circle3"
        className="bg-shape absolute bg-cyan-500 opacity-50 blur-2xl rounded-full "
        style={{
          translateY: Ycirclie3,
          translateX: Ycirclie1,
        }}></motion.div>
      <motion.div
        id="circle4"
        className="bg-shape absolute bg-cyan-500 opacity-50 blur-2xl rounded-full "
        style={{
          translateY: Ycirclie2,
          translateX: Ycirclie2,
        }}></motion.div>

      <div className="z-10">{children}</div>
    </div>
  );
};

export default Background;
