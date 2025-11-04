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
  hidden: { opacity: 0, x: -20, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.15 } },
};

const filterItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

const pdfViewer = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
};

const ResourcePage = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const containerRef = useRef(null);

  // Unique categories
  const categories = ["All", ...new Set(resources.map((r) => r.category))];

  // Filtered resources
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

  const handleFilter = (category) => setActiveFilter(category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-purple-900/50 pt-20 pb-12 px-4 sm:px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        ref={containerRef}
      >
        {/* Heading */}
        <div className="space-y-6 mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 border border-purple-400/30 dark:border-purple-400/30 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300"
          >
            Featured Resources
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl lg:text-6xl font-bold tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 dark:from-purple-400 dark:via-blue-400 dark:to-emerald-400">
              RESOURCES PORTFOLIO
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            A comprehensive collection of technical resources, research papers,
            and reference materials spanning AI, ML, web development, and
            software engineering.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
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
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
                  : "bg-white dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 border border-gray-200 dark:border-gray-700/50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Resource List */}
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
                    onClick={() => handlePdfSelect(resource.pdfPath)}
                    onHoverStart={() => setHoveredCard(resource.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      },
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-4 rounded-2xl cursor-pointer transition-all duration-300 backdrop-blur-sm ${
                      selectedPdf === resource.pdfPath
                        ? "bg-gradient-to-r from-blue-50/50 via-white/30 to-purple-50/50 border-2 border-blue-500 shadow-lg"
                        : "bg-white/70 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm pr-6">
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
                  </motion.div>
                ))}
              </AnimatePresence>
              {filteredResources.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12 text-gray-500 dark:text-gray-400"
                >
                  No resources found in this category
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* PDF Viewer */}
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
                  className="w-full rounded-3xl shadow-2xl backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 p-4"
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
                  className="flex flex-col items-center justify-center h-96 text-gray-500                   dark:text-gray-400 bg-white/70 dark:bg-gray-800/60 rounded-2xl shadow-lg w-full max-w-2xl mx-auto border-2 border-dashed border-gray-200 dark:border-gray-700 backdrop-blur-sm"
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
