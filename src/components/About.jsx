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
  BookOpen,
  FileText,
  Briefcase,
  Clock,
} from "lucide-react";

// Compact BentoCard component
const BentoCard = ({ Icon, title, children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden rounded-xl p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow ${className}`}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      {Icon && (
        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-3">
          <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
      )}
      {title && (
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
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
      className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light tracking-tight mb-3 text-gray-900 dark:text-white">
            About <span className="font-bold">Me</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-sm">
            I design and implement AI solutions that bridge the gap between
            research and enterprise applications, with a focus on practical,
            scalable implementations.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {/* Main Introduction - Spans 2 columns */}
          <BentoCard
            Icon={Brain}
            title="AI Solutions Architect"
            className="lg:col-span-2 lg:row-span-2"
            delay={0.1}
          >
            <p className="text-gray-800 dark:text-gray-100 text-sm leading-relaxed mb-4 font-medium">
              Specializing in{" "}
              <span className="font-semibold text-blue-700 dark:text-blue-400">
                LLMs
              </span>
              ,{" "}
              <span className="font-semibold text-blue-700 dark:text-blue-400">
                RAG
              </span>
              , and{" "}
              <span className="font-semibold text-blue-700 dark:text-blue-400">
                Intelligent Automation
              </span>
              . Transforming data into actionable intelligence through
              production-grade AI architectures.
            </p>

            {/* Current Focus - Compact */}
            <div className="p-4 bg-blue-50/80 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/50 mt-4 shadow-sm">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Target className="w-4 h-4 mr-2 text-blue-700 dark:text-blue-400" />
                Current Focus
              </h4>
              <div className="space-y-3 text-sm">
                <p className="flex items-start">
                  <span className="inline-block w-2.5 h-2.5 bg-blue-600 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-900 dark:text-gray-100">
                    Building scalable AI solutions with LLMs, RAG, and
                    multi-agent systems
                  </span>
                </p>
                <p className="flex items-start">
                  <span className="inline-block w-2.5 h-2.5 bg-blue-600 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-900 dark:text-gray-100">
                    Exploring LLMOps, vector databases, and knowledge graphs
                    after current focus
                  </span>
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Key Metrics Card */}
          <BentoCard
            Icon={Activity}
            title="Content & Contributions"
            className="lg:col-start-3 lg:row-start-1"
            delay={0.1}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <BookOpen className="w-3.5 h-3.5 text-blue-500 mr-1.5" />
                  Blog Posts
                </div>
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  4
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <FileText className="w-3.5 h-3.5 text-blue-500 mr-1.5" />
                  Resources
                </div>
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  12+
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Briefcase className="w-3.5 h-3.5 text-blue-500 mr-1.5" />
                  Publications
                </div>
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  8+
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Clock className="w-3.5 h-3.5 text-blue-500 mr-1.5" />
                  Experience
                </div>
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  5+ yrs
                </span>
              </div>
            </div>
          </BentoCard>

          {/* Tools & Frameworks */}
          <BentoCard
            Icon={Sparkles}
            title="Tools & Frameworks"
            className="lg:row-span-1"
            delay={0.3}
          >
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              {[
                "Python, PyTorch, TensorFlow",
                "Docker, Kubernetes",
                "AWS, GCP, Azure",
                "LangChain, LlamaIndex",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="dark:text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </BentoCard>

          {/* Technical Expertise */}
          <BentoCard
            Icon={Code2}
            title="Technical Expertise"
            className="lg:row-span-2"
            delay={0.4}
          >
            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              {[
                "Large Language Models (LLMs)",
                "Retrieval-Augmented Generation (RAG)",
                "AI/ML System Design",
                "MLOps & LLMOps",
                "Cloud Architecture",
                "Data Pipelines & ETL",
                "Natural Language Processing (NLP)",
                "Reinforcement Learning",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="dark:text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </BentoCard>

          {/* GitHub Stats - Spans 2 columns */}
          <BentoCard
            Icon={Github}
            title="GitHub Stats"
            className="lg:col-span-2 lg:row-span-2"
            delay={0.5}
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
          {/* <BentoCard
            Icon={Github}
            title="GitHub Activity Graph"
            delay={0.6}
            className="lg:col-span-3 w-full"
          >
            <div className="w-full bg-gray-50 dark:bg-gray-900/50 p-4 rounded-xl">
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=pranav-k-jha&theme=react-dark&hide_border=true&area=true"
                alt="GitHub Activity Graph"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </BentoCard> */}
        </div>
      </div>
    </section>
  );
};

export default About;
