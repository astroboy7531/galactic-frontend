import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import EmailModal from '../global/EmailModal';
import BlueModal from '../global/BlueModal';
import ContactModal from '../global/ContactModal';
import DocsModal from '../global/DocsModal';
import { AiOutlineMenu } from 'react-icons/ai'

export default function Header() {
  const router = useRouter();
  const [pathName, setPathName] = React.useState('');
  const [emailVisible, setEmailVisible] = React.useState(false);
  const [blueVisible, setBlueVisible] = React.useState(false);
  const [contactVisible, setContactVisible] = React.useState(false);
  const [docsVisible, setDocsVisible] = React.useState(false);
  const [menustate, setMenuState] = React.useState(false);
  const [whiteFlag, setWhiteFlag] = React.useState(false);
  const menuDropdown = React.useRef(null);
  const whiteDropDown = React.useRef(null);

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
      if (
        whiteDropDown.current &&
        !whiteDropDown.current.contains(event.target)
      ) {
        setWhiteFlag(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuDropdown, whiteDropDown])

  const docsHandler = () => {
    setDocsVisible(true);
  }

  return (
    <div className='absolute z-20 flex justify-center w-full px-6 py-6 font-Josefin'>
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
          <div className='relative'>
            <div className='cursor-pointer' onClick={() => setWhiteFlag(flag => !flag)}>
              WhitePaper
            </div>
            {whiteFlag ?
              <div
                className='absolute left-1/2 -translate-x-1/2 top-6 z-30 bg-[#fbfcccc4] border-[1px] border-yellow-100 rounded-xl w-[270px] py-1 mt-2 px-3 flex flex-col gap-2 text-black text-center items-center duration-300'
                ref={whiteDropDown}
              >
                <Link className='w-full text-white border-b-2 border-white cursor-pointer hover:text-blue-500' href='https://galactickingdom.aflip.in/87d7fb8696.html' target='_blank'>Flipbook version</Link>
                {/* <Link className='text-white cursor-pointer hover:text-blue-500' href='https://docs.galactickingdom.io/' target='_blank'>Documentation version</Link> */}
                <div className='text-white cursor-pointer hover:text-blue-500' onClick={() => docsHandler()}>
                  Documentation version
                </div>
              </div> : <></>}
          </div>

          {/* <Link className='cursor-pointer ' href='https://galactickingdom.aflip.in/87d7fb8696.html'>AllBlue Paper</Link> */}
          <Link href='https://twitter.com/GKingdom_io'>Join The Community</Link>
          <Link href='#faq'>Help</Link>
          <Link href='/about'>About Us</Link>
        </div>
        <div
          onClick={() => setMenuState(true)}
          className='relative flex lg:hidden flex-row justify-end items-center text-white border-[1px] rounded-full border-white p-2 cursor-pointer'
        >
          <AiOutlineMenu />
          {menustate ? <div
            ref={menuDropdown}
            className={`absolute  top-10 -right-1 bg-[#fbfcccc4] border-[1px] border-white rounded-xl w-[240px] py-2 px-4 flex flex-col text-black text-left items-center duration-300`}
          >
            <div className='w-full py-1 border-b cursor-pointer border-b-gray-400' onClick={() => { setContactVisible(true); setMenuState(false); setMenuState(!menustate) }}>
              Get Ready
            </div>
            {/* <Link className='w-full py-1 border-b cursor-pointer border-b-gray-400' href='https://galactickingdom.aflip.in/87d7fb8696.html' onClick={() => setMenuState(false)}>AllBlue Paper</Link>
            <Link className='w-full py-1 border-b cursor-pointer border-b-gray-400' href='https://docs.galactickingdom.io/' onClick={() => setMenuState(false)}>Documentation</Link> */}
            <div className='w-full py-1 border-b border-b-gray-400'>
              <div className='cursor-pointer' onClick={() => setWhiteFlag(!whiteFlag)}>
                WhitePaper
              </div>
              {whiteFlag ?
                <div
                  className='absolute left-0 -bottom-20 z-30 bg-[#fbfcccc4] border-[1px] border-yellow-100 rounded-xl w-[240px] py-1 px-3 flex flex-col gap-2 text-center items-center duration-300'
                  ref={whiteDropDown}
                >
                  <Link className='w-full text-black border-b cursor-pointer border-b-gray-400 hover:text-blue-500' href='https://galactickingdom.aflip.in/87d7fb8696.html' target='_blank'>Flipbook version</Link>
                  <Link className='text-black cursor-pointer hover:text-blue-500' href='https://docs.galactickingdom.io/' target='_blank'>Documentation version</Link>
                </div> :
                <></>}
            </div>
            <Link className='w-full py-1 border-b cursor-pointer border-b-gray-400' href='https://twitter.com/GKingdom_io' onClick={() => { setMenuState(false); setMenuState(!menustate); }}>Join The Community</Link>
            <Link className='w-full py-1 border-b cursor-pointer border-b-gray-400' href='#faq' onClick={() => { setMenuState(false); setMenuState(!menustate) }}>Help</Link>
            <Link className='w-full py-1 cursor-pointer' href='/about' onClick={() => { setMenuState(false); setMenuState(!menustate) }}>About Us</Link>
          </div> : <></>}

        </div>
      </div>
      <ContactModal contactVisible={contactVisible} setContactVisible={setContactVisible} />
      <DocsModal contactVisible={docsVisible} setContactVisible={setDocsVisible} />
      <EmailModal contactVisible={emailVisible} setContactVisible={setEmailVisible} />
      <BlueModal contactVisible={blueVisible} setContactVisible={setBlueVisible} />
    </div>
  )
}
