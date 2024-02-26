import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import EmailModal from "../global/EmailModal";
import BlueModal from "../global/BlueModal";
import ContactModal from "../global/ContactModal";
import { AiOutlineMenu } from "react-icons/ai";
import ToggleButton from "../ToggleButton";
import { Link as NavLink } from "react-scroll";
import DropdownMenu from "../DropdownMenu";
import { useTheme } from "next-themes";

export default function Header() {
  const router = useRouter();
  const [pathName, setPathName] = React.useState("");
  const [emailVisible, setEmailVisible] = React.useState(false);
  const [blueVisible, setBlueVisible] = React.useState(false);
  const [contactVisible, setContactVisible] = React.useState(false);
  const [menustate, setMenuState] = React.useState(false);
  const menuDropdown = React.useRef(null);

  React.useEffect(() => {
    if (router.pathname == "/") {
      setPathName("shit");
    } else if (router.pathname == "/tweets") {
      setPathName("tweets");
    } else if (router.pathname == "/videos") {
      setPathName("videos");
    }
  }, []);
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuDropdown.current &&
        !menuDropdown.current.contains(event.target)
      ) {
        setMenuState(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuDropdown]);

  const [down, setDown] = React.useState(false);

  React.useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 1500) {
        setDown(true);
      }
      if (window.scrollY <= 1500) {
        setDown(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  React.useEffect(() => {
    if (menustate) {
   // Apply a CSS class to the body element
   document.body.classList.add('no-scroll');
  } else {
    // Remove the CSS class
    document.body.classList.remove('no-scroll');
  }
  }, []);

  const { resolvedTheme } = useTheme();

  return (
    <div
      id="top"
      className="w-full py-6 px-6 flex justify-center z-20 font-Josefin absolute"
    >
      <div
        className={`${
          menustate ? "fixed top-0 w-screen h-screen bg-black/50" : ""
        }`}
      />

      {down && (
        <NavLink
          activeClass="active"
          to="top"
          spy={true}
          smooth={true}
          offset={-100}
          duration={2000}
          className="fixed bottom-24 right-10 border-2 cursor-pointer rounded-md z-50 bg-gray-900 border-[#333]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#673b23"
            className="w-8 h-8 p-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 18.75 7.5-7.5 7.5 7.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </NavLink>
      )}

      <div className="w-full max-w-[1440px] flex justify-between items-center">
        <Link href="/">
          <img
            src="/Logo/Big.png"
            alt="logo"
            className="object-cover object-center max-sm:scale-75 max-sm:absolute max-sm:left-0 max-sm:top-6"
          />
        </Link>
        <div className="hidden lg:flex items-center justify-center gap-10 font-Josefin text-white font-[500]">
          <div
            className="cursor-pointer"
            onClick={() => setContactVisible(true)}
          >
            Contact us
          </div>
          <div>
            <DropdownMenu />
          </div>
          <Link href="https://twitter.com/GKingdom_io">Join The Community</Link>
          <div className="cursor-pointer">
            <NavLink
              activeClass="active"
              to="faq-section"
              spy={true}
              smooth={true}
              offset={100}
              duration={2000}
              // href='#faq-section'
            >
              Help
            </NavLink>
          </div>
          <Link href="/about">About Us</Link>
          <ToggleButton />
        </div>
        <div
          onClick={() => setMenuState(!menustate)}
          className="relative flex lg:hidden flex-row justify-end items-center text-white boder-[1px] rounded-full border-white p-2 cursor-pointer"
        >
          <AiOutlineMenu size={25} />
          {/* <AnimatedHamburger menustate={menustate} /> */}
          <div
            ref={menuDropdown}
            className={`${
              menustate ? "block" : "hidden"
            } absolute  top-12 right-0 bg-dark border-[1px] border-white rounded-xl w-[200px] py-3 flex flex-col text-white text-center items-center duration-300`}
          >
            <div
              className="cursor-pointer border-b border-b-gray-800 py-3 w-full"
              onClick={() => {
                setContactVisible(true);
                setMenuState(false);
              }}
            >
              Contact us
            </div>
            {/* <Link className='cursor-pointer border-b border-b-gray-400 py-3 w-full' href='https://galactickingdom.aflip.in/87d7fb8696.html' onClick={() => setMenuState(false)}>AllBlue Paper</Link> */}
            <div className="py-3 border-b-[1px] border-b-gray-800 w-full">
              <DropdownMenu />
            </div>
            <Link
              className="cursor-pointer border-b border-b-gray-800 py-3 w-full"
              href="https://twitter.com/GKingdom_io"
              onClick={() => setMenuState(false)}
            >
              Join The Community
            </Link>
            <div className="cursor-pointer w-full border-b-[1px] border-b-gray-800 py-3">
              <NavLink
                activeClass="active"
                to="faq-section"
                spy={true}
                smooth={true}
                offset={100}
                duration={2000}
                className="cursor-pointer py-3 w-full"
                onClick={() => setMenuState(false)}
              >
                Help
              </NavLink>
            </div>
            <Link
              className="cursor-pointer w-full border-b-[1px] border-b-gray-800 py-3"
              href="/about"
              onClick={() => setMenuState(false)}
            >
              About Us
            </Link>
            <div className="py-2 flex items-center gap-4">
              <span className="mt-2 capitalize">{resolvedTheme}</span>
              <ToggleButton />
            </div>
          </div>
        </div>
      </div>
      <ContactModal
        contactVisible={contactVisible}
        setContactVisible={setContactVisible}
      />
      <EmailModal
        contactVisible={emailVisible}
        setContactVisible={setEmailVisible}
      />
      <BlueModal
        contactVisible={blueVisible}
        setContactVisible={setBlueVisible}
      />
    </div>
  );
}
