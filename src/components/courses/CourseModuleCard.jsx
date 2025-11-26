import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiExternalLink } from "react-icons/fi";

const CourseModuleCard = ({ module, index, resources = [], details = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      key={index}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-lg mr-4">
              {index + 1}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {module.title}
            </h3>
          </div>
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
            {module.duration}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {module.description}
        </p>

        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Topics Covered:
          </h4>
          <div className="space-y-2">
            {details.map((topic, i) => (
              <div
                key={i}
                className="border-b border-gray-100 dark:border-gray-700 pb-2"
              >
                <div className="font-medium text-gray-800 dark:text-gray-200">
                  {topic.name}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {resources.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              {isExpanded ? "Hide" : "Show"} Resources
              <FiChevronDown
                className={`ml-1 transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 space-y-2">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Recommended Resources:
                    </h4>
                    <ul className="space-y-2">
                      {resources.map((resource, i) => (
                        <li key={i} className="text-sm">
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {resource.name}
                            <FiExternalLink className="ml-1 w-3 h-3" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CourseModuleCard;
