import { motion } from "framer-motion";
import CourseModuleCard from "../components/courses/CourseModuleCard";

const LLMEngineerPage = () => {
  const courseModules = [
    {
      title: "LLM Infrastructure",
      duration: "3 weeks",
      description:
        "Build and manage scalable infrastructure for training and serving LLMs.",
      topics: [
        "Distributed Training",
        "Model Parallelism",
        "Kubernetes",
        "MLOps Pipelines",
      ],
      prerequisites: "Experience with cloud platforms and containerization",
    },
    {
      title: "Model Optimization",
      duration: "3 weeks",
      description: "Techniques for optimizing LLM performance and efficiency.",
      topics: [
        "Quantization",
        "Pruning",
        "Knowledge Distillation",
        "Model Compression",
      ],
    },
    {
      title: "Production Deployment",
      duration: "4 weeks",
      description:
        "Deploying LLMs in production environments with high availability.",
      topics: ["Model Serving", "Load Balancing", "Monitoring", "A/B Testing"],
    },
    {
      title: "Security and Compliance",
      duration: "2 weeks",
      description: "Ensuring security and compliance in LLM applications.",
      topics: [
        "Data Privacy",
        "Model Security",
        "Compliance Standards",
        "Ethical AI",
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
            LLM Engineer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Build and deploy production-grade LLM applications at scale
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
            This intensive program focuses on the engineering challenges of
            building and deploying Large Language Models in production. You'll
            learn how to optimize, scale, and maintain LLM applications with
            industry best practices.
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
              <p className="text-gray-600 dark:text-gray-300">
                Intermediate to Advanced
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 dark:text-green-400">
                Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                4 Production Projects
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
              Engineering Tracks
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive modules covering the full LLM engineering lifecycle
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
            Ready to Build Production-Grade LLM Systems?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our engineering program and gain the skills to deploy LLMs at
            scale.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
            Start Building
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LLMEngineerPage;
