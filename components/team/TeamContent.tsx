import React, { useContext } from 'react'
import Fade from 'react-reveal/Fade';
import { useRouter } from 'next/router';
import raceContext from '@/context/RaceContext';

export default function TeamContent() {
    const {race, setRace} = useContext(raceContext);
    const router = useRouter();
    const handleRace = (name:string) => {
        setRace(name);
        router.push('/race');
    }
    return (
        <div className='w-full flex flex-col border-0 relative py-12 font-Josefin bg-[#F0EBE5] about-shadow'>
            <div className='w-full flex flex-col overflow-y-visible absolute z-10'>
                <div>
                    <img className=' object-center object-cover min-w-[100%] top-[-150px] md:top-[-200px] lg:top-[-270px] relative' alt='cloud' src='/about/cloudTop.png' />
                </div>
            </div>
            <div className='w-full max-w-[1240px] z-20 flex flex-row lg:flex-col lg:gap-20 items-center justify-center px-10 mx-auto text-center pt-16 text-dark-text'>
                <Fade bottom cascade>
                    <div className='flex flex-col lg:flex-row justify-center gap-20  overflow-visible'>
                        <div className='flex flex-col items-center gap-8' onClick={() => handleRace('Taka')}>
                            <div>
                                <img
                                    src='/secondPart/Pfo_5.png'
                                    alt='pfo'
                                    className='object-cover object-center'
                                />
                            </div>
                            <div className='flex flex-col items-center gap-2 w-[80%] text-center'>
                                <h2 className='uppercase text-3xl font-[500]'>Taka</h2>
                                <p className='text-[#286F7C] text-sm'>Chief Executive Officer</p>
                                <p className='text-sm'>Leading the project growth and development</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-8' onClick={() => handleRace('Evan Roberts')}>
                            <div>
                                <img
                                    src='/secondPart/Pfo_4.png'
                                    alt='pfo'
                                    className='object-cover object-center'
                                />
                            </div>
                            <div className='flex flex-col items-center gap-2 w-[80%] text-center'>
                                <h2 className='uppercase text-3xl font-[500]'>Evan Roberts</h2>
                                <p className='text-[#C17506] text-sm'>Chief Product Officer</p>
                                <p className='text-sm'>Gameplay, Game Economy & Tokenomic Design</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-8' onClick={() => handleRace('Adam Glab')}>
                            <div>
                                <img
                                    src='/secondPart/Pfo_1.png'
                                    alt='pfo'
                                    className='object-cover object-center'
                                />
                            </div>
                            <div className='flex flex-col items-center gap-2 w-[80%] text-center'>
                                <h2 className='uppercase text-3xl font-[500]'>Adam Glab</h2>
                                <p className='text-[#286F7C] text-sm'>Lead Blockchain Dev</p>
                                <p className='text-sm'>Smart Contracts & Full Stack Architecture</p>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade bottom cascade>
                    <div className='flex flex-col lg:flex-row justify-center gap-20  overflow-visible'>
                        <div className='flex flex-col items-center gap-8' onClick={() => handleRace('Binnie')}>
                            <div>
                                <img
                                    src='/secondPart/Pfo_3.png'
                                    alt='pfo'
                                    className='object-cover object-center'
                                />
                            </div>
                            <div className='flex flex-col items-center gap-2 w-[80%] text-center'>
                                <h2 className='uppercase text-3xl font-[500]'>Binnie</h2>
                                <p className='text-[#C17506] text-sm'>Lead Designer</p>
                                <p className='text-sm'>Creative Art & Graphic Designs</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-8' onClick={() => handleRace('Michael Stan')}>
                            <div>
                                <img
                                    src='/secondPart/Pfo_2.png'
                                    alt='vector'
                                />
                            </div>
                            <div className='flex flex-col items-center gap-2 w-[80%] text-center'>
                                <h2 className='uppercase text-3xl font-[500]'>Michael Stan</h2>
                                <p className='text-[#C17506] text-sm'>Head Legal Department</p>
                                <p className='text-sm'>Web3 Law, ADRs & Legal Adviser/Representative</p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
