import raceContext from '@/context/RaceContext'
import React from 'react'
import Fade from 'react-reveal/Fade'
interface Props {
    name: string;
    title: string;
    content: string;
    url: string;
}
export default function RaceContent() {
    const { race, setRace } = React.useContext(raceContext);
    const [currentRace, setCurrentRace] = React.useState<Props>({
        name: '',
        title: '',
        content: '',
        url: ''
    });
    const raceData = [
        {
            name: 'Adam Glab',
            title: 'Humans',
            content: 'Emerging From Earth’s Depths In The East Galaxy, Humans Are Intergalactic Pioneers, Venturing Into The Unknown To Seek Treasures Across Uncharted Planets. Renowned For Their Versatile And Shadowy Nature, They Navigate Vast Cosmic Seas With Intrigue. As Enigmatic Guardians Of The Galaxy, Humans Stand Sentinel, Guiding The Universe’s Peace Through Diplomatic Negotiations Led By An Unseen Force Across Quiet Plains.',
            url: '/secondPart/Pfo_1.png'
        },
        {
            name: 'Evan Roberts',
            title: 'Lunarians',
            content: 'Mystical Beings From The Great Galactic Line, Lunarians Wield Cosmic Power To Safeguard Hidden Treasures On Fiery Landscapes. Elusive Defenders, They Thrive In Adversity, Guided By Lunar-Imbued Defenses. Hints Of Ancient Lunarian Prophecies Foretell Celestial Events Along The Mysterious Line.',
            url: '/secondPart/Pfo_4.png'
        },
        {
            name: 'Michael Stan',
            title: 'Giants',
            content: 'Radiating Cosmic Power From Colossal Planets In The West Galaxy, Giants Are Cosmic Architects Becoming Secret Builders On Mountain Planets. Blessed With Great Wisdom, They Construct Enigmatic Strongholds And Channels On Mystic Mountain Peaks. Legends Tell Of Giants Forging Alliances With Ethereal Entities, Infusing Constructions With Otherworldly Powers.',
            url: '/secondPart/Pfo_2.png'
        },
        {
            name: 'Taka',
            title: 'Fishmen',
            content: 'Ascending From Aquatic Planets In The South Galaxy, Fishmen Are Cosmic Shadows Exploring Mysterious Waters. Moving With Ghostly Finesse, They Traverse Uncharted Territories, Orchestrating Enigmatic Mysteries Beneath The Waves. Whispers Suggest Ancient Fishmen Seers Unlocking The Cosmos’Deepest Secrets Within Aquatic Realms.',
            url: '/secondPart/Pfo_5.png'
        },
        {
            name: 'Binnie',
            title: 'Minks',
            content: 'Emerging From The Elusive North Galaxy, Minks Are Cosmic Warriors Whose Prowess Is Harnessed On Jungle Planets. As Ferocious Conquerors, They Unleash Cosmic Power On Enigmatic Jungles, Guarding Secrets Only They Comprehend. Rumors Tell Of Ancient Mink Sages, Connecting With Cosmic Forces To Amplify Warrior Prowess Across Hidden Jungles.',
            url: '/secondPart/Pfo_3.png'
        },
    ];
    const leftData = [
        {
            name: 'Adam Glab',
            title: 'Humans',
            content: 'Emerging From Earth’s Depths In The East Galaxy, Humans Are Intergalactic Pioneers, Venturing Into The Unknown To Seek Treasures Across Uncharted Planets. Renowned For Their Versatile And Shadowy Nature, They Navigate Vast Cosmic Seas With Intrigue. As Enigmatic Guardians Of The Galaxy, Humans Stand Sentinel, Guiding The Universe’s Peace Through Diplomatic Negotiations Led By An Unseen Force Across Quiet Plains.',
            url: '/secondPart/Pfo_1.png'
        },
        {
            name: 'Evan Roberts',
            title: 'Lunarians',
            content: 'Mystical Beings From The Great Galactic Line, Lunarians Wield Cosmic Power To Safeguard Hidden Treasures On Fiery Landscapes. Elusive Defenders, They Thrive In Adversity, Guided By Lunar-Imbued Defenses. Hints Of Ancient Lunarian Prophecies Foretell Celestial Events Along The Mysterious Line.',
            url: '/secondPart/Pfo_4.png'
        },
        {
            name: 'Michael Stan',
            title: 'Giants',
            content: 'Radiating Cosmic Power From Colossal Planets In The West Galaxy, Giants Are Cosmic Architects Becoming Secret Builders On Mountain Planets. Blessed With Great Wisdom, They Construct Enigmatic Strongholds And Channels On Mystic Mountain Peaks. Legends Tell Of Giants Forging Alliances With Ethereal Entities, Infusing Constructions With Otherworldly Powers.',
            url: '/secondPart/Pfo_2.png'
        },
    ];
    const rightData = [
        {
            name: 'Taka',
            title: 'Fishmen',
            content: 'Ascending From Aquatic Planets In The South Galaxy, Fishmen Are Cosmic Shadows Exploring Mysterious Waters. Moving With Ghostly Finesse, They Traverse Uncharted Territories, Orchestrating Enigmatic Mysteries Beneath The Waves. Whispers Suggest Ancient Fishmen Seers Unlocking The Cosmos’Deepest Secrets Within Aquatic Realms.',
            url: '/secondPart/Pfo_5.png'
        },
        {
            name: 'Binnie',
            title: 'Minks',
            content: 'Emerging From The Elusive North Galaxy, Minks Are Cosmic Warriors Whose Prowess Is Harnessed On Jungle Planets. As Ferocious Conquerors, They Unleash Cosmic Power On Enigmatic Jungles, Guarding Secrets Only They Comprehend. Rumors Tell Of Ancient Mink Sages, Connecting With Cosmic Forces To Amplify Warrior Prowess Across Hidden Jungles.',
            url: '/secondPart/Pfo_3.png'
        },
    ];
    React.useEffect(() => {
        const selectedRace = raceData.find((data) => data.name == race);
        if (selectedRace?.name) {
            setCurrentRace({
                name: selectedRace.name,
                title: selectedRace.title,
                content: selectedRace.content,
                url: selectedRace.url
            });
        }
    }, [race])
    return (
        <div className='w-full flex flex-col border-0 relative py-12 font-Josefin bg-[#F0EBE5] about-shadow'>
            <div className='w-full flex flex-col overflow-y-visible absolute z-10'>
                <div>
                    <img className=' object-center object-cover min-w-[100%] top-[-150px] sm:top-[-200px] lg:top-[-270px] relative' alt='cloud' src='/about/cloudTop.png' />
                </div>
            </div>
            <div className='w-full max-w-[1240px] z-10 flex flex-col items-center gap-10 px-10 mx-auto pt-[100px] text-dark-text'>
                <Fade>
                    <div>
                        <img
                            src={currentRace.url}
                            alt='Avatar'
                            className='object-cover object-center'
                        />
                    </div>
                    <h1 className='text-5xl font-bold'>
                        {currentRace.title}
                    </h1>
                    <p className='text-xl font-normal text-center min-h-80 sm:min-h-48'>
                        {currentRace.content}
                    </p>
                </Fade>
                <Fade>
                    <div className='hidden sm:flex items-center justify-center gap-5'>
                        {raceData.map((item, index) => (
                            <div className={`${item.name == race ? '' : 'filter grayscale'} hover:filter-none hover:scale-105`} key={index} onClick={() => { setRace(item.name) }}>
                                <img
                                    src={item.url}
                                    alt='Avatar'
                                    className='object-cover object-center'
                                />
                            </div>
                        ))}
                    </div>
                </Fade>
                <Fade>
                    <div className='sm:hidden flex items-center justify-center gap-5'>
                        <div className='flex flex-col gap-3'>
                            {leftData.map((item, index) => (
                                <div className={`${item.name == race ? '' : 'filter grayscale'} hover:filter-none hover:scale-105`} key={index} onClick={() => { setRace(item.name) }}>
                                    <img
                                        src={item.url}
                                        alt='Avatar'
                                        className='object-cover object-center'
                                    />
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col gap-3'>
                            {rightData.map((item, index) => (
                                <div className={`${item.name == race ? '' : 'filter grayscale'} hover:filter-none hover:scale-105`} key={index} onClick={() => { setRace(item.name) }}>
                                    <img
                                        src={item.url}
                                        alt='Avatar'
                                        className='object-cover object-center'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
