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
    title: "Introduction to LLMs",
    icon: <FiLayers className="w-6 h-6" />,
    description: "Foundational concepts of Large Language Models",
    overview:
      "Grasp the core concepts and significance of LLMs in today's AI landscape. Understand their capabilities, limitations, and the transformer architecture that powers them.",
    topics: [
      {
        title: "LLM Fundamentals",
        content: [
          "What are Large Language Models?",
          "Evolution of language models",
          "Key terminology and concepts",
          "Capabilities and limitations",
        ],
      },
      {
        title: "Transformer Architecture",
        content: [
          "Attention mechanisms",
          "Self-attention and multi-head attention",
          "Encoder-decoder structure",
          "Positional encoding",
        ],
      },
      {
        title: "Model Types and Variants",
        content: [
          "Auto-regressive models (GPT)",
          "Auto-encoding models (BERT)",
          "Sequence-to-sequence models (T5, BART)",
          "Recent architectures (PaLM, LLaMA, Claude)",
        ],
      },
    ],
  },
  {
    title: "Working with LLMs",
    icon: <FiTerminal className="w-6 h-6" />,
    description: "Practical usage of pre-trained models",
    overview:
      "Learn to effectively use pre-trained LLMs through various interfaces and understand prompt engineering techniques to get the best results.",
    topics: [
      {
        title: "Accessing LLMs",
        content: [
          "OpenAI API",
          "Anthropic's Claude",
          "Open-source models (LLaMA, Mistral)",
          "Local model deployment",
        ],
      },
      {
        title: "Prompt Engineering",
        content: [
          "Zero-shot and few-shot learning",
          "Chain-of-Thought prompting",
          "System and user messages",
          "Prompt patterns and best practices",
        ],
      },
      {
        title: "Model Output Control",
        content: [
          "Temperature and top-p sampling",
          "Max tokens and stop sequences",
          "Logit bias and constraints",
          "Handling model hallucinations",
        ],
      },
    ],
  },
  {
    title: "Fine-tuning LLMs",
    icon: <FiCpu className="w-6 h-6" />,
    description: "Customizing models for specific tasks",
    overview:
      "Master the process of fine-tuning pre-trained LLMs on custom datasets to achieve better performance on specific tasks or domains.",
    topics: [
      {
        title: "Fine-tuning Basics",
        content: [
          "When to fine-tune vs. prompt engineering",
          "Data preparation and formatting",
          "Hyperparameter tuning",
          "Evaluation metrics",
        ],
      },
      {
        title: "Advanced Techniques",
        content: [
          "Parameter-efficient fine-tuning (LoRA, QLoRA)",
          "Instruction tuning",
          "Reinforcement Learning from Human Feedback (RLHF)",
          "Domain adaptation",
        ],
      },
      {
        title: "Fine-tuning Platforms",
        content: [
          "OpenAI fine-tuning API",
          "Hugging Face Transformers",
          "Google Vertex AI",
          "AWS Sagemaker",
        ],
      },
    ],
  },
  {
    title: "LLM Applications",
    icon: <FiCode className="w-6 h-6" />,
    description: "Building real-world applications",
    overview:
      "Explore practical applications of LLMs and learn to build end-to-end AI applications powered by large language models.",
    topics: [
      {
        title: "Common Use Cases",
        content: [
          "Chatbots and virtual assistants",
          "Content generation and summarization",
          "Code generation and completion",
          "Semantic search and Q&A systems",
        ],
      },
      {
        title: "Integration Patterns",
        content: [
          "API integration",
          "LangChain and LlamaIndex",
          "Vector databases",
          "Agent-based systems",
        ],
      },
      {
        title: "Production Considerations",
        content: [
          "Cost optimization",
          "Latency and performance",
          "Scaling strategies",
          "Monitoring and logging",
        ],
      },
    ],
  },
  {
    title: "Advanced Topics",
    icon: <FiZap className="w-6 h-6" />,
    description: "Cutting-edge developments in LLMs",
    overview:
      "Dive into advanced topics and emerging trends in the field of large language models.",
    topics: [
      {
        title: "Model Efficiency",
        content: [
          "Model quantization",
          "Pruning and distillation",
          "Speculative decoding",
          "Mixture of Experts",
        ],
      },
      {
        title: "Emerging Architectures",
        content: [
          "Multimodal models",
          "Retrieval-augmented generation",
          "Autonomous agents",
          "Long-context models",
        ],
      },
      {
        title: "Challenges and Future Directions",
        content: [
          "Bias and fairness",
          "Hallucination and factuality",
          "AI safety and alignment",
          "Open challenges in LLM research",
        ],
      },
    ],
  },
];
