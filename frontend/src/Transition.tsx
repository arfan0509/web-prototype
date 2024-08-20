import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

type TransitionProps = {
  children: React.ReactNode;
};

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    x: 0,
  },
  in: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    scale: 1.05,
    x: 100,
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.6,
};

export default function Transition({ children }: TransitionProps) {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
