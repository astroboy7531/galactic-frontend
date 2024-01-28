import Link from 'next/link'
import React from 'react'
import ContactModal from './global/ContactModal';

export default function Footer() {
    const [contactVisible, setContactVisible] = React.useState(false);

    return (
        <div className='flex flex-col items-center bg-[#F9F9F9] pt-[50px] pb-8 font-Josefin'>
            <div className='max-w-[1240px] w-full flex flex-col items-center gap-8'>
                <div className='flex flex-col items-center gap-6'>
                    <div>
                        <img
                            src='/Logo/Big.png'
                            alt='logo'
                            className='object-cover object-center'
                        />
                    </div>
                    <div className='text-[#060C1E] text-center font-Josefin font-[500]'>
                        Join players all over the World in the battle for<br /> the throne to inherit the kingdom !
                    </div>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <Link href='https://discord.gg/Q3y88jD3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8.48029 5C7.80285 5 5.76047 5.78357 5.39405 5.94016C5.02763 6.09676 4.62091 6.5856 4.15943 7.39239C3.69731 8.19918 3.32648 9.14232 2.72397 10.5296C2.12208 11.917 1.98168 14.5916 2.00183 15.4079C2.02197 16.2242 2.12082 16.8619 3.00539 17.3448C3.88933 17.8271 4.67128 18.332 5.49415 18.6357C6.31765 18.9393 6.87925 19.1578 7.26078 18.8542C7.64231 18.5505 7.89351 18.0188 7.89351 18.0188C7.89351 18.0188 8.2549 17.5443 7.57242 17.2597C6.88995 16.9744 6.54871 16.775 6.5783 16.4808C6.60852 16.1867 6.65826 16.0253 6.82888 16.0635C6.9995 16.1016 7.4018 16.7845 8.94744 17.0977C10.4931 17.4109 11.9997 17.3638 11.9997 17.3638C11.9997 17.3638 13.5069 17.4115 15.0526 17.0977C16.5982 16.7845 16.9999 16.1016 17.1705 16.0635C17.3411 16.0253 17.3908 16.1867 17.4211 16.4802C17.4513 16.775 17.1101 16.9744 16.4276 17.2597C15.7451 17.5443 16.1065 18.0188 16.1065 18.0188C16.1065 18.0188 16.3577 18.5499 16.7392 18.8542C17.1201 19.1578 17.6823 18.9393 18.5052 18.6357C19.3281 18.332 20.1107 17.8277 20.9946 17.3448C21.8792 16.8619 21.978 16.2242 21.9982 15.4079C22.0183 14.5922 21.8779 11.917 21.2754 10.5296C20.6735 9.14232 20.3021 8.19918 19.8399 7.39239C19.3791 6.5856 18.9717 6.09676 18.606 5.93957C18.2395 5.78357 16.1965 5 15.5191 5C14.8416 5 14.6414 5.44656 14.6414 5.44656L14.4053 5.94016C14.4053 5.94016 12.8188 5.65496 12.0104 5.65436C11.202 5.65436 9.59466 5.94016 9.59466 5.94016L9.35856 5.44597C9.35856 5.44597 9.15836 5 8.48029 5ZM8.55395 10.9232H8.57913C9.56696 10.9232 10.3672 11.7407 10.3672 12.7488C10.3672 13.7574 9.56696 14.5743 8.57913 14.5743C7.59131 14.5743 6.7911 13.7574 6.7911 12.7488C6.79047 11.7503 7.5762 10.9369 8.55395 10.9232ZM15.4209 10.9232H15.446C16.4238 10.9369 17.2089 11.7508 17.2089 12.7488C17.2089 13.7574 16.4087 14.5743 15.4209 14.5743C14.4324 14.5743 13.6328 13.7574 13.6328 12.7488C13.6328 11.7407 14.4324 10.9232 15.4209 10.9232Z" fill="#060C1E" />
                        </svg>
                    </Link>
                    <Link href='https://twitter.com/GKingdom_io'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21.533 6.85784C21.5482 7.07103 21.5482 7.28427 21.5482 7.49745C21.5482 14 16.599 21.4924 7.5533 21.4924C4.76648 21.4924 2.17767 20.6852 0 19.2843C0.395953 19.3299 0.776625 19.3452 1.18781 19.3452C3.48727 19.3452 5.60405 18.5685 7.29441 17.2437C5.13197 17.198 3.31978 15.7817 2.69541 13.8325C3 13.8781 3.30455 13.9086 3.62437 13.9086C4.06598 13.9086 4.50764 13.8477 4.91878 13.7411C2.66498 13.2842 0.974578 11.3045 0.974578 8.91369V8.8528C1.62937 9.21828 2.39086 9.4467 3.19791 9.47712C1.87303 8.59386 1.00505 7.08627 1.00505 5.38067C1.00505 4.46698 1.24866 3.62942 1.67508 2.89845C4.09641 5.88322 7.73602 7.83242 11.8172 8.04566C11.7411 7.68017 11.6954 7.2995 11.6954 6.91878C11.6954 4.20809 13.8883 2 16.6141 2C18.0304 2 19.3095 2.59391 20.208 3.5533C21.3197 3.34011 22.3857 2.92892 23.3299 2.36548C22.9643 3.50764 22.1877 4.46703 21.1674 5.07613C22.1573 4.96958 23.1167 4.69541 23.9999 4.31473C23.33 5.28931 22.4924 6.1573 21.533 6.85784Z" fill="#060C1E" />
                        </svg>
                    </Link>
                </div>
                <div className='flex flex-col gap-8 sm:gap-0 sm:flex-row w-full items-center justify-between text-sm font-Josefin text-[#060C1E]'>
                    <div className='flex sm:hidden flex-col items-center justify-center gap-6'>
                        <button onClick={() => setContactVisible(true)}>Contact Us</button>
                        <Link href='/privacy'>Privacy Policy</Link>
                        <Link href='/copyright'>Terms & Conditions</Link>
                    </div>
                    <div>
                        © 2024 Galactic Kingdom. All rights reserved.
                    </div>
                    <div className='hidden sm:flex items-center justify-center gap-8'>
                        <button onClick={() => setContactVisible(true)}>Contact Us</button>
                        <Link href='/privacy'>Privacy Policy</Link>
                        <Link href='/copyright'>Terms & Conditions</Link>
                    </div>
                </div>
            </div>
            <ContactModal contactVisible={contactVisible} setContactVisible={setContactVisible} />
        </div>
    )
}
