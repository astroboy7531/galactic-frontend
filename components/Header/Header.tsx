import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import EmailModal from '../global/EmailModal';
import BlueModal from '../global/BlueModal';
import ContactModal from '../global/ContactModal';
import { AiOutlineMenu } from 'react-icons/ai'

export default function Header() {
  const router = useRouter();
  const [pathName, setPathName] = React.useState('');
  const [emailVisible, setEmailVisible] = React.useState(false);
  const [blueVisible, setBlueVisible] = React.useState(false);
  const [contactVisible, setContactVisible] = React.useState(false);
  const [menustate, setMenuState] = React.useState(false)
  const menuDropdown = React.useRef(null)

  React.useEffect(() => {
    if (router.pathname == "/") {
      setPathName('shit');
    } else if (router.pathname == "/tweets") {
      setPathName('tweets');
    } else if (router.pathname == "/videos") {
      setPathName('videos');
    }
  }, [])
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuDropdown.current &&
        !menuDropdown.current.contains(event.target)
      ) {
        setMenuState(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuDropdown])
  return (
    <div className='w-full py-6 px-6 flex justify-center z-20 font-Josefin absolute'>
      <div className='w-full max-w-[1440px] flex justify-between items-center'>
        <Link href='/'>
          <img
            src='/Logo/Big.png'
            alt='logo'
            className='object-cover object-center'
          />
        </Link>
        <div className='hidden lg:flex items-center justify-center gap-10 font-Josefin text-white font-[500]'>
          <div className='cursor-pointer' onClick={() => setContactVisible(true)}>
            Get Ready
          </div>
          <Link className='cursor-pointer ' href='https://galactickingdom.aflip.in/87d7fb8696.html'>AllBlue Paper</Link>
          <Link href='https://twitter.com/GKingdom_io'>Join The Community</Link>
          <Link href='#faq'>Help</Link>
          <Link href='/about'>About Us</Link>
        </div>
        <div
          onClick={() => setMenuState(!menustate)}
          className='relative flex lg:hidden flex-row justify-end items-center text-white border-[1px] rounded-full border-white p-2 cursor-pointer'
        >
          <AiOutlineMenu />
          <div
            ref={menuDropdown}
            className={`${menustate ? 'opacity-100' : 'opacity-0'
              } absolute  top-10 -right-1 bg-[#fbfcccc4] border-[1px] border-white rounded-xl w-[170px] py-2 flex flex-col text-black text-center items-center duration-300`}
          >
            <div className='cursor-pointer border-b border-b-gray-400 py-1 w-full' onClick={() => {setContactVisible(true); setMenuState(false);}}>
              Get Ready
            </div>
            <Link className='cursor-pointer border-b border-b-gray-400 py-1 w-full'  href='https://galactickingdom.aflip.in/87d7fb8696.html' onClick={() => setMenuState(false)}>AllBlue Paper</Link>
            <Link className='cursor-pointer border-b border-b-gray-400 py-1 w-full' href='https://twitter.com/GKingdom_io' onClick={() => setMenuState(false)}>Join The Community</Link>
            <Link className='cursor-pointer border-b border-b-gray-400 py-1 w-full' href='#faq' onClick={() => setMenuState(false)}>Help</Link>
            <Link className='cursor-pointer ' href='/about' onClick={() => setMenuState(false)}>About Us</Link>
          </div>
        </div>
      </div>
      <ContactModal contactVisible={contactVisible} setContactVisible={setContactVisible} />
      <EmailModal contactVisible={emailVisible} setContactVisible={setEmailVisible} />
      <BlueModal contactVisible={blueVisible} setContactVisible={setBlueVisible} />
    </div>
  )
}
