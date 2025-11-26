import { motion } from "framer-motion";
import CourseModuleCard from "../components/courses/CourseModuleCard";
import { llmScientist } from "../components/courses/llmScientist";

const LLMScientistPage = () => {
  // Transform the llmScientist data into the format expected by CourseModuleCard
  const courseModules = llmScientist.sections.map((section) => ({
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-purple-900/50 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            LLM Scientist
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced techniques and research in Large Language Models for AI
            researchers
          </p>
        </motion.div>

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
            {llmScientist.intro} This comprehensive course dives deep into
            building and optimizing Large Language Models with the latest
            techniques and research. You'll gain hands-on experience with
            state-of-the-art methods used by leading AI labs.
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
              <p className="text-gray-600 dark:text-gray-300">Advanced</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 dark:text-green-400">
                Research
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Original Research Project
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
              Course Modules
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A structured learning path covering all aspects of LLM development
              and optimization
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
      </div>
    </div>
  );
};

export default LLMScientistPage;
