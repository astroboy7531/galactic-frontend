/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import React, { useState } from "react";
import ContactModal from "./global/ContactModal";
import { useTheme } from "next-themes";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  const { resolvedTheme } = useTheme();

  return (
    <div className="">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="text-indigo-50"
        >
          <span className="">WhitePaper</span>
        </button>

        <motion.ul
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-[#c2c5a4] dark:bg-dark shadow-xl absolute top-[120%] left-[50%] w-60 mt-4 border overflow-hidden"
        >
          {/* <Option setOpen={setOpen} text="Jedi Studios" /> */}
          <Option
            setOpen={setOpen}
            link="https://galactickingdom.aflip.in/87d7fb8696.html"
            text="Flipbook version"
          />
          <Option
            setOpen={setOpen}
            // link="https://www.amazon.in"
            text="Documentation version"
          />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, setOpen, link }) => {
  const [contactVisible, setContactVisible] = React.useState(false);
  const [menustate, setMenuState] = React.useState(false);
  return (
    <motion.a
      href={link}
      target="blank"
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-start justify-center gap-2 w-full flex-col px-2 py-3 text-sm text-center dark:text-white font-medium whitespace-nowrap rounded-md hover:bg-yellow-100 dark:hover:bg-dark dark:hover:border text-black hover:text-yellow-500 transition-colors cursor-pointer"
    >
      <div className="flex justify-between w-full items-center">
        <li>{text}</li>
        {text === "Flipbook version" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        )}
        {text === "Documentation version" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            onClick={() => {
              setContactVisible(true);
              setMenuState(false);
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
        )}
      </div>
    </motion.a>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};
