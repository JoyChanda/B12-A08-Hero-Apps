import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppsList = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error("Failed to fetch apps:", err));
  }, []);

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">App Explorer</h1>
          <input
            type="text"
            placeholder="Search apps..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 mt-3 sm:mt-0 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* App count */}
        <p className="text-gray-600 mb-4">
          Showing {filteredApps.length} of {apps.length} apps
        </p>

        {/* No results */}
        {filteredApps.length === 0 ? (
          <p className="text-center text-gray-500 mt-20 text-lg">
            ❌ No App Found
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                onClick={() => navigate(`/app/${app.id}`)}
                className="bg-white rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-transform"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="h-40 w-full object-cover rounded-xl mb-4"
                />
                <h2 className="text-xl font-semibold mb-1">{app.title}</h2>
                <p className="text-gray-500 text-sm mb-2">{app.companyName}</p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {app.description}
                </p>
                <div className="flex items-center justify-between mt-3 text-sm">
                  <span>⭐ {app.ratingAvg}</span>
                  <span>{app.reviews} reviews</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppsList;
