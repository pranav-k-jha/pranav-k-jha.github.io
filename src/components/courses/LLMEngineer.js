export const llmEngineer = {
  title: "The LLM Engineer",
  intro:
    "This course focuses on building and deploying production-grade LLM applications. Learn to optimize, scale, and maintain LLM applications with industry best practices.",
  sections: [
    {
      id: 1,
      title: "Running LLMs",
      description:
        "Running LLMs can be difficult due to high hardware requirements. You may use APIs or run models locally. Prompting and guidance techniques improve outputs.",
      topics: [
        {
          name: "LLM APIs",
          details:
            "APIs are a convenient way to deploy LLMs. This space is divided between private LLMs (OpenAI, Google, Anthropic, etc.) and open-source LLMs (OpenRouter, Hugging Face, Together AI, etc.).",
        },
        {
          name: "Open-source LLMs",
          details:
            "Hugging Face Hub is a great place to find LLMs. You can run some in Hugging Face Spaces or download and run locally in apps like LM Studio or via CLI with llama.cpp or ollama.",
        },
        {
          name: "Prompt engineering",
          details:
            "Common techniques include zero-shot prompting, few-shot prompting, chain of thought, and ReAct. Work better with bigger models but can be adapted to smaller ones.",
        },
        {
          name: "Structuring outputs",
          details:
            "Many tasks require structured output like strict templates or JSON format. Libraries like Outlines help guide generation. Some APIs support structured output with JSON schemas.",
        },
      ],
      resources: [
        {
          name: "Run an LLM locally with LM Studio",
          url: "https://www.kdnuggets.com/run-an-llm-locally-with-lm-studio",
        },
        {
          name: "Prompt engineering guide",
          url: "https://www.promptingguide.ai/",
        },
        {
          name: "Outlines - Quickstart",
          url: "https://dottxt-ai.github.io/outlines/latest/quickstart/",
        },
        {
          name: "LMQL - Overview",
          url: "https://lmql.ai/docs/language/overview.html",
        },
      ],
    },
    {
      id: 2,
      title: "Building a Vector Storage",
      description:
        "Creating a vector storage is the first step for a Retrieval Augmented Generation (RAG) pipeline. Documents are chunked, embedded, and stored for efficient retrieval.",
      topics: [
        {
          name: "Ingesting documents",
          details:
            "Document loaders handle many formats: PDF, JSON, HTML, Markdown, etc. They can also fetch data from databases and APIs like GitHub, Reddit, Google Drive, etc.",
        },
        {
          name: "Splitting documents",
          details:
            "Text splitters break documents into smaller, semantically meaningful chunks. Can split by header or recursively with metadata, instead of just by character count.",
        },
        {
          name: "Embedding models",
          details:
            "Embedding models convert text into vector representations. Task-specific models significantly improve semantic search and RAG performance.",
        },
        {
          name: "Vector databases",
          details:
            "Vector databases (Chroma, Pinecone, Milvus, FAISS, Annoy, etc.) store embedding vectors for efficient retrieval based on similarity.",
        },
      ],
      resources: [
        {
          name: "LangChain - Text splitters",
          url: "https://python.langchain.com/docs/how_to/#text-splitters",
        },
        {
          name: "Sentence Transformers library",
          url: "https://www.sbert.net/",
        },
        {
          name: "The Top 7 Vector Databases",
          url: "https://www.datacamp.com/blog/the-top-5-vector-databases",
        },
      ],
    },
    {
      id: 3,
      title: "Retrieval Augmented Generation",
      description:
        "RAG allows LLMs to retrieve contextual documents from a database, improving answer accuracy without fine-tuning.",
      topics: [
        {
          name: "Orchestrators",
          details:
            "Frameworks like LangChain and LlamaIndex connect LLMs with tools and databases. MCP introduces a standard to pass context across providers.",
        },
        {
          name: "Retrievers",
          details:
            "Query rewriters and generative retrievers like CoRAG and HyDE enhance search. Multi-vector and hybrid methods combine embeddings with keywords for better recall and precision.",
        },
        {
          name: "Memory",
          details:
            "To remember past instructions and answers, LLMs use history in their context window. Can be improved with summarization, vector store + RAG, etc.",
        },
        {
          name: "Evaluation",
          details:
            "Evaluate document retrieval (precision/recall) and generation (faithfulness/relevance). Tools like Ragas and DeepEval simplify this process.",
        },
      ],
      resources: [
        {
          name: "Llamaindex - High-level concepts",
          url: "https://docs.llamaindex.ai/en/stable/getting_started/concepts.html",
        },
        {
          name: "Model Context Protocol",
          url: "https://modelcontextprotocol.io/introduction",
        },
        {
          name: "Pinecone - Retrieval Augmentation",
          url: "https://www.pinecone.io/learn/series/langchain/langchain-retrieval-augmentation/",
        },
        {
          name: "LangChain - Q&A with RAG",
          url: "https://python.langchain.com/docs/tutorials/rag/",
        },
        {
          name: "LangChain - Memory types",
          url: "https://python.langchain.com/docs/how_to/chatbots_memory/",
        },
        {
          name: "RAG pipeline - Metrics",
          url: "https://docs.ragas.io/en/stable/concepts/metrics/index.html",
        },
      ],
    },
    {
      id: 4,
      title: "Advanced RAG",
      description:
        "Complex RAG pipelines include SQL/graph databases, tool selection, and post-processing to enhance baseline solutions.",
      topics: [
        {
          name: "Query construction",
          details:
            "Structured data requires query languages like SQL, Cypher, metadata, etc. Translate user instructions into queries to access data.",
        },
        {
          name: "Tools",
          details:
            "Agents automatically select relevant tools for answers. Can be simple (Google, Wikipedia) or complex (Python interpreter, Jira).",
        },
        {
          name: "Post-processing",
          details:
            "Processes inputs to improve relevance/diversity with re-ranking, RAG-fusion, and classification.",
        },
        {
          name: "Program LLMs",
          details:
            "Frameworks like DSPy optimize prompts and weights programmatically based on automated evaluations.",
        },
      ],
      resources: [
        {
          name: "LangChain - Query Construction",
          url: "https://blog.langchain.dev/query-construction/",
        },
        {
          name: "LangChain - SQL",
          url: "https://python.langchain.com/docs/tutorials/sql_qa/",
        },
        {
          name: "Pinecone - LLM agents",
          url: "https://www.pinecone.io/learn/series/langchain/langchain-agents/",
        },
        {
          name: "LLM Powered Autonomous Agents",
          url: "https://lilianweng.github.io/posts/2023-06-23-agent/",
        },
        {
          name: "DSPy in 8 Steps",
          url: "https://dspy-docs.vercel.app/docs/building-blocks/solving_your_task",
        },
      ],
    },
    {
      id: 5,
      title: "Agents",
      description:
        "LLM agents autonomously perform tasks using reasoning, actions, and observations, often integrating external tools or systems.",
      topics: [
        {
          name: "Agent fundamentals",
          details:
            "Agents operate using thoughts (internal reasoning), actions (executing tasks via tools), and observations (analyzing results to refine next steps).",
        },
        {
          name: "Agent frameworks",
          details:
            "Frameworks like LangGraph (workflow visualization), LlamaIndex (data-augmented agents with RAG), and smolagents (lightweight beginner-friendly) streamline agent development.",
        },
        {
          name: "Multi-agents",
          details:
            "Experimental setups enable collaboration between agents, e.g., CrewAI (role-based orchestration), AutoGen (conversation-driven multi-agent systems), OpenAI Agents SDK (production-ready with strong OpenAI integration).",
        },
      ],
      resources: [
        {
          name: "Agents Course",
          url: "https://huggingface.co/learn/agents-course/unit0/introduction",
        },
        {
          name: "AI Agents Comparison",
          url: "https://langfuse.com/blog/2025-03-19-ai-agent-comparison",
        },
        {
          name: "LangGraph",
          url: "https://langchain-ai.github.io/langgraph/concepts/why-langgraph/",
        },
        {
          name: "LlamaIndex Agents",
          url: "https://docs.llamaindex.ai/en/stable/use_cases/agents/",
        },
        {
          name: "smolagents",
          url: "https://huggingface.co/docs/smolagents/index",
        },
      ],
    },
    {
      id: 6,
      title: "Inference optimization",
      description:
        "Techniques to maximize throughput and reduce costs for LLM inference, improving speed and efficiency of text generation.",
      topics: [
        {
          name: "Flash Attention",
          details:
            "Optimizes the attention mechanism, reducing complexity from quadratic to linear, speeding up training and inference.",
        },
        {
          name: "Key-value cache",
          details:
            "Understand KV caching and improvements with Multi-Query Attention (MQA) and Grouped-Query Attention (GQA).",
        },
        {
          name: "Speculative decoding",
          details:
            "Use a smaller model to produce draft outputs that are then reviewed by a larger model to accelerate text generation.",
        },
      ],
      resources: [
        {
          name: "GPU Inference",
          url: "https://huggingface.co/docs/transformers/main/en/perf_infer_gpu_one",
        },
        {
          name: "LLM Inference",
          url: "https://www.databricks.com/blog/llm-inference-performance-engineering-best-practices",
        },
        {
          name: "Optimizing LLMs for Speed and Memory",
          url: "https://huggingface.co/docs/transformers/main/en/llm_tutorial_optimization",
        },
        {
          name: "Assisted Generation",
          url: "https://huggingface.co/blog/assisted-generation",
        },
      ],
    },
    {
      id: 7,
      title: "Deploying LLMs",
      description:
        "Techniques for deploying LLMs locally, in demos, on servers, or at the edge, balancing scale, performance, and accessibility.",
      topics: [
        {
          name: "Local deployment",
          details:
            "Run open-source LLMs on local servers for privacy and control using LM Studio, Ollama, oobabooga, kobold.cpp, etc.",
        },
        {
          name: "Demo deployment",
          details:
            "Prototype and share applications using frameworks like Gradio and Streamlit, easily hosting on Hugging Face Spaces.",
        },
        {
          name: "Server deployment",
          details:
            "Deploy at scale with cloud or on-prem infrastructure, leveraging frameworks like TGI and vLLM for optimized text generation.",
        },
        {
          name: "Edge deployment",
          details:
            "Deploy LLMs in constrained environments such as browsers or mobile devices using frameworks like MLC LLM and mnn-llm.",
        },
      ],
      resources: [
        {
          name: "Streamlit - Build a basic LLM app",
          url: "https://docs.streamlit.io/knowledge-base/tutorials/build-conversational-apps",
        },
        {
          name: "HF LLM Inference Container",
          url: "https://huggingface.co/blog/sagemaker-huggingface-llm",
        },
        { name: "Philschmid blog", url: "https://www.philschmid.de/" },
        {
          name: "Optimizing latence",
          url: "https://hamel.dev/notes/llm/inference/03_inference.html",
        },
      ],
    },
    {
      id: 8,
      title: "Securing LLMs",
      description:
        "Unique LLM security challenges and defensive measures to protect applications from attacks like prompt injection and backdoors.",
      topics: [
        {
          name: "Prompt hacking",
          details:
            "Techniques like prompt injection, data/prompt leaking, and jailbreaking that attempt to manipulate or bypass model safety features.",
        },
        {
          name: "Backdoors",
          details:
            "Attack vectors targeting training data through poisoning or secret triggers that alter model behavior during inference.",
        },
        {
          name: "Defensive measures",
          details:
            "Test models against vulnerabilities with red teaming, garak, and observe them in production using frameworks like langfuse.",
        },
      ],
      resources: [
        {
          name: "OWASP LLM Top 10",
          url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        },
        {
          name: "Prompt Injection Primer",
          url: "https://github.com/jthack/PIPE",
        },
        { name: "LLM Security", url: "https://llmsecurity.net/" },
        {
          name: "Red teaming LLMs",
          url: "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/red-teaming",
        },
      ],
    },
  ],
};
