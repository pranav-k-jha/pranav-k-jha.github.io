import { motion } from "framer-motion";
import { useState } from "react";
import { resources } from "../content/resources/resources";
import PdfViewer from "../components/PdfViewer";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ResourcePage = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handlePdfSelect = (pdfPath) => {
    setSelectedPdf(pdfPath);
    document
      .getElementById("pdf-viewer")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Browse and explore our collection of resources
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Resource List with staggered animations */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="md:col-span-1 space-y-3"
          >
            <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-2">
              {resources.map((resource) => (
                <motion.div
                  key={resource.id}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePdfSelect(resource.pdfPath)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-200 text-sm ${
                    selectedPdf === resource.pdfPath
                      ? "bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500"
                      : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <h3 className="font-medium text-gray-900 dark:text-white text-sm">
                    {resource.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                    {resource.description}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
                      {resource.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(resource.date).toLocaleDateString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* PDF Viewer with animation */}
          <motion.div
            id="pdf-viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 max-w-4xl mx-auto w-full" // Added max-w-4xl and w-full
          >
            {selectedPdf ? (
              <div className="w-[95%] mx-auto ">
                {" "}
                {/* Added wrapper div with width control */}
                <PdfViewer pdfPath={selectedPdf} />
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center justify-center h-96 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-lg shadow w-full max-w-2xl mx-auto" // Added width constraints
              >
                <svg
                  className="w-16 h-16 mb-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-lg">Select a resource to view</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResourcePage;
