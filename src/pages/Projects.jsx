import { motion, AnimatePresence } from "framer-motion";
import { FiFilter, FiArrowUp, FiCalendar } from "react-icons/fi";
import { useState, useEffect, useMemo } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import SkeletonLoader from "../components/projects/SkeletonLoader";
import useScrollToTop from "../hooks/useScrollToTop";
import {
  containerVariants,
  headerVariants,
  scrollButtonVariants,
} from "../constants/animations";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const { isVisible: showScroll, scrollToTop } = useScrollToTop(400);

  // Extract unique categories
  const categories = useMemo(
    () => ["all", ...new Set(projects.map((project) => project.category))],
    []
  );

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-purple-900/50 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mt-8 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="space-y-4 mb-12">
          <motion.h1
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 dark:from-purple-400 dark:via-blue-400 dark:to-emerald-400">
              MY PROJECTS
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A collection of my recent work and personal projects
          </motion.p>

          {/* Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setLoading(true);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 border border-gray-200 dark:border-gray-700"
                }`}
                aria-label={`Filter by ${category}`}
                aria-pressed={activeFilter === category}
              >
                {activeFilter === category && (
                  <FiFilter className="w-3.5 h-3.5" />
                )}
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects List */}
        <div className="relative min-h-[400px]">
          {/* Loading State */}
          <AnimatePresence>
            {loading && (
              <motion.div
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-24"
              >
                <SkeletonLoader count={3} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Projects List */}
          <AnimatePresence>
            {!loading && filteredProjects.length > 0 && (
              <motion.div
                key="projects"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="space-y-24"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          <AnimatePresence>
            {!loading && filteredProjects.length === 0 && (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center text-center py-16"
              >
                <div>
                  <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400">
                    No projects found in this category.
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-500">
                    Try selecting a different filter.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            variants={scrollButtonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-all duration-200"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
