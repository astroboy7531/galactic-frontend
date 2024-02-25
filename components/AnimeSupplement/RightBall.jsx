import React from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export default function RightBall() {
  const { scrollY } = useScroll();
  const y0 = useTransform(scrollY, [0, 800], [100, 600]);
  return (
    <motion.div
      initial={{ x: 200 }}
      animate={{ x: 0, y: y0 }}
      // whileInView={{ y:  }}
      style={{ y: y0 }}
      transition={{ duration: 1 }}
      className="absolute right-[-130px] scale-75 md:scale-100 md:right-[-100px] top-[25px] md:top-[58px] z-10"
    >
      <img
        src="/firstPart/blueBall.png"
        className="object-cover object-center shadow-xl right-bal scale-75"
      />
    </motion.div>
  );
}
