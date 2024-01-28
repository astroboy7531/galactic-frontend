import React from 'react'

interface Props {
    title: string;
    content: string;
}
const FaqComp: React.FC<Props> = ({ title, content }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className={`${isOpen ? 'border-[3px] gradient-border bg-[#F0EBE5]' : 'border border-dark-text bg-[#fefefe]'}  w-full p-4 flex rounded-lg font-Josefin text-dark-text`}>
            <div className='w-full flex flex-col  h-full'>
                <div className='flex justify-between items-center w-full overflow-y-hidden relative cursor-pointer'  onClick={() => setIsOpen(!isOpen)}>
                    <div className='text-sm md:text-base pr-6 font-bold'>{title}</div>
                    <div className='text-3xl cursor-pointer font-bold absolute top-[-7px] right-[0px] z-10'>
                        {isOpen ? '-' : '+'}
                    </div>
                </div>
                {/* {isOpen && (<div className='text-xs md:text-sm font-normal pt-2 pr-6 duration-300'>{content}</div>)} */}
                <div className={`${isOpen ? 'py-[16px]' : ''}  pr-6 duration-1000`}>
                    <span className={`${isOpen ? 'flex h-full' : 'hidden'} text-xs md:text-sm font-normal`}>{content}</span>
                </div>

            </div>
        </div>
    )
}

export default FaqComp;