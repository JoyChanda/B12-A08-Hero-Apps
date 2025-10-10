import React, { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { toast } from "react-hot-toast";

const AppDetails = () => {
  const app = useLoaderData();
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalled(stored.some((a) => a.id === app.id));
  }, [app.id]);

  const handleInstall = () => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!stored.some((a) => a.id === app.id)) {
      stored.push(app);
      localStorage.setItem("installedApps", JSON.stringify(stored));
      toast.success(`${app.title} installed successfully 🎉`);
      setInstalled(true);
    }
  };

  const ratings = [
    { name: "5 star", value: 12000 },
    { name: "4 star", value: 9000 },
    { name: "3 star", value: 5000 },
    { name: "2 star", value: 2000 },
    { name: "1 star", value: 1500 },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      <Link
        to="/apps"
        className="text-purple-600 hover:underline inline-block mb-2"
      >
        ← Back to All Apps
      </Link>

      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-8">
        <img
          src={app.image}
          alt={app.title}
          className="w-full md:w-1/3 rounded-xl object-cover bg-gray-50 p-4"
        />
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{app.title}</h1>
          <p className="text-gray-500">
            Developed by{" "}
            <span className="text-purple-600 font-medium">
              {app.companyName}
            </span>
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-700">
            <div>
              <p className="font-semibold text-green-600 text-lg">
                {app.downloads}+
              </p>
              <p>Downloads</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-500 text-lg">
                ⭐ {app.ratingAvg}
              </p>
              <p>Average Rating</p>
            </div>
            <div>
              <p className="font-semibold text-purple-600 text-lg">
                {app.reviews}
              </p>
              <p>Total Reviews</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-4 px-6 py-2 rounded-lg text-white font-semibold transition ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ratings</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={ratings} layout="vertical" margin={{ left: 40 }}>
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="value" fill="#f97316" radius={[4, 4, 4, 4]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
