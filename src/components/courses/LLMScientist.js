export const llmScientist = [
  {
    id: 1,
    title: "The LLM architecture",
    description:
      "An in-depth knowledge of the Transformer architecture is not required, but it's important to understand the main steps of modern LLMs: converting text into numbers through tokenization, processing these tokens through layers including attention mechanisms, and finally generating new text through various sampling strategies.",
    topics: [
      {
        name: "Architectural Overview",
        details:
          "Understand the evolution from encoder-decoder Transformers to decoder-only architectures like GPT, which form the basis of modern LLMs. Focus on how these models process and generate text at a high level.",
      },
      {
        name: "Tokenization",
        details:
          "Learn the principles of tokenization - how text is converted into numerical representations that LLMs can process. Explore different tokenization strategies and their impact on model performance and output quality.",
      },
      {
        name: "Attention mechanisms",
        details:
          "Master the core concepts of attention mechanisms, particularly self-attention and its variants. Understand how these mechanisms enable LLMs to process long-range dependencies and maintain context throughout sequences.",
      },
      {
        name: "Sampling techniques",
        details:
          "Explore various text generation approaches and their tradeoffs. Compare deterministic methods like greedy search and beam search with probabilistic approaches like temperature sampling and nucleus sampling.",
      },
    ],
    resources: [
      {
        name: "Visual intro to Transformers",
        url: "https://www.youtube.com/watch?v=wjZofJX0v4M",
      },
      { name: "LLM Visualization", url: "https://bbycroft.net/llm" },
      { name: "nanoGPT", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" },
      {
        name: "Attention? Attention!",
        url: "https://lilianweng.github.io/posts/2018-06-24-attention/",
      },
      {
        name: "Decoding Strategies in LLMs",
        url: "https://mlabonne.github.io/blog/posts/2023-06-07-Decoding_strategies.html",
      },
    ],
  },
  {
    id: 2,
    title: "Pre-training models",
    description:
      "Pre-training is a computationally intensive and expensive process. While it's not the focus of this course, it's important to have a solid understanding of how models are pre-trained, especially in terms of data and parameters. Pre-training can also be performed by hobbyists at a small scale with <1B models.",
    topics: [
      {
        name: "Data preparation",
        details:
          "Pre-training requires massive datasets (e.g., Llama 3.1 was trained on 15 trillion tokens) that need careful curation, cleaning, deduplication, and tokenization. Modern pre-training pipelines implement sophisticated filtering to remove low-quality or problematic content.",
      },
      {
        name: "Distributed training",
        details:
          "Combine different parallelization strategies: data parallel (batch distribution), pipeline parallel (layer distribution), and tensor parallel (operation splitting). These strategies require optimized network communication and memory management across GPU clusters.",
      },
      {
        name: "Training optimization",
        details:
          "Use adaptive learning rates with warm-up, gradient clipping, and normalization to prevent explosions, mixed-precision training for memory efficiency, and modern optimizers (AdamW, Lion) with tuned hyperparameters.",
      },
      {
        name: "Monitoring",
        details:
          "Track key metrics (loss, gradients, GPU stats) using dashboards, implement targeted logging for distributed training issues, and set up performance profiling to identify bottlenecks in computation and communication across devices.",
      },
    ],
    resources: [
      {
        name: "FineWeb",
        url: "https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1",
      },
      {
        name: "RedPajama v2",
        url: "https://www.together.ai/blog/redpajama-data-v2",
      },
      { name: "nanotron", url: "https://github.com/huggingface/nanotron" },
      {
        name: "Parallel training",
        url: "https://www.andrew.cmu.edu/course/11-667/lectures/W10L2%20Scaling%20Up%20Parallel%20Training.pdf",
      },
      { name: "Distributed training", url: "https://arxiv.org/abs/2407.20018" },
      { name: "OLMo 2", url: "https://allenai.org/olmo" },
      { name: "LLM360", url: "https://www.llm360.ai/" },
    ],
  },
  {
    id: 3,
    title: "Post-training datasets",
    description:
      "Post-training datasets have a precise structure with instructions and answers (supervised fine-tuning) or instructions and chosen/rejected answers (preference alignment). Conversational structures are a lot rarer than the raw text used for pre-training, which is why we often need to process seed data and refine it to improve the accuracy, diversity, and complexity of the samples. More information and examples are available in my repo 💾 LLM Datasets.",
    topics: [
      {
        name: "Storage & chat templates",
        details:
          "Because of the conversational structure, post-training datasets are stored in a specific format like ShareGPT or OpenAI/HF. Then, these formats are mapped to a chat template like ChatML or Alpaca to produce the final samples the model is trained on.",
      },
      {
        name: "Synthetic data generation",
        details:
          "Create instruction-response pairs based on seed data using frontier models like GPT-4o. This approach allows for flexible and scalable dataset creation with high-quality answers. Key considerations include designing diverse seed tasks and effective system prompts.",
      },
      {
        name: "Data enhancement",
        details:
          "Enhance existing samples using techniques like verified outputs (using unit tests or solvers), multiple answers with rejection sampling, Auto-Evol, Chain-of-Thought, Branch-Solve-Merge, personas, etc.",
      },
      {
        name: "Quality filtering",
        details:
          "Traditional techniques involve rule-based filtering, removing duplicates or near-duplicates (with MinHash or embeddings), and n-gram decontamination. Reward models and judge LLMs complement this step with fine-grained and customizable quality control.",
      },
    ],
    resources: [
      {
        name: "Synthetic Data Generator",
        url: "https://huggingface.co/spaces/argilla/synthetic-data-generator",
      },
      { name: "LLM Datasets", url: "https://github.com/mlabonne/llm-datasets" },
      { name: "NeMo-Curator", url: "https://github.com/NVIDIA/NeMo-Curator" },
      {
        name: "Distilabel",
        url: "https://distilabel.argilla.io/dev/sections/pipeline_samples/",
      },
      { name: "Semhash", url: "https://github.com/MinishLab/semhash" },
      {
        name: "Chat Template",
        url: "https://huggingface.co/docs/transformers/main/en/chat_templating",
      },
    ],
  },
  {
    id: 4,
    title: "Supervised Fine-Tuning",
    description:
      "SFT turns base models into helpful assistants, capable of answering questions and following instructions. During this process, they learn how to structure answers and reactivate a subset of knowledge learned during pre-training. Instilling new knowledge is possible but superficial: it cannot be used to learn a completely new language. Always prioritize data quality over parameter optimization.",
    topics: [
      {
        name: "Training techniques",
        details:
          "Full fine-tuning updates all model parameters but requires significant compute. Parameter-efficient fine-tuning techniques like LoRA and QLoRA reduce memory requirements by training a small number of adapter parameters while keeping base weights frozen. QLoRA combines 4-bit quantization with LoRA to reduce VRAM usage. These techniques are all implemented in the most popular fine-tuning frameworks: TRL, Unsloth, and Axolotl.",
      },
      {
        name: "Training parameters",
        details:
          "Key parameters include learning rate with schedulers, batch size, gradient accumulation, number of epochs, optimizer (like 8-bit AdamW), weight decay for regularization, and warmup steps for training stability. LoRA also adds three parameters: rank (typically 16-128), alpha (1-2x rank), and target modules.",
      },
      {
        name: "Distributed training",
        details:
          "Scale training across multiple GPUs using DeepSpeed or FSDP. DeepSpeed provides three ZeRO optimization stages with increasing levels of memory efficiency through state partitioning. Both methods support gradient checkpointing for memory efficiency.",
      },
      {
        name: "Monitoring",
        details:
          "Track training metrics including loss curves, learning rate schedules, and gradient norms. Monitor for common issues like loss spikes, gradient explosions, or performance degradation.",
      },
    ],
    resources: [
      {
        name: "Fine-tune Llama 3.1 Ultra-Efficiently with Unsloth",
        url: "https://huggingface.co/blog/mlabonne/sft-llama3",
      },
      {
        name: "Axolotl - Documentation",
        url: "https://axolotl-ai-cloud.github.io/axolotl/",
      },
      { name: "Mastering LLMs", url: "https://parlance-labs.com/education/" },
      {
        name: "LoRA insights",
        url: "https://lightning.ai/pages/community/lora-insights/",
      },
    ],
  },
  {
    id: 5,
    title: "Preference Alignment",
    description:
      "Preference alignment is a second stage in the post-training pipeline, focused on aligning generated answers with human preferences. This stage was designed to tune the tone of LLMs and reduce toxicity and hallucinations. However, it has become increasingly important to also boost their performance and improve usefulness. Unlike SFT, there are many preference alignment algorithms. Here, we'll focus on the three most important ones: DPO, GRPO, and PPO.",
    topics: [
      {
        name: "Rejection sampling",
        details:
          "For each prompt, use the trained model to generate multiple responses, and score them to infer chosen/rejected answers. This creates on-policy data, where both responses come from the model being trained, improving alignment stability.",
      },
      {
        name: "Direct Preference Optimization",
        details:
          "Directly optimizes the policy to maximize the likelihood of chosen responses over rejected ones. It doesn't require reward modeling, which makes it more computationally efficient than RL techniques but slightly worse in terms of quality. Great for creating chat models.",
        url: "https://arxiv.org/abs/2305.18290",
      },
      {
        name: "Reward model",
        details:
          "Train a reward model with human feedback to predict metrics like human preferences. It can leverage frameworks like TRL, verl, and OpenRLHF for scalable training.",
        urls: [
          "https://huggingface.co/docs/trl/en/index",
          "https://github.com/volcengine/verl",
          "https://github.com/OpenRLHF/OpenRLHF",
        ],
      },
      {
        name: "Reinforcement Learning",
        details:
          "RL techniques like GRPO and PPO iteratively update a policy to maximize rewards while staying close to the initial behavior. They can use a reward model or reward functions to score responses. They tend to be computationally expensive and require careful tuning of hyperparameters, including learning rate, batch size, and clip range. Ideal for creating reasoning models.",
        urls: [
          "https://arxiv.org/abs/2402.03300",
          "https://arxiv.org/abs/1707.06347",
        ],
      },
    ],
    resources: [
      { name: "Illustrating RLHF", url: "https://huggingface.co/blog/rlhf" },
      {
        name: "LLM Training: RLHF and Its Alternatives",
        url: "https://magazine.sebastianraschka.com/p/llm-training-rlhf-and-its-alternatives",
      },
      {
        name: "Preference Tuning LLMs",
        url: "https://huggingface.co/blog/pref-tuning",
      },
      {
        name: "Fine-tune with DPO",
        url: "https://mlabonne.github.io/blog/posts/Fine_tune_Mistral_7b_with_DPO.html",
      },
      {
        name: "Fine-tune with GRPO",
        url: "https://huggingface.co/learn/llm-course/en/chapter12/5",
      },
      {
        name: "DPO Wandb logs",
        url: "https://wandb.ai/alexander-vishnevskiy/dpo/reports/TRL-Original-DPO--Vmlldzo1NjI4MTc4",
      },
    ],
  },
  {
    id: 6,
    title: "Evaluation",
    description:
      "Reliably evaluating LLMs is a complex but essential task guiding data generation and training. It provides invaluable feedback about areas of improvement, which can be leveraged to modify the data mixture, quality, and training parameters. However, it's always good to remember Goodhart's law: 'When a measure becomes a target, it ceases to be a good measure.'",
    topics: [
      {
        name: "Automated benchmarks",
        details:
          "Evaluate models on specific tasks using curated datasets and metrics, like MMLU. It works well for concrete tasks but struggles with abstract and creative capabilities. It is also prone to data contamination.",
      },
      {
        name: "Human evaluation",
        details:
          "It involves humans prompting models and grading responses. Methods range from vibe checks to systematic annotations with specific guidelines and large-scale community voting (arena). It is more suited for subjective tasks and less reliable for factual accuracy.",
      },
      {
        name: "Model-based evaluation",
        details:
          "Use judge and reward models to evaluate model outputs. It highly correlates with human preferences but suffers from bias toward their own outputs and inconsistent scoring.",
      },
      {
        name: "Feedback signal",
        details:
          "Analyze error patterns to identify specific weaknesses, such as limitations in following complex instructions, lack of specific knowledge, or susceptibility to adversarial prompts. This can be improved with better data generation and training parameters.",
      },
    ],
    resources: [
      {
        name: "Evaluation guidebook",
        url: "https://github.com/huggingface/evaluation-guidebook",
      },
      {
        name: "Open LLM Leaderboard",
        url: "https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard",
      },
      {
        name: "Language Model Evaluation Harness",
        url: "https://github.com/EleutherAI/lm-evaluation-harness",
      },
      { name: "Lighteval", url: "https://github.com/huggingface/lighteval" },
      { name: "Chatbot Arena", url: "https://lmarena.ai/" },
    ],
  },
  {
    id: 7,
    title: "Quantization",
    description:
      "Quantization is the process of converting the parameters and activations of a model using a lower precision. For example, weights stored using 16 bits can be converted into a 4-bit representation. This technique has become increasingly important to reduce the computational and memory costs associated with LLMs.",
    topics: [
      {
        name: "Base techniques",
        details:
          "Learn the different levels of precision (FP32, FP16, INT8, etc.) and how to perform naïve quantization with absmax and zero-point techniques.",
      },
      {
        name: "GGUF & llama.cpp",
        details:
          "Originally designed to run on CPUs, llama.cpp and the GGUF format have become the most popular tools to run LLMs on consumer-grade hardware. It supports storing special tokens, vocabulary, and metadata in a single file.",
        urls: ["https://github.com/ggerganov/llama.cpp"],
      },
      {
        name: "GPTQ & AWQ",
        details:
          "Techniques like GPTQ/EXL2 and AWQ introduce layer-by-layer calibration that retains performance at extremely low bitwidths. They reduce catastrophic outliers using dynamic scaling, selectively skipping or re-centering the heaviest parameters.",
        urls: [
          "https://arxiv.org/abs/2210.17323",
          "https://github.com/turboderp/exllamav2",
          "https://arxiv.org/abs/2306.00978",
        ],
      },
      {
        name: "SmoothQuant & ZeroQuant",
        details:
          "New quantization-friendly transformations (SmoothQuant) and compiler-based optimizations (ZeroQuant) help mitigate outliers before quantization. They also reduce hardware overhead by fusing certain ops and optimizing dataflow.",
        urls: [
          "https://github.com/mit-han-lab/smoothquant/blob/main/examples/smoothquant_llama_demo.ipynb",
          "https://www.deepspeed.ai/tutorials/model-compression/",
        ],
      },
    ],
    resources: [
      {
        name: "Introduction to quantization",
        url: "https://mlabonne.github.io/blog/posts/Introduction_to_Weight_Quantization.html",
      },
      {
        name: "Quantize Llama models with llama.cpp",
        url: "https://mlabonne.github.io/blog/posts/Quantize_Llama_2_models_using_ggml.html",
      },
      {
        name: "4-bit LLM Quantization with GPTQ",
        url: "https://mlabonne.github.io/blog/posts/4_bit_Quantization_with_GPTQ.html",
      },
      {
        name: "Understanding Activation-Aware Weight Quantization",
        url: "https://medium.com/friendliai/understanding-activation-aware-weight-quantization-awq-boosting-inference-serving-efficiency-in-10bb0faf63a8",
      },
    ],
  },
  {
    id: 8,
    title: "New Trends",
    description:
      "Here are notable topics that didn't fit into other categories. Some are established (model merging, multimodal) techniques, but others are more experimental (interpretability, test-time compute scaling) and the focus of numerous research papers.",
    topics: [
      {
        name: "Model merging",
        details:
          "Merging trained models has become a popular way of creating performant models without any fine-tuning. The popular mergekit library implements the most popular merging methods, like SLERP, DARE, and TIES.",
        urls: [
          "https://github.com/cg123/mergekit",
          "https://arxiv.org/abs/2311.03099",
        ],
      },
      {
        name: "Multimodal models",
        details:
          "These models (like CLIP, Stable Diffusion, or LLaVA) process multiple types of inputs (text, images, audio, etc.) with a unified embedding space, which unlocks powerful applications like text-to-image.",
        urls: [
          "https://openai.com/research/clip",
          "https://stability.ai/stable-image",
          "https://llava-vl.github.io/",
        ],
      },
      {
        name: "Interpretability",
        details:
          "Mechanistic interpretability techniques like Sparse Autoencoders (SAEs) have made remarkable progress to provide insights about the inner workings of LLMs. This has also been applied with techniques such as abliteration, which allow you to modify the behavior of models without training.",
        urls: [
          "https://huggingface.co/blog/mlabonne/abliteration",
          "https://adamkarvonen.github.io/machine_learning/2024/06/11/sae-intuitions.html",
        ],
      },
      {
        name: "Test-time compute",
        details:
          "Reasoning models trained with RL techniques can be further improved by scaling the compute budget during test time. It can involve multiple calls, MCTS, or specialized models like a Process Reward Model (PRM). Iterative steps with precise scoring significantly improve performance for complex reasoning tasks.",
        urls: [
          "https://huggingface.co/spaces/HuggingFaceH4/blogpost-scaling-test-time-compute",
        ],
      },
    ],
    resources: [
      {
        name: "Merge LLMs with mergekit",
        url: "https://mlabonne.github.io/blog/posts/2024-01-08_Merge_LLMs_with_mergekit.html",
      },
      {
        name: "Smol Vision",
        url: "https://github.com/merveenoyan/smol-vision",
      },
      {
        name: "Large Multimodal Models",
        url: "https://huyenchip.com/2023/10/10/multimodal.html",
      },
      {
        name: "Unsensor any LLM with abliteration",
        url: "https://huggingface.co/blog/mlabonne/abliteration",
      },
      {
        name: "Scaling test-time compute",
        url: "https://huggingface.co/spaces/HuggingFaceH4/blogpost-scaling-test-time-compute",
      },
    ],
  },
];
