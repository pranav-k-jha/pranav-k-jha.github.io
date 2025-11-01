import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaBrain, FaSearch, FaRobot } from "react-icons/fa";

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="space-y-4">
                  <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-4">
                    🧩 AI Solutions Architect
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                    Designing Scalable AI Systems — From Idea to Deployment
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Specializing in{" "}
                    <span className="font-medium">
                      Large Language Models (LLMs)
                    </span>
                    ,{" "}
                    <span className="font-medium">
                      Retrieval-Augmented Generation (RAG)
                    </span>
                    , and{" "}
                    <span className="font-medium">Intelligent Automation</span>{" "}
                    for research and enterprise applications. Passionate about
                    transforming data into actionable intelligence through
                    robust, production-grade AI architectures.
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 flex items-center">
                      <span className="mr-2">💡</span> Core Areas:
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      AI-Driven Automation • Optimized Data Workflows • CI/CD &
                      MLOps • Real-Time Analytics • Modular AI Infrastructure
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 flex items-center">
                      <span className="mr-2">🧩</span> Research Interests:
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      NLP & Generative AI • RAG Systems • LangChain &
                      Open-Source LLMs • Fine-Tuning (LoRA, QLoRA) • LLMOps &
                      Model Deployment • Transformer Architectures
                    </p>
                  </div>
                </div>

                {/* GitHub Stats in Left Column */}
                <div className="mt-8 space-y-6">
                  <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-4">
                    📊 GitHub Stats
                  </h2>

                  {/* GitHub Streak and Top Languages in one row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* GitHub Streak */}
                    <div className="bg-transparent dark:bg-transparent p-0">
                      <img
                        src="https://github-readme-streak-stats.herokuapp.com/?user=pranav-k-jha&theme=default"
                        alt="GitHub Streak"
                        className="w-full h-auto rounded-lg"
                        loading="lazy"
                      />
                    </div>

                    {/* Top Languages */}
                    <div className="bg-transparent dark:bg-transparent p-0">
                      <img
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=pranav-k-jha&layout=compact&theme=default"
                        alt="Top Languages"
                        className="w-full h-auto rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* GitHub Activity Card - Moved to first column of next row */}
                  <div className="grid grid-cols-1 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                        GitHub Activity
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                            4.6k+
                          </div>
                          <div className="text-gray-600 dark:text-gray-300">
                            Contributions
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                            50+
                          </div>
                          <div className="text-gray-600 dark:text-gray-300">
                            Repositories
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* GitHub Contributions Calendar */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                      Contributions
                    </h4>
                    <img
                      src="https://ghchart.rshah.org/pranav-k-jha"
                      alt="GitHub Contributions"
                      className="w-full mx-auto rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="mr-2">🤖</span> Current Focus
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">🧠</span>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-white">
                          In Progress
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Building scalable AI Solutions integrating LLMs, RAG
                          pipelines, and multi-agent systems for enterprise
                          automation and research applications.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">🔍</span>
                      <div>
                        <h4 className="font-medium text-gray-800 dark:text-white">
                          Exploring
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          LLMOps, vector databases, knowledge graph integration,
                          and prompt engineering for domain-adapted
                          intelligence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    Technical Expertise
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Large Language Models (LLMs)",
                      "Retrieval-Augmented Generation (RAG)",
                      "AI/ML System Design",
                      "MLOps & LLMOps",
                      "Cloud Architecture",
                      "Data Pipelines",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  I design AI systems with a focus on practical impact and
                  real-world scalability. From prototyping innovative models to
                  deploying production-grade solutions, I build intelligent
                  applications that solve complex challenges efficiently.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  My work blends research-driven insights with hands-on
                  engineering, ensuring AI not only performs but also delivers
                  measurable value across industries.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  With expertise in machine learning, deep learning, and
                  AI-driven automation, I develop models and architectures that
                  bridge the gap between innovation and real-world application.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className={`px-6 py-3 text-white rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center bg-gradient-to-r ${buttonGradient} hover:shadow-lg`}
                  >
                    Contact Me
                  </a>
                  <a
                    href="#projects"
                    className="px-6 py-3 text-blue-600 dark:text-blue-400 font-medium rounded-lg border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    View My Work
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            {/* LLM Development Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800 border hover:border-l-blue-500 dark:border-gray-700"
            >
              <div className="text-blue-500 text-4xl mb-4">
                <FaBrain className="inline-block" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                LLM & Fine-tuning
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Custom LLM development and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Domain-specific model fine-tuning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Instruction tuning for specific tasks</span>
                </li>
              </ul>
            </motion.div>

            {/* RAG Systems Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800 border hover:border-l-blue-500 dark:border-gray-700"
            >
              <div className="text-blue-500 text-4xl mb-4">
                <FaSearch className="inline-block" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                RAG Systems
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Vector database integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Context-aware retrieval systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Hybrid search implementations</span>
                </li>
              </ul>
            </motion.div>

            {/* Agentic AI & GenAI Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800 border hover:border-l-blue-500 dark:border-gray-700"
            >
              <div className="text-blue-500 text-4xl mb-4">
                <FaRobot className="inline-block" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                AI Solutions
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Autonomous agent development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>End-to-end GenAI applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Multi-agent systems</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
