import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const ErrorPage = ({ type = "page" }) => {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  const isAppError = type === "app";

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 font-sans">
      {!isAppError && <Navbar />}
      <main className="flex flex-col items-center justify-center flex-grow text-center px-6 py-16">
        <img
          src={isAppError ? "/images/App-Error.png" : "/images/error-404.png"}
          alt={isAppError ? "App Error Illustration" : "404 Illustration"}
          className="w-80 mb-8"
        />

        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          {isAppError ? "Oops, App not found!" : "Oops, Page not found!"}
        </h1>

        <p className="text-gray-500 mb-8">
          {isAppError
            ? "The App you are looking for is not available."
            : "The Page you are looking for is not available."}
        </p>

        <button
          onClick={() => navigateTo("/")}
          className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-700 transition duration-300"
        >
          Go Back To Home!
        </button>
      </main>
      {!isAppError && <Footer />}
    </div>
  );
};

export default ErrorPage;
