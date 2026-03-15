import React from "react";

const ErrorPage = ({ type = "page" }) => {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-sans text-center px-6 py-16">
      <img
        src={type === "app" ? "/images/App-Error.png" : "/images/error-404.png"}
        alt={type === "app" ? "App Error Illustration" : "404 Illustration"}
        className="w-80 mb-8"
      />

      <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
        {type === "app" ? "Oops, App not found!" : "Oops, Page not found!"}
      </h1>

      <p className="text-gray-500 mb-8">
        {type === "app"
          ? "The App you are looking for is not available."
          : "The Page you are looking for is not available."}
      </p>

      <button
        onClick={() => navigateTo("/")}
        className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-700 transition duration-300"
      >
        Go Back To Home!
      </button>
    </div>
  );
};

export default ErrorPage;
