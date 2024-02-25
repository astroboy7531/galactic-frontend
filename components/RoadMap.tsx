import React from "react";
import OvalLeftBall from "./AnimeSupplement/OvalLeftBall";
import OvalRightBall from "./AnimeSupplement/OvalRightBall";
import MovingImage2 from "./MovingImagetwo";

export default function RoadMap() {
  const [showDetailsFirst, setShowDetailsFirst] = React.useState(false);
  const [showDetailsSecond, setShowDetailsSecond] = React.useState(false);
  const [showDetailsThird, setShowDetailsThird] = React.useState(false);

  return (
    <div className="flex w-full relative flex-col bg-[#F0EBE5] dark:bg-dark">
      <div className=" w-full flex justify-center items-center overflow-y-visible h-[87px] relative ">
        <img
          className="object-center object-cover bottom-[0px] min-w-[140%]"
          alt="cloud"
          src="/roadmap/cloudRoadmapTop.png"
        />
      </div>
      {/* <MovingImage2 rotation={false as boolean} /> */}
      <div className="">
        <div className="absolute transform -translate-y-1/3 left-0 top-40 scale-100">
          <img
            src="/right_decor.png"
            alt="left decoration"
            className="object-cover object-center scale-150"
          />
        </div>
        <div className="absolute transform -translate-y-1/3 right-0 top-40 scale-100">
          <img
            src="/left_decor.png"
            alt="right decoration"
            className="object-cover object-center scale-150"
          />
        </div>
      </div>
      <div className="relative w-full flex flex-col max-w-[1440px] gap-10  font-Josefin mx-auto px-4  py-[120px]">
        <OvalLeftBall />
        <OvalRightBall />
        <div className="text-dark-text dark:text-white text-5xl font-bold z-10">
          Our
          <br />
          Roadmap
        </div>
        <div className="flex md:h-[400px] flex-col text-dark-text md:flex-row px-10 items-center md:items-start md:px-0 w-full justify-center gap-9 md:gap-0 md:justify-between z-10">
          <div className="oval hover:-translate-y-10 cursor-global duration-300 mr-24 md:mr-0 md:mt-16">
            <div className="text-xl font-bold">Q4 2023</div>
            <ul className="text-xs list-disc no-scrollbar">
              <li>Finalizing Game Mechanisms</li>
              <li>Formalizing legal structure</li>
              <li>Beginning Game Development</li>
            </ul>
          </div>
          <div
            className="oval hover:-translate-y-10 cursor-global duration-300 ml-24 md:ml-0 md:mt-12 "
            onMouseEnter={() => setShowDetailsFirst(true)}
            onMouseLeave={() => setShowDetailsFirst(false)}
          >
            <div className="text-xl font-bold">
              Q1 2024&nbsp;<span className="text-xs"></span>
            </div>
            <ul className="text-xs list-disc no-scrollbar">
              <li>Community Building</li>
              <li>Genesis Conquerors Sale</li>
              <li>BTC reserve creation</li>
              <li>Galactic Kingdom Alpha release</li>
              {showDetailsFirst && (
                <>
                  {/* <li>$1M BTC reserve creation</li>
                                    <li>Airdrop Galatic Kingdom: Genesis Mothership</li>
                                    <li>First Playable version of Galactic Kingdom Alpha 0.1<br /><br /><br /><br /></li> */}
                </>
              )}
              {/* <li>Airdrop Galactic Kingdom: Genesis Mothership</li>
                        <li>First Playable version of Galactic Kingdom Alpha 0.1</li> */}
            </ul>
          </div>
          <div
            className="oval hover:-translate-y-10 cursor-global duration-300 mr-24 md:mr-0 md:mt-8"
            onMouseEnter={() => setShowDetailsSecond(true)}
            onMouseLeave={() => setShowDetailsSecond(false)}
          >
            <div className="text-xl font-bold">
              Q2 2024&nbsp;<span className="text-xs"></span>
            </div>
            <ul className="text-xs list-disc no-scrollbar">
              <li>Launch on Play store/App Store</li>
              <li>Launch of Breeding system</li>
              <li>Closed Beta release</li>
              {/* {showDetailsSecond && (
                                <>
                                    <li>First closed Beta with full NFT integration</li>
                                    <li>Launch on Play Store/App Store</li>
                                    <li>End of $GKC pre-sale</li>
                                    <li>Full Game Economy Review</li>
                                    <li>Launch of Breeding Onboarding, Galactic Kingdom: Conquerors Descendants</li>
                                    <li>TikTok UGC Growth hacking incentivized by breeding affiliation feature<br /><br /><br /><br /></li>
                                </>
                            )} */}
              {/* <li>Full Game Economy Review</li>
                        <li>Launch of Breeding onboarding, Galactic Kingdom: Conquerors Descendants</li> 
                        <li>TikTok UGC Growth hacking incentivized by breeding affiliation feature</li> */}
            </ul>
          </div>
          <div
            className="oval hover:-translate-y-10 cursor-global duration-300 ml-24 md:ml-0 md:mt-4"
            onMouseEnter={() => setShowDetailsThird(true)}
            onMouseLeave={() => setShowDetailsThird(false)}
          >
            <div className="text-xl font-bold">
              Q3 2024&nbsp;<span className="text-xs"></span>
            </div>
            <ul className="text-xs list-disc no-scrollbar ">
              <li>Launch of F2P Training system </li>
              <li>Web2 Marketing</li>
              <li>$GKC Private & Public Sale</li>
              {/* {
                                showDetailsThird && (
                                    <>
                                        <li>F2P Web2 Gamers Marketing</li>
                                        <li>$GKC Public Sale</li>
                                        <li>$GKC Launch</li>
                                        <li>Ranking Feature Implementation</li>
                                        <li>Bounty Feature Implementation</li>
                                        <li>Galactic Government Platform Launch</li>
                                        <li>Monthly Treasure Hunt Implementation</li>
                                        <li>$GKC Burning Use Case<br /><br /><br /><br /></li>
                                    </>
                                )
                            } */}
            </ul>
          </div>
          <div className="oval hover:-translate-y-10 cursor-global duration-300 mr-24 md:mr-0">
            <div className="text-xl font-bold">Q4 2024</div>
            <ul className="text-xs list-disc no-scrollbar">
              <li>DAO Launch</li>
              <li>Intergalactic War system launch</li>
              <li>Galactic Kingdom Public Beta release</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
