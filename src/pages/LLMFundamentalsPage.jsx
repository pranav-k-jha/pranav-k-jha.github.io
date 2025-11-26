import { motion } from "framer-motion";
import CourseModuleCard from "../components/courses/CourseModuleCard";

const LLMFundamentalsPage = () => {
  const courseModules = [
    {
      title: "Introduction to Large Language Models",
      duration: "2 weeks",
      description:
        "Understand the fundamentals of LLMs, their architecture, and how they process and generate human-like text.",
      topics: [
        "What are LLMs",
        "Transformer Architecture",
        "Tokenization",
        "Attention Mechanisms",
      ],
      prerequisites: "Basic understanding of machine learning concepts",
    },
    {
      title: "Working with Pre-trained Models",
      duration: "3 weeks",
      description:
        "Learn how to use and fine-tune pre-trained LLMs for various NLP tasks.",
      topics: [
        "Hugging Face Transformers",
        "Model Fine-tuning",
        "Prompt Engineering",
        "Model Evaluation",
      ],
    },
    {
      title: "Deployment and Scaling",
      duration: "2 weeks",
      description:
        "Techniques for deploying LLMs in production environments efficiently.",
      topics: [
        "Model Optimization",
        "Quantization",
        "Deployment Strategies",
        "Monitoring",
      ],
    },
    {
      title: "Ethics and Best Practices",
      duration: "1 week",
      description:
        "Understanding the ethical considerations and best practices when working with LLMs.",
      topics: ["Bias in AI", "Responsible AI", "Model Cards", "Documentation"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-purple-900/50 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            LLM Fundamentals
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Master the core concepts and practical applications of Large
            Language Models
          </p>
        </motion.div>

        {/* Course Overview */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Course Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            This course provides a comprehensive introduction to Large Language
            Models, covering everything from their fundamental architecture to
            practical implementation. You'll gain hands-on experience with
            state-of-the-art models and learn how to deploy them effectively.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 dark:text-blue-400">
                Duration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">8 Weeks</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-700 dark:text-purple-400">
                Level
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Beginner to Intermediate
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 dark:text-green-400">
                Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                3 Hands-on Projects
              </p>
            </div>
          </div>
        </motion.div>

        {/* Course Modules */}
        <div className="space-y-6">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Course Modules
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A structured learning path from LLM fundamentals to practical
              applications
            </p>
          </motion.div>

          <div className="space-y-6">
            {courseModules.map((module, index) => (
              <CourseModuleCard key={index} module={module} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLMFundamentalsPage;
