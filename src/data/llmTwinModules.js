export const llmTwinModules = [
  {
    title: "Introduction to LLM Twins",
    description: "Understanding the concept and architecture of LLM Twins",
    lessons: [
      "What is an LLM Twin and why build one?",
      "Architecture overview of a production LLM system",
      "Use cases and applications of LLM Twins",
      "Technical stack and tools overview",
    ],
    resources: [
      {
        type: "github",
        label: "Starter Repository",
        url: "https://github.com/mlabonne/llm-twin-course",
      },
    ],
  },
  {
    title: "Data Collection & Preparation",
    description: "Gathering and processing data for your LLM Twin",
    lessons: [
      "Identifying and collecting relevant data sources",
      "Data cleaning and preprocessing techniques",
      "Privacy and ethical considerations",
      "Creating a data pipeline",
    ],
  },
  {
    title: "Building the RAG System",
    description: "Implementing Retrieval-Augmented Generation",
    lessons: [
      "Introduction to RAG architecture",
      "Setting up vector databases",
      "Implementing semantic search",
      "Optimizing retrieval performance",
    ],
    resources: [
      {
        type: "github",
        label: "RAG Implementation",
        url: "https://github.com/mlabonne/llm-twin-course/tree/main/rag",
      },
    ],
  },
  {
    title: "Model Training & Fine-tuning",
    description: "Training your LLM Twin on personal data",
    lessons: [
      "Model selection and comparison",
      "Fine-tuning techniques for personalization",
      "Handling limited data scenarios",
      "Evaluation metrics for LLM Twins",
    ],
  },
  {
    title: "Deployment & LLMOps",
    description: "Productionizing your LLM Twin",
    lessons: [
      "Containerization with Docker",
      "Deployment strategies",
      "Monitoring and logging",
      "Scaling and performance optimization",
    ],
    resources: [
      {
        type: "github",
        label: "Deployment Templates",
        url: "https://github.com/mlabonne/llm-twin-course/tree/main/deployment",
      },
    ],
  },
];

export const courseAttribution = {
  author: "Maxime Labonne",
  authorUrl: "https://www.linkedin.com/in/maxime-labonne/",
  license: "MIT License",
  licenseUrl: "https://github.com/mlabonne/llm-twin-course/blob/main/LICENSE",
};
