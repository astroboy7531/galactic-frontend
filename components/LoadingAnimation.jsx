import React, { useEffect, useState } from "react";

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function startLoader() {
      let counterElement = document.querySelector(".counter");
      let progressBar = document.querySelector(".progress-bar");

      let currentValue = 0;

      function updateCounter() {
        if (currentValue === 100) {
          return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
          currentValue = 100;
        }

        counterElement.textContent = currentValue + "%";
        setProgress(currentValue);

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
      }

      updateCounter();
    }

    startLoader();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen relative p-0">
      <img
        src="/Logo/Big.png"
        alt="logo"
        className="object-cover object-center scale-125 mx-auto mb-8"
      />
      <label className="counter font-boldOff absolute bottom-40 right-40 md:text-9xl text-5xl font-extrabold">
        {progress}%
      </label>
      <div className="progress-bar absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-gray-400 w-80 h-6 rounded-full overflow-hidden">
        <div
          className="progress-bar-inner h-full bg-[#ffd5a2] transition-all ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
