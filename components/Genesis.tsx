import raceContext from '@/context/RaceContext';
import React from 'react'
import Fade from 'react-reveal/Fade';
import { useRouter } from 'next/router';

export default function Genesis() {
    const {race, setRace} = React.useContext(raceContext);
    const router = useRouter();
    const handleRace = (name:string) => {
        setRace(name);
        router.push('/race');
    }
    const [showDetailsHuman, setShowDetailsHuman] = React.useState(false);
    const [showDetailsGiant, setShowDetailsGiant] = React.useState(false);
    const [showDetailsMink, setShowDetailsMink] = React.useState(false);
    const [showDetailsLunar, setShowDetailsLunar] = React.useState(false);
    const [showDetailsFish, setShowDetailsFish] = React.useState(false);
    return (
        <div className='flex flex-col relative w-full overflow-y-visible py-10 bg-[#FFF4B5] genesis-shadow'>
            {/* <div className=' w-full flex justify-center items-center overflow-y-visible h-[237px] relative z-10'>
                <img className='object-center object-cover bottom-[0px] min-w-[140%]' alt='cloud' src='/firstPart/genesisTopCloud.png' />
            </div> */}
            <div className='z-20 flex items-center justify-between w-full mx-auto'>
                <div className='hidden md:block'>
                    <img
                        src='/secondPart/leftArrow.png'
                        alt='left Arrow'
                        className='px-20'
                    />
                </div>
                <div className='px-4 text-3xl font-semibold text-center text-dark-text font-Josefin '>
                    "Only one life that will soon be past, only ONE PEACE that will ever last"
                </div>
                <div className='hidden md:block'>
                    <img
                        src='/secondPart/rightArrow.png'
                        alt='left Arrow'
                        className='px-20'
                    />
                </div>
            </div>
            <div className='py-[100px] flex flex-col gap-[82px] items-center w-full max-w-[1100px] mx-auto z-20'>
                <Fade>
                    <div className='flex flex-col gap-4 text-center text-dark-text font-Josefin'>
                        <h1 className='text-5xl font-bold'>The Genesis</h1>
                        <p className='text-2xl font-normal'>Only 10 000 survivors from the Thousand years war remained.</p>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='flex flex-row items-center px-2 mx-auto text-center text-white lg:flex-col sm:px-0 font-Aclonica'>
                        <div className='flex flex-col justify-center gap-12 overflow-visible lg:flex-row'>
                            <div className='relative duration-300 cursor-pointer  hover:scale-125'
                                onMouseEnter={() => setShowDetailsHuman(true)}
                                onMouseLeave={() => setShowDetailsHuman(false)}
                            >
                                <div className='shrink-0'>
                                    <img
                                        src='/secondPart/Pfo_1.png'
                                        alt='pfo'
                                        className='object-cover object-center shrink-0'
                                    />
                                </div>
                                <div className={` ${showDetailsHuman ? ' left-[15%] bottom-[0px] lg:left-0 lg:bottom-[10px] gap-2 ' : 'left-2 bottom-0 lg:bottom-[10px]'} absolute flex flex-col   bg-[#9F7A8D] max-w-[70%] lg:max-w-[50%]  duration-300 px-4 py-2 forc-z`}>
                                    <div className='flex items-center justify-center gap-2'>
                                        <div className='shrink-0'>
                                            <img
                                                src='/secondPart/Vector_2.png'
                                                alt='vector'
                                                className='object-cover object-center shrink-0'
                                            />
                                        </div>
                                        <div className='text-lg md:text-2xl'>Human</div>
                                    </div>
                                    <div className={`${showDetailsHuman ? 'flex' : 'hidden'} text-[8px] duration-300 font-light text-left`}>
                                        Emerging from Earth&apos;s depths in the East Galaxy, humans are intergalactic pioneers, venturing into the unknown to seek treasures across uncharted planets.
                                    </div>
                                    <div className={`${showDetailsHuman ? 'flex' : 'hidden'} justify-end items-center text-[#ECC992] text-[12px] font-Josefin`}>
                                        <div className='cursor-pointer' onClick={() => handleRace('Adam Glab')}>Readmore</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.5268 10.295C5.25344 10.0216 5.25344 9.57839 5.5268 9.30503L7.83183 7L5.5268 4.69497C5.25344 4.42161 5.25344 3.97839 5.5268 3.70503C5.80017 3.43166 6.24339 3.43166 6.51675 3.70503L9.31675 6.50502C9.59012 6.77839 9.59012 7.22161 9.31675 7.49497L6.51675 10.295C6.24339 10.5683 5.80017 10.5683 5.5268 10.295Z" fill="#ECC992" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative overflow-visible duration-300 cursor-pointer  hover:scale-125'
                                onMouseEnter={() => setShowDetailsGiant(true)}
                                onMouseLeave={() => setShowDetailsGiant(false)}
                            >
                                <img
                                    src='/secondPart/Pfo_2.png'
                                    alt='pfo'
                                    className='object-cover object-center'
                                />
                                <div className={`${showDetailsGiant ? 'bottom-0 left-[15%] forc-z' : 'bottom-10 left-24'} duration-300 absolute flex flex-col items-center  giant max-w-[70%] px-4 py-2 `}>
                                    <div className='flex items-center justify-center gap-2 mx-auto'>
                                        <img
                                            src='/secondPart/Vector_5.png'
                                            alt='vector'
                                        />
                                        <div className='text-lg md:text-2xl'>Giant</div>
                                    </div>
                                    <div className={`${showDetailsGiant ? 'flex py-1' : 'hidden'} text-[8px] duration-300 font-light text-justify`}>
                                        Radiating cosmic power from colossal planets in the West Galaxy, Giants are cosmic architects becoming secret builders on mountain planets.
                                    </div>
                                    <div className={`${showDetailsGiant ? 'flex py-1' : 'hidden'} justify-center items-center text-[#ECC992] text-[12px] font-Josefin`}>
                                        <div className='cursor-pointer' onClick={() => handleRace('Michael Stan')}>Readmore</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.5268 10.295C5.25344 10.0216 5.25344 9.57839 5.5268 9.30503L7.83183 7L5.5268 4.69497C5.25344 4.42161 5.25344 3.97839 5.5268 3.70503C5.80017 3.43166 6.24339 3.43166 6.51675 3.70503L9.31675 6.50502C9.59012 6.77839 9.59012 7.22161 9.31675 7.49497L6.51675 10.295C6.24339 10.5683 5.80017 10.5683 5.5268 10.295Z" fill="#ECC992" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative duration-300 cursor-pointer  hover:scale-125'
                                onMouseEnter={() => setShowDetailsMink(true)}
                                onMouseLeave={() => setShowDetailsMink(false)}
                            >
                                <img
                                    src='/secondPart/Pfo_3.png'
                                    alt='pfo'
                                    className='object-cover object-center'
                                />
                                <div className={`${showDetailsMink ? 'right-[15%] lg:right-[0%] gap-2' : ' right-[42px]'} absolute flex flex-col bottom-0 bg-[#A27030] max-w-[70%] lg:max-w-[50%]  duration-300 px-4 py-2 forc-z`}>
                                    <div className='flex items-center gap-2 mx-auto'>
                                        <img
                                            src='/secondPart/Vector_1.png'
                                            alt='vector'
                                        />
                                        <div className='text-lg md:text-2xl'>Mink</div>
                                    </div>
                                    <div className={`${showDetailsMink ? 'flex' : 'hidden'} text-[8px] duration-300 font-light text-left`}>
                                        Emerging from the elusive North Galaxy, Minks are cosmic warriors whose prowess is harnessed on jungle planets.
                                    </div>
                                    <div className={`${showDetailsMink ? 'flex' : 'hidden'} justify-end items-center text-[#ECC992] text-[12px] font-Josefin`}>
                                        <div className='cursor-pointer' onClick={() => handleRace('Binnie')}>Readmore</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.5268 10.295C5.25344 10.0216 5.25344 9.57839 5.5268 9.30503L7.83183 7L5.5268 4.69497C5.25344 4.42161 5.25344 3.97839 5.5268 3.70503C5.80017 3.43166 6.24339 3.43166 6.51675 3.70503L9.31675 6.50502C9.59012 6.77839 9.59012 7.22161 9.31675 7.49497L6.51675 10.295C6.24339 10.5683 5.80017 10.5683 5.5268 10.295Z" fill="#ECC992" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row justify-center gap-12 relative sm:top-[-40px] z-[-10]'>
                            <div className='relative duration-300 cursor-pointer  hover:scale-125'
                                onMouseEnter={() => setShowDetailsLunar(true)}
                                onMouseLeave={() => setShowDetailsLunar(false)}
                            >
                                <img
                                    src='/secondPart/Pfo_4.png'
                                    alt='pfo'
                                    className='object-cover object-center'
                                />
                                <div className={` ${showDetailsLunar ? 'left-[15%] lg:left-0 gap-2' : 'left-[-2px]'} absolute flex flex-col bottom-[1px] bg-[#6A7D7E] max-w-[70%] lg:max-w-[50%]  duration-300 px-4 py-2 forc-z`}>
                                    <div className='flex items-center justify-center gap-2'>
                                        <img
                                            src='/secondPart/Vector_3.png'
                                            alt='vector'
                                        />
                                        <div className='text-lg md:text-2xl'>Lunarian</div>
                                    </div>
                                    <div className={`${showDetailsLunar ? 'flex' : 'hidden'} text-[8px] duration-300 font-light text-left`}>
                                        Mystical beings from the Great Galactic Line, Lunarians wield cosmic power to safeguard hidden treasures on fiery landscapes.
                                    </div>
                                    <div className={`${showDetailsLunar ? 'flex' : 'hidden'} justify-end items-center text-[#ECC992] text-[12px] font-Josefin`}>
                                        <div className='cursor-pointer' onClick={() => handleRace('Evan Roberts')}>Readmore</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.5268 10.295C5.25344 10.0216 5.25344 9.57839 5.5268 9.30503L7.83183 7L5.5268 4.69497C5.25344 4.42161 5.25344 3.97839 5.5268 3.70503C5.80017 3.43166 6.24339 3.43166 6.51675 3.70503L9.31675 6.50502C9.59012 6.77839 9.59012 7.22161 9.31675 7.49497L6.51675 10.295C6.24339 10.5683 5.80017 10.5683 5.5268 10.295Z" fill="#ECC992" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative duration-300 cursor-pointer  hover:scale-125'
                                onMouseEnter={() => setShowDetailsFish(true)}
                                onMouseLeave={() => setShowDetailsFish(false)}
                            >
                                <img
                                    src='/secondPart/Pfo_5.png'
                                    alt='pfo'
                                    className='object-cover object-center'
                                />
                                <div className={`${showDetailsFish ? 'right-[15%] lg:right-0 gap-2' : 'right-[0px]'} absolute flex flex-col items-center bottom-[1px] bg-[#58787E] max-w-[70%] lg:max-w-[50%]  duration-300 px-4 py-2 forc-z `}>
                                    <div className='flex items-center justify-center gap-2'>
                                        <img
                                            src='/secondPart/Vector_4.png'
                                            alt='vector'
                                        />
                                        <div className='text-lg md:text-2xl'>Fishman</div>
                                    </div>
                                    <div className={`${showDetailsFish ? 'flex' : 'hidden'} text-[8px] duration-300 font-light text-left`}>
                                        Ascending from aquatic planets in the South Galaxy, Fishmen are cosmic shadows exploring mysterious waters.
                                    </div>
                                    <div className={`${showDetailsFish ? 'flex' : 'hidden'} justify-end items-center text-[#ECC992] text-[12px] font-Josefin`}>
                                        <div className='cursor-pointer' onClick={() => handleRace('Taka')}>Readmore</div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.5268 10.295C5.25344 10.0216 5.25344 9.57839 5.5268 9.30503L7.83183 7L5.5268 4.69497C5.25344 4.42161 5.25344 3.97839 5.5268 3.70503C5.80017 3.43166 6.24339 3.43166 6.51675 3.70503L9.31675 6.50502C9.59012 6.77839 9.59012 7.22161 9.31675 7.49497L6.51675 10.295C6.24339 10.5683 5.80017 10.5683 5.5268 10.295Z" fill="#ECC992" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
            {/* <img className='absolute bottom-[250px] left-0 w-full' src='/secondPart/cloud2.png' /> */}
        </div>
    )
}
