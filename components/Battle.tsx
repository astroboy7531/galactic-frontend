import React from 'react'
import SpaceShip from './AnimeSupplement/SpaceShip'
import ContactModal from './global/ContactModal';

export default function Battle() {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const [show, setShow] = React.useState(false);
  const [contactVisible, setContactVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const targetElement = targetRef.current;
        const scrollPosition = window.scrollY;
        const elementOffsetTop = targetElement.offsetTop;
        const elementHeight = targetElement.offsetHeight;
        const windowHeight = window.innerHeight;
        if (scrollPosition >= elementOffsetTop && scrollPosition <= elementOffsetTop + elementHeight - windowHeight) {
          setShow(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='relative flex flex-col w-full h-full text-white bg-center bg-no-repeat bg-cover battle-shadow' style={{ backgroundImage: 'url(/battle/battleBack.png)' }} ref={targetRef}>
      <div className=' w-full flex justify-center items-center overflow-y-visible h-[87px] relative '>
        <img className='object-center object-cover bottom-[0px] min-w-[140%]' alt='cloud' src='/secondPart/genesisBottom.png' />
      </div>
      <div className='flex items-center max-w-[1320px] w-full px-5 mx-auto z-30'>
        <div className='flex flex-col gap-12 z-20 pt-[260px] w-full lg:w-[60%]'>
          <div className='flex flex-col items-start gap-4 font-Josefin'>
            <h1 className='text-5xl font-bold'>
              Battle Your Greatest<br /> Enemies, In High Stake,<br /> Thrilling Intergalactic Wars<br /> That Will Shake The Universe
            </h1>
            <p className='text-2xl'>
              Merciless battles with real world value at stake. Build your base and attack others in order to steal their most valuable treasures.
            </p>
          </div>
          <div className='text-[#262626] font-Josefin font-[500]  rounded-md border-[0.5px] border-[#E9E9E9] bg-white flex items-center justify-center w-[180px] px-4 py-2  grow-0 cursor-pointer' onClick={() => setContactVisible(true)}>Get Ready</div>
        </div>
      </div>
      <div className='flex justify-end w-full'>
        <div className='z-20'>
          <SpaceShip show={show} />
        </div>
      </div>
      <ContactModal contactVisible={contactVisible} setContactVisible={setContactVisible} />
    </div>
  )
}
