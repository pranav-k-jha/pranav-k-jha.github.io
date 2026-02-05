import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getAllPosts } from "../content/blog/clientPosts";
import {
  Brain,
  Code2,
  Sparkles,
  Target,
  Activity,
  BookOpen,
  Briefcase,
  TrendingUp,
} from "lucide-react";

/* =====================
   Shared Motion Preset
===================== */
const cardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  whileHover: { y: -2 },
  transition: { duration: 0.5 },
};

/* =====================
   Reusable UI Atoms
===================== */
const TechTag = ({ label }) => (
  <span className="px-2 py-0.5 text-[0.7rem] rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50">
    {label}
  </span>
);

const TechList = ({ items }) => (
  <div className="flex flex-wrap gap-1">
    {items.map((t) => (
      <TechTag key={t} label={t} />
    ))}
  </div>
);

const StatItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center justify-between text-xs">
    <div className="flex items-center text-gray-600 dark:text-gray-300">
      <Icon className="w-3.5 h-3.5 text-blue-500 mr-1.5" />
      {label}
    </div>
    <span className="font-semibold text-blue-600 dark:text-blue-400">
      {value}
    </span>
  </div>
);

const BulletList = ({ items, className = "" }) => (
  <ul className={`space-y-1 text-xs ${className}`}>
    {items.map((item, i) => (
      <li key={i} className="flex items-start">
        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

/* =====================
   Bento Card Wrapper
===================== */
const BentoCard = ({ Icon, title, children, className = "", delay = 0 }) => (
  <motion.div
    {...cardMotion}
    transition={{ ...cardMotion.transition, delay }}
    className={`relative overflow-hidden rounded-2xl p-4 sm:p-5 bg-white dark:bg-[#0d1116] border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-800 ${className}`}
  >
    <div className="flex items-center mb-2">
      {Icon && (
        <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mr-2">
          <Icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
        </div>
      )}
      {title && (
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
      )}
    </div>
    <div className="relative z-10 text-xs sm:text-sm">{children}</div>
  </motion.div>
);

/* =====================
   Static Content Config
===================== */
const STACK = {
  languages: ["Python", "TypeScript", "React", "Node.js", "FastAPI"],
  ai: [
    "PyTorch",
    "Hugging Face",
    "LangChain",
    "LlamaIndex",
    "DeepSpeed",
    "TensorRT",
  ],
  infra: ["Docker", "Kubernetes", "AWS", "GCP", "Terraform", "CI/CD", "MLOps"],
};

const MULTI_AGENT = [
  "Parallel execution with LangGraph",
  "Embedding caching via FAISS",
  "Async orchestration (serverless)",
];

const ENTERPRISE_RAG = [
  "Hybrid retrieval + vector search",
  "Monitoring: Prometheus & App Insights",
  "RBAC & data governance",
];

const CORE_STACK = [
  "LangChain",
  "FAISS",
  "Azure OpenAI",
  "OpenSearch",
  "VLLM",
  "Milvus",
];

const ACHIEVEMENTS = [
  "Built RAG pipelines with OpenSearch/Milvus for Q&A",
  "Optimized LLM inference using DeepSpeed & VLLM",
  "Designed scalable APIs & microservices (Python/TS)",
  "Implemented CI/CD with GitHub Actions & ArgoCD",
  "Deployed production AI on AWS/GCP/Azure",
  "Led LLM fine-tuning & prompt engineering workflows",
];

/* =====================
   Main Component
===================== */
const About = () => {
  const [blogPostCount, setBlogPostCount] = useState(0);

  useEffect(() => {
    try {
      setBlogPostCount(getAllPosts().length);
    } catch (err) {
      console.error("Error loading blog posts", err);
    }
  }, []);

  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight mb-3 text-gray-900 dark:text-white">
            About <span className="font-bold">Me</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm">
            I design and implement AI solutions that bridge the gap between
            research and enterprise applications, with a focus on scalable,
            production-grade systems.
          </p>
        </motion.div>

        {/* Perfectly Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
          {/* AI Architect */}
          <BentoCard
            Icon={Brain}
            title="AI Solutions Architect"
            className="sm:col-span-2 lg:col-span-6"
            delay={0.1}
          >
            <div className="space-y-3">
              <p className="text-gray-800 dark:text-gray-100 text-sm leading-snug">
                Specializing in{" "}
                <span className="text-blue-700 dark:text-blue-400 font-semibold">
                  LLMs
                </span>
                ,{" "}
                <span className="text-blue-700 dark:text-blue-400 font-semibold">
                  RAG
                </span>
                , and{" "}
                <span className="text-blue-700 dark:text-blue-400 font-semibold">
                  Intelligent Automation
                </span>
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/10 p-3 rounded-xl border border-blue-100 dark:border-blue-800/50">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-1.5 rounded-lg mr-2">
                    <Target className="w-3.5 h-3.5 text-blue-600 dark:text-blue-300" />
                  </div>
                  <h4 className="text-xs font-bold text-blue-800 dark:text-blue-200">
                    Current Focus
                  </h4>
                </div>
                <ul className="space-y-1.5 text-xs">
                  <li className="flex items-start group">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      Scalable AI with LLMs, RAG, and multi-agent systems
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      LLMOps, vector databases, and knowledge graphs
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </BentoCard>

          {/* Stats */}
          <BentoCard
            Icon={Activity}
            title="Content & Impact"
            delay={0.2}
            className="sm:col-span-2 lg:col-span-6"
          >
            <div className="grid grid-cols-2 gap-3 h-full">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-900/10 p-3 rounded-xl flex flex-col items-center justify-center text-center">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-1.5" />
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  {blogPostCount ? `${blogPostCount - 1}+` : "0"}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  Blog Posts
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-900/20 dark:to-emerald-900/10 p-3 rounded-xl flex flex-col items-center justify-center text-center">
                <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-1.5" />
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                  5+
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  Years Experience
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Stack */}
          <BentoCard
            Icon={Code2}
            title="Engineering Stack"
            delay={0.3}
            className="lg:col-span-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 h-full">
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  Languages & Frameworks
                </h4>
                <TechList items={STACK.languages} />
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  AI & ML
                </h4>
                <TechList items={STACK.ai} />
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  Infra & Ops
                </h4>
                <TechList items={STACK.infra} />
              </div>
            </div>
          </BentoCard>

          {/* Architecture */}
          <BentoCard
            Icon={Sparkles}
            title="LLM & RAG Architecture"
            className="sm:col-span-2 lg:col-span-8"
            delay={0.5}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-bold mb-2 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-blue-600" />{" "}
                  Multi-Agent
                </h4>
                <BulletList
                  items={MULTI_AGENT}
                  className="text-gray-600 dark:text-gray-300"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold mb-2 flex items-center">
                  <Target className="w-4 h-4 mr-2 text-blue-600" /> Enterprise
                  RAG
                </h4>
                <BulletList
                  items={ENTERPRISE_RAG}
                  className="text-gray-600 dark:text-gray-300"
                />
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-xs font-bold mb-1.5">Core Stack</h4>
              <TechList items={CORE_STACK} />
            </div>
          </BentoCard>

          {/* Achievements */}
          <BentoCard
            Icon={TrendingUp}
            title="Key Achievements"
            className="sm:col-span-2 lg:col-span-12"
            delay={0.7}
          >
            <BulletList
              items={ACHIEVEMENTS}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-gray-600 dark:text-gray-300"
            />
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default About;
