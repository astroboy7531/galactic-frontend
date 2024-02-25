import React from "react";
import { motion } from "framer-motion";
import { useTheme } from 'next-themes';


const MovingImage = (props) => {
  const { resolvedTheme } = useTheme();
  const rotateValue = props.rotation;

  const getImageSource = () => {
    return resolvedTheme === 'dark'
      ? "/dark/first.png"  // Change this to your dark mode image source
      : "/firstPart/genesisTopCloud.png";      // Default image source
  };

  return (
    <div
      className={`w-full flex justify-center items-center h-[30px] md:h-[87px] relative z-10 ${rotateValue ? "rotate-180" : "rotate-0"
        }`}
    >
      <motion.img
        src={getImageSource()}
        alt="Moving Image"
        className={`object-top object-cover absolute -bottom-56 md:-bottom-60 min-w-[110%] max-2xl:min-w-[140%]  ${rotateValue ? "h-[200px] md:h-[400px] xl:h-[500px]" : "h-[200px] md:h-[400px] xl:h-[600px]"}`}
        initial={{ y: -160 }}
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

export default MovingImage;
