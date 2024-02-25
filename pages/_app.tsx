import '@/styles/globals.css'
import "../styles/fonts.css"
import '@/styles/styles.scss'
import { initFlowbite } from 'flowbite'
import type { AppProps } from 'next/app'
import React from 'react';
import raceContext from '@/context/RaceContext'
import AudioPlayerComp from '@/components/global/audioPlayer';
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion'
import LoadingAnimation from '@/components/LoadingAnimation'

export default function App({ Component, pageProps }: AppProps) {
  const [race, setRace] = React.useState('Adam Glab');
  const router = useRouter();

  const [loader, setLoader] = React.useState(true);

  function myloader() {
    setLoader(false)
  }

  React.useEffect(() => {
    setTimeout(() => {
      myloader()
    }, 3000);
  }, []);


  React.useEffect(() => {
    initFlowbite();
  }, [])



  return (<>
    {
      loader ? (<LoadingAnimation />) : <raceContext.Provider value={{ race, setRace }}>
        <AudioPlayerComp>
          <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
            <AnimatePresence mode='wait'>
              <Component key={router.route} {...pageProps} />
            </AnimatePresence>
          </ThemeProvider>
        </AudioPlayerComp>
      </raceContext.Provider>
    }
  </>)
}
