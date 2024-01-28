import React from 'react'

export default function PhoneSection() {
    return (
        <div className='w-full flex flex-col bg-cover bg-center bg-[#F0EBE5] border-0 relative top-[-2px]'>
            <div className='w-full flex flex-col overflow-y-visible absolute z-10'>
                <div>
                    <img className=' object-center object-cover min-w-[100%] bottom-20 relative' alt='cloud' src='/phoneSection/phoneCloud.png' />
                </div>
            </div>
            <div className='flex flex-col items-center gap-3 justify-center  sm:flex-row pb-16 z-20  pt-40'>
                <div>
                    <img
                        src='/phoneSection/googleStore.png'
                        alt='Google Store'
                        className='object-cover object-center'
                    />
                </div>
                <div>
                    <img
                        src='/phoneSection/appStore.png'
                        alt='App Store'
                        className='object-cover object-center'
                    />
                </div>
            </div>
            <div className='w-full flex justify-center relative flex-col sm:flex-row items-center sm:items-start gap-6 bg-bottom bg-cover bg-no-repeat' style={{ backgroundImage: 'url(/phoneSection/phoneBottom.png)' }}>
                <div className='absolute transform -translate-y-1/3 left-0 top-0 scale-150 z-10'>
                    <img
                        src='/right_decor.png'
                        alt='left decoration'
                        className='object-cover object-center'
                    />
                </div>
                <div className='absolute transform -translate-y-1/3 right-0 top-0 scale-150 z-10'>
                    <img
                        src='/left_decor.png'
                        alt='right decoration'
                        className='object-cover object-center'
                    />
                </div>
                <div className=' z-20'>
                    <img
                        src='/phoneSection/phoneGroup.png'
                        alt='phone Group'
                        className='object-cover object-center'
                    />
                </div>
                <div className=' z-20'>
                    <img
                        src='/phoneSection/human.png'
                        alt='phone Group'
                        className='object-cover object-center'
                    />
                </div>
            </div>

            {/* <div className=' w-full absolute bottom-0 flex justify-center items-center overflow-y-hidden h-[287px]'>
                <img className='object-center object-cover min-w-[100%] bottom-0' alt='cloud' src='/phoneSection/phoneBottom.png' />
            </div> */}
        </div>
    )
}
