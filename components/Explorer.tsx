import React from "react";
import SpaceX from "./AnimeSupplement/SpaceX";
import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Explorer() {
  const tarRef = React.useRef<HTMLDivElement>(null);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const handleScrollFox = () => {
      if (tarRef.current) {
        const targetElement = tarRef.current;
        const scrollPosition = window.scrollY;
        const elementOffsetTop = targetElement.offsetTop;
        const elementHeight = targetElement.offsetHeight;
        const windowHeight = window.innerHeight;
        // console.log(scrollPosition, 'scrollPosition');
        // console.log(elementOffsetTop, 'elementOffsetTop');
        // console.log(elementHeight, 'elementHeight');
        // console.log(windowHeight, 'windowHeight');

        if (scrollPosition + 900 > elementOffsetTop) {
          setShow(true);
        }
      }
    };

    window.addEventListener("scroll", handleScrollFox);
    return () => {
      window.removeEventListener("scroll", handleScrollFox);
    };
  }, []);

  const { scrollY } = useScroll();
  const y0 = useTransform(scrollY, [3800, 5000], [-1500, 50]);
  const y1 = useTransform(scrollY, [5500, 6800], [0, 2500]);
  const y2 = useTransform(scrollY, [5500, 5800], [1, 0]);

  const imageProps = {
    x: y1.get(),
    y: y0.get(),
    opacity: y2.get(),
  };

  return (
    <div
      className="flex flex-col lg:flex-row w-full justify-center py-[120px] bg-[#F0EBE5] dark:bg-dark h-full"
      ref={tarRef}
      id="target"
    >
      <div className="flex left-0 w-full relative lg:w-[50%]">
        <div className="absolute left-[-100px]">
          <img
            src="/explorer/metero.png"
            alt="metero"
            className="object-cover object-center dark:hidden"
          />
        </div>
        <motion.div
          animate={imageProps}
          style={{ y: y0, x: y1, opacity: y2 }}
          className="z-0 relative left-[50px]"
        >
          <SpaceX show={show} />
        </motion.div>
      </div>
      <div className="flex w-full lg:w-[50%] z-10 flex-col justify-center bg-[#F0EBE5] dark:bg-transparent">
        <div className="flex flex-col px-10 sm:pr-[30%] w-full gap-8">
          <div className="flex flex-col gap-2 text-dark-text font-Josefin dark:text-white">
            <div className="text-3xl lg:text-5xl font-bold ">
              Explore The Great Galactic Line, In Search Of Priceless Treasure
            </div>
            <div className="text-base lg:text-2xl">
              It is said that every imaginable Treasure can be found on the
              Great Galactic Line - but the battle for power is ruthless. Who
              will be the last one standing?
            </div>
          </div>
          <Link
            href="https://galactickingdom.aflip.in/87d7fb8696.html"
            id="faq"
            className="cursor-pointer rounded-md overflow-hidden w-[183px]"
          >
            <div
              className="mx-auto lg:mx-0 w-[183px] text-[#262626] font-[500] py-2 text-center uppercase rounded-md border-[2px] gradient-border"
              style={{
                background: "linear-gradient(180deg, #FFF 0%, #E7E7E7 100%)",
              }}
            >
              learn more
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
