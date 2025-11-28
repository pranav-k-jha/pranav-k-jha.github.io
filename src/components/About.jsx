import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getAllPosts } from "../content/blog/clientPosts";
import { useTheme } from "../context/ThemeContext";
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

// Reusable Tech Badge
const TechTag = ({ label }) => (
  <span className="px-2 py-0.5 text-xs rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50">
    {label}
  </span>
);

// Reusable Stat Line
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

// Bento Card Component
const BentoCard = ({ Icon, title, children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden rounded-2xl p-4 bg-white dark:bg-[#0d1116] border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow ${className}`}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
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
};

const About = () => {
  const { theme } = useTheme();
  const [blogPostCount, setBlogPostCount] = useState(0);

  useEffect(() => {
    try {
      const posts = getAllPosts();
      setBlogPostCount(posts.length);
    } catch (error) {
      console.error("Error loading blog posts:", error);
    }
  }, []);

  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
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
            research and enterprise applications, with a focus on practical,
            scalable implementations.
          </p>
        </motion.div>

        {/* Bento Grid: 5 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-auto">
          {/* 1. AI Solutions Architect */}
          <BentoCard
            Icon={Brain}
            title="AI Solutions Architect"
            className="lg:col-span-2 lg:row-span-2"
            delay={0.1}
          >
            <p className="text-gray-800 dark:text-gray-100 text-xs sm:text-sm leading-relaxed mb-3 font-medium">
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

            <div className="p-3 sm:p-4 bg-blue-50/80 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/50 shadow-sm">
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Target className="w-4 h-4 mr-2 text-blue-700 dark:text-blue-400" />
                Current Focus
              </h4>
              <div className="space-y-2 text-xs sm:text-sm">
                <p className="flex items-start">
                  <span className="inline-block w-2.5 h-2.5 bg-blue-600 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-900 dark:text-gray-100">
                    Scalable AI with LLMs, RAG, and multi-agent systems
                  </span>
                </p>
                <p className="flex items-start">
                  <span className="inline-block w-2.5 h-2.5 bg-blue-600 rounded-full mt-1 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-900 dark:text-gray-100">
                    LLMOps, vector DBs, and knowledge graphs
                  </span>
                </p>
              </div>
            </div>
          </BentoCard>

          {/* 2. Content & Impact */}
          <BentoCard
            Icon={Activity}
            title="Content & Impact"
            className="lg:col-start-3 lg:row-start-1"
            delay={0.2}
          >
            <div className="space-y-1.5">
              <StatItem
                icon={BookOpen}
                label="Blog Posts"
                value={blogPostCount > 0 ? `${blogPostCount - 1}+` : "0"}
              />
              <StatItem icon={Briefcase} label="Experience" value="5+ yrs" />
            </div>
          </BentoCard>

          {/* 3. Engineering Stack */}
          <BentoCard
            Icon={Code2}
            title="Engineering Stack"
            className="lg:row-span-2"
            delay={0.3}
          >
            <div className="space-y-3">
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
                  Languages & Frameworks
                </h4>
                <div className="flex flex-wrap gap-1">
                  {["Python", "TypeScript", "React", "Node.js", "FastAPI"].map(
                    (t) => (
                      <TechTag key={t} label={t} />
                    )
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
                  AI & ML
                </h4>
                <div className="flex flex-wrap gap-1">
                  {[
                    "PyTorch",
                    "Hugging Face",
                    "LangChain",
                    "LlamaIndex",
                    "DeepSpeed",
                    "TensorRT",
                  ].map((t) => (
                    <TechTag key={t} label={t} />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
                  Infra & Ops
                </h4>
                <div className="flex flex-wrap gap-1">
                  {[
                    "Docker",
                    "Kubernetes",
                    "AWS",
                    "GCP",
                    "Terraform",
                    "CI/CD",
                    "MLOps",
                  ].map((t) => (
                    <TechTag key={t} label={t} />
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>

          {/* 4. LLM & RAG Architecture */}
          <BentoCard
            Icon={Sparkles}
            title="LLM & RAG Architecture"
            className="lg:col-span-2"
            delay={0.5}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Multi-Agent */}
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                  Multi-Agent Pipelines
                </h4>
                <ul className="space-y-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {[
                    "Parallel execution with LangGraph",
                    "Embedding caching via FAISS",
                    "Async orchestration (serverless)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enterprise RAG */}
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center">
                  <Target className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                  Enterprise RAG
                </h4>
                <ul className="space-y-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {[
                    "Hybrid retrieval + vector search",
                    "Monitoring: Prometheus & App Insights",
                    "RBAC & data governance",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Core Stack */}
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white mb-1.5">
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "LangChain",
                  "FAISS",
                  "Azure OpenAI",
                  "OpenSearch",
                  "VLLM",
                  "Milvus",
                ].map((t) => (
                  <TechTag key={t} label={t} />
                ))}
              </div>
            </div>
          </BentoCard>

          {/* 5. Key Achievements */}
          <BentoCard
            Icon={TrendingUp}
            title="Key Achievements"
            className="lg:col-span-3"
            delay={0.7}
          >
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              {[
                "Built RAG pipelines with OpenSearch/Milvus for Q&A",
                "Optimized LLM inference using DeepSpeed & VLLM",
                "Designed scalable APIs & microservices (Python/TS)",
                "Implemented CI/CD with GitHub Actions & ArgoCD",
                "Deployed production AI on AWS/GCP/Azure",
                "Led LLM fine-tuning & prompt engineering workflows",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="dark:text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default About;
