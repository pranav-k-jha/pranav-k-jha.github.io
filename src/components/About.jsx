import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  Brain,
  Code2,
  Sparkles,
  Target,
  TrendingUp,
  Activity,
  BookOpen,
  FileText,
  Briefcase,
  Clock,
} from "lucide-react";

const BentoCard = ({ Icon, title, children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden rounded-2xl p-4 bg-white dark:bg-black/90 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow ${className}`}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
    >
      {/* Icon & Title in one row */}
      <div className="flex items-center mb-2">
        {Icon && (
          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mr-2">
            <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
        )}
        {title && (
          <h3 className="text-base font-semibold text-gray-800 dark:text-white">
            {title}
          </h3>
        )}
      </div>

      <div className="relative z-10 text-sm">{children}</div>
    </motion.div>
  );
};

const About = () => {
  const { theme } = useTheme();

  // GitHub Analytics URLs with Tokyo Night theme
  const getGitHubStatsUrl = () => {
    if (theme === "dark") {
      return "https://github-readme-stats.vercel.app/api?username=pranav-k-jha&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=58A6FF&icon_color=58A6FF&text_color=C9D1D9";
    }
    return "https://github-readme-stats.vercel.app/api?username=pranav-k-jha&show_icons=true&hide_border=true&bg_color=FFFFFF&title_color=2563EB&icon_color=2563EB&text_color=1F2937";
  };

  const getStreakStatsUrl = () => {
    if (theme === "dark") {
      return "https://github-readme-streak-stats.herokuapp.com/?user=pranav-k-jha&theme=tokyonight&hide_border=true&background=0D1117&ring=58A6FF&fire=58A6FF&currStreakLabel=58A6FF";
    }
    return "https://github-readme-streak-stats.herokuapp.com/?user=pranav-k-jha&hide_border=true&background=FFFFFF&ring=2563EB&fire=2563EB&currStreakLabel=2563EB";
  };

  const getTopLangsUrl = () => {
    if (theme === "dark") {
      return "https://github-readme-stats.vercel.app/api/top-langs/?username=pranav-k-jha&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=58A6FF&text_color=C9D1D9";
    }
    return "https://github-readme-stats.vercel.app/api/top-langs/?username=pranav-k-jha&layout=compact&hide_border=true&bg_color=FFFFFF&title_color=2563EB&text_color=1F2937";
  };

  const getActivityGraphUrl = () => {
    if (theme === "dark") {
      return "https://github-readme-activity-graph.vercel.app/graph?username=pranav-k-jha&theme=react-dark&hide_border=true&bg_color=0D1117&color=58A6FF&line=1F6FEB&point=58A6FF&area=true";
    }
    return "https://github-readme-activity-graph.vercel.app/graph?username=pranav-k-jha&theme=minimal&hide_border=true&bg_color=FFFFFF&color=2563EB&line=3B82F6&point=2563EB&area=true";
  };

  const getProductiveTimeUrl = () => {
    if (theme === "dark") {
      return "https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=pranav-k-jha&theme=tokyonight&utcOffset=8";
    }
    return "https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=pranav-k-jha&theme=github&utcOffset=8";
  };

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
            title="GenAI Engineering"
            className="lg:row-span-2"
            delay={0.4}
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  Key Achievements
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  {[
                    "Developed RAG pipelines with OpenSearch/Milvus for document Q&A",
                    "Built scalable APIs & microservices in Python/TypeScript",
                    "Optimized LLM inference with DeepSpeed/TensorRT/VLLM",
                    "Implemented CI/CD with GitHub Actions & ArgoCD",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="dark:text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "TypeScript",
                    "PyTorch",
                    "Hugging Face",
                    "AWS",
                    "Kubernetes",
                    "Docker",
                    "OpenSearch",
                    "Terraform",
                    "FastAPI",
                    "Node.js",
                    "React",
                    "DeepSpeed",
                    "TensorRT",
                    "CI/CD",
                    "MLOps",
                    "LLMOps",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>

          {/* GitHub Streak */}
          <BentoCard
            Icon={TrendingUp}
            title="Contribution Streak & Top Languages"
            className="lg:col-span-2"
            delay={0.6}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <img
                src={getStreakStatsUrl()}
                alt="GitHub Streak"
                className="w-full h-auto max-h-32 object-contain rounded-lg"
                loading="eager"
              />
              <img
                src={getTopLangsUrl()}
                alt="Top Languages"
                className="w-full h-auto max-h-32 object-contain rounded-lg"
                loading="lazy"
              />
            </div>
          </BentoCard>

          {/* Productive Time & Activity Graph */}
          <BentoCard
            Icon={Clock}
            title="Productive Hours & Activity"
            className="lg:col-span-2"
            delay={0.8}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* Productive Time */}
              <img
                src={getProductiveTimeUrl()}
                alt="Productive Time"
                className="w-full h-auto max-h-32 object-contain rounded-lg"
                loading="lazy"
              />

              {/* Activity Graph */}
              <img
                src={getActivityGraphUrl()}
                alt="GitHub Activity Graph"
                className="w-full h-auto max-h-32 object-contain rounded-lg"
                loading="lazy"
              />
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default About;
