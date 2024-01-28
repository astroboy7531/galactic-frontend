import React from "react";
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

export default function Home() {
  const bgAudioRef = React.useRef<HTMLAudioElement>(null);
  return (
    <>
      <Head>
        <title>Galactic Kingdom</title>
        {/* <meta
          name="description"
          content=""
        /> */}
        {/* <meta name="robots" content="index, follow" /> */}

        {/* OG Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:title" content={"AIRM | AI Prompts Marketplace"} /> */}
        {/* <meta
          property="og:description"
          content={
            "Explore AI Resources Marketplace for innovative MidJourney & ChatGPT prompts. Ideal for creatives seeking AI mastery. Daily updates. Start now!"
          }
        /> */}
        <meta property="og:url" content={"/"} />
      </Head>
      <div className="flex flex-col w-full cursor-global">
        <div className="bg-dark relative pb-20">
          <Header />
          <LeftBall />
          <RightBall />
          <Hero />
          <div className=' w-full flex justify-center items-center overflow-y-visible h-[30px] md:h-[87px] relative z-10'>
            <img className='object-top object-cover bottom-[0px] min-w-[140%] h-[200px] md:h-[400px] xl:h-[600px]' alt='cloud' src='/firstPart/genesisTopCloud.png' />
          </div>
        </div >
        <Genesis />
        <Battle />
        <RoadMap />
        <Explorer />
        <Faq />
        <PhoneSection />
        <Footer />
      </div>
    </>
  );
}
