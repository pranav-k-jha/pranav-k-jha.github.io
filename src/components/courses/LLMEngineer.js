export const llmEngineer = [
  {
    id: 1,
    title: "Running LLMs",
    description:
      "Running LLMs can be difficult due to high hardware requirements. Depending on your use case, you might want to simply consume a model through an API (like GPT-4) or run it locally. In any case, additional prompting and guidance techniques can improve and constrain the output for your applications.",
    topics: [
      {
        name: "LLM APIs",
        details:
          "APIs are a convenient way to deploy LLMs. This space is divided between private LLMs (OpenAI, Google, Anthropic, etc.) and open-source LLMs (OpenRouter, Hugging Face, Together AI, etc.).",
        urls: [
          "https://platform.openai.com/",
          "https://cloud.google.com/vertex-ai/docs/generative-ai/learn/overview",
          "https://docs.anthropic.com/claude/reference/getting-started-with-the-api",
          "https://openrouter.ai/",
          "https://huggingface.co/inference-api",
          "https://www.together.ai/",
        ],
      },
      {
        name: "Open-source LLMs",
        details:
          "The Hugging Face Hub is a great place to find LLMs. You can directly run some of them in Hugging Face Spaces, or download and run them locally in apps like LM Studio or through the CLI with llama.cpp or ollama.",
        urls: [
          "https://huggingface.co/models",
          "https://huggingface.co/spaces",
          "https://lmstudio.ai/",
          "https://github.com/ggerganov/llama.cpp",
          "https://ollama.ai/",
        ],
      },
      {
        name: "Prompt engineering",
        details:
          "Common techniques include zero-shot prompting, few-shot prompting, chain of thought, and ReAct. They work better with bigger models, but can be adapted to smaller ones.",
      },
      {
        name: "Structuring outputs",
        details:
          "Many tasks require a structured output, like a strict template or a JSON format. Libraries like Outlines can be used to guide the generation and respect a given structure. Some APIs also support structured output generation natively using JSON schemas.",
        urls: ["https://github.com/outlines-dev/outlines"],
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
      "Creating a vector storage is the first step to building a Retrieval Augmented Generation (RAG) pipeline. Documents are loaded, split, and relevant chunks are used to produce vector representations (embeddings) that are stored for future use during inference.",
    topics: [
      {
        name: "Ingesting documents",
        details:
          "Document loaders are convenient wrappers that can handle many formats: PDF, JSON, HTML, Markdown, etc. They can also directly retrieve data from some databases and APIs (GitHub, Reddit, Google Drive, etc.).",
      },
      {
        name: "Splitting documents",
        details:
          "Text splitters break down documents into smaller, semantically meaningful chunks. Instead of splitting text after n characters, it's often better to split by header or recursively, with some additional metadata.",
      },
      {
        name: "Embedding models",
        details:
          "Embedding models convert text into vector representations. Picking task-specific models significantly improves performance for semantic search and RAG.",
      },
      {
        name: "Vector databases",
        details:
          "Vector databases (like Chroma, Pinecone, Milvus, FAISS, Annoy, etc.) are designed to store embedding vectors. They enable efficient retrieval of data that is 'most similar' to a query based on vector similarity.",
        urls: [
          "https://www.trychroma.com/",
          "https://www.pinecone.io/",
          "https://milvus.io/",
          "https://faiss.ai/",
          "https://github.com/spotify/annoy",
        ],
      },
    ],
    resources: [
      {
        name: "LangChain - Text splitters",
        url: "https://python.langchain.com/docs/how_to/#text-splitters",
      },
      { name: "Sentence Transformers library", url: "https://www.sbert.net/" },
      {
        name: "MTEB Leaderboard",
        url: "https://huggingface.co/spaces/mteb/leaderboard",
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
      "With RAG, LLMs retrieve contextual documents from a database to improve the accuracy of their answers. RAG is a popular way of augmenting the model's knowledge without any fine-tuning.",
    topics: [
      {
        name: "Orchestrators",
        details:
          "Orchestrators like LangChain and LlamaIndex are popular frameworks to connect your LLMs with tools and databases. The Model Context Protocol (MCP) introduces a new standard to pass data and context to models across providers.",
        urls: [
          "https://python.langchain.com/docs/get_started/introduction",
          "https://docs.llamaindex.ai/en/stable/",
          "https://modelcontextprotocol.io/introduction",
        ],
      },
      {
        name: "Retrievers",
        details:
          "Query rewriters and generative retrievers like CoRAG and HyDE enhance search by transforming user queries. Multi-vector and hybrid retrieval methods combine embeddings with keyword signals to improve recall and precision.",
      },
      {
        name: "Memory",
        details:
          "To remember previous instructions and answers, LLMs and chatbots like ChatGPT add this history to their context window. This buffer can be improved with summarization (e.g., using a smaller LLM), a vector store + RAG, etc.",
      },
      {
        name: "Evaluation",
        details:
          "We need to evaluate both the document retrieval (context precision and recall) and generation stages (faithfulness and answer relevancy). It can be simplified with tools Ragas and DeepEval (assessing quality).",
        urls: [
          "https://github.com/explodinggradients/ragas/tree/main",
          "https://github.com/confident-ai/deepeval",
        ],
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
      "Real-life applications can require complex pipelines, including SQL or graph databases, as well as automatically selecting relevant tools and APIs. These advanced techniques can improve a baseline solution and provide additional features.",
    topics: [
      {
        name: "Query construction",
        details:
          "Structured data stored in traditional databases requires a specific query language like SQL, Cypher, metadata, etc. We can directly translate the user instruction into a query to access the data with query construction.",
      },
      {
        name: "Tools",
        details:
          "Agents augment LLMs by automatically selecting the most relevant tools to provide an answer. These tools can be as simple as using Google or Wikipedia, or more complex like a Python interpreter or Jira.",
        urls: [
          "https://www.pinecone.io/learn/series/langchain/langchain-agents/",
          "https://lilianweng.github.io/posts/2023-06-23-agent/",
        ],
      },
      {
        name: "Post-processing",
        details:
          "Final step that processes the inputs that are fed to the LLM. It enhances the relevance and diversity of documents retrieved with re-ranking, RAG-fusion, and classification.",
        urls: ["https://github.com/Raudaschl/rag-fusion"],
      },
      {
        name: "Program LLMs",
        details:
          "Frameworks like DSPy allow you to optimize prompts and weights based on automated evaluations in a programmatic way.",
        urls: [
          "https://github.com/stanfordnlp/dspy",
          "https://dspy-docs.vercel.app/docs/building-blocks/solving_your_task",
        ],
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
        name: "LangChain - OpenAI's RAG",
        url: "https://blog.langchain.dev/applying-openai-rag/",
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
      "An LLM agent can autonomously perform tasks by taking actions based on reasoning about its environment, typically through the use of tools or functions to interact with external systems.",
    topics: [
      {
        name: "Agent fundamentals",
        details:
          "Agents operate using thoughts (internal reasoning to decide what to do next), action (executing tasks, often by interacting with external tools), and observation (analyzing feedback or results to refine the next step).",
      },
      {
        name: "Agent frameworks",
        details:
          "Agent development can be streamlined using different frameworks like LangGraph (design and visualization of workflows), LlamaIndex (data-augmented agents with RAG), or smolagents (beginner-friendly, lightweight option).",
        urls: [
          "https://www.langchain.com/langgraph",
          "https://docs.llamaindex.ai/en/stable/use_cases/agents/",
          "https://github.com/huggingface/smolagents",
        ],
      },
      {
        name: "Multi-agents",
        details:
          "More experimental frameworks include collaboration between different agents, such as CrewAI (role-based team orchestration), AutoGen (conversation-driven multi-agent systems), and OpenAI Agents SDK (production-ready with strong OpenAI model integration).",
        urls: [
          "https://docs.crewai.com/introduction",
          "https://github.com/microsoft/autogen",
          "https://github.com/openai/openai-agents-python",
        ],
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
      "Text generation is a costly process that requires expensive hardware. In addition to quantization, various techniques have been proposed to maximize throughput and reduce inference costs.",
    topics: [
      {
        name: "Flash Attention",
        details:
          "Optimization of the attention mechanism to transform its complexity from quadratic to linear, speeding up both training and inference.",
      },
      {
        name: "Key-value cache",
        details:
          "Understand the key-value cache and the improvements introduced in Multi-Query Attention (MQA) and Grouped-Query Attention (GQA).",
        urls: [
          "https://arxiv.org/abs/1911.02150",
          "https://arxiv.org/abs/2305.13245",
        ],
      },
      {
        name: "Speculative decoding",
        details:
          "Use a small model to produce drafts that are then reviewed by a larger model to speed up text generation.",
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
      "Deploying LLMs at scale is an engineering feat that can require multiple clusters of GPUs. In other scenarios, demos and local apps can be achieved with a much lower complexity.",
    topics: [
      {
        name: "Local deployment",
        details:
          "Privacy is an important advantage that open-source LLMs have over private ones. Local LLM servers (LM Studio, Ollama, oobabooga, kobold.cpp, etc.) capitalize on this advantage to power local apps.",
        urls: [
          "https://lmstudio.ai/",
          "https://ollama.ai/",
          "https://github.com/oobabooga/text-generation-webui",
          "https://github.com/LostRuins/koboldcpp",
        ],
      },
      {
        name: "Demo deployment",
        details:
          "Frameworks like Gradio and Streamlit are helpful to prototype applications and share demos. You can also easily host them online using Hugging Face Spaces.",
        urls: [
          "https://www.gradio.app/",
          "https://docs.streamlit.io/",
          "https://huggingface.co/spaces",
        ],
      },
      {
        name: "Server deployment",
        details:
          "Deploy LLMs at scale requires cloud (SkyPilot) or on-prem infrastructure and often leverages optimized text generation frameworks like TGI or vLLM.",
        urls: [
          "https://skypilot.readthedocs.io/en/latest/",
          "https://github.com/huggingface/text-generation-inference",
          "https://github.com/vllm-project/vllm/tree/main",
        ],
      },
      {
        name: "Edge deployment",
        details:
          "High-performance frameworks like MLC LLM and mnn-llm can deploy LLMs in web browsers, Android, and iOS for constrained environments.",
        urls: [
          "https://github.com/mlc-ai/mlc-llm",
          "https://github.com/wangzhaode/mnn-llm/blob/master/README_en.md",
        ],
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
      "In addition to traditional security problems associated with software, LLMs have unique weaknesses due to the way they are trained and prompted.",
    topics: [
      {
        name: "Prompt hacking",
        details:
          "Different techniques related to prompt engineering, including prompt injection (additional instruction to hijack the model's answer), data/prompt leaking (retrieve its original data/prompt), and jailbreaking (craft prompts to bypass safety features).",
      },
      {
        name: "Backdoors",
        details:
          "Attack vectors can target the training data itself, by poisoning the training data or creating backdoors (secret triggers to change the model's behavior during inference).",
      },
      {
        name: "Defensive measures",
        details:
          "The best way to protect your LLM applications is to test them against these vulnerabilities (e.g., using red teaming and checks like garak) and observe them in production (with a framework like langfuse).",
        urls: [
          "https://github.com/leondz/garak/",
          "https://github.com/langfuse/langfuse",
        ],
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
];
