import React from 'react'

export default function HomeComp() {
    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-[52px] text-black font-bold font-boldOff'>
                Newest Post
            </h1>
            <img
                src='/tempBlog.png'
                alt='Newest Post'
                className='object-cover object-center max-h-[450px]  h-full rounded-2xl'
            />
        </div>
    )
}
