import React from "react";

const SkeletonLoader = ({ count = 3 }) => {
  return (
    <div className="space-y-12">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-8 animate-pulse"
        >
          <div className="w-full md:w-1/2 h-64 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
          <div className="w-full md:w-1/2 space-y-4">
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-4/6"></div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-6 bg-gray-200 dark:bg-gray-800 rounded-full w-20"
                ></div>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded-lg w-32"></div>
              <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded-lg w-32"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
