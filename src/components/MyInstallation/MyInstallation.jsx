import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOption, setSortOption] = useState("none");
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

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sortedApps = [...installedApps];
    if (option === "downloads-low-high") {
      sortedApps.sort((a, b) => a.downloads - b.downloads);
    } else if (option === "downloads-high-low") {
      sortedApps.sort((a, b) => b.downloads - a.downloads);
    }
    setInstalledApps(sortedApps);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow px-4 sm:px-6 md:px-8 w-full max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
          Your Installed Apps
        </h1>
        <p className="text-center text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
          <p className="text-gray-600 text-sm sm:text-base">
            {installedApps.length} App{installedApps.length !== 1 && "s"} Found
          </p>

          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto"
          >
            <option value="none">Sort By Downloads</option>
            <option value="downloads-low-high">Low to High</option>
            <option value="downloads-high-low">High to Low</option>
          </select>
        </div>

        <div className="space-y-4">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white w-full rounded-xl shadow-sm p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-md bg-gray-100 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {app.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600 mt-1">
                    <p className="flex items-center gap-1">
                      <span className="text-green-600">⬇️</span>{" "}
                      {(app.downloads / 1000000).toFixed(1)}M
                    </p>
                    <p className="flex items-center gap-1 text-orange-500">
                      ⭐ {app.ratingAvg}
                    </p>
                    <p>{app.size || "256 MB"} MB</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id, app.title)}
                className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg text-sm sm:text-base w-full sm:w-auto"
              >
                Uninstall
              </button>
            </div>
          ))}

          {installedApps.length === 0 && (
            <p className="text-center text-gray-500 mt-10 text-sm sm:text-base">
              You haven’t installed any apps yet.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyInstallation;
