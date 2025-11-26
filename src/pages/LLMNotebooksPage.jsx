import React from "react";
import { motion } from "framer-motion";
import {
  llmTools,
  llmFineTuning,
  llmQuantization,
  llmOther,
} from "../components/courses/LLM Notebooks";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const NotebookCard = ({ notebook }) => (
  <motion.a
    href={notebook.colab || notebook.github || notebook.article || "#"}
    target="_blank"
    rel="noopener noreferrer"
    variants={item}
    whileHover={{ y: -8, scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="group relative block p-1 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 
               backdrop-blur-sm transition-all duration-500 hover:from-blue-500/40 hover:via-purple-500/40 hover:to-pink-500/40"
  >
    {/* Glassmorphic Card */}
    <div
      className="relative h-full bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl p-7 border border-white/20 dark:border-gray-700/50 
                    shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:border-white/40"
    >
      {/* Gradient Orb Effect on Hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 
                      bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 pointer-events-none"
      />

      <div className="relative z-10">
        {/* Emoji + Title */}
        <div className="flex items-center gap-4 mb-5">
          <motion.span
            whileHover={{
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 },
            }}
            className="text-4xl drop-shadow-md"
          >
            {notebook.emoji || "Notebook"}
          </motion.span>
          <h3
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 
                         bg-clip-text text-transparent"
          >
            {notebook.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6 line-clamp-3">
          {notebook.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {notebook.colab && (
            <div
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-medium 
                            shadow-lg hover:shadow-orange-500/50 transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.89 3.85l-7.1 12.3a1.5 1.5 0 002.42 1.8l7.1-12.3a1.5 1.5 0 00-2.42-1.8z" />
                <path d="M3.5 8.5a1.5 1.5 0 100 3h4a1.5 1.5 0 000-3h-4zM16.5 12.5a1.5 1.5 0 100 3h4a1.5 1.5 0 000-3h-4z" />
              </svg>
              <span>Open in Colab</span>
            </div>
          )}

          {notebook.github && (
            <div
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl font-medium 
                            shadow-lg hover:shadow-gray-700/50 transition-all hover:scale-105"
            >
              <FiGithub className="w-5 h-5" />
              <span>GitHub</span>
            </div>
          )}

          {notebook.article && (
            <div
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium 
                            shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
            >
              <FiExternalLink className="w-5 h-5" />
              <span>Read Article</span>
            </div>
          )}
        </div>

        {/* Badge if no links */}
        {!notebook.colab && !notebook.github && !notebook.article && (
          <span className="inline-block px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
            Coming Soon
          </span>
        )}
      </div>
    </div>
  </motion.a>
);

const NotebookSection = ({ title, notebooks, emoji }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={sectionVariants}
    className="relative"
  >
    {/* Section Title with Gradient Line */}
    <div className="flex items-center gap-4 mb-10">
      <span className="text-4xl">{emoji}</span>
      <h2 className="text-4xl md:text-5xl font-bold">
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <div className="flex-1 h-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full"></div>
    </div>

    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      {notebooks.map((notebook, i) => (
        <NotebookCard key={i} notebook={notebook} />
      ))}
    </motion.div>
  </motion.section>
);

const LLMNotebooksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20">
      <div className="relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              to="/llm-course"
              className="inline-flex items-center gap-3 text-lg font-medium text-blue-600 dark:text-blue-400 
                         hover:text-blue-800 dark:hover:text-blue-300 transition-colors group"
            >
              <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full group-hover:scale-110 transition-transform">
                <FiArrowLeft className="w-5 h-5" />
              </div>
              Back to LLM Course
            </Link>
          </motion.div>

          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                               dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent 
                               animate-gradient-x"
              >
                LLM Notebooks
              </span>
              <br />
              <span className="text-4xl md:text-6xl text-gray-700 dark:text-gray-300">
                Collection
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Hands-on Jupyter notebooks for{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                fine-tuning
              </span>
              ,{" "}
              <span className="font-bold text-purple-600 dark:text-purple-400">
                quantization
              </span>
              , and{" "}
              <span className="font-bold text-pink-600 dark:text-pink-400">
                deploying
              </span>{" "}
              LLMs — all free and open-source.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-32">
            <NotebookSection
              title="Tools & Frameworks"
              notebooks={llmTools}
              emoji="Tools"
            />
            <NotebookSection
              title="Fine-Tuning"
              notebooks={llmFineTuning}
              emoji="Target"
            />
            <NotebookSection
              title="Quantization & Optimization"
              notebooks={llmQuantization}
              emoji="Lightning"
            />
            <NotebookSection
              title="Advanced & Research"
              notebooks={llmOther}
              emoji="Books"
            />
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-32 pb-20"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Built with ❤️ for the open-source AI community
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LLMNotebooksPage;
