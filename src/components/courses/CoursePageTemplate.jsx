import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import CourseModuleCard from "./CourseModuleCard";

const CoursePageTemplate = ({ courseData }) => {
  const navigate = useNavigate();

  // Transform the course data into the format expected by CourseModuleCard
  const courseModules = courseData.sections.map((section) => ({
    title: section.title,
    // Calculate duration based on section content (1-2 weeks per section)
    duration: section.topics.length > 3 ? "2 weeks" : "1 week",
    description: section.description,
    topics: section.topics.map((topic) => topic.name),
    resources: section.resources || [],
    details: section.topics.map((topic) => ({
      name: topic.name,
      description: topic.details,
    })),
  }));

  // Calculate total duration based on all modules
  const totalDuration = courseModules.reduce((total, module) => {
    return total + (module.duration.includes("week") ? 1 : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-purple-900/20 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate("/llm-course")}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back to LLM Courses
        </button>

        {/* Header */}
        <div className="relative mb-16">
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-center"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 dark:from-purple-400 dark:via-blue-400 dark:to-emerald-400">
                {courseData.title.toUpperCase()}
              </span>
            </motion.h1>

            {courseData.subtitle && (
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
                <p className="text-base sm:text-lg font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  {courseData.subtitle}
                </p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Course Overview */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Course Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {courseData.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 dark:text-blue-400">
                Duration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {totalDuration} Week{totalDuration !== 1 ? "s" : ""}
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-700 dark:text-purple-400">
                Level
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {courseData.level || "All Levels"}
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 dark:text-green-400">
                Sections
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {courseData.sections.length} Comprehensive Sections
              </p>
            </div>
          </div>
        </motion.div>

        {/* Course Modules */}
        <div className="space-y-6">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {courseData.modulesTitle || "Course Modules"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {courseData.modulesDescription ||
                "A structured learning path covering all aspects of the course"}
            </p>
          </motion.div>

          <div className="space-y-6">
            {courseModules.map((module, index) => (
              <CourseModuleCard
                key={index}
                module={module}
                index={index}
                resources={module.resources}
                details={module.details}
              />
            ))}
          </div>
        </div>

        {/* Acknowledgements Section */}
        {/* Original Author's Note */}
        <motion.div
          className="mt-16 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-400 dark:border-blue-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
            Note from the Original Author
          </h3>
          <p className="text-blue-700 dark:text-blue-300 text-sm mb-3">
            The following acknowledgments are from the original author of this
            learning path:
          </p>
          <div className="bg-white dark:bg-gray-800/50 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              This roadmap was inspired by the excellent{" "}
              <a
                href="https://github.com/milanm/DevOps-Roadmap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
              >
                DevOps Roadmap <FiExternalLink className="ml-1" size={14} />
              </a>{" "}
              from Milan Milanović and Romano Roth.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              Special thanks to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1 pl-4">
              <li>Thomas Thelen for motivating me to create a roadmap</li>
              <li>André Frade for his input and review of the first draft</li>
              <li>Dino Dunn for providing resources about LLM security</li>
              <li>Magdalena Kuhn for improving the "human evaluation" part</li>
              <li>
                Odoverdose for suggesting 3Blue1Brown's video about Transformers
              </li>
              <li>
                Everyone who contributed to the educational references in this
                course :)
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-3 italic">
              Disclaimer: I am not affiliated with any sources listed here.
            </p>
          </div>
          <p className="text-blue-700 dark:text-blue-300 text-xs mt-3 italic">
            This note is included to properly credit the original authors and
            contributors of this learning path.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CoursePageTemplate;
