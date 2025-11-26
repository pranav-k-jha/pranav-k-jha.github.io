import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import {
  llmTools,
  llmFineTuning,
  llmQuantization,
  llmOther,
} from "../components/courses/LLM Notebooks";

import { FiExternalLink, FiGithub } from "react-icons/fi";

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
          <div className="flex items-start gap-4 mb-4 min-h-[4rem]">
            <span className="text-4xl flex-shrink-0">
              {notebook.emoji || "📓"}
            </span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {notebook.name}
            </h3>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5 line-clamp-3 flex-grow">
            {notebook.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-auto">
            {notebook.colab && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-sm font-medium rounded-lg">
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
        <span className="text-4xl">{emoji}</span>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 mt-20">
        {/* Back Button */}
        <Link
          to="/llm-course"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back to LLM Course
        </Link>
        {/* Header with Animation */}
        <div className="relative mb-20">
          <div className="space-y-4">
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
              <h2 className="text-lg sm:text-xl font-light text-gray-600 dark:text-gray-400">
                Hands-on, production-ready notebooks for training, optimizing,
                and deploying LLMs
              </h2>
            </motion.div>
          </div>
        </div>

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
