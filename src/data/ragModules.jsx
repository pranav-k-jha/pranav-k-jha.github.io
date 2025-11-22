import {
  FiZap,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiShield,
  FiCloud,
  FiGitBranch,
  FiFile,
  FiFileText,
  FiMessageSquare,
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
    title: "Advanced LlamaIndex Techniques",
    icon: <FiCode className="w-6 h-6" />,
    description: "Professional-grade LlamaIndex implementations",
    overview:
      "This module explores professional-grade LlamaIndex implementations, covering custom configurations, advanced retrieval methods, system integrations, and query optimization techniques for production environments.",
    topics: [
      {
        title: "Custom Configurations",
        content: [
          "Using ServiceContext, StorageContext, and LLMPredictor for custom setups",
          "Chunking strategies: fixed, recursive, and semantic",
        ],
      },
      {
        title: "Advanced Retrieval",
        content: [
          "Advanced retrievers and their configurations",
          "Keyword Table Retriever implementation",
          "Vector Index Retriever techniques",
          "Auto Merging Retriever for complex queries",
        ],
      },
      {
        title: "System Integration",
        content: [
          "Streaming responses with LlamaIndex",
          "Integrating LlamaIndex with LangChain or FastAPI",
          "Adding tool/function calling support using ToolRetriever",
        ],
      },
      {
        title: "Query Optimization",
        content: [
          "Hybrid RAG: Combining keyword + vector + metadata-based search",
          "Query engines with filters and reranking capabilities",
          "Performance optimization for large-scale deployments",
        ],
      },
    ],
  },
  {
    title: "Haystack",
    icon: <FiLayers className="w-6 h-6" />,
    description: "Build production-grade RAG systems with Haystack",
    overview:
      "This module teaches you to implement RAG systems using Haystack, covering pipeline construction, metadata handling, advanced query techniques, and specialized applications including multimodal and agentic implementations.",
    topics: [
      {
        title: "Haystack Fundamentals",
        content: [
          "Introduction to Haystack architecture",
          "Working with Pipelines and components",
        ],
      },
      {
        title: "Core RAG Implementation",
        content: [
          "Building Basic RAG with Haystack",
          "Filtering Documents with Metadata",
          "Improving Retrieval by Embedding Meaningful Metadata",
        ],
      },
      {
        title: "Advanced Techniques",
        content: [
          "Using Hypothetical Document Embedding (HyDE)",
          "Query Decomposition and Reasoning",
          "Query Expansion strategies",
          "Automated Structured Metadata Enrichment",
        ],
      },
      {
        title: "Specialized Applications",
        content: [
          "Classifying Documents & Queries by Language",
          "Building an Agentic RAG with Fallback to Websearch",
          "Creating Vision+Text RAG Pipelines",
          "Evaluating RAG Pipelines for quality and performance",
        ],
      },
    ],
  },
  {
    title: "LangGraph Introduction",
    icon: <FiGitBranch className="w-6 h-6" />,
    description: "Build stateful LLM workflows with LangGraph",
    overview:
      "This module introduces LangGraph for building stateful LLM workflows, covering setup, graph construction, chatbot development, agent architectures, and production-ready features like streaming and human-in-the-loop workflows.",
    topics: [
      {
        title: "Setup & Fundamentals",
        content: [
          "Introduction To LangGraph",
          "Getting Started with LangGraph Application",
          "Creating The Environment",
          "Setting Up API Keys (OpenAI, GROQ, LangSmith)",
        ],
      },
      {
        title: "Core Graph Concepts",
        content: [
          "Developing A Simple Graph or Workflow Using LangGraph",
          "Building Nodes And Edges",
          "StateGraph And Graph Compiling",
          "State Schema With DataClasses and Pydantic",
          "Chain In LangGraph",
          "Routers In LangGraph",
        ],
      },
      {
        title: "Chatbot Development",
        content: [
          "Developing LLM Powered Simple Chatbot Using LangGraph",
          "Tools And ToolNode With Chain Integration",
          "Building Chatbot With Multiple Tools Integration",
        ],
      },
      {
        title: "Advanced Architectures",
        content: [
          "Introduction To Agents And ReAct Agent Architecture",
          "ReAct Agent Architecture Implementation",
          "Agent With Memory In LangGraph",
          "Prompt Chaining and Implementation",
          "Parallelization and Routing",
        ],
      },
      {
        title: "Production Features",
        content: [
          "Streaming In LangGraph",
          "Using astream events with LangGraph",
          "Orchestrator-Worker Pattern",
          "Human In The Loop With LangGraph Workflows",
        ],
      },
    ],
  },
  {
    title: "Enhanced RAG Techniques",
    icon: <FiShield className="w-6 h-6" />,
    description: "Advanced optimization for production RAG systems",
    overview:
      "This module explores professional-grade RAG optimization techniques, covering advanced document processing, hybrid retrieval methods, and query improvement strategies to significantly enhance system performance.",
    topics: [
      {
        title: "Advanced Chunking and Preprocessing",
        content: [
          "Semantic chunking strategies",
          "Sliding window approaches for context",
          "Document hierarchy preservation",
          "Metadata extraction and usage",
        ],
      },
      {
        title: "Hybrid Search Strategies",
        content: [
          "Combining dense and sparse retrieval",
          "BM25 + semantic search integration",
          "Re-ranking techniques for better results",
          "MMR (Maximal Marginal Relevance) for diversity",
        ],
      },
      {
        title: "Query Enhancement",
        content: [
          "Advanced query expansion techniques",
          "Query decomposition methods",
          "Hypothetical document embeddings (HyDE)",
          "Intelligent query routing strategies",
        ],
      },
    ],
  },
  {
    title: "Multi-Modal and Structured RAG",
    icon: <FiFile className="w-6 h-6" />,
    description: "Extend RAG to structured data and multi-modal content",
    overview:
      "This module extends RAG capabilities to structured data and multi-modal content, teaching integration with databases/APIs and techniques for processing mixed-format documents (images, tables, audio/video).",
    topics: [
      {
        title: "Structured Data RAG",
        content: [
          "RAG over SQL databases",
          "Integrating with external APIs",
          "JSON and CSV processing",
          "Knowledge graph integration",
        ],
      },
      {
        title: "Multi-Modal RAG",
        content: [
          "Image and text combined retrieval",
          "Working with PDFs containing images/tables",
          "Audio and video transcript RAG",
          "Cross-modal search strategies",
        ],
      },
    ],
  },
  {
    title: "Conversational and Contextual RAG",
    icon: <FiMessageSquare className="w-6 h-6" />,
    description: "Enhance RAG with conversation and personalization",
    overview:
      "This module enhances RAG systems with conversational memory and personalization capabilities, teaching context management, chat interface development, and user-adaptive retrieval while addressing privacy requirements.",
    topics: [
      {
        title: "Memory Systems for RAG",
        content: [
          "Conversation history management",
          "Context window optimization",
          "Memory summarization techniques",
          "Long-term vs short-term memory strategies",
        ],
      },
      {
        title: "Conversational RAG Implementation",
        content: [
          "Chat-based interfaces for RAG",
          "Context-aware retrieval techniques",
          "Follow-up question handling",
          "Conversation flow management",
        ],
      },
      {
        title: "Personalization in RAG",
        content: [
          "User profiling for RAG systems",
          "Preference-based retrieval methods",
          "Adaptive response generation",
          "Privacy and security considerations",
        ],
      },
    ],
  },
  {
    title: "Agentic RAG Fundamentals",
    icon: <FiCpu className="w-6 h-6" />,
    description: "Build RAG systems with autonomous decision-making",
    overview:
      "This module introduces agentic RAG systems that actively plan and reason, covering core architectures, implementation patterns like ReAct, and multi-step query resolution techniques.",
    topics: [
      {
        title: "Agentic RAG Concepts",
        content: [
          "What makes RAG 'agentic'",
          "Agent architectures overview",
          "Tools and function calling in RAG agents",
          "Decision-making in retrieval systems",
        ],
      },
      {
        title: "Agent Implementation",
        content: [
          "ReAct pattern implementation",
          "Tool creation for RAG agents",
          "Chain-of-thought reasoning",
          "Self-reflection mechanisms",
        ],
      },
      {
        title: "Complex Reasoning",
        content: [
          "Query planning and decomposition",
          "Iterative retrieval strategies",
          "Answer synthesis from multiple sources",
          "Handling ambiguous or conflicting information",
        ],
      },
    ],
  },
  {
    title: "Advanced Agentic RAG",
    icon: <FiShield className="w-6 h-6" />,
    description: "Cutting-edge autonomous RAG systems",
    overview:
      "This module explores advanced agentic RAG implementations, teaching self-optimizing autonomous agents, multi-agent collaboration frameworks, and production-grade orchestration techniques.",
    topics: [
      {
        title: "Autonomous Agents",
        content: [
          "Self-improving retrieval systems",
          "Dynamic tool selection strategies",
          "Adaptive retrieval mechanisms",
          "Learning from user feedback loops",
        ],
      },
      {
        title: "Multi-Agent Systems",
        content: [
          "Specialized agent roles in RAG",
          "Agent communication protocols",
          "Collaborative retrieval and generation",
          "Consensus mechanisms for agents",
        ],
      },
      {
        title: "Production Orchestration",
        content: [
          "Workflow automation in RAG",
          "Complex query handling pipelines",
          "Error recovery strategies",
          "Fallback mechanisms and graceful degradation",
        ],
      },
    ],
  },
  {
    title: "Production RAG Systems",
    icon: <FiCloud className="w-6 h-6" />,
    description: "Professional deployment and scaling of RAG systems",
    overview:
      "This module covers professional RAG deployment, teaching scaling techniques and monitoring practices for maintaining high-performance systems in production environments.",
    topics: [
      {
        title: "Scaling Techniques",
        content: [
          "Caching strategies for RAG systems",
          "Load balancing across multiple instances",
          "Asynchronous processing pipelines",
          "Distributed computing for large-scale RAG",
        ],
      },
      {
        title: "Deployment & Monitoring",
        content: [
          "Container deployment (Docker, Kubernetes)",
          "API design patterns for RAG services",
          "Comprehensive logging and observability",
          "Key performance metrics and monitoring",
        ],
      },
    ],
  },
  {
    title: "Cutting-Edge RAG Techniques",
    icon: <FiZap className="w-6 h-6" />,
    description: "Frontier innovations in RAG technology",
    overview:
      "This module explores frontier RAG innovations including self-correcting retrieval systems, knowledge graph integration, and specialized fine-tuning approaches for optimal performance.",
    topics: [
      {
        title: "Self-RAG & Adaptive Retrieval",
        content: [
          "Retrieval confidence scoring",
          "Dynamic retrieval decisions",
          "Self-critique mechanisms",
          "Adaptive chunk sizing strategies",
        ],
      },
      {
        title: "Graph RAG",
        content: [
          "Building knowledge graphs from documents",
          "Graph-based retrieval techniques",
          "Entity linking and resolution",
          "Reasoning over graph structures",
        ],
      },
      {
        title: "Fine-Tuning Strategies",
        content: [
          "Retriever model fine-tuning",
          "Reader model optimization",
          "End-to-end RAG training",
          "Domain adaptation techniques",
        ],
      },
    ],
  },
  {
    title: "Model Context Protocol (MCP)",
    icon: <FiGitBranch className="w-6 h-6" />,
    description: "Master the Model Context Protocol for AI integration",
    overview:
      "This module covers Model Context Protocol from theory to implementation, including core architecture, existing integrations, and custom server development.",
    topics: [
      {
        title: "MCP Fundamentals",
        content: [
          "Introduction to Model Context Protocol",
          "Important components of MCP",
          "Communication between components of MCP",
          "Protocol architecture and design principles",
        ],
      },
      {
        title: "MCP Implementations",
        content: [
          "Demo of MCP with Claude Desktop",
          "Cursor IDE MCP integration",
          "Claude Desktop with MCP",
          "Exploring MCP repositories like Smithery.ai",
        ],
      },
      {
        title: "Advanced Development",
        content: [
          "Building MCP servers from scratch",
          "Using LangChain with MCP",
          "Docker MCP catalog and toolkit",
          "Custom tool and client development",
        ],
      },
    ],
  },
  {
    title: "End-to-End Projects",
    icon: <FiCode className="w-6 h-6" />,
    description: "Build five progressive RAG projects from basic to advanced",
    overview:
      "Through these five progressive projects, you'll evolve from building basic RAG systems to implementing advanced multimodal and agentic workflows. Starting with containerized Q&A pipelines (Project 1), you'll scale to persistent multi-format retrieval (Project 2), implement hybrid search (Project 3), tackle multimodal challenges (Project 4), and integrate MCP for contextual code analysis (Project 5).",
    topics: [
      {
        title: "Project 1: Basic RAG Q&A System",
        content: [
          "Stack: FastAPI, Python 3.12, OpenAI GPT-5, FAISS, LangChain",
          "Key Learnings: Basic RAG pipeline, Git workflow, CI/CD, Docker basics",
          "Deliverables: Dockerized FastAPI app, GitHub repo with CI/CD, Test suite",
        ],
      },
      {
        title: "Project 2: Multi-Source RAG with Vector DB",
        content: [
          "Stack: FastAPI, ChromaDB, SentenceTransformers, Unstructured.io",
          "Key Learnings: Persistent vector storage, Multi-format processing",
          "Deliverables: Document ingestion API, Docker Compose setup",
        ],
      },
      {
        title: "Project 3: Hybrid Search RAG",
        content: [
          "Stack: Weaviate, Elasticsearch, BGE embeddings, Cohere reranker",
          "Key Learnings: BM25 + semantic search, Advanced chunking, Kubernetes",
          "Deliverables: Hybrid search API with optimized retrieval",
        ],
      },
      {
        title: "Project 4: Multimodal RAG",
        content: [
          "Stack: GPT-4 Vision/Claude, Milvus, CLIP, Whisper, AWS S3/EKS",
          "Key Learnings: Multimodal embedding, Cross-modal retrieval, AWS cloud",
          "Deliverables: Multimodal search interface, AWS EKS deployment",
        ],
      },
      {
        title: "Project 5: Code Review Assistant with MCP",
        content: [
          "Stack: LangChain, ChromaDB, MCP Servers, OpenAI/Claude 3.5, Docker",
          "Key Learnings: MCP server integration, Code-aware RAG, Context-aware debugging",
          "Deliverables: Code review assistant with MCP context awareness",
        ],
      },
    ],
  },
];
