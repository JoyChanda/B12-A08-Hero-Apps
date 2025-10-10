import React from "react";

const App1 = ({ singleApp }) => {
  const { image, title, companyName, ratingAvg, downloads } = singleApp;

  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full">
      <div className="aspect-[4/3] rounded-t-2xl overflow-hidden p-3">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full bg-gray-100 rounded-xl"
        />
      </div>

      <div className="card-body p-4 pt-3 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-gray-900 line-clamp-2 leading-snug">
            {title}
          </h2>
          <p className="text-sm text-gray-500 mt-1">{companyName}</p>
        </div>

        <div className="flex justify-between items-center mt-3">
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
              {(downloads / 1000000).toFixed(1)}M
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
            <span>{ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App1;
