import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";
import { motion } from "framer-motion";

import { courseAttribution } from "../data/llmTwinModules";

const LLMTwinCoursePage = () => {
  const [expandedModule, setExpandedModule] = useState(null);
  const location = useLocation();

  // Restore scroll position on component mount
  useEffect(() => {
    if (location.state?.scrollPosition) {
      window.scrollTo(0, location.state.scrollPosition);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl my-20 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header with Animation */}
        <div className="space-y-4 mb-16">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 dark:from-purple-400 dark:via-blue-400 dark:to-emerald-400">
              LLM TWIN COURSE
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
            <h2 className="text-lg sm:text-xl font-light text-gray-600 dark:text-gray-400">
              Building Your Production-Ready AI Replica
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              Learn to architect and implement a production-ready LLM & RAG
              system by building your LLM Twin. From data gathering to
              deployment, master the entire pipeline of creating an AI that
              writes like you.
            </p>
          </motion.div>
          {/* Attribution */}
          <motion.div
            className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="max-w-4xl mx-auto">
              <motion.p
                className="text-gray-700 dark:text-gray-300 mb-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <span className="font-medium">Note:</span> This course is based
                on the work of{" "}
                <a
                  href={courseAttribution.authorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {courseAttribution.author}
                </a>
                . The course materials are available under the{" "}
                <a
                  href={courseAttribution.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {courseAttribution.license}
                </a>
                .
              </motion.p>
            </div>
          </motion.div>

          {/* Course Description */}
          <motion.div
            className="w-full mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-6 md:p-8 space-y-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                      <span className="mr-2">🎯</span> What you'll learn
                    </h3>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                      <p>
                        By finishing the "LLM Twin: Building Your
                        Production-Ready AI Replica" free course, you will learn
                        how to design, train, and deploy a production-ready LLM
                        twin of yourself powered by LLMs, vector DBs, and LLMOps
                        good practices.
                      </p>
                      <p className="font-medium text-blue-600 dark:text-blue-400">
                        No more isolated scripts or Notebooks! Learn production
                        ML by building and deploying an end-to-end
                        production-grade LLM system.
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-gray-100 dark:bg-gray-700"></div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                      <span className="mr-2">📖</span> About this course
                    </h3>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                      <p>
                        You will learn how to architect and build a real-world
                        LLM system from start to finish — from data collection
                        to deployment.
                      </p>
                      <p>
                        You will also learn to leverage MLOps best practices,
                        such as experiment trackers, model registries, prompt
                        monitoring, and versioning.
                      </p>
                      <p className="font-medium">
                        The end goal? Build and deploy your own LLM twin.
                      </p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r">
                        <p className="text-blue-700 dark:text-blue-300 font-medium">
                          What is an LLM Twin? It is an AI character that learns
                          to write like somebody by incorporating its style and
                          personality into an LLM.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LLMTwinCoursePage;
