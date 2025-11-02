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
      className="py-20  bg-gray-50 dark:bg-gray-900 overflow-x-hidden"
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
            I am a Solutions Architect with a focus on AI and machine learning
            technologies. I have experience in designing and implementing AI
            solutions for research and enterprise applications.
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
              <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-4">
                🧩 AI Solutions Architect
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Designing Scalable AI Systems — From Idea to Deployment
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Specializing in <span className="font-medium">LLMs</span>,{" "}
                <span className="font-medium">RAG</span>, and{" "}
                <span className="font-medium">Intelligent Automation</span> for
                research and enterprise applications. Passionate about
                transforming data into actionable intelligence through robust,
                production-grade AI architectures.
              </p>
            </div>

            {/* Core Areas & Research Interests */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 flex items-center">
                  <span className="mr-2">💡</span> Core Areas:
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  AI-Driven Automation • Optimized Data Workflows • CI/CD &
                  MLOps • Real-Time Analytics • Modular AI Infrastructure
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 flex items-center">
                  <span className="mr-2">🧩</span> Research Interests:
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  NLP & Generative AI • RAG Systems • LangChain & Open-Source
                  LLMs • Fine-Tuning (LoRA, QLoRA) • LLMOps & Model Deployment
                </p>
              </div>
            </div>

            {/* GitHub Stats */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                📊 GitHub Stats
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=pranav-k-jha&theme=default"
                  alt="GitHub Streak"
                  className="w-full h-auto rounded-lg max-w-full"
                  loading="lazy"
                />
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=pranav-k-jha&layout=compact&theme=default"
                  alt="Top Languages"
                  className="w-full h-auto rounded-lg max-w-full"
                  loading="lazy"
                />
              </div>

              {/* Contributions Calendar */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Contributions
                </h4>
                <img
                  src="https://ghchart.rshah.org/pranav-k-jha"
                  alt="GitHub Contributions"
                  className="w-full h-auto rounded-lg max-w-full"
                  loading="lazy"
                />
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
                <p>
                  🧠 Building scalable AI Solutions integrating LLMs, RAG
                  pipelines, and multi-agent systems for enterprise automation
                  and research.
                </p>
                <p>
                  🔍 Exploring LLMOps, vector databases, knowledge graph
                  integration, and prompt engineering for domain-adapted
                  intelligence.
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

            <p className="text-gray-600 dark:text-gray-300 text-sm">
              I design AI systems with a focus on practical impact and
              real-world scalability. From prototyping innovative models to
              deploying production-grade solutions, I build intelligent
              applications that solve complex challenges efficiently.
            </p>

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
