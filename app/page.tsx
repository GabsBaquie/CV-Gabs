"use client";

import Header from "@/components/header";
import NavBar from "@/components/nav-bar";
import Contact from "@/components/pages/contact";
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
      <div className="flex flex-row justify-center w-full max-w-5xl">
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

        {visibleComponent === "Contact" && (
          <motion.section
            id="Contact"
            initial={{ x: "100vw" }}
            animate={{ x: "0" }}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}>
            <Contact />
          </motion.section>
        )}
      </div>
    </>
  );
}
