import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Database, Globe, Terminal } from "lucide-react";

// Optimized animation variants using best practices
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// AI Domains data
const aiDomains = [
  {
    icon: Brain,
    title: "LLM Fine-Tuning",
    description:
      "Parameter-efficient fine-tuning using LoRA, QLoRA, and adapter techniques for specialized AI models.",
    href: "#llm-finetuning",
  },
  {
    icon: Database,
    title: "Vector Databases",
    description:
      "High-performance vector storage and retrieval systems for RAG and semantic search.",
    href: "#vector-databases",
  },
  {
    icon: Globe,
    title: "AI Infrastructure",
    description:
      "Scalable cloud and edge deployment of large language models and AI systems.",
    href: "#ai-infrastructure",
  },
  {
    icon: Terminal,
    title: "Model Optimization",
    description:
      "Quantization, pruning, and distillation techniques for production-ready AI models.",
    href: "#model-optimization",
  },
];

const AIDomains = () => {
  return (
    <section
      id="ai-domains"
      className="w-full bg-transparent dark:bg-gray-900 overflow-x-hidden py-16 sm:py-20"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight mb-3 text-gray-900 dark:text-white">
            AI <span className="font-bold">Domains</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Specialized expertise in large language models, AI infrastructure,
            and cutting-edge machine learning technologies.
          </p>
        </motion.div>

        {/* Services grid with optimized staggered animations */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {aiDomains.map((domain) => (
            <motion.div
              key={domain.title}
              variants={item}
              whileHover={{
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
              whileTap={{ scale: 0.98 }}
              className="h-full bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-colors duration-300 ease-in-out"
            >
              {/* Service icon */}
              <motion.div
                className="mb-3 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <domain.icon className="w-5 h-5 text-blue-600 dark:text-blue-300" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-1.5 sm:mb-2 tracking-tight text-gray-900 dark:text-white">
                {domain.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400 text-xs sm:text-sm">
                {domain.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AIDomains;
