import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { resources } from "../content/resources/resources";
import PdfViewer from "../components/PdfViewer";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: -20,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    x: 0,
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

const pdfViewer = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.2,
    },
  },
};

const ResourcePage = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const containerRef = useRef(null);

  // Get unique categories
  const categories = ["All", ...new Set(resources.map((r) => r.category))];

  // Filter resources based on active filter
  const filteredResources =
    activeFilter === "All"
      ? resources
      : resources.filter((r) => r.category === activeFilter);

  const handlePdfSelect = (pdfPath) => {
    setSelectedPdf(pdfPath);
    document
      .getElementById("pdf-viewer")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFilter = (category) => {
    setActiveFilter(category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <motion.div
        className="container max-w-8xl mx-auto px-4 sm:px-6 py-16 sm:py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        ref={containerRef}
      >
        {/* Header Section */}
        <div className="space-y-3 sm:space-y-4 mb-8">
          {/* Main Heading */}
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
              RESOURCES
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
            <h2 className="text-base sm:text-lg font-light text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A collection of valuable assets and knowledge resources
            </h2>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-6"
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
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/10"
                  : "bg-white dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 border border-gray-200 dark:border-gray-700/50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Resource List with staggered animations */}
          <motion.div className="md:col-span-1">
            <motion.div
              className="space-y-3 max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent"
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredResources.map((resource) => (
                  <motion.div
                    key={resource.id}
                    variants={item}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    layout
                    layoutId={`resource-${resource.id}`}
                    onClick={() => handlePdfSelect(resource.pdfPath)}
                    onHoverStart={() => setHoveredCard(resource.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{
                      y: -2,
                      boxShadow:
                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-4 rounded-xl cursor-pointer transition-colors ${
                      selectedPdf === resource.pdfPath
                        ? "bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500"
                        : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    <h3 className="font-medium text-gray-900 dark:text-white text-sm pr-6">
                      {resource.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                      {resource.description}
                    </p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs px-2.5 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-100 rounded-full">
                        {resource.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(resource.date).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <motion.div
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{
                        opacity: selectedPdf === resource.pdfPath ? 1 : 0,
                        x: selectedPdf === resource.pdfPath ? 0 : -5,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Empty State for Filter */}
              {filteredResources.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <p className="text-gray-500 dark:text-gray-400">
                    No resources found in this category
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* PDF Viewer with animation */}
          <motion.div
            id="pdf-viewer"
            className="md:col-span-2 max-w-4xl mx-auto w-full"
            layout
          >
            <AnimatePresence mode="wait">
              {selectedPdf ? (
                <motion.div
                  key="pdf-content"
                  variants={pdfViewer}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="w-[95%] mx-auto"
                >
                  <PdfViewer pdfPath={selectedPdf} />
                </motion.div>
              ) : (
                <motion.div
                  key="empty-state"
                  variants={pdfViewer}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="flex flex-col items-center justify-center h-96 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-xl shadow-sm w-full max-w-2xl mx-auto border-2 border-dashed border-gray-200 dark:border-gray-700"
                >
                  <motion.div
                    className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </motion.div>
                  <motion.h3
                    className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    No Resource Selected
                  </motion.h3>
                  <motion.p
                    className="text-gray-500 dark:text-gray-400 text-center max-w-md px-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Select a resource from the list to view its contents
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResourcePage;
