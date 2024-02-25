import React from "react";
import { motion } from "framer-motion";

const MovingImage2 = (props) => {
  const rotateValue = props.rotation;
  return (
    <div
      className={`w-full flex justify-center items-center h-[30px] md:h-[87px] relative z-10 ${
        rotateValue ? "rotate-180" : "rotate-0"
      }`}
    >
      <motion.img
        src="/roadmap/cloudRoadmapTop.png"
        alt="Moving Image"
        className={`object-top object-cover bottom-[0px] min-w-[110%]  ${rotateValue ? "h-[200px] md:h-[400px] xl:h-[700px]" : "h-[200px] md:h-[400px] xl:h-[800px]"}`}
        initial={{ y: -100 }}
        animate={{
          x: ["0%", rotateValue ? "-2%" : "2%", "0%"],
          transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
      />
    </div>
  );
};

export default MovingImage2;
