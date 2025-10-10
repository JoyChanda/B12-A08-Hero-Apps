import React from "react";

const ErrorPage = () => {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="text-center p-8">
        <div className="flex justify-center mb-6">
          <img src="images/error-404.png" alt="" />
        </div>

        {/* 404 Text */}
        <h1 className="text-3xl font-extrabold tracking-wider">
          Oops, page not found!
        </h1>

        {/* Descriptive Text */}
        <p className="text-gray-500 mb-8 max-w-xs mx-auto">
          Sorry, the page you are looking for might be removed, renamed, or is
          temporarily unavailable.
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigateTo("/")}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300"
          >
            Back to Home
          </button>
          <button
            onClick={() => navigateTo("/apps")}
            className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl shadow-md hover:bg-gray-200 transition duration-300"
          >
            Browse Apps
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
