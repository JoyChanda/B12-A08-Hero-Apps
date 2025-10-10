import React, { Suspense } from "react";
import App1 from "../App1.jsx/App1";
import { useNavigate } from "react-router";

const Apps = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
        Trending Apps
      </h1>
      <p className="text-center text-gray-500 mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>

      <Suspense fallback={<span>Loading...</span>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {data.slice(0, 8).map((singleApp) => (
            <App1 key={singleApp.appId} singleApp={singleApp} />
          ))}
        </div>
      </Suspense>

      <div className="text-center mt-12 mb-6">
        <button
          className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-xl hover:bg-purple-700 transition duration-200 transform hover:scale-105"
          onClick={() => navigate("/apps")}
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default Apps;
