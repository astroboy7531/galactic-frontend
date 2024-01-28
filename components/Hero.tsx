import React from 'react'
import Tilt from 'react-parallax-tilt';

export default function Hero() {
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(".card") as NodeListOf<HTMLElement>;
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

        const BOX = card.getBoundingClientRect();
        const POINT = { x, y };
        const RATIO = { x: POINT.x / BOX.width, y: POINT.y / BOX.height };
        const CENTER = fromCenter(RATIO);

        card.style.setProperty("--ratio-x", String(RATIO.x));
        card.style.setProperty("--ratio-y", String(RATIO.y));
      });
    };
    const fromCenter = ({ x, y }: { x: number; y: number }) => {
      return Math.min(Math.max(0, Math.sqrt((y - 0.5) ** 2 + (x - 0.5) ** 2) / 0.5), 1);
    };
    document.getElementById("cards")?.addEventListener("pointermove", handleMouseMove);

    return () => {
      document.getElementById("cards")?.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);
  return (
    <div className='w-full max-w-[1440px] mx-auto pt-[120px] flex flex-col justify-between items-center relative'>
      <div className='flex w-full flex-col items-center text-center z-10'>
        <div className='hero-text text-5xl md:text-7xl leading-[50px] md:leading-[80px]'>
          Build, Battle
        </div>
        <div className='hero-text text-5xl md:text-7xl leading-[50px] md:leading-[80px]'>
          Explore & Conquer!
        </div>
      </div>
      <Tilt>
        <div className='mx-auto flex justify-center md:px-20 relative bg-center bg-contain bottom-[0px] rounded-[80px]  w-full' id="cards">
          {/* <Card
          style={{
            // backgroundImage: `url(${image})`,
            objectFit: 'cover',
            objectPosition: 'center',
            height: '80%',
            width: '80%',
            minHeight: '80%',
            maxHeight: '80%',
            minWidth: '400px',
            backgroundColor: '#00000000',
            aspectRatio: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '20',
            shadow: '0',
            margin: 'auto',
          }}
          shineStrength={0}
          className=''
        > */}
          <img
            src='/firstPart/newHero.png'
            alt='Characters'
            className='object-cover object-center relative z-30'
          />
          {/* </Card> */}
        </div>
      </Tilt>

    </div>
  )
}
