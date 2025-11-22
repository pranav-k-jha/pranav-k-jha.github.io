import {
  FiChevronDown,
  FiExternalLink,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiShield,
  FiCloud,
  FiGitBranch,
  FiFile,
  FiFileText,
} from "react-icons/fi";

export const ragModules = [
  {
    title: "Foundations of RAG",
    icon: <FiLayers className="w-6 h-6" />,
    description: "Essential RAG concepts you need to know",
    overview:
      "Master these fundamental RAG concepts before moving to advanced topics. This knowledge will help you build effective retrieval-augmented generation systems and understand how they enhance traditional language models.",
    topics: [
      {
        title: "Introduction to RAG",
        content: [
          "What is RAG and why it matters",
          "Limitations of pure LLMs",
          "RAG vs finetuning vs prompt engineering",
          "Real-world applications and use cases",
        ],
      },
      {
        title: "Core Components of RAG",
        content: [
          "Document ingestion and preprocessing",
          "Embedding models and vector representations",
          "Vector databases fundamentals",
          "Retrieval mechanisms",
          "Generation and response synthesis",
        ],
      },
      {
        title: "Setting Up Your Development Environment",
        content: [
          "Python environment setup",
          "Installing necessary libraries (LangChain, LlamaIndex, OpenAI, etc.)",
          "Vector database options (Pinecone, Weaviate, ChromaDB)",
          "Cost considerations and API management",
        ],
      },
    ],
  },
  {
    title: "LangChain for RAG",
    icon: <FiDatabase className="w-6 h-6" />,
    description: "Master LangChain for building RAG apps",
    overview:
      "Before building complex RAG applications, you need to understand these LangChain fundamentals. This section covers the essential tools and techniques for effective document processing and retrieval in LangChain-based RAG systems.",
    topics: [
      {
        title: "LangChain Fundamentals",
        content: [
          "Core components and modules in LangChain",
          "Efficient data ingestion with document loaders",
        ],
      },
      {
        title: "Text Processing",
        content: [
          "Recursive Character Text Splitter",
          "Character Text Splitter",
          "HTML Header Text Splitter",
          "Recursive JSON Splitter",
        ],
      },
      {
        title: "Embeddings",
        content: [
          "OpenAI Embedding integration",
          "Ollama Embeddings setup",
          "Huggingface Embeddings usage",
        ],
      },
      {
        title: "Vector Stores",
        content: [
          "FAISS for efficient similarity search",
          "ChromaDB for document retrieval",
        ],
      },
    ],
  },
  {
    title: "Traditional RAG Implementation",
    icon: <FiCpu className="w-6 h-6" />,
    description: "Build and evaluate RAG systems effectively",
    overview:
      "Learn to implement and optimize a complete RAG pipeline. This module covers everything from basic similarity search to building a production-ready Q&A system, with a strong focus on evaluation and optimization.",
    topics: [
      {
        title: "Basic RAG Pipeline",
        content: [
          "Basic similarity search implementation",
          "Building a simple Q&A system",
        ],
      },
      {
        title: "Prompt Engineering",
        content: [
          "Effective prompts for retrieval tasks",
          "Structuring retrieval results",
          "Response generation and formatting",
        ],
      },
      {
        title: "Evaluation and Testing",
        content: [
          "RAG evaluation metrics",
          "Building test datasets",
          "A/B testing configurations",
          "Performance optimization techniques",
        ],
      },
    ],
  },

  {
    title: "Document Parsers for RAG",
    icon: <FiFileText className="w-6 h-6" />,
    description: "Master document parsing for RAG systems",
    overview:
      "Learn to use advanced document parsing tools that handle various file formats and structures. These tools are essential for preparing high-quality input for your RAG pipeline.",
    topics: [
      {
        title: "Document Parsers",
        content: [
          "Doclens for document analysis",
          "LLama Parse for complex formats",
          "Unstructured for versatile parsing",
          "Vectorize for optimized embeddings",
        ],
      },
    ],
  },
  {
    title: "LlamaIndex for RAG",
    icon: <FiDatabase className="w-6 h-6" />,
    description: "Master document indexing and retrieval with LlamaIndex",
    overview:
      "This module dives into LlamaIndex, showing you how to efficiently index and retrieve documents for RAG applications. You'll learn to create powerful search systems that understand natural language queries.",
    topics: [
      {
        title: "LlamaIndex Fundamentals",
        content: [
          "Introduction to LlamaIndex and its benefits",
          "Installation and configuration",
          "Core concepts: Index, Document, Query Engine",
        ],
      },
      {
        title: "Document Handling",
        content: [
          "Loading from various sources (PDF, Notion, web, local files)",
          "Preprocessing and chunking strategies",
          "Handling different document formats",
        ],
      },
      {
        title: "Indexing and Querying",
        content: [
          "Creating VectorStoreIndex with different embeddings",
          "Natural language query processing",
          "Response synthesis techniques",
        ],
      },
      {
        title: "Advanced Search & Optimization",
        content: [
          "Hybrid RAG with keyword and vector search",
          "Query filtering and metadata handling",
          "Results reranking for better accuracy",
        ],
      },
    ],
  },
  {
    title: "More Coming Soon",
    icon: <FiGitBranch className="w-6 h-6" />,
    description: "Additional modules in development",
    overview:
      "I'm actively working on more content to help you master RAG technology. Check back soon for new modules on advanced topics and implementations.",
    topics: [
      {
        title: "In Development",
        content: [
          "Advanced retrieval techniques",
          "Production deployment strategies",
          "Specialized RAG applications",
          "And much more...",
        ],
      },
    ],
  },
];
