import { motion } from "framer-motion";
import CourseModuleCard from "../components/courses/CourseModuleCard";

const LLMScientistPage = () => {
  const courseModules = [
    {
      title: "Advanced Model Architectures",
      duration: "3 weeks",
      description:
        "Dive deep into advanced LLM architectures and their mathematical foundations.",
      topics: [
        "Transformer Variations",
        "Attention Mechanisms",
        "Efficient Transformers",
        "Mixture of Experts",
      ],
      prerequisites: "Strong background in ML and deep learning",
    },
    {
      title: "Pre-training and Fine-tuning",
      duration: "4 weeks",
      description:
        "Master the art of pre-training and fine-tuning LLMs for specific domains.",
      topics: [
        "Pre-training Objectives",
        "Domain Adaptation",
        "Instruction Tuning",
        "Parameter-Efficient Fine-tuning",
      ],
    },
    {
      title: "RLHF and Alignment",
      duration: "3 weeks",
      description:
        "Learn Reinforcement Learning from Human Feedback and model alignment techniques.",
      topics: ["Reward Modeling", "PPO", "Constitutional AI", "Alignment Tax"],
    },
    {
      title: "Evaluation and Analysis",
      duration: "2 weeks",
      description:
        "Comprehensive methods for evaluating and analyzing LLM performance.",
      topics: [
        "Benchmarking",
        "Bias Evaluation",
        "Interpretability",
        "Failure Modes",
      ],
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
            LLM Scientist
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced techniques and research in Large Language Models for AI
            researchers
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
            Designed for AI researchers and practitioners, this course dives
            deep into the cutting-edge techniques and research in Large Language
            Models. You'll explore advanced architectures, training
            methodologies, and evaluation techniques used by leading AI labs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 dark:text-blue-400">
                Duration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">12 Weeks</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-700 dark:text-purple-400">
                Level
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Advanced</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 dark:text-green-400">
                Research
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Original Research Project
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
              Research Tracks
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Advanced modules covering the latest research in LLM development
              and analysis
            </p>
          </motion.div>

          <div className="space-y-6">
            {courseModules.map((module, index) => (
              <CourseModuleCard key={index} module={module} index={index} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Advance LLM Research?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our research-focused program and contribute to the next
            generation of language models.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Apply Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LLMScientistPage;
