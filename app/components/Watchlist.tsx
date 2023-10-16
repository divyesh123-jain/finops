import React from "react";

const Watchlist = () => {
  return (
    <div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/docs/images/people/profile-picture-1.jpg"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  SPOT
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  spotify
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                $320
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Watchlist;
