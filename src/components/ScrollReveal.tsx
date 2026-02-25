"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  width?: "fit-content" | "100%";
}

export const ScrollReveal = ({ children, width = "100%" }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Shuru mein invisible aur thoda niche
      whileInView={{ opacity: 1, y: 0 }} // Jab nazar aaye toh upar aaye aur nazar aaye
      viewport={{ once: true, margin: "-100px" }} // "once: true" taake bar bar na ho, margin taake thoda andar aane pe trigger ho
      transition={{ duration: 0.8, ease: [0.21, 1, 0.36, 1] }} // Smooth "Apple-style" cubic-bezier easing
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};