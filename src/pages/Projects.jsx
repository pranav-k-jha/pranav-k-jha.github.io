import { useState, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiFilter,
  FiPlay,
  FiCode,
  FiCalendar,
  FiTarget,
} from "react-icons/fi";
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

// Projects data
const projects = [
  {
    id: 1,
    title: "Ecole De Conduite Educar",
    startDate: "August 2025",
    endDate: "September 2025",
    associatedWith: "",
    description:
      "Designed, developed, and currently maintain the Ecole De Conduite Educar website using Next.js, React, Tailwind CSS, and TypeScript.",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Web Development",
      "Responsive Design",
    ],
    link: "https://educar-ecoledeconduite.ca/",
    notes: "Featured Project",
    imageUrl: "/images/projects/project-1.png",
    category: "web",
    isFeatured: true,
  },
  {
    id: 2,
    title: "MKJHA Consulting Website",
    startDate: "April 2025",
    endDate: "May 2025",
    associatedWith: "MKJHA CONSULTING",
    description:
      "Designed, developed, and currently maintain the MKJHA Consulting website using Next.js, React, Tailwind CSS, and TypeScript. The site features a modern, responsive design with an emphasis on user experience and accessibility.",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Web Development",
      "Website Design",
      "Website Development",
    ],
    link: "https://www.mkjhaconsult.com",
    notes: null,
    imageUrl: "/images/projects/project-2.png",
    category: "web",
  },
  {
    id: 3,
    title: "4C Research Lab Website",
    startDate: "May 2025",
    endDate: "Present",
    associatedWith:
      "Intelligent Digital Systems Lab (IDSL), Western University",
    description:
      "Designed, developed, and currently maintain the 4C Research Lab website using Next.js, React, Tailwind CSS, and TypeScript. The site features a modern, responsive design with database integration.",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Database Design",
      "Analytics",
      "Web Development",
      "Research Data Management",
      "Data Visualization",
    ],
    link: "https://4c-research.vercel.app/",
    notes: null,
    imageUrl: "/images/projects/project-3.png",
    category: "web",
  },
  {
    id: 4,
    title: "Beaut-AI Mobile Application",
    startDate: "December 2025",
    endDate: "January 2025",
    associatedWith: "Beaut Ai",
    description:
      "Developed a comprehensive mobile application with React Native and Expo Router, featuring advanced backend authentication, GraphQL API integration, and NestJS microservices architecture. The app provides AI-powered beauty and wellness solutions with secure user management, real-time data synchronization, and seamless cross-platform performance.",
    skills: [
      "React Native",
      "Expo Router",
      "GraphQL",
      "NestJS",
      "Mobile Development",
      "Backend Authentication",
      "JWT",
      "Microservices",
      "API Development",
      "Cross-Platform Development",
      "TypeScript",
      "Node.js",
      "Database Design",
      "Real-time Sync",
      "Mobile UI/UX",
    ],
    link: null,
    notes:
      "Full-stack mobile application with advanced authentication and AI integration",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
    videoUrl:
      "https://drive.google.com/file/d/1FIjJpagUK7Lwc64iPaNmUl8VIEEiPBP3/view?usp=drive_link",
    category: "app",
  },
  {
    id: 5,
    title: "Chat Interface",
    startDate: "March 2023",
    endDate: "April 2023",
    associatedWith: "Western University",
    description:
      "Developed an interactive chat interface using React, Tailwind CSS, and Framer Motion. The application features real-time communication with multiple LLMs through a FastAPI backend. Key features include real-time chat with streaming responses, file upload and processing with RAG for document analysis, animated loading states with a 'thinking' indicator, and responsive UI with smooth animations. The application is containerized with Docker and deployed on UBC's HPC infrastructure.",
    skills: [
      "React",
      "FastAPI",
      "LLM Integration",
      "RAG",
      "Docker",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "React-Query",
      "Web Development",
      "Real-time Chat",
      "API Integration",
      "State Management",
      "Data Fetching",
    ],
    notes: null,
    imageUrl: "/images/projects/project-4.png",
    category: "web",
  },
];

const categories = ["all", "web", "app"];

