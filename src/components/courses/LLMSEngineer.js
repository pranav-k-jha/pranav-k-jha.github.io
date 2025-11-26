export const llmengineer = {
  title: "The LLM Engineer",
  intro:
    "This section of the course focuses on learning how to build the best possible LLMs using the latest techniques.",
  sections: [
    {
      id: 1,
      title: "The LLM architecture",
      description:
        "High-level understanding of modern LLMs: tokenization, Transformer layers with attention, and sampling strategies for text generation.",
      topics: [
        {
          name: "Architectural Overview",
          details:
            "Learn the evolution from encoder-decoder Transformers to decoder-only architectures like GPT and how these models process and generate text.",
        },
        {
          name: "Tokenization",
          details:
            "Principles of tokenization and how text is converted into numerical representations. Study different tokenization strategies and their effect on output quality.",
        },
        {
          name: "Attention mechanisms",
          details:
            "Understand self-attention and its variants, enabling LLMs to maintain context and long-range dependencies.",
        },
        {
          name: "Sampling techniques",
          details:
            "Explore greedy search, beam search, temperature sampling, nucleus sampling, and compare deterministic vs probabilistic generation approaches.",
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
          name: "Karpathy - Tokenization",
          url: "https://www.youtube.com/watch?v=zduSFxRajkE",
        },
        {
          name: "Attention? Attention! - Lilian Weng",
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
        "Understanding how large models are pre-trained: data pipelines, distributed training, optimization strategies, and monitoring.",
      topics: [
        {
          name: "Data preparation",
          details:
            "Large-scale datasets require curation, cleaning, deduplication, tokenization, and quality filtering.",
        },
        {
          name: "Distributed training",
          details:
            "Learn data, pipeline, and tensor parallelism and how GPUs coordinate computation efficiently.",
        },
        {
          name: "Training optimization",
          details:
            "Adaptive learning rates, warm-up, gradient clipping, normalization, mixed-precision, and modern optimizers like AdamW and Lion.",
        },
        {
          name: "Monitoring",
          details:
            "Track loss, gradients, GPU metrics, logs, and performance profiling to detect bottlenecks and distributed issues.",
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
          name: "Parallel training - CMU",
          url: "https://www.andrew.cmu.edu/course/11-667/lectures/W10L2%20Scaling%20Up%20Parallel%20Training.pdf",
        },
        {
          name: "Distributed training survey",
          url: "https://arxiv.org/abs/2407.20018",
        },
        { name: "OLMo 2 by AI2", url: "https://allenai.org/olmo" },
        { name: "LLM360", url: "https://www.llm360.ai/" },
      ],
    },
    {
      id: 3,
      title: "Post-training datasets",
      description:
        "Datasets with instructions and answers (SFT) or instructions and chosen/rejected answers (preference alignment). Data needs processing to improve accuracy, diversity, and complexity.",
      topics: [
        {
          name: "Storage & chat templates",
          details:
            "Post-training datasets are stored in formats like ShareGPT or OpenAI/HF and mapped to chat templates like ChatML or Alpaca to produce training samples.",
        },
        {
          name: "Synthetic data generation",
          details:
            "Create instruction-response pairs based on seed data using frontier models (e.g., GPT-4o). Design diverse seed tasks and effective system prompts.",
        },
        {
          name: "Data enhancement",
          details:
            "Enhance samples using verified outputs, multiple answers with rejection sampling, Auto-Evol, Chain-of-Thought, Branch-Solve-Merge, personas, etc.",
        },
        {
          name: "Quality filtering",
          details:
            "Rule-based filtering, duplicate removal (MinHash/embeddings), n-gram decontamination, reward models, and judge LLMs for fine-grained quality control.",
        },
      ],
      resources: [
        {
          name: "Synthetic Data Generator",
          url: "https://huggingface.co/spaces/argilla/synthetic-data-generator",
        },
        {
          name: "LLM Datasets",
          url: "https://github.com/mlabonne/llm-datasets",
        },
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
      title: "Supervised Fine-Tuning (SFT)",
      description:
        "Turns base models into helpful assistants. Learns answer structure and reactivates pre-trained knowledge. Quality of data is more important than parameter optimization.",
      topics: [
        {
          name: "Training techniques",
          details:
            "Full fine-tuning updates all parameters; parameter-efficient methods like LoRA and QLoRA reduce memory. Implemented in TRL, Unsloth, Axolotl.",
        },
        {
          name: "Training parameters",
          details:
            "Key parameters: learning rate, batch size, gradient accumulation, epochs, optimizer (8-bit AdamW), weight decay, warmup steps, LoRA-specific: rank, alpha, target modules.",
        },
        {
          name: "Distributed training",
          details:
            "Scale training across multiple GPUs using DeepSpeed or FSDP. ZeRO optimization stages, gradient checkpointing for memory efficiency.",
        },
        {
          name: "Monitoring",
          details:
            "Track loss curves, learning rate schedules, gradient norms. Monitor for spikes, explosions, or performance drops.",
        },
      ],
      resources: [
        {
          name: "Fine-tune Llama 3.1 with Unsloth",
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
        "Aligns generated LLM answers with human preferences, reducing toxicity and hallucinations while boosting usefulness.",
      topics: [
        {
          name: "Rejection sampling",
          details:
            "Generate multiple responses per prompt, score them to infer chosen/rejected answers, creating on-policy data and improving alignment stability.",
        },
        {
          name: "Direct Preference Optimization (DPO)",
          details:
            "Optimizes policy to maximize likelihood of chosen over rejected responses. Efficient for chat models; doesn't require reward modeling.",
        },
        {
          name: "Reward model",
          details:
            "Train a reward model with human feedback to predict metrics like human preferences. Use frameworks like TRL, verl, OpenRLHF.",
        },
        {
          name: "Reinforcement Learning",
          details:
            "RL techniques like GRPO and PPO iteratively update policy to maximize rewards. Computationally expensive, needs careful hyperparameter tuning.",
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
        "Reliable LLM evaluation guides data generation and training, providing feedback on improvement areas. Be cautious of Goodhart's law. ",
      topics: [
        {
          name: "Automated benchmarks",
          details:
            "Evaluate models on tasks using curated datasets and metrics like MMLU. Works for concrete tasks but struggles with abstract capabilities and contamination.",
        },
        {
          name: "Human evaluation",
          details:
            "Humans prompt and grade responses; methods range from vibe checks to systematic annotations with community voting. Suitable for subjective tasks.",
        },
        {
          name: "Model-based evaluation",
          details:
            "Use judge and reward models. Correlates with human preferences but may be biased or inconsistent.",
        },
        {
          name: "Feedback signal",
          details:
            "Analyze errors to identify weaknesses, e.g., following instructions, missing knowledge, adversarial prompts. Improve with better data generation/training.",
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
        "Process of converting model parameters and activations to lower precision to reduce computational and memory costs.",
      topics: [
        {
          name: "Base techniques",
          details:
            "Learn precision levels (FP32, FP16, INT8, etc.) and perform naïve quantization using absmax and zero-point techniques.",
        },
        {
          name: "GGUF & llama.cpp",
          details:
            "Run LLMs on consumer hardware using llama.cpp and GGUF format; supports storing tokens, vocabulary, and metadata in a single file.",
        },
        {
          name: "GPTQ & AWQ",
          details:
            "Layer-by-layer calibration retaining performance at low bitwidths. Techniques reduce outliers using dynamic scaling and selective parameter re-centering.",
        },
        {
          name: "SmoothQuant & ZeroQuant",
          details:
            "Quantization-friendly transformations and compiler optimizations to mitigate outliers and reduce hardware overhead.",
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
          name: "Understanding AWQ",
          url: "https://medium.com/friendliai/understanding-activation-aware-weight-quantization-awq-boosting-inference-serving-efficiency-in-10bb0faf63a8",
        },
        {
          name: "SmoothQuant on Llama 2 7B",
          url: "https://github.com/mit-han-lab/smoothquant/blob/main/examples/smoothquant_llama_demo.ipynb",
        },
        {
          name: "DeepSpeed Model Compression",
          url: "https://www.deepspeed.ai/tutorials/model-compression/",
        },
      ],
    },
    {
      id: 8,
      title: "New Trends",
      description:
        "Emerging and experimental topics like model merging, multimodal models, interpretability, and test-time compute scaling.",
      topics: [
        {
          name: "Model merging",
          details:
            "Merge trained models to create performant models without fine-tuning using methods like SLERP, DARE, TIES and libraries like mergekit.",
        },
        {
          name: "Multimodal models",
          details:
            "Models like CLIP, Stable Diffusion, LLaVA process text, images, audio with a unified embedding space for powerful applications.",
        },
        {
          name: "Interpretability",
          details:
            "Techniques like Sparse Autoencoders and abliteration allow insights into model internals and behavior modification without retraining.",
        },
        {
          name: "Test-time compute",
          details:
            "Scale reasoning models at test time using multiple calls, MCTS, or specialized models (Process Reward Model) to improve complex task performance.",
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
          name: "Intuitive Explanation of SAEs",
          url: "https://adamkarvonen.github.io/machine_learning/2024/06/11/sae-intuitions.html",
        },
        {
          name: "Scaling test-time compute",
          url: "https://huggingface.co/spaces/HuggingFaceH4/blogpost-scaling-test-time-compute",
        },
      ],
    },
  ],
};
