import React from "react";
import { motion } from "framer-motion";
import {
  llmTools,
  llmFineTuning,
  llmQuantization,
  llmOther,
} from "../components/courses/LLM Notebooks";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const NotebookCard = ({ notebook, index }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
    variants={item}
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.2 },
    }}
    initial="hidden"
    animate="show"
    custom={index}
  >
    <div className="flex items-center mb-4">
      <span className="text-2xl mr-3">{notebook.emoji || "📓"}</span>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {notebook.name}
      </h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      {notebook.description}
    </p>
    <div className="flex flex-wrap gap-3">
      {notebook.colab && (
        <a
          href={notebook.colab}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <span>Open in Colab</span>
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
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      )}
      {notebook.github && (
        <a
          href={notebook.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
        >
          <span>GitHub</span>
          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.377.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.842-2.339 4.687-4.566 4.935.36.309.681.919.681 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        </a>
      )}
      {notebook.article && (
        <a
          href={notebook.article}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          <span>Read Article</span>
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
      )}
    </div>
  </motion.div>
);

const NotebookSection = ({ title, notebooks }) => (
  <motion.section
    className="mb-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={sectionVariants}
  >
    <motion.h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b pb-2">
      {title}
    </motion.h2>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {notebooks.map((notebook, index) => (
        <NotebookCard key={index} notebook={notebook} index={index} />
      ))}
    </motion.div>
  </motion.section>
);

const LLMNotebooksPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/llm-course"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 transition-colors"
          >
            <FiArrowLeft className="mr-2" /> Back to LLM Course
          </Link>
        </motion.div>

        <motion.div
          className="space-y-16"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <div className="text-center my-12">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              LLM Notebooks Collection
            </motion.h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A curated collection of Jupyter notebooks for LLM development,
              fine-tuning, and deployment.
            </p>
          </div>
          <NotebookSection title="🛠️ Tools" notebooks={llmTools} />
          <NotebookSection title="🎯 Fine-tuning" notebooks={llmFineTuning} />
          <NotebookSection
            title="⚡ Quantization"
            notebooks={llmQuantization}
          />
          <NotebookSection title="📚 Other Resources" notebooks={llmOther} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LLMNotebooksPage;
