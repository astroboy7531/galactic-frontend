import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import LeftBall from "@/components/AnimeSupplement/LeftBall";
import RightBall from "@/components/AnimeSupplement/RightBall";
import Genesis from "@/components/Genesis";
import Battle from "@/components/Battle";
import Footer from "@/components/Footer";
import PhoneSection from "@/components/PhoneSection";
import Faq from "@/components/Faq";
import Explorer from "@/components/Explorer";
import RoadMap from "@/components/RoadMap";
import MovingImage from "@/components/MovingImage";
import LoadingAnimation from "@/components/LoadingAnimation";
import Page from "@/components/Page";
import { useScroll } from "framer-motion";

export default function Home() {
  React.useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY) {
        console.log(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  const [currTheme, setCurrTheme] = React.useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setCurrTheme(storedTheme);
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    console.log(currTheme); // Log the updated theme here
  }, [currTheme]); // Add currTheme to the dependency array

  return (
    <>
      <Page>
        <Head>
          <title>Galactic Kingdom</title>
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={"/"} />
        </Head>
        <div className="flex bg-dark dark:bg-[#050B1D] flex-col w-full cursor-global">
          <div className=" relative pb-20">
            <Header />
            <LeftBall />
            <RightBall />
            <Hero />
            {/* <div className=' w-full flex justify-center items-center overflow-y-visible h-[30px] md:h-[87px] relative z-10'>
              <img className='object-top object-cover bottom-[0px] min-w-[100%] h-[200px] md:h-[400px] xl:h-[600px]' alt='cloud' src='/firstPart/genesisTopCloud.png' />
            </div> */}
            {/* <MovingImage rotation={false as boolean} /> */}
            <MovingImage rotation={false as boolean} />
          </div>
          <Genesis />
          <Battle />
          <RoadMap />
          <Explorer />
          <Faq />
          <PhoneSection />
          <Footer />
        </div>
      </Page>
    </>
  );
}
