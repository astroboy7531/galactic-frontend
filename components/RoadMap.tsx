import React from 'react'
import OvalLeftBall from './AnimeSupplement/OvalLeftBall'
import OvalRightBall from './AnimeSupplement/OvalRightBall'

export default function RoadMap() {
    const [showDetailsFirst, setShowDetailsFirst] = React.useState(false);
    const [showDetailsSecond, setShowDetailsSecond] = React.useState(false);
    const [showDetailsThird, setShowDetailsThird] = React.useState(false);

    return (
        <div className='flex w-full flex-col bg-[#F0EBE5]'>
            <div className=' w-full flex justify-center items-center overflow-y-visible h-[87px] relative '>
                <img className='object-center object-cover bottom-[0px] min-w-[140%]' alt='cloud' src='/roadmap/cloudRoadmapTop.png' />
            </div>
            <div className=' relative w-full flex flex-col max-w-[1240px] gap-6  font-Josefin mx-auto px-4  py-[120px]'>
                <OvalLeftBall />
                <OvalRightBall />
                <div className='text-dark-text text-5xl font-bold z-30'>
                    Our<br />
                    Roadmap
                </div>
                <div className='flex md:h-[300px] flex-col text-dark-text md:flex-row px-10 items-center md:items-start md:px-0 w-full justify-center gap-9 md:gap-0 md:justify-between z-30'>
                    <div className='oval cursor-global duration-150 mr-24 md:mr-0 md:mt-16'>
                        <div className='text-xl font-bold'>Q4 2023</div>
                        <ul className='text-xs list-disc'>
                            <li>Galactic Kingdom: Genesis Conquerors First round of pre-sale</li>
                        </ul>
                    </div>
                    <div className='oval cursor-global duration-150 ml-24 md:ml-0 md:mt-12'
                        onMouseEnter={() => setShowDetailsFirst(true)}
                        onMouseLeave={() => setShowDetailsFirst(false)}
                    >
                        <div className='text-xl font-bold'>Q1 2024&nbsp;<span className='text-xs'>(click&scroll)</span></div>
                        <ul className='text-xs list-disc'>
                            <li>Galactic Kingdom: Genesis Conquerors Final round of pre-sale</li>
                            <li>Start of twitter growth hacking campaign</li>
                            {showDetailsFirst && (
                                <>
                                    <li>Galactic Kingdom: Genesis Conquerors Public Sale</li>
                                    <li>$1M BTC reserve creation</li>
                                    <li>Airdrop Galatic Kingdom: Genesis Mothership</li>
                                    <li>First Playable version of Galactic Kingdom Alpha 0.1<br/><br/><br/><br/></li>
                                </>
                            )}
                            {/* <li>Airdrop Galactic Kingdom: Genesis Mothership</li>
                            <li>First Playable version of Galactic Kingdom Alpha 0.1</li> */}
                        </ul>
                    </div>
                    <div className='oval cursor-global duration-150 mr-24 md:mr-0 md:mt-8'
                        onMouseEnter={() => setShowDetailsSecond(true)}
                        onMouseLeave={() => setShowDetailsSecond(false)}
                    >
                        <div className='text-xl font-bold'>Q2 2024&nbsp;<span className='text-xs'>(click&scroll)</span></div>
                        <ul className='text-xs list-disc'>
                            <li>Airdrop Galactic Kingdom: Genesis Planet</li>
                            <li>$GB audit & testing</li>
                            <li>Beginning of $GKC private pre-sale</li>
                            {showDetailsSecond && (
                                <>
                                    <li>First closed Beta with full NFT integration</li>
                                    <li>Launch on Play Store/App Store</li>
                                    <li>End of $GKC pre-sale</li>
                                    <li>Full Game Economy Review</li>
                                    <li>Launch of Breeding Onboarding, Galactic Kingdom: Conquerors Descendants</li>
                                    <li>TikTok UGC Growth hacking incentivized by breeding affiliation feature<br/><br/><br/><br/></li>
                                </>
                            )}
                            {/* <li>Full Game Economy Review</li>
                            <li>Launch of Breeding onboarding, Galactic Kingdom: Conquerors Descendants</li> 
                            <li>TikTok UGC Growth hacking incentivized by breeding affiliation feature</li> */}
                        </ul>
                    </div>
                    <div className='oval cursor-global duration-150 ml-24 md:ml-0 md:mt-4'
                        onMouseEnter={() => setShowDetailsThird(true)}
                        onMouseLeave={() => setShowDetailsThird(false)}
                    >
                        <div className='text-xl font-bold'>Q3 2024&nbsp;<span className='text-xs'>(click&scroll)</span></div>
                        <ul className='text-xs list-disc '>
                            <li>Google Pay & Apple Pay Integration </li>
                            <li>Launch of Training, Galactic Kingdom: Conquerors Disciple</li>
                            {
                                showDetailsThird && (
                                    <>
                                        <li>F2P Web2 Gamers Marketing</li>
                                        <li>$GKC Public Sale</li>
                                        <li>$GKC Launch</li>
                                        <li>Ranking Feature Implementation</li>
                                        <li>Bounty Feature Implementation</li>
                                        <li>Galactic Government Platform Launch</li>
                                        <li>Monthly Treasure Hunt Implementation</li>
                                        <li>$GKC Burning Use Case<br/><br/><br/><br/></li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                    <div className='oval cursor-global duration-150 mr-24 md:mr-0'>
                        <div className='text-xl font-bold'>Q4 2024</div>
                        <ul className='text-xs list-disc'>
                            <li>Genesis Galactic Blacksmith ?</li>
                            <li>Genesis Galactic Alchemist ?</li>
                            <li>Galactic Kingdom Multiverse Expansion ?</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

