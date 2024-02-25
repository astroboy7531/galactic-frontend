import React from "react";
import SpaceShip from "./AnimeSupplement/SpaceShip";
import ContactModal from "./global/ContactModal";
import { useScroll, motion, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import MovingImage from "./MovingImage";

export default function Battle() {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const [show, setShow] = React.useState(false);
  const [contactVisible, setContactVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const targetElement = targetRef.current;
        const scrollPosition = window.scrollY;
        const elementOffsetTop = targetElement.offsetTop;
        const elementHeight = targetElement.offsetHeight;
        const windowHeight = window.innerHeight;
        if (
          scrollPosition >= elementOffsetTop &&
          scrollPosition <= elementOffsetTop + elementHeight - windowHeight
        ) {
          setShow(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const { scrollY } = useScroll();
  const y0 = useTransform(scrollY, [2500, 3500], [-1000, 100]);
  const y3 = useTransform(scrollY, [1200, 2500], [-1000, 100]);
  const y1 = useTransform(scrollY, [3000, 4500], [0, -4500]);
  const y4 = useTransform(scrollY, [3000, 4500], [0, -4500]);

  const imageProps = {
    x: y1.get(),
    y: y0.get(),
    scale: 1,
  };
  const { resolvedTheme } = useTheme();
  const getImageSource2 = () => {
    return resolvedTheme === "dark"
      ? "/dark/second.png" // Change this to your dark mode image source
      : "/secondPart/genesisBottom.png"; // Default image source
  };

  return (
    <motion.div
      className="flex flex-col w-full text-white relative bg-cover h-full bg-center bg-no-repeat battle-shadow"
      style={{ backgroundImage: "url(/battle/battleBack.png)" }}
    >
      {/**/}

      <div className="pb-60">
        {resolvedTheme === "dark" ? (
          <MovingImage rotation={true as boolean} />
        ) : (
          <MovingImage rotation={true as boolean} />
        )}
      </div>
      <div className="flex items-center max-w-[1320px] w-full px-5 mx-auto z-10">
        <div className="flex flex-col gap-12 z-20 pt-[260px] w-full lg:w-[60%]">
          <div className="flex flex-col items-start font-Josefin gap-4">
            <h1 className="font-bold md:text-5xl text-3xl">
              Battle Enemies In High Stake Intergalactic Wars That Will Shake
              The Universe
            </h1>
            <p className="md:text-2xl text-lg">
              Merciless battles with real world value at stake. Build your base
              and attack others in order to steal their most valuable treasures.
            </p>
          </div>
          <div
            className="text-[#262626] font-Josefin font-[500]  rounded-md border-[0.5px] border-[#E9E9E9] bg-white flex items-center justify-center w-[180px] px-4 py-2  grow-0 cursor-pointer"
            onClick={() => setContactVisible(true)}
          >
            Get Ready
          </div>
        </div>
      </div>
      {windowSize[0] < 768 ? (
        <motion.div
          animate={imageProps}
          style={{ y: y3, x: y4 }}
          className="w-full flex justify-end"
        >
          <div className="z-20">
            <SpaceShip show={show} />
          </div>
        </motion.div>
      ) : (
        <motion.div
          animate={imageProps}
          style={{ y: y0, x: y1 }}
          className="w-full flex justify-end"
        >
          <div className="z-20">
            <SpaceShip show={show} />
          </div>
        </motion.div>
      )}
      <ContactModal
        contactVisible={contactVisible}
        setContactVisible={setContactVisible}
      />
    </motion.div>
  );
}
