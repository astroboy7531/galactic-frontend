import React from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export default function LeftBall() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [100, 600]);
  return (
    <motion.div
      initial={{ x: -200  }}
      animate={{ x: 0, y: y1, scale: 1 }}
      // whileInView={{ y: y1 }}
      style={{ y: y1 }}
      transition={{ duration: 1 }}
      className="absolute left-[-50px] md:left-[66px] top-40 md:top-[280px] z-10"
    >
      <img
        src="/firstPart/redBall.png"
        className="object-cover object-center shadow-xl left-bal"
      />
    </motion.div>
  );
}
