import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="flex items-center gap-3 opacity-55">
        <h1 className="text-6xl font-extrabold text-gray-800 tracking-wider flex items-center">
          L
          <span className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Loading Logo"
              className="w-12 h-12 animate-spin"
            />
            ADING
          </span>
        </h1>
      </div>

      <p className="mt-4 text-gray-500 animate-pulse">
        Please wait, loading your content...
      </p>
    </div>
  );
};

export default Loader;
