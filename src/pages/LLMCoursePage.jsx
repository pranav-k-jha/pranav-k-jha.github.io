import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronDown,
  FiExternalLink,
  FiGithub,
  FiBookOpen,
  FiArrowRight,
} from "react-icons/fi";
import { llmCourseModules, courseAttribution } from "../data/llmCourseModules";

const LLMCoursePage = () => {
  const [expandedModule, setExpandedModule] = useState(null);
  const location = useLocation();

  // Restore scroll position on component mount
  useEffect(() => {
    if (location.state?.scrollPosition) {
      window.scrollTo(0, location.state.scrollPosition);
    }
  }, [location]);

  // Save scroll position before component unmounts
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem("llmCourseScrollPosition", window.scrollY);
    };

    window.addEventListener("beforeunload", saveScrollPosition);
    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);

  // Restore scroll position on mount if coming from a page reload
  useEffect(() => {
    if (performance.navigation?.type === 1) {
      const savedPosition = sessionStorage.getItem("llmCourseScrollPosition");
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
        sessionStorage.removeItem("llmCourseScrollPosition");
      }
    }
  }, []);

  const toggleModule = (index) => {
    // Save scroll position before updating state
    sessionStorage.setItem("llmCourseScroll", window.scrollY);
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Header with Animation */}
        <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16">
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
              LARGE LANGUAGE MODELS
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
              A comprehensive guide to understanding and working with Large
              Language Models
            </h2>
          </motion.div>

          {/* Application Areas */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="px-3 py-1.5 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium">
              Natural Language Processing
            </span>
            <span className="px-3 py-1.5 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded-full text-xs sm:text-sm font-medium">
              AI Assistants
            </span>
            <span className="px-3 py-1.5 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-xs sm:text-sm font-medium">
              Content Generation
            </span>
          </motion.div>
        </div>

        {/* Attribution Section */}
        <motion.div
          className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-6 mb-12 shadow-sm text-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.p
              className="text-gray-700 dark:text-gray-300 mb-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="font-medium">Note:</span> This course is based on
              the excellent work by{" "}
              <a
                href="https://www.linkedin.com/in/maxime-labonne/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {courseAttribution.author}
              </a>
              . The LLM course is available under the{" "}
              <a
                href="https://github.com/mlabonne/llm-course/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {courseAttribution.license}
              </a>{" "}
              and will always stay free.
            </motion.p>

            <motion.div
              className="bg-white dark:bg-gray-800/50 p-5 rounded-lg my-4 border-l-4 border-blue-500 dark:border-blue-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.p
                className="text-gray-800 dark:text-gray-200 mb-3 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                From the original author:
              </motion.p>

              <motion.p
                className="text-gray-800 dark:text-gray-200 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                "Based on this course, I wrote the{" "}
                <a
                  href="https://www.llmhandbook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  LLM Engineer's Handbook
                </a>{" "}
                with{" "}
                <a
                  href="https://www.linkedin.com/in/pauliusztin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Paul Iuzstin
                </a>
                . It's a hands-on and detailed book that covers an end-to-end
                LLM application from design to deployment. The LLM course will
                always stay free but feel free to support my work by purchasing
                the book."
              </motion.p>

              <motion.p
                className="text-gray-800 dark:text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                For an interactive version of this course, I created an LLM
                assistant that will answer questions and test your knowledge in
                a personalized way on{" "}
                <a
                  href="https://huggingface.co/chat/assistant/66029d2e5f4a884f7aabc9d1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  HuggingChat
                </a>{" "}
                or{" "}
                <a
                  href="https://chatgpt.com/g/g-yviLuLqvI-llm-course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  ChatGPT
                </a>
                .
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 mt-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={courseAttribution.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-4 py-2 border border-transparent text-xs font-medium rounded-md text-white 
             bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:text-white
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition shadow-md hover:shadow-lg"
              >
                <FiGithub className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                View on GitHub
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={courseAttribution.book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-xs font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <FiBookOpen className="mr-2 h-4 w-4" />
                View Book
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Course Modules Section */}
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2">
            Course Modules
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A structured learning path from LLM fundamentals to advanced
            applications.
          </p>
        </motion.div>

        {/* Course Cards Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {/* Fundamentals Card */}
          <Link to="/llm-fundamentals" className="group block h-full">
            <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    LLM Fundamentals
                  </h3>
                  <FiArrowRight className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Master the core concepts and practical applications of Large
                  Language Models
                </p>
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium">
                  <span>Start Learning</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Scientist Card */}
          <Link to="/llm-scientist" className="group block h-full">
            <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    LLM Scientist
                  </h3>
                  <FiArrowRight className="text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Advanced techniques and research in Large Language Models for
                  AI researchers
                </p>
                <div className="flex items-center text-sm text-purple-600 dark:text-purple-400 font-medium">
                  <span>Explore Research</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Engineer Card */}
          <Link to="/llm-engineer" className="group block h-full">
            <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    LLM Engineer
                  </h3>
                  <FiArrowRight className="text-green-600 dark:text-green-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Build and deploy production-grade LLM applications at scale
                </p>
                <div className="flex items-center text-sm text-green-600 dark:text-green-400 font-medium">
                  <span>Start Building</span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="space-y-4">
          {llmCourseModules.map((module, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <button
                className={`w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none transition-colors ${
                  expandedModule === index
                    ? "bg-gray-50 dark:bg-gray-800/50"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800/30"
                }`}
                onClick={() => toggleModule(index)}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      expandedModule === index
                        ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                        : "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    }`}
                  >
                    {module.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {module.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {module.description}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{
                    rotate: expandedModule === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedModule === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50/30 dark:bg-gray-800/30">
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {module.overview}
                      </p>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {module.topics.map((topic, topicIndex) => (
                          <div
                            key={topicIndex}
                            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700"
                          >
                            <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                              {topic.title}
                            </h4>
                            <ul className="space-y-2">
                              {topic.content.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start"
                                >
                                  <svg
                                    className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="mt-16 mb-24 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Explore More LLM Resources
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            A collection of Jupyter notebooks and articles about LLMs, covering
            fine-tuning, quantization, and deployment.
          </p>
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row justify-center mt-6">
            <Link
              to="/llm-notebooks"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white hover:text-white rounded-lg font-medium transition-colors"
            >
              Explore LLM Notebooks
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
            <a
              href="https://github.com/decodingai-magazine/llm-twin-course"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white hover:text-white rounded-lg font-medium transition-colors"
            >
              Explore LLM Twin Course
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LLMCoursePage;
