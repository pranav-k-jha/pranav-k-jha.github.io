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
    description: "Core concepts for understanding LLMs",
    overview:
      "Master the essential building blocks of machine learning and deep learning that power modern LLMs. This section covers the mathematical foundations, programming skills, and neural network concepts required to work effectively with large language models.",
    topics: [
      {
        title: "Mathematics for Machine Learning",
        content: [
          "Linear Algebra: Vectors, matrices, eigenvalues, and transformations",
          "Calculus: Derivatives, gradients, and optimization",
          "Probability & Statistics: Distributions, MLE, and Bayesian inference",
          "Key Resources: 3Blue1Brown, StatQuest, Khan Academy",
        ],
      },
      {
        title: "Python for Machine Learning",
        content: [
          "Python fundamentals and data structures",
          "Data Science Stack: NumPy, Pandas, Matplotlib/Seaborn",
          "Data Preprocessing and Feature Engineering",
          "Scikit-learn for traditional ML algorithms",
        ],
      },
      {
        title: "Neural Networks",
        content: [
          "Neural Network Fundamentals: Architecture and training",
          "Activation Functions and Backpropagation",
          "Optimization: SGD, Adam, RMSprop",
          "Regularization: Dropout, L1/L2, Early Stopping",
        ],
      },
      {
        title: "Natural Language Processing (NLP)",
        content: [
          "Text Preprocessing: Tokenization, stemming, lemmatization",
          "Feature Extraction: BoW, TF-IDF, n-grams",
          "Word Embeddings: Word2Vec, GloVe, FastText",
          "Sequence Models: RNNs, LSTMs, GRUs",
        ],
      },
    ],
  },
  {
    title: "The LLM Scientist",
    icon: <FiCpu className="w-6 h-6" />,
    description: "Mastering LLM development",
    overview:
      "Dive deep into building state-of-the-art language models. This section covers everything from architecture design to training optimization, evaluation, and the latest research trends in LLM development.",
    topics: [
      {
        title: "LLM Architecture",
        content: [
          "Transformer architecture and attention mechanisms",
          "Tokenization strategies and their impact",
          "Self-attention and its variants",
          "Sampling techniques for text generation",
        ],
      },
      {
        title: "Pre-training Models",
        content: [
          "Data preparation and cleaning at scale",
          "Distributed training strategies",
          "Training optimization techniques",
          "Performance monitoring and profiling",
        ],
      },
      {
        title: "Post-training & SFT",
        content: [
          "Dataset preparation and chat templates",
          "Synthetic data generation",
          "Supervised Fine-Tuning techniques",
          "Parameter-efficient fine-tuning (LoRA, QLoRA)",
        ],
      },
      {
        title: "Preference Alignment",
        content: [
          "Rejection sampling and data curation",
          "Direct Preference Optimization (DPO)",
          "Reward modeling and RLHF",
          "GRPO and PPO for alignment",
        ],
      },
      {
        title: "Evaluation & Optimization",
        content: [
          "Automated benchmarks and human evaluation",
          "Model-based evaluation techniques",
          "Quantization methods (GGUF, GPTQ, AWQ)",
          "Performance optimization strategies",
        ],
      },
      {
        title: "Emerging Trends",
        content: [
          "Model merging techniques",
          "Multimodal model architectures",
          "Interpretability and mechanistic analysis",
          "Test-time compute scaling",
        ],
      },
    ],
  },
  {
    title: "The LLM Engineer",
    icon: <FiCode className="w-6 h-6" />,
    description: "Building production LLM applications",
    overview:
      "Master the end-to-end development of LLM-powered applications, from prototyping to production deployment. Learn to build robust, scalable, and secure applications with modern LLM technologies.",
    topics: [
      {
        title: "Running LLMs",
        content: [
          "LLM APIs vs. open-source models",
          "Local deployment options",
          "Advanced prompt engineering",
          "Structured output generation",
        ],
      },
      {
        title: "Vector Storage & RAG",
        content: [
          "Document ingestion and processing",
          "Text splitting strategies",
          "Embedding models and vector DBs",
          "Retrieval Augmented Generation",
        ],
      },
      {
        title: "Advanced RAG & Agents",
        content: [
          "Query construction and rewriting",
          "Multi-vector and hybrid retrieval",
          "Agent frameworks (LangGraph, LlamaIndex)",
          "Multi-agent systems",
        ],
      },
      {
        title: "Deployment & Scaling",
        content: [
          "Local and demo deployment",
          "Server deployment at scale",
          "Inference optimization techniques",
          "Edge deployment options",
        ],
      },
      {
        title: "Security & Production",
        content: [
          "Prompt injection and jailbreaking",
          "Data privacy and compliance",
          "Monitoring and observability",
          "Performance optimization",
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
  note: "This course is based on the excellent work by <a href='https://www.linkedin.com/in/maxime-labonne/' target='_blank' rel='noopener noreferrer'>Maxime Labonne</a>. The LLM course is available under the <a href='https://github.com/mlabonne/llm-course/blob/main/LICENSE' target='_blank' rel='noopener noreferrer'>Apache License 2.0</a> and will always stay free.<br/><br/>From the original author:<br/>\"Based on this course, I wrote the <a href='https://www.amazon.ca/dp/1836200072' target='_blank' rel='noopener noreferrer'>LLM Engineer's Handbook</a> with <a href='https://www.linkedin.com/in/pauliusztin/' target='_blank' rel='noopener noreferrer'>Paul Iuzstin</a>. It's a hands-on and detailed book that covers an end-to-end LLM application from design to deployment. The LLM course will always stay free but feel free to support my work by purchasing the book.\"<br/><br/>For an interactive version, check out the LLM assistant on <a href='https://huggingface.co/chat/' target='_blank' rel='noopener noreferrer'>HuggingChat</a> or <a href='https://chat.openai.com/' target='_blank' rel='noopener noreferrer'>ChatGPT</a>.",
  book: {
    title: "LLM Engineer's Handbook",
    description:
      "A hands-on and detailed book that covers an end-to-end LLM application from design to deployment.",
    url: "https://www.amazon.ca/dp/1836200072",
  },
};
