import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";
import { motion } from "framer-motion";

import { courseAttribution } from "../data/llmTwinModules";

const LLMTwinCoursePage = () => {
  const [expandedModule, setExpandedModule] = useState(null);
  const location = useLocation();

  // Restore scroll position on component mount
  useEffect(() => {
    if (location.state?.scrollPosition) {
      window.scrollTo(0, location.state.scrollPosition);
    }
  }, [location]);

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl my-20 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header with Animation */}
        <div className="space-y-4 mb-16">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 dark:from-purple-400 dark:via-blue-400 dark:to-emerald-400">
              LLM TWIN COURSE
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="space-y-2 text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h2 className="text-lg sm:text-xl font-light text-gray-600 dark:text-gray-400">
              Building Your Production-Ready AI Replica
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              Learn to architect and implement a production-ready LLM & RAG
              system by building your LLM Twin. From data gathering to
              productionizing LLMs using LLMOps good practices.
            </p>
          </motion.div>
        </div>

        {/* Attribution */}
        <motion.div
          className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.p
              className="text-gray-700 dark:text-gray-300 mb-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="font-medium">Note:</span> This course is based on
              the work of{" "}
              <a
                href={courseAttribution.authorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {courseAttribution.author}
              </a>
              . The course materials are available under the{" "}
              <a
                href={courseAttribution.licenseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {courseAttribution.license}
              </a>
              .
            </motion.p>
          </div>
        </motion.div>

        {/* Under Development Banner */}
        <motion.div
          className="mt-12 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-6 rounded-lg shadow-lg max-w-4xl mx-auto"
          role="alert"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="font-medium">Under Development</p>
              <p className="text-sm mt-1">
                This page is currently under development. Content may be
                incomplete or subject to change.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LLMTwinCoursePage;
