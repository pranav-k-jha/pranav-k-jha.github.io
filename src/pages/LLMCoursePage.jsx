import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiExternalLink } from "react-icons/fi";
import { llmCourseModules } from "../data/llmCourseModules.jsx";

const LLMCoursePage = () => {
  const [expandedModule, setExpandedModule] = useState(null);
  const location = useLocation();

  // Save scroll position before component unmounts
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem("llmCourseScrollPosition", window.scrollY);
    };

    window.addEventListener("beforeunload", saveScrollPosition);
    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);

  // Restore scroll position on mount if coming from a page reload
  useEffect(() => {
    if (performance.navigation?.type === 1) {
      const savedPosition = sessionStorage.getItem("llmCourseScrollPosition");
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
        sessionStorage.removeItem("llmCourseScrollPosition");
      }
    }
  }, []);

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
              LARGE LANGUAGE MODELS
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
              A comprehensive guide to understanding and working with Large
              Language Models
            </h2>
          </motion.div>

          {/* Application Areas */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm font-medium">
              Natural Language Processing
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded-full text-sm font-medium">
              AI Assistants
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm font-medium">
              Content Generation
            </span>
          </motion.div>
        </div>

        {/* Course Modules */}
        <div className="space-y-6">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Course Modules
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A structured learning path from LLM fundamentals to advanced
              applications. Click on any module to explore its contents.
            </p>
          </motion.div>

          <div className="space-y-4">
            {llmCourseModules.map((module, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <button
                  className={`w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none transition-colors ${
                    expandedModule === index
                      ? "bg-gray-50 dark:bg-gray-800/50"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800/30"
                  }`}
                  onClick={() => toggleModule(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        expandedModule === index
                          ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                          : "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      }`}
                    >
                      {module.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {module.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{
                      rotate: expandedModule === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedModule === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50/30 dark:bg-gray-800/30">
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {module.overview}
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                          {module.topics.map((topic, topicIndex) => (
                            <div
                              key={topicIndex}
                              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700"
                            >
                              <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                                {topic.title}
                              </h4>
                              <ul className="space-y-2">
                                {topic.content.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="flex items-start"
                                  >
                                    <svg
                                      className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLMCoursePage;
