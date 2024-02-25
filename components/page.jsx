import React from "react";
import { motion } from "framer-motion";
import { slide, opacity, perspective } from "./anim";

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

export default function Page({ children }) {
  return (
    <div className="inner">
      <motion.div
        style={{ backgroundColor: "#121212" }}
        className="slide"
        {...anim(slide)}
      />
      <motion.div
        className="page "
        {...anim(perspective)}
      >
        <motion.div style={{ backgroundColor: "#121212" }} {...anim(opacity)}>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
