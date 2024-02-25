import React from "react";
import Tilt from "react-parallax-tilt";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Hero() {
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(
        ".card"
      ) as NodeListOf<HTMLElement>;
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

        const BOX = card.getBoundingClientRect();
        const POINT = { x, y };
        const RATIO = { x: POINT.x / BOX.width, y: POINT.y / BOX.height };
        const CENTER = fromCenter(RATIO);

        card.style.setProperty("--ratio-x", String(RATIO.x));
        card.style.setProperty("--ratio-y", String(RATIO.y));
      });
    };
    const fromCenter = ({ x, y }: { x: number; y: number }) => {
      return Math.min(
        Math.max(0, Math.sqrt((y - 0.5) ** 2 + (x - 0.5) ** 2) / 0.5),
        1
      );
    };
    document
      .getElementById("cards")
      ?.addEventListener("pointermove", handleMouseMove);

    return () => {
      document
        .getElementById("cards")
        ?.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  const { scrollY } = useScroll();
  const y0 = useTransform(scrollY, [0, 900], [0, 1500]);
  const y1 = useTransform(scrollY, [0, 900], ["72px", "120px"]);
  const y4 = useTransform(scrollY, [0, 900], ["40px", "80px"]);
  const y2 = useTransform(scrollY, [0, 900], [0, -200]);
  const y3 = useTransform(scrollY, [0, 900], ["75px", "200px"]);
  const y5 = useTransform(scrollY, [0, 900], ["40px", "80px"]);

  const imageProps = {
    x: 0,
    y: y0.get(),
    scale: 1,
  };

  const [windowSize, setWindowSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <motion.div
      animate={imageProps}
      style={{ y: y0 }}
      className="w-full max-w-[1440px] mx-auto pt-[120px] flex flex-col justify-between items-center relative"
    >
      <motion.div
        style={{
          fontSize: windowSize[0] > 768 ? y1 : y4,
          y: y2,
          lineHeight: windowSize[0] > 768 ? y3 : y5,
        }}
        className="flex hero-text w-full flex-col items-center text-center z-10"
      >
        <div className="">Build, Battle</div>
        <div className="">Explore & Conquer!</div>
      </motion.div>
      <motion.div
        initial={{ x: 0, y: 500, scale: 1 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <>
          <div
            className="mx-auto flex justify-center md:px-20 mix-blend-lighten relative bg-center bg-contain bottom-[0px] w-full"
            id="cards"
          >
            <img
              src="/firstPart/newHero.png"
              alt="Characters"
              className="object-cover object-center relative mix-blend-lighten z-10"
            />
          </div>
        </>
      </motion.div>
    </motion.div>
  );
}
