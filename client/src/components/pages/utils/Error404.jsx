import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSpaceShuttle,
  FaHome,
  FaSearch,
  FaExclamationTriangle,
  FaArrowLeft,
} from "react-icons/fa";
import { MdExplore, MdRadar } from "react-icons/md";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center  dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="relative mx-4 max-w-2xl w-full">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-spin absolute top-10 left-10 text-blue-200 dark:text-blue-900 opacity-20">
            <MdRadar className="w-20 h-20" />
          </div>
          <div className="animate-pulse absolute bottom-10 right-10 text-blue-200 dark:text-blue-900 opacity-20">
            <MdExplore className="w-16 h-16" />
          </div>
        </div>

        {/* Main Content Card */}
        <div className="relative backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
          {/* 404 Header */}
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <FaExclamationTriangle className="text-yellow-500 dark:text-yellow-400 w-16 h-16 animate-bounce" />
            </div>
            <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-transparent bg-clip-text mb-4">
              404
            </h1>
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Houston, We Have a Problem!
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              The page you're looking for has drifted into deep space.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => navigate("/")}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 dark:from-blue-600 dark:to-purple-700 dark:hover:from-blue-700 dark:hover:to-purple-800 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <FaHome className="w-5 h-5" />
              <span>Return to Home Base</span>
            </button>

            <div className="flex gap-4">
              <button
                onClick={() => navigate(-1)}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-xl transition-colors duration-200"
              >
                <FaArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </button>

              <button
                onClick={() => navigate("/search")}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-xl transition-colors duration-200"
              >
                <FaSearch className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>
          </div>

        </div>

        {/* Footer Text */}
        <p className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          Lost in digital space? Our navigation team is here to help!
        </p>
      </div>
    </div>
  );
};

export default NotFound;
