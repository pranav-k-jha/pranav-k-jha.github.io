import { motion } from "framer-motion";
import { Brain, Bot, Zap, Cpu, Sparkles } from "lucide-react";

// BentoGrid component
const BentoGrid = ({ children, className = "" }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>
      {children}
    </div>
  );
};

// BentoCard component
const BentoCard = ({
  Icon,
  name,
  description,
  href,
  background,
  className = "",
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl p-6 h-full flex flex-col justify-between border border-gray-200 dark:border-gray-700 ${className}`}
      whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.5)" }}
      transition={{ duration: 0.3 }}
    >
      {background}
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// Project data
const projects = [
  {
    Icon: Brain,
    name: "LLM Fine-Tuning Pipeline",
    description:
      "Build end-to-end pipelines for fine-tuning large language models using LoRA, QLoRA, and parameter-efficient techniques.",
    href: "/projects/llm-finetuning",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-emerald-50/50 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-emerald-900/20" />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Bot,
    name: "Custom AI Assistants",
    description:
      "Develop specialized AI agents using fine-tuned models for domain-specific tasks with RAG and tool integration.",
    href: "/projects/ai-assistants",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-blue-50/30 to-purple-50/50 dark:from-emerald-900/20 dark:via-blue-900/10 dark:to-purple-900/20" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Zap,
    name: "Model Optimization",
    description:
      "Implement quantization, pruning, and distillation techniques to optimize LLM performance for production deployment.",
    href: "/projects/model-optimization",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-orange-50/30 to-red-50/50 dark:from-yellow-900/20 dark:via-orange-900/10 dark:to-red-900/20" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Cpu,
    name: "Multimodal AI Systems",
    description:
      "Create vision-language models combining text, images, and audio for comprehensive AI understanding and generation.",
    href: "/projects/multimodal-ai",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-indigo-50/50 dark:from-purple-900/20 dark:via-pink-900/10 dark:to-indigo-900/20" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Sparkles,
    name: "RAG & Knowledge Systems",
    description:
      "Build retrieval-augmented generation systems with vector databases and semantic search for enhanced AI responses.",
    href: "/projects/rag-systems",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-cyan-50/30 to-blue-50/50 dark:from-teal-900/20 dark:via-cyan-900/10 dark:to-blue-900/20" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

// Main component
export function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {projects.map((project) => (
        <BentoCard key={project.name} {...project} />
      ))}
    </BentoGrid>
  );
}

export default BentoDemo;