const ProjectCard = ({ project, index, isFirst = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className="group cursor-pointer transition-all duration-300 h-full flex flex-col"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div
        whileHover={{
          scale: 1.02,
          y: -3,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 10,
            duration: 0.3,
          },
        }}
        whileTap={{
          scale: 0.98,
          transition: { duration: 0.15 },
        }}
        className={`h-full bg-white/60 dark:bg-white/10 backdrop-blur-sm border-2 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 text-left flex flex-col relative overflow-hidden ${
          isFirst
            ? "border-blue-400/50 dark:border-blue-300/50 bg-gradient-to-br from-blue-50/30 to-white/60 dark:from-blue-900/10 dark:to-gray-900/20 ring-1 ring-blue-100 dark:ring-blue-900/50 shadow-lg"
            : "border-gray-300/80 dark:border-white/20"
        } ${
          isExpanded
            ? "border-blue-500/50 dark:border-blue-400/50 bg-blue-50/30 dark:bg-blue-900/20 ring-2 ring-blue-500/20 dark:ring-blue-400/20"
            : "group-hover:border-blue-300/50 dark:group-hover:border-blue-400/50"
        }`}
      >
        {isFirst && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md">
              Recent Work
            </span>
          </div>
        )}
        {/* Project Image/Video */}
        {(project.imageUrl || project.videoUrl) && (
          <div
            className={`relative w-full mb-4 rounded-lg overflow-hidden ${
              isFirst ? "h-40 ring-1 ring-black/5" : "h-32"
            }`}
          >
            {project.videoUrl ? (
              <div className="relative w-full h-full">
                <iframe
                  src={project.videoUrl.replace(
                    "/view?usp=drive_link",
                    "/preview"
                  )}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={project.title}
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <FiPlay className="w-6 h-6 text-blue-600 ml-1" />
                  </div>
                </div>
              </div>
            ) : (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between mb-4 mt-1">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                isExpanded
                  ? "bg-gradient-to-r from-blue-500 to-purple-500"
                  : "bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30"
              }`}
            >
              <FiCode
                className={`w-6 h-6 ${
                  isExpanded ? "text-white" : "text-blue-600 dark:text-blue-400"
                }`}
              />
            </div>
            <div className="flex-1 text-left min-w-0">
              <h3 className="text-base font-semibold text-gray-800 dark:text-white leading-tight break-words">
                {isFirst ? (
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    {project.title}
                  </span>
                ) : (
                  project.title
                )}
              </h3>
              {project.associatedWith && (
                <p className="text-sm text-gray-600 dark:text-gray-300 text-left leading-tight break-words">
                  {project.associatedWith}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {project.videoUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowVideo(!showVideo);
                }}
                className="text-purple-500 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                title="Toggle Video"
              >
                <FiPlay className="w-4 h-4" />
              </button>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50 transition-colors border border-blue-200 dark:border-blue-800"
              >
                <span>View Project</span>
                <FiExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="space-y-3 flex-1 flex flex-col"
        >
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 text-left">
            <FiCalendar className="w-3 h-3" />
            <span className="text-left">
              {project.startDate} - {project.endDate || "Present"}
            </span>
          </div>

          {/* Show description when expanded */}
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, height: 0, y: -15 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -15 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  opacity: { duration: 0.4 },
                  height: { duration: 0.5 },
                  y: { duration: 0.4 },
                }}
                className="pt-3 border-t border-gray-200/50 dark:border-white/20 overflow-hidden text-left"
              >
                <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1 text-left">
                  <FiTarget className="w-3 h-3 text-blue-500 dark:text-blue-400" />
                  Project Description
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 text-left">
                  {project.description}
                </p>

                {project.skills && project.skills.length > 0 && (
                  <div className="text-left">
                    <h5 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 text-left">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {project.skills.slice(0, 8).map((skill, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: idx * 0.06,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </motion.span>
                      ))}
                      {project.skills.length > 8 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                          +{project.skills.length - 8} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <div className="pt-2 border-t border-gray-200/50 dark:border-white/20 text-left flex-1 flex flex-col">
                <div className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 text-left flex-1">
                  {project.description}
                </div>
                <div className="text-xs text-blue-500 dark:text-blue-400 mt-1 text-left">
                  Click to view full details
                </div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Selection Indicator */}
        {isExpanded && (
          <div className="absolute top-4 right-4">
            <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
          </div>
        )}
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && project.videoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                ×
              </button>
              <div className="w-full h-full flex items-center justify-center">
                <iframe
                  src={project.videoUrl.replace(
                    "/view?usp=drive_link",
                    "/preview"
                  )}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={project.title}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const location = useLocation();

  // Handle filter change
  const handleFilter = (category) => {
    setActiveFilter(category);
  };

  useLayoutEffect(() => {
    // Disable scroll restoration to prevent auto-scrolling on page load
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Only scroll to top on initial page load
    if (performance.getEntriesByType("navigation")[0]?.type === "navigate") {
      window.scrollTo(0, 0);
    }

    // Filter projects based on active filter
    const filtered = projects
      .filter((project) => {
        if (activeFilter === "all") return true;
        return project.category === activeFilter;
      })
      .sort((a, b) => {
        // Featured projects first
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        // Then sort by ID
        return a.id - b.id;
      });

    setFilteredProjects(filtered);

    return () => {
      // Re-enable scroll restoration when component unmounts
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, [activeFilter, location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-purple-900/50 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header with Animation */}
        <div className="space-y-4 mb-8">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 dark:from-purple-400 dark:via-blue-400 dark:to-emerald-400">
              MY PROJECTS
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A collection of my recent work and personal projects
          </motion.p>
        </div>

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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  index={index}
                  isFirst={index === 0}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
