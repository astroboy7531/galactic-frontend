import React, { useEffect, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';

interface LayoutProps {
  children: React.ReactNode;
}
import PlayIcon from './playButton';
import PauseIcon from './pauseButton';

const audios = ['/audio/1.mp3', '/audio/2.mp3'];

const AudioPlayerComp: React.FC<LayoutProps> = ({ children }) => {
  const audioPlayerRef = useRef<AudioPlayer>(null);

  const [currentTrack, setTrackIndex] = React.useState(0);

  useEffect(() => {
    // Check if the audioPlayerRef has been initialized before trying to play
    if (audioPlayerRef.current) {
      audioPlayerRef.current.audio.current?.play();
    }
  }, [currentTrack]); // Trigger on currentTrack change

  const handleClickNext = () => {
    // console.log('click next');
    setTrackIndex((currentTrack) =>
      currentTrack < audios.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleEnd = () => {
    // console.log('end');
    setTrackIndex((currentTrack) =>
      currentTrack < audios.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <>
      <div className='z-[99] fixed bottom-10 right-10 px-2 py-[3px] border-[#333] border-2 rounded-md'>
        <AudioPlayer
          ref={audioPlayerRef}
          src={audios[currentTrack]}
          volume={0.5}
          showSkipControls
          autoPlay={false} // Set autoPlay to false
          showJumpControls={false}
          onClickNext={handleClickNext}
          showDownloadProgress={false}
          layout='horizontal'
          onEnded={handleEnd}
          customIcons={{
            play: <PauseIcon />,
            pause: <PlayIcon />,
            previous: [],
            next: []
        }}
          customVolumeControls={[]}
          customAdditionalControls={[]}
          defaultCurrentTime={[]}
          defaultDuration={[]}
          customProgressBarSection={[]}
        />
      </div>
      {children}
    </>
  );
};

export default AudioPlayerComp;
