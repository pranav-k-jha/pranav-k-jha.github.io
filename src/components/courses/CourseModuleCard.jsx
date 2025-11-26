import { motion } from "framer-motion";

const CourseModuleCard = ({ module, index }) => {
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

        {module.topics && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Topics Covered:
            </h4>
            <div className="flex flex-wrap gap-2">
              {module.topics.map((topic, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {module.prerequisites && (
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Prerequisites:
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {module.prerequisites}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CourseModuleCard;
