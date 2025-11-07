import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  Briefcase,
  Code2,
  Cpu,
  Database,
  Cloud,
  Shield,
  GitBranch,
} from "lucide-react";

const Experience = () => {
  const { theme } = useTheme();
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-800";
  const bgColor = theme === "dark" ? "bg-gray-900/80" : "bg-white/80";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";
  const iconColor = theme === "dark" ? "text-blue-400" : "text-blue-600";

  const experiences = [
    {
      role: "GenAI Engineer",
      period: "2023 - Present",
      description:
        "Leading the development of AI-powered solutions with a focus on natural language processing and generative AI applications.",
      highlights: [
        "Developed and deployed retrieval-augmented generation (RAG) pipelines using vector databases (OpenSearch, Milvus) for technical document Q&A systems",
        "Built secure, scalable APIs and microservices in Python/TypeScript with containerized deployment on Kubernetes/EKS",
        "Optimized LLM inference performance using techniques like quantization, model pruning, and serving optimizations (DeepSpeed, TensorRT, VLLM)",
        "Implemented CI/CD pipelines with GitHub Actions and ArgoCD, ensuring robust deployment and rollback strategies",
        "Integrated GenAI capabilities into enterprise web applications with a focus on security and compliance",
        "Conducted knowledge-sharing sessions on LLM best practices and MLOps",
      ],
      technologies: [
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
      ],
    },
    // Add more experiences as needed
  ];

  const getIcon = (index) => {
    const icons = [
      <Cpu key="cpu" />,
      <Database key="db" />,
      <Cloud key="cloud" />,
      <Shield key="shield" />,
      <GitBranch key="git" />,
      <Code2 key="code" />,
    ];
    return icons[index % icons.length];
  };

  return (
    <section
      id="experience"
      className={`py-20 ${theme === "dark" ? "bg-gray-950" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            My Experience
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p
            className={`text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Key projects and technical contributions
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 md:p-8 shadow-lg backdrop-blur-sm ${bgColor} border ${borderColor} transition-all duration-300 hover:shadow-xl`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {exp.role}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    theme === "dark"
                      ? "bg-blue-900/30 text-blue-300 border border-blue-800/50"
                      : "bg-blue-50 text-blue-700 border border-blue-100"
                  }`}
                >
                  {exp.period}
                </span>
              </div>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {exp.description}
              </p>

              <div className="mb-6">
                <h4
                  className={`text-lg font-semibold mb-3 ${
                    theme === "dark" ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span
                        className={`flex-shrink-0 w-5 h-5 mt-0.5 mr-2 ${iconColor}`}
                      >
                        {getIcon(i)}
                      </span>
                      <span className={textColor}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4
                  className={`text-lg font-semibold mb-3 ${
                    theme === "dark" ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-sm rounded-full ${
                        theme === "dark"
                          ? "bg-gray-800 text-blue-300 border border-gray-700"
                          : "bg-blue-50 text-blue-700 border border-blue-100"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
