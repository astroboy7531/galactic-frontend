import '@/styles/globals.css'
import "../styles/fonts.css"
import { initFlowbite } from 'flowbite'
import type { AppProps } from 'next/app'
import React from 'react';
import raceContext from '@/context/RaceContext'
import AudioPlayerComp from '@/components/global/audioPlayer';
export default function App({ Component, pageProps }: AppProps) {
  const [race, setRace] = React.useState('Adam Glab');

  React.useEffect(() => {
    initFlowbite();
  }, [])

  return <raceContext.Provider value={{ race, setRace }}>
    <AudioPlayerComp>
      <Component {...pageProps} />
    </AudioPlayerComp>
  </raceContext.Provider>
}
