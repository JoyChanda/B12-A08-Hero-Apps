import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(stored);
  }, []);

  const handleUninstall = (id, title) => {
    const updated = installedApps.filter((app) => app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    setInstalledApps(updated);
    toast.success(`${title} uninstalled successfully 🗑️`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Main Content */}
      <main className="flex-grow p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Your Installed Apps
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">
            {installedApps.length} App{installedApps.length !== 1 && "s"} Found
          </p>

          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>Sort By Size</option>
            <option>Sort By Name</option>
            <option>Sort By Rating</option>
          </select>
        </div>

        <div className="space-y-4">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 rounded-md bg-gray-100 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{app.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <p className="flex items-center gap-1">
                      <span className="text-green-600">⬇️</span>{" "}
                      {(app.downloads / 1000000).toFixed(1)}M
                    </p>
                    <p className="flex items-center gap-1 text-orange-500">
                      ⭐ {app.ratingAvg}
                    </p>
                    <p>{app.size || "256 MB"}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id, app.title)}
                className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg"
              >
                Uninstall
              </button>
            </div>
          ))}

          {installedApps.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              You haven’t installed any apps yet.
            </p>
          )}
        </div>
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default MyInstallation;
