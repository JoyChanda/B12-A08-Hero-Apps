import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const AppsList = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
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

  const handleCardClick = (id) => {
    setLoading(true);
    setTimeout(() => {
      navigate(`/app/${id}`);
      setLoading(false);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 relative">
      {loading && <Loader />}

      <div className="max-w-6xl mx-auto p-6">
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

        <p className="text-gray-600 mb-4">
          Showing {filteredApps.length} of {apps.length} apps
        </p>

        {filteredApps.length === 0 ? (
          <p className="text-center text-gray-500 mt-20 text-lg">
            ❌ No App Found
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                onClick={() => handleCardClick(app.id)}
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
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-green-100 text-green-700 text-base font-semibold shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-download"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    <span className="whitespace-nowrap">
                      {(app.downloads / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-100 text-orange-600 text-base font-semibold shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span>{app.ratingAvg}</span>
                  </div>
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
