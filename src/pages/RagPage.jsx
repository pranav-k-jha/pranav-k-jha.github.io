import { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import {
  FiChevronDown,
  FiExternalLink,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiShield,
  FiCloud,
  FiGitBranch,
  FiFile,
  FiFileText,
} from "react-icons/fi";

const RagPage = () => {
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const modules = [
    {
      title: "Foundations of RAG",
      icon: <FiLayers className="w-6 h-6" />,
      description: "Essential RAG concepts you need to know",
      overview:
        "Master these fundamental RAG concepts before moving to advanced topics. This knowledge will help you build effective retrieval-augmented generation systems and understand how they enhance traditional language models.",
      topics: [
        {
          title: "Introduction to RAG",
          content: [
            "What is RAG and why it matters",
            "Limitations of pure LLMs",
            "RAG vs finetuning vs prompt engineering",
            "Real-world applications and use cases",
          ],
        },
        {
          title: "Core Components of RAG",
          content: [
            "Document ingestion and preprocessing",
            "Embedding models and vector representations",
            "Vector databases fundamentals",
            "Retrieval mechanisms",
            "Generation and response synthesis",
          ],
        },
        {
          title: "Setting Up Your Development Environment",
          content: [
            "Python environment setup",
            "Installing necessary libraries (LangChain, LlamaIndex, OpenAI, etc.)",
            "Vector database options (Pinecone, Weaviate, ChromaDB)",
            "Cost considerations and API management",
          ],
        },
      ],
    },
    {
      title: "LangChain for RAG",
      icon: <FiDatabase className="w-6 h-6" />,
      description: "Master LangChain for building RAG apps",
      overview:
        "Before building complex RAG applications, you need to understand these LangChain fundamentals. This section covers the essential tools and techniques for effective document processing and retrieval in LangChain-based RAG systems.",
      topics: [
        {
          title: "LangChain Fundamentals",
          content: [
            "Core components and modules in LangChain",
            "Efficient data ingestion with document loaders",
          ],
        },
        {
          title: "Text Processing",
          content: [
            "Recursive Character Text Splitter",
            "Character Text Splitter",
            "HTML Header Text Splitter",
            "Recursive JSON Splitter",
          ],
        },
        {
          title: "Embeddings",
          content: [
            "OpenAI Embedding integration",
            "Ollama Embeddings setup",
            "Huggingface Embeddings usage",
          ],
        },
        {
          title: "Vector Stores",
          content: [
            "FAISS for efficient similarity search",
            "ChromaDB for document retrieval",
          ],
        },
      ],
    },
    {
      title: "Traditional RAG Implementation",
      icon: <FiCpu className="w-6 h-6" />,
      description: "Build and evaluate RAG systems effectively",
      overview:
        "Learn to implement and optimize a complete RAG pipeline. This module covers everything from basic similarity search to building a production-ready Q&A system, with a strong focus on evaluation and optimization.",
      topics: [
        {
          title: "Basic RAG Pipeline",
          content: [
            "Basic similarity search implementation",
            "Building a simple Q&A system",
          ],
        },
        {
          title: "Prompt Engineering",
          content: [
            "Effective prompts for retrieval tasks",
            "Structuring retrieval results",
            "Response generation and formatting",
          ],
        },
        {
          title: "Evaluation and Testing",
          content: [
            "RAG evaluation metrics",
            "Building test datasets",
            "A/B testing configurations",
            "Performance optimization techniques",
          ],
        },
      ],
    },

    {
      title: "Document Parsers for RAG",
      icon: <FiFileText className="w-6 h-6" />,
      description: "Master document parsing for RAG systems",
      overview:
        "Learn to use advanced document parsing tools that handle various file formats and structures. These tools are essential for preparing high-quality input for your RAG pipeline.",
      topics: [
        {
          title: "Document Parsers",
          content: [
            "Doclens for document analysis",
            "LLama Parse for complex formats",
            "Unstructured for versatile parsing",
            "Vectorize for optimized embeddings",
          ],
        },
      ],
    },
    {
      title: "More Coming Soon",
      icon: <FiGitBranch className="w-6 h-6" />,
      description: "Additional modules in development",
      overview:
        "I'm actively working on more content to help you master RAG technology. Check back soon for new modules on advanced topics and implementations.",
      topics: [
        {
          title: "In Development",
          content: [
            "Advanced retrieval techniques",
            "Production deployment strategies",
            "Specialized RAG applications",
            "And much more...",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
              RAG TECHNOLOGY GUIDE
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
              A comprehensive guide to understanding and implementing
              Retrieval-Augmented Generation systems
            </h2>
          </motion.div>

          {/* Application Areas */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm font-medium">
              Search & Discovery
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded-full text-sm font-medium">
              Enterprise Knowledge
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm font-medium">
              AI Assistants
            </span>
          </motion.div>
        </div>

        {/* Key Components */}
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Key Components of RAG
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Explore the essential elements that make up modern RAG systems and
              their applications
            </p>
          </div>

          <div className="space-y-4">
            {modules.map((module, index) => (
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

        {/* Additional Resources */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Explore More About RAG</h2>
          <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
            Dive deeper into the world of Retrieval-Augmented Generation with
            these additional resources and practical implementations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#implementation"
              className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Coming Soon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RagPage;
