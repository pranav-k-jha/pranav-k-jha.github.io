import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiExternalLink,
  FiClock,
  FiBarChart,
  FiLayers,
  FiBookOpen,
  FiUser,
} from "react-icons/fi";
import CourseModuleCard from "./CourseModuleCard";

// Animation variants for staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 },
  },
};

const CoursePageTemplate = ({ courseData }) => {
  const navigate = useNavigate();

  // Memoize calculations to prevent re-running on every render
  const { courseModules, totalDuration, totalResources } = useMemo(() => {
    const modules = courseData.sections.map((section) => ({
      title: section.title,
      duration: section.topics.length > 3 ? "2 weeks" : "1 week",
      description: section.description,
      topics: section.topics.map((topic) => topic.name),
      resources: section.resources || [],
      details: section.topics.map((topic) => ({
        name: topic.name,
        description: topic.details,
      })),
    }));

    const duration = modules.reduce((total, module) => {
      return total + (module.duration.includes("week") ? 1 : 0);
    }, 0);

    // Calculate total resources for the stats bar
    const resources = modules.reduce(
      (total, module) => total + (module.resources?.length || 0),
      0
    );

    return {
      courseModules: modules,
      totalDuration: duration,
      totalResources: resources,
    };
  }, [courseData]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B1120] text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-500/30">
      {/* Background Decorators */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <button
            onClick={() => navigate("/llm-course")}
            className="group flex items-center px-4 py-2 mt-10 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full hover:bg-white dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm hover:shadow-md"
          >
            <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to LLM Courses
          </button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase border border-blue-200 dark:border-blue-800">
              Learning Path
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200">
                {courseData.title.toUpperCase()}
              </span>
            </h1>

            {courseData.subtitle && (
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {courseData.subtitle}
              </p>
            )}
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <StatCard
              icon={FiClock}
              label="Duration"
              value={`${totalDuration} Weeks`}
              color="blue"
            />
            <StatCard
              icon={FiBarChart}
              label="Level"
              value={courseData.level || "All Levels"}
              color="purple"
            />
            <StatCard
              icon={FiLayers}
              label="Modules"
              value={`${courseData.sections.length} Sections`}
              color="emerald"
            />
            <StatCard
              icon={FiBookOpen}
              label="Resources"
              value={`${totalResources}+ Links`}
              color="orange"
            />
          </motion.div>

          {/* Overview Section */}
          <motion.div
            variants={itemVariants}
            className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-1 h-8 bg-blue-500 rounded-full mr-3"></span>
              Course Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {courseData.intro}
            </p>
          </motion.div>

          {/* Modules List */}
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-4"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {courseData.modulesTitle || "Curriculum"}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  {courseData.modulesDescription ||
                    "Follow the structured path below to master the concepts."}
                </p>
              </div>
            </motion.div>

            <div className="space-y-6">
              {courseModules.map((module, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  // Adding a custom viewport check to animate as user scrolls
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <CourseModuleCard
                    module={module}
                    index={index}
                    resources={module.resources}
                    details={module.details}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Author / Acknowledgements Footer */}
          <motion.footer
            variants={itemVariants}
            className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/10 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <FiUser size={24} />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Credits & Acknowledgments
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      This learning path was curated with inspiration from
                      community leaders.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-600 dark:text-gray-300">
                    <div className="space-y-2">
                      <p>
                        Inspired by the{" "}
                        <a
                          href="https://github.com/milanm/DevOps-Roadmap"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center font-medium"
                        >
                          DevOps Roadmap{" "}
                          <FiExternalLink className="ml-1" size={12} />
                        </a>
                        .
                      </p>
                      <p>
                        Special thanks to Thomas Thelen, André Frade, Dino Dunn,
                        and Magdalena Kuhn for their direct contributions to the
                        curriculum structure and security resources.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p>
                        Additional educational references provided by
                        3Blue1Brown and the open-source community.
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 italic mt-4">
                        Disclaimer: This course is an educational aggregation
                        and is not officially affiliated with the linked
                        sources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
};

// Sub-component for the stats grid to keep code clean
const StatCard = ({ icon: Icon, label, value, color }) => {
  const colorMap = {
    blue: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20",
    purple:
      "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20",
    emerald:
      "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20",
    orange:
      "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20",
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${colorMap[color]}`}
      >
        <Icon size={20} />
      </div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {label}
      </p>
      <p className="text-lg font-bold text-gray-900 dark:text-white mt-1">
        {value}
      </p>
    </div>
  );
};

export default CoursePageTemplate;
