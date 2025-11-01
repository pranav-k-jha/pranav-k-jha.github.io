import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Database, Globe, Terminal } from "lucide-react";

// Animation variants
const ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
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
    <motion.section
      id="ai-domains"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 bg-gray-50 dark:bg-gray-900 overflow-x-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div variants={ANIMATION_VARIANTS} className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-tight mb-4 text-gray-900 dark:text-white">
            AI <span className="font-bold">Domains</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            Specialized expertise in large language models, AI infrastructure,
            and cutting-edge machine learning technologies.
          </p>
        </motion.div>

        {/* Services grid with staggered animations */}
        <div className="grid md:grid-cols-4 gap-6">
          {aiDomains.map((domain, index) => (
            <motion.div
              key={domain.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    delay: index * 0.1, // Staggered animation delay
                  },
                },
              }}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-400 rounded-2xl p-6 transition-all duration-300 ease-in-out"
            >
              {/* Service icon */}
              <div className="mb-4 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <domain.icon className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 tracking-tight text-gray-900 dark:text-white">
                {domain.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
                {domain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AIDomains;
