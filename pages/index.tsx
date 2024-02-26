import React, { useEffect } from "react";
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
import Page from "@/components/page";

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
  }, []); 

  useEffect(() => {
    console.log(currTheme);
  }, [currTheme]);

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
