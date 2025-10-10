import React from "react";

const Banner = () => {
  return (
    <div className="pt-14 px-4 sm:px-6 lg:px-8 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          We Build
          <br />{" "}
          <span
            className="
              bg-clip-text 
              text-transparent 
              bg-gradient-to-r 
              from-[#632EE3] 
              to-[#9F62F2]
            "
          >
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="max-w-2xl text-sm sm:text-base text-gray-600 mb-8">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an an impact.
        </p>
        <div className="flex space-x-3 mb-16">
          <a
            href="https://play.google.com/store/games?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm sm:btn-md h-auto bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 rounded-lg shadow-md flex items-center gap-2 px-4 py-2"
          >
            <img
              src="images/google.png"
              alt="Google Play"
              className="w-5 h-5"
            />
            <span className="font-semibold text-sm">Google Play</span>
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm sm:btn-md h-auto bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 rounded-lg shadow-md flex items-center gap-2 px-4 py-2"
          >
            <img
              src="images/appstore.png"
              alt="App Store"
              className="w-5 h-5"
            />
            <span className="font-semibold text-sm">App Store</span>
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="images/hero.png"
          alt="Mobile App Screenshot"
          className="md:max-w-2/5 max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
