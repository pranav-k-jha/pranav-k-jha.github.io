import { useState, useLayoutEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiFilter } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

// Optimized animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const filterItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const cardItem = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.15,
    },
  },
};

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/projects/ecommerce.jpg",
    github: "#",
    live: "#",
    category: "web",
  },
  {
    id: 2,
    title: "Mobile Fitness App",
    description:
      "Cross-platform fitness tracking application with workout plans and progress analytics.",
    tags: ["React Native", "Firebase", "Redux"],
    image: "/projects/fitness.jpg",
    github: "#",
    live: "#",
    category: "app",
  },
  {
    id: 3,
    title: "Brand Identity System",
    description:
      "Complete brand identity design including logo, guidelines, and marketing materials.",
    tags: ["Figma", "Illustrator", "Branding"],
    image: "/projects/brand.jpg",
    github: null,
    live: "#",
    category: "design",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard for SaaS companies with real-time data visualization.",
    tags: ["Vue.js", "D3.js", "Tailwind"],
    image: "/projects/dashboard.jpg",
    github: "#",
    live: "#",
    category: "web",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "Collaborative task management tool with team features and integrations.",
    tags: ["Flutter", "GraphQL", "PostgreSQL"],
    image: "/projects/tasks.jpg",
    github: "#",
    live: "#",
    category: "app",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "Modern portfolio website with interactive animations and dark mode.",
    tags: ["Next.js", "Framer Motion", "TypeScript"],
    image: "/projects/portfolio.jpg",
    github: "#",
    live: "#",
    category: "web",
  },
];
const categories = ["all", "web", "app", "design"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const location = useLocation();

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
  };
  useLayoutEffect(() => {
    // Disable default scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Only scroll to top on initial page load
    if (performance.getEntriesByType("navigation")[0]?.type === "navigate") {
      window.scrollTo(0, 0);
    }

    return () => {
      // Re-enable scroll restoration when component unmounts
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-purple-900/50 pt-20 pb-12 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 },
          }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-4xl font-bold text-gray-900 dark:text-white mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            A collection of my recent freelance work and personal projects
          </motion.p>
        </motion.div>

        {/* Filter Buttons - Optimized */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={filterItem}
              onClick={() => handleFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
                  : "bg-white dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 border border-gray-200 dark:border-gray-700/50"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid - Optimized with layout animations */}
        <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                variants={cardItem}
                initial="hidden"
                animate="show"
                exit="exit"
                layout
                layoutId={`project-${project.id}`}
                className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700/50 flex flex-col relative group"
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white text-4xl font-bold opacity-20">
                      {project.title.charAt(0)}
                    </span>
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="text-xs bg-black/30 backdrop-blur-sm text-white px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700/30">
                    <div className="flex space-x-3">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                          aria-label="GitHub repository"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiGithub size={20} />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          aria-label="Live demo"
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
