import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const ErrorPage = () => {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 font-sans">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-grow text-center px-6 py-16">
        <img
          src="/images/error-404.png"
          alt="404 Illustration"
          className="w-80 mb-8"
        />

        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Oops, page not found!
        </h1>
        <p className="text-gray-500 mb-8">
          The page you are looking for is not available.
        </p>

        <button
          onClick={() => navigateTo("/")}
          className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-700 transition duration-300"
        >
          Go Back To Home!
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
