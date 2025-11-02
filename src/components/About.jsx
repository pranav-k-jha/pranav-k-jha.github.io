import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  const buttonGradient =
    theme === "dark"
      ? "from-blue-700 to-cyan-600 hover:shadow-blue-900/50"
      : "from-blue-600 to-cyan-500 hover:shadow-blue-500/30";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-purple-900/50 overflow-x-hidden"
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

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Intro Text */}
            <div>
              <h2 className="text-xl text-gray-800 dark:text-gray-200 mb-4">
                🧩 AI Solutions Architect
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Specializing in <span className="font-medium">LLMs</span>,{" "}
                <span className="font-medium">RAG</span>, and{" "}
                <span className="font-medium">Intelligent Automation</span>.
                Transforming data into actionable intelligence through
                production-grade AI architectures.
              </p>
            </div>

            {/* Core Areas & Research Interests */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 flex items-center">
                  <span className="mr-2">💡</span> Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  AI/ML System Design • LLM Applications • MLOps/LLMOps • Cloud
                  Architecture • Data Pipelines • Intelligent Automation
                </p>
              </div>
            </div>

            {/* GitHub Stats */}
            <div className="space-y-4">
              <h2 className="text-xl text-gray-800 dark:text-gray-200 mb-4">
                📊 GitHub Stats
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=pranav-k-jha&theme=${
                    theme === "dark" ? "dark" : "default"
                  }`}
                  alt="GitHub Streak"
                  className="w-full h-auto rounded-lg max-w-full bg-white dark:bg-gray-800 p-2"
                  loading="lazy"
                />
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=pranav-k-jha&layout=compact&theme=${
                    theme === "dark" ? "dark" : "default"
                  }`}
                  alt="Top Languages"
                  className="w-full h-auto rounded-lg max-w-full bg-white dark:bg-gray-800 p-2"
                  loading="lazy"
                />
              </div>

              {/* Contributions Calendar */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Contributions
                </h4>
                <div className="bg-white dark:bg-gray-800 p-2 rounded-lg">
                  <img
                    src={`https://ghchart.rshah.org/pranav-k-jha${
                      theme === "dark" ? "?color=2d3748" : ""
                    }`}
                    alt="GitHub Contributions"
                    className="w-full h-auto rounded-lg max-w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Current Focus */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="mr-2">🤖</span> Current Focus
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                <p className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  <span>
                    Building scalable AI solutions with LLMs, RAG, and
                    multi-agent systems for enterprise automation.
                  </span>
                </p>
                <p className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                  <span>
                    Exploring LLMOps, vector databases, and knowledge graphs for
                    domain-specific intelligence.
                  </span>
                </p>
              </div>
            </div>

            {/* Technical Expertise */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Technical Expertise
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                {[
                  "Large Language Models (LLMs)",
                  "Retrieval-Augmented Generation (RAG)",
                  "AI/ML System Design",
                  "MLOps & LLMOps",
                  "Cloud Architecture",
                  "Data Pipelines",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className={`
                  px-6 py-3 rounded-lg font-medium 
                  transition-all duration-300 
                  inline-flex items-center group
                  bg-gradient-to-r ${buttonGradient}
                  text-white hover:text-gray-100 
                  transform hover:-translate-y-0.5 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                  shadow-md hover:shadow-lg
                `}
              >
                Contact Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
