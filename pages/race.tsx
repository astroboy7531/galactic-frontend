import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import RaceComment from '@/components/race/RaceComment'
import RaceContent from '@/components/race/RaceContent'
import React from 'react'

export default function Race() {
    return (
        <div className="flex flex-col w-full cursor-global">
            <div className="relative bg-cover bg-center w-full flex flex-col" style={{ backgroundImage: 'url(/about/topBack.png)' }}>
                <Header />
                <RaceComment />
            </div>
            <RaceContent />
            <div className='w-full h-[100px]' style={{ background: 'linear-gradient(180deg, #F0EBE5 0%, #F9F9F9 100%)' }}></div>
            <Footer />
        </div>
    )
}
