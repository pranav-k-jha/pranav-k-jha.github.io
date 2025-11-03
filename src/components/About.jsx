import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  Brain,
  Code2,
  Sparkles,
  Github,
  Target,
  TrendingUp,
  Activity,
} from "lucide-react";

// BentoCard component
const BentoCard = ({ Icon, title, children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative overflow-hidden rounded-2xl p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow ${className}`}
      whileHover={{ y: -4 }}
    >
      {Icon && (
        <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
      )}
      {title && (
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          {title}
        </h3>
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-purple-900/50"
    >
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light tracking-tight mb-4 text-gray-900 dark:text-white">
            About <span className="font-bold">Me</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            I design and implement AI solutions that bridge the gap between
            research and enterprise applications, with a focus on practical,
            scalable implementations.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {/* Key Metrics Card */}
          <BentoCard
            Icon={Activity}
            title="Content & Contributions"
            className="lg:col-start-3 lg:row-start-1"
            delay={0.1}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Blog Posts
                  </span>
                </div>
                <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  4
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Resources
                  </span>
                </div>
                <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  12+
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Publications
                  </span>
                </div>
                <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  8+
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Years Experience
                  </span>
                </div>
                <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  5+
                </span>
              </div>
            </div>
          </BentoCard>

          {/* Main Introduction - Spans 2 columns */}
          <BentoCard
            Icon={Brain}
            title="AI Solutions Architect"
            className="lg:col-span-2 lg:row-span-2"
            delay={0.2}
          >
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Specializing in{" "}
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  LLMs
                </span>
                ,{" "}
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  RAG
                </span>
                , and{" "}
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  Intelligent Automation
                </span>
                . Transforming data into actionable intelligence through
                production-grade AI architectures.
              </p>

              {/* Current Focus */}
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                  Current Focus
                </h4>
                <div className="space-y-3">
                  <p className="flex items-start text-gray-800 dark:text-gray-200 text-sm">
                    <span className="inline-block w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    Building scalable AI solutions with LLMs, RAG, and
                    multi-agent systems for enterprise automation.
                  </p>
                  <p className="flex items-start text-gray-800 dark:text-gray-200 text-sm">
                    <span className="inline-block w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    Exploring LLMOps, vector databases, and knowledge graphs for
                    domain-specific intelligence.
                  </p>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Tools & Frameworks Card */}
          <BentoCard
            Icon={Sparkles}
            title="Tools & Frameworks"
            className="lg:row-span-1"
            delay={0.3}
          >
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              {[
                "Python, PyTorch, TensorFlow",
                "Docker, Kubernetes",
                "AWS, GCP, Azure",
                "LangChain, LlamaIndex",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </BentoCard>

          {/* Technical Skills */}
          <BentoCard
            Icon={Code2}
            title="Technical Expertise"
            className="lg:row-span-2"
            delay={0.4}
          >
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                  AI/ML Technologies
                </h4>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                  {[
                    "Large Language Models (LLMs)",
                    "Retrieval-Augmented Generation (RAG)",
                    "Computer Vision",
                    "Reinforcement Learning",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </BentoCard>

          {/* GitHub Stats - Spans 2 columns */}
          <BentoCard
            Icon={Github}
            title="GitHub Stats"
            className="lg:col-span-2 lg:row-span-2"
            delay={0.4}
          >
            <div className="space-y-4">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl">
                  <img
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=pranav-k-jha&theme=${
                      theme === "dark" ? "dark" : "default"
                    }`}
                    alt="GitHub Streak"
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl">
                  <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=pranav-k-jha&layout=compact&theme=${
                      theme === "dark" ? "dark" : "default"
                    }`}
                    alt="Top Languages"
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Contributions Calendar */}
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl">
                <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                  Contributions
                </h4>
                <img
                  src={`https://ghchart.rshah.org/pranav-k-jha${
                    theme === "dark" ? "?color=2d3748" : ""
                  }`}
                  alt="GitHub Contributions"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default About;
