import {
  FiCpu,
  FiCode,
  FiLayers,
  FiDatabase,
  FiShield,
  FiCloud,
  FiGitBranch,
  FiFileText,
  FiMessageSquare,
  FiZap,
  FiTerminal,
  FiBarChart2,
} from "react-icons/fi";

export const llmCourseModules = [
  {
    title: "LLM Fundamentals",
    icon: <FiLayers className="w-6 h-6" />,
    description: "Mathematics, Python, and Neural Networks",
    overview:
      "This optional section covers the fundamental knowledge required to understand and work with LLMs, including essential mathematics, Python programming, and neural network concepts.",
    topics: [
      {
        title: "Mathematics for ML",
        content: [
          "Linear Algebra Basics",
          "Probability & Statistics",
          "Calculus for Deep Learning",
          "Information Theory",
        ],
      },
      {
        title: "Python for ML",
        content: [
          "NumPy & Pandas",
          "PyTorch Basics",
          "Data Processing",
          "Model Training Pipelines",
        ],
      },
      {
        title: "Neural Networks",
        content: [
          "Perceptrons & MLPs",
          "Backpropagation",
          "Activation Functions",
          "Optimization Techniques",
        ],
      },
    ],
  },
  {
    title: "The LLM Scientist",
    icon: <FiCpu className="w-6 h-6" />,
    description: "Building the best possible LLMs",
    overview:
      "Focus on building state-of-the-art LLMs using the latest techniques and architectures. Learn about model architectures, training strategies, and optimization methods.",
    topics: [
      {
        title: "Model Architectures",
        content: [
          "Transformer Architecture",
          "Attention Mechanisms",
          "Model Variants (GPT, BERT, T5)",
          "Efficient Architectures",
        ],
      },
      {
        title: "Training Techniques",
        content: [
          "Pre-training Objectives",
          "Data Curation",
          "Distributed Training",
          "Mixed Precision Training",
        ],
      },
      {
        title: "Model Optimization",
        content: [
          "Quantization",
          "Pruning",
          "Knowledge Distillation",
          "Efficient Inference",
        ],
      },
    ],
  },
  {
    title: "The LLM Engineer",
    icon: <FiCode className="w-6 h-6" />,
    description: "Building LLM-based applications",
    overview:
      "Learn to create and deploy production-ready LLM applications. Focus on application architecture, deployment strategies, and real-world implementation.",
    topics: [
      {
        title: "Application Patterns",
        content: [
          "Prompt Engineering",
          "Retrieval-Augmented Generation",
          "Agents & Tools",
          "Evaluation & Monitoring",
        ],
      },
      {
        title: "Deployment",
        content: [
          "Model Serving",
          "API Design",
          "Scaling Strategies",
          "Cost Optimization",
        ],
      },
      {
        title: "Production Considerations",
        content: [
          "Latency Optimization",
          "Error Handling",
          "Security & Privacy",
          "Compliance & Ethics",
        ],
      },
    ],
  },
];

export const courseAttribution = {
  author: "Maxime Labonne",
  source: "LLM Course",
  url: "https://github.com/mlabonne/llm-course",
  license: "Apache License 2.0",
  note: "This course is based on the excellent work by Maxime Labonne. The LLM course is available under the <a href='https://github.com/mlabonne/llm-course/blob/main/LICENSE' target='_blank' rel='noopener noreferrer'>Apache 2.0 License</a> and will always stay free. For an interactive version, check out the LLM assistant on HuggingChat or ChatGPT.",
  book: {
    title: "LLM Engineer's Handbook",
    authors: ["Maxime Labonne", "Paul Iuzstin"],
    description:
      "A hands-on and detailed book that covers an end-to-end LLM application from design to deployment.",
    url: "https://www.amazon.ca/dp/1836200072",
  },
};
