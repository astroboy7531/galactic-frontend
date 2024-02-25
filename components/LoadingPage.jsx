import React from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <div id="container" className="">
        <div className="divider" aria-hidden="true"></div>
        <p className="loading-text flex gap-[16px]" aria-label="Loading">
          <span className="letter" aria-hidden="true">
            L
          </span>
          <span className="letter" aria-hidden="true">
            o
          </span>
          <span className="letter" aria-hidden="true">
            a
          </span>
          <span className="letter" aria-hidden="true">
            d
          </span>
          <span className="letter" aria-hidden="true">
            I
          </span>
          <span className="letter" aria-hidden="true">
            n
          </span>
          <span className="letter" aria-hidden="true">
            g
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
