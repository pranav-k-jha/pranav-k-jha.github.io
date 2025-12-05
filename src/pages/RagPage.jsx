import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { ragModules } from "../data/ragModules.jsx";

const RagPage = () => {
  const [expandedModule, setExpandedModule] = useState(null);
  const location = useLocation();

  // Save scroll position before component unmounts
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem("ragScrollPosition", window.scrollY);
    };

    window.addEventListener("beforeunload", saveScrollPosition);
    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);

  // Restore scroll position on mount if coming from a page reload
  useEffect(() => {
    if (performance.navigation?.type === 1) {
      // Check if page was reloaded
      const savedPosition = sessionStorage.getItem("ragScrollPosition");
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
        sessionStorage.removeItem("ragScrollPosition");
      }
    }
  }, []);

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container max-w-7xl mt-10 mx-auto px-4 sm:px-6 py-16 sm:py-20">
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
              RETRIEVAL AUGMENTED GENERATION
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
              A comprehensive guide to understanding and implementing
              Retrieval-Augmented Generation systems
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
              Search & Discovery
            </span>
            <span className="px-3 py-1.5 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded-full text-xs sm:text-sm font-medium">
              Enterprise Knowledge
            </span>
            <span className="px-3 py-1.5 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-xs sm:text-sm font-medium">
              AI Assistants
            </span>
          </motion.div>
        </div>

        {/* Key Components */}
        <div className="space-y-5">
          <motion.div
            className="text-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h2
              className="text-2xl font-bold text-gray-800 dark:text-white mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Key Components of RAG
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore the essential elements that make up modern RAG systems and
              their applications
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 mb-8"
          >
            <motion.h3
              className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              What you need to know
            </motion.h3>
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.p
                className="text-sm text-gray-700 dark:text-gray-200"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                }}
              >
                The concepts below are essential for RAG implementation. Use
                this as a reference guide for what you should plan to understand
                and learn. I've compiled these key areas to help structure your
                learning journey.
              </motion.p>
              <motion.p
                className="text-sm text-gray-700 dark:text-gray-200"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, delay: 0.1 },
                  },
                }}
              >
                While not required, experience with{" "}
                <span className="font-medium text-blue-700 dark:text-blue-300">
                  REST APIs
                </span>{" "}
                or cloud platforms like{" "}
                <span className="font-medium text-blue-700 dark:text-blue-300">
                  AWS/Azure
                </span>{" "}
                will be helpful. If you've worked with{" "}
                <span className="font-medium text-blue-700 dark:text-blue-300">
                  NLP frameworks
                </span>{" "}
                such as LangChain or LlamaIndex, or have experience with{" "}
                <span className="font-medium text-blue-700 dark:text-blue-300">
                  containerization
                </span>{" "}
                using Docker, you'll find it easier to implement the more
                advanced concepts covered here.
              </motion.p>
            </motion.div>
          </motion.div>

          <div className="space-y-4">
            {ragModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleModule(index)}
                  className={`w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none ${
                    expandedModule === index
                      ? "bg-gray-50 dark:bg-gray-700"
                      : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  } transition-colors`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      {module.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {module.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedModule === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedModule === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                        {module.overview && (
                          <p className="text-gray-600 dark:text-gray-300 mb-6">
                            {module.overview}
                          </p>
                        )}
                        <div className="space-y-6">
                          {module.topics.map((topic, i) => (
                            <div key={i} className="space-y-3">
                              <h4 className="font-medium text-gray-900 dark:text-white">
                                {topic.title}
                              </h4>
                              <ul className="space-y-2 pl-1">
                                {topic.content.map((item, j) => (
                                  <li key={j} className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-blue-500 flex items-center justify-center">
                                      <svg
                                        className="h-3 w-3"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </div>
                                    <span className="ml-2 text-gray-700 dark:text-gray-300 text-sm">
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

        {/* RAG Resources */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-6">RAG Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <a
              href="https://python.langchain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/10 hover:border-white/20"
            >
              <h3 className="font-semibold text-white">LangChain Docs</h3>
              <p className="text-sm text-white/80">Official documentation</p>
            </a>
            <a
              href="https://docs.llamaindex.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/10 hover:border-white/20"
            >
              <h3 className="font-semibold text-white">LlamaIndex</h3>
              <p className="text-sm text-white/80">Data framework for LLMs</p>
            </a>
            <a
              href="https://huggingface.co/docs/transformers/main/en/model_doc/rag#transformers.RagConfig"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/10 hover:border-white/20"
            >
              <h3 className="font-semibold text-white">Hugging Face</h3>
              <p className="text-sm text-white/80">RAG research & models</p>
            </a>
          </div>
        </div>

        {/* Additional Learning Resources */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-xl font-bold text-center text-gray-800 dark:text-white mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Additional Learning Resources
          </motion.h2>

          {/* Course Cards */}
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            {[
              {
                emoji: "🔗",
                title: "Complete Generative AI with Langchain & Huggingface",
                description:
                  "Master building AI applications with LangChain and Hugging Face",
                link: "https://www.udemy.com/course/complete-generative-ai-course-with-langchain-and-huggingface/?couponCode=CP251118G3",
              },
              {
                emoji: "🌐",
                title:
                  "Complete Agentic AI Bootcamp with LangGraph & LangChain",
                description:
                  "Build autonomous AI agents with the latest frameworks",
                link: "https://www.udemy.com/course/complete-agentic-ai-bootcamp-with-langgraph-and-langchain/?couponCode=CP251118G3",
              },
              {
                emoji: "🤖",
                title: "Ultimate RAG Bootcamp With Langchain And LangGraph",
                description:
                  "Advanced RAG implementation techniques and best practices",
                link: "https://www.udemy.com/course/ultimate-rag-bootcamp-using-langchainlanggraph-langsmith/?couponCode=CP251118G3",
              },
              {
                emoji: "🤖",
                title: "Agentic AI System with Microsoft Autogen",
                description:
                  "Create autonomous AI systems using Microsoft's Autogen framework",
                link: "https://www.udemy.com/course/building-ai-agents-agentic-ai-system-via-microsoft-autogen/?couponCode=CP251118G3",
              },
            ].map((course, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{course.emoji}</div>
                    <div>
                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-2 group-hover:underline">
                          {course.title}
                        </h3>
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {course.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RagPage;
