import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import Page from '@/components/Page'
import TeamComment from '@/components/team/TeamComment'
import TeamContent from '@/components/team/TeamContent'
import React from 'react'

export default function About() {
    return (
        <Page>
            <div className="flex flex-col w-full cursor-global">
                <div className="relative flex flex-col w-full bg-center bg-cover" style={{ backgroundImage: 'url(/about/topBack.png)' }}>
                    <Header />
                    <TeamComment />
                </div>
                <TeamContent />
                <Footer />
            </div>
        </Page>
    )
}
