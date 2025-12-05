import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  llmTools,
  llmFineTuning,
  llmQuantization,
  llmOther,
} from "../components/courses/LLM Notebooks";

import {
  FiExternalLink,
  FiGithub,
  FiArrowLeft,
  FiBookOpen,
} from "react-icons/fi";
import { courseAttribution } from "../data/llmCourseModules";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const NotebookCard = React.memo(({ notebook }) => {
  const hasLink = notebook.colab || notebook.github || notebook.article;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <a
        href={notebook.colab || notebook.github || notebook.article || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={`block p-1 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 
                   transition-all duration-300 ${
                     hasLink
                       ? "cursor-pointer hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20"
                       : "cursor-default opacity-75"
                   }`}
        onClick={(e) => !hasLink && e.preventDefault()}
      >
        <div
          className="h-full flex flex-col bg-white dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50 
                        shadow-lg transition-shadow group-hover:shadow-xl"
        >
          <div className="flex items-start gap-4 min-h-[3rem]">
            <span className="text-lg flex-shrink-0">
              {notebook.emoji || "📓"}
            </span>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {notebook.name}
            </h3>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5 line-clamp-3 flex-grow">
            {notebook.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-auto">
            {notebook.colab && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-sm font-medium rounded-lg">
                <FiBookOpen className="w-4 h-4" />
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.89 3.85l-7.1 12.3a1.5 1.5 0 002.42 1.8l7.1-12.3a1.5 1.5 0 00-2.42-1.8z" />
                </svg>
                Open in Colab
              </span>
            )}
            {notebook.github && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 text-white hover:text-white text-sm font-medium rounded-lg transition-colors">
                <FiGithub className="w-4 h-4" />
                GitHub
              </span>
            )}
            {notebook.article && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-lg">
                <FiExternalLink className="w-4 h-4" />
                Article
              </span>
            )}
            {!hasLink && (
              <span className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-500 text-xs rounded-lg">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </a>
    </motion.div>
  );
});

NotebookCard.displayName = "NotebookCard";

const NotebookSection = React.memo(({ title, notebooks, emoji }) => {
  return (
    <section className="scroll-mt-20 pt-8 pb-20">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-2xl">{emoji}</span>
        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {notebooks.map((notebook, i) => (
          <NotebookCard key={i} notebook={notebook} />
        ))}
      </motion.div>
    </section>
  );
});

const LLMNotebooksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container max-w-7xl mt-10 mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Header with Animation */}
        <div className="relative mb-20">
          <div className="space-y-3 sm:space-y-4">
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
                LLM NOTEBOOKS
              </span>
            </motion.h1>

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
                Hands-on, production-ready notebooks for training, optimizing,
                and deploying LLMs
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Attribution Section */}
        <motion.div
          className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.p
              className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="font-medium">Note:</span> These notebooks are
              based on the work of{" "}
              <a
                href="https://www.linkedin.com/in/maxime-labonne/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {courseAttribution.author}
              </a>
              . The notebooks are available under the{" "}
              <a
                href="https://github.com/mlabonne/llm-course/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {courseAttribution.license}
              </a>{" "}
              and provide hands-on examples for working with LLMs.
            </motion.p>

            <motion.div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-5">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={courseAttribution.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-4 py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md text-white 
                 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:text-white
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition shadow-md hover:shadow-lg"
              >
                <FiGithub className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                View Notebooks on GitHub
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
            </motion.div>
          </div>
        </motion.div>
        {/* Sections */}
        <div className="space-y-8">
          <NotebookSection title="LLM Tools" notebooks={llmTools} emoji="🔧" />
          <NotebookSection
            title="Fine-Tuning"
            notebooks={llmFineTuning}
            emoji="🎯"
          />
          <NotebookSection
            title="Quantization"
            notebooks={llmQuantization}
            emoji="⚡"
          />
          <NotebookSection
            title="Advanced Topics"
            notebooks={llmOther}
            emoji="📚"
          />
        </div>
      </div>
    </div>
  );
};

export default LLMNotebooksPage;
