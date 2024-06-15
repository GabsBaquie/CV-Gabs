"use client";

import Header from "@/components/header";
import NavBar from "@/components/nav-bar";
import Motivation from "@/components/pages/motivation";
import Portfolio from "@/components/pages/portfolio";
import { motion } from "framer-motion";
import { SetStateAction, useState } from "react";

export default function Home() {
  const [visibleComponent, setVisibleComponent] = useState("Header");

  const handleNavClick = (componentName: SetStateAction<string>) => {
    setVisibleComponent(componentName);
  };

  return (
    <>
      <NavBar onNavClick={handleNavClick} />
      <main className=" flex justify-center max-w-5xl overflow-x-hidden ">
        {visibleComponent === "Header" && (
          <motion.section
            id="Header"
            initial={{ x: "100vw" }}
            animate={{ x: "0" }}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}>
            <Header />
          </motion.section>
        )}

        {visibleComponent === "Motivation" && (
          <motion.section
            id="Motivation"
            initial={{ x: "100vw" }}
            animate={{ x: "0" }}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}>
            <Motivation />
          </motion.section>
        )}

        {visibleComponent === "Portfolio" && (
          <motion.section
            id="Portfolio"
            initial={{ x: "100vw" }}
            animate={{ x: "0" }}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}>
            <Portfolio />
          </motion.section>
        )}
      </main>
    </>
  );
}
