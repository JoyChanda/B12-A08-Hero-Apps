import React from "react";

const StatsBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-16 px-4 text-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">
        Trusted By Millions, Built For You
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div>
          <p className="text-sm uppercase tracking-wider opacity-80 mb-2">
            Total Downloads
          </p>
          <p className="text-5xl sm:text-6xl font-extrabold mb-1">29.6M</p>
          <p className="text-xs opacity-70">21% More Than Last Month</p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider opacity-80 mb-2">
            Total Reviews
          </p>
          <p className="text-5xl sm:text-6xl font-extrabold mb-1">906K</p>
          <p className="text-xs opacity-70">48% More Than Last Month</p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider opacity-80 mb-2">
            Active Apps
          </p>
          <p className="text-5xl sm:text-6xl font-extrabold mb-1">132+</p>
          <p className="text-xs opacity-70">31 More Will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
