// llmnotebooks.js

export const llmTools = [
  {
    name: "LLM AutoEval",
    emoji: "🧐",
    description: "Automatically evaluate your LLMs using RunPod",
    github: "https://github.com/mlabonne/llm-autoeval",
    colab:
      "https://colab.research.google.com/drive/1Igs3WZuXAIv9X0vwqiE90QlEPys8e8Oa?usp=sharing",
  },
  {
    name: "LazyMergekit",
    emoji: "🥱",
    description: "Easily merge models using MergeKit in one click.",
    colab:
      "https://colab.research.google.com/drive/1obulZ1ROXHjYLn6PPZJwRR6GzgQogxxb?usp=sharing",
  },
  {
    name: "LazyAxolotl",
    emoji: "🦎",
    description: "Fine-tune models in the cloud using Axolotl in one click.",
    colab:
      "https://colab.research.google.com/drive/1TsDKNo2riwVmU55gjuBgB1AXVtRRfRHW?usp=sharing",
  },
  {
    name: "AutoQuant",
    emoji: "⚡",
    description:
      "Quantize LLMs in GGUF, GPTQ, EXL2, AWQ, and HQQ formats in one click.",
    colab:
      "https://colab.research.google.com/drive/1b6nqC7UZVt8bx4MksX7s656GXPM-eWw4?usp=sharing",
  },
  {
    name: "Model Family Tree",
    emoji: "🌳",
    description: "Visualize the family tree of merged models.",
    colab:
      "https://colab.research.google.com/drive/1s2eQlolcI1VGgDhqWIANfkfKvcKrMyNr?usp=sharing",
  },
  {
    name: "ZeroSpace",
    emoji: "🚀",
    description:
      "Automatically create a Gradio chat interface using a free ZeroGPU.",
    colab:
      "https://colab.research.google.com/drive/1LcVUW5wsJTO2NGmozjji5CkC--646LgC",
  },
  {
    name: "AutoAbliteration",
    emoji: "✂️",
    description: "Automatically abliteration models with custom datasets.",
    colab:
      "https://colab.research.google.com/drive/1RmLv-pCMBBsQGXQIM8yF-OdCNyoylUR1?usp=sharing",
  },
  {
    name: "AutoDedup",
    emoji: "🧼",
    description: "Automatically deduplicate datasets using the Rensa library.",
    colab:
      "https://colab.research.google.com/drive/1o1nzwXWAa8kdkEJljbJFW1VuI-3VZLUn?usp=sharing",
  },
];

export const llmFineTuning = [
  {
    name: "Fine-tune Llama 3.1 with Unsloth",
    description: "Ultra-efficient supervised fine-tuning in Google Colab.",
    article:
      "https://mlabonne.github.io/blog/posts/2024-07-29_Finetune_Llama31.html",
    colab:
      "https://colab.research.google.com/drive/164cg_O7SV7G8kZr_JXqLd6VC7pd86-1Z?usp=sharing",
  },
  {
    name: "Fine-tune Llama 3 with ORPO",
    description: "Cheaper and faster fine-tuning in a single stage with ORPO.",
    article:
      "https://mlabonne.github.io/blog/posts/2024-04-19_Fine_tune_Llama_3_with_ORPO.html",
    colab:
      "https://colab.research.google.com/drive/1eHNWg9gnaXErdAa8_mcvjMupbSS6rDvi",
  },
  {
    name: "Fine-tune Mistral-7b with DPO",
    description:
      "Boost the performance of supervised fine-tuned models with DPO.",
    article:
      "https://mlabonne.github.io/blog/posts/Fine_tune_Mistral_7b_with_DPO.html",
    colab:
      "https://colab.research.google.com/drive/15iFBr1xWgztXvhrj5I9fBv20c7CFOPBE?usp=sharing",
  },
  {
    name: "Fine-tune Mistral-7b with QLoRA",
    description:
      "Supervised fine-tune Mistral-7b in a free-tier Google Colab with TRL.",
    article: "",
    colab:
      "https://colab.research.google.com/drive/1o_w0KastmEJNVwT5GoqMCciH-18ca5WS?usp=sharing",
  },
  {
    name: "Fine-tune CodeLlama using Axolotl",
    description:
      "End-to-end guide to the state-of-the-art tool for fine-tuning.",
    article:
      "https://mlabonne.github.io/blog/posts/A_Beginners_Guide_to_LLM_Finetuning.html",
    colab:
      "https://colab.research.google.com/drive/1Xu0BrCB7IShwSWKVcfAfhehwjDrDMH5m?usp=sharing",
  },
  {
    name: "Fine-tune Llama 2 with QLoRA",
    description:
      "Step-by-step guide to supervised fine-tune Llama 2 in Google Colab.",
    article:
      "https://mlabonne.github.io/blog/posts/Fine_Tune_Your_Own_Llama_2_Model_in_a_Colab_Notebook.html",
    colab:
      "https://colab.research.google.com/drive/1PEQyJO1-f6j0S_XJ8DV50NkpzasXkrzd?usp=sharing",
  },
];

export const llmQuantization = [
  {
    name: "Introduction to Quantization",
    description: "Large language model optimization using 8-bit quantization.",
    article:
      "https://mlabonne.github.io/blog/posts/Introduction_to_Weight_Quantization.html",
    colab:
      "https://colab.research.google.com/drive/1DPr4mUQ92Cc-xf4GgAaB6dFcFnWIvqYi?usp=sharing",
  },
  {
    name: "4-bit Quantization using GPTQ",
    description:
      "Quantize your own open-source LLMs to run them on consumer hardware.",
    article: "https://mlabonne.github.io/blog/4bit_quantization/",
    colab:
      "https://colab.research.google.com/drive/1lSvVDaRgqQp_mWK_jC9gydz6_-y6Aq4A?usp=sharing",
  },
  {
    name: "Quantization with GGUF and llama.cpp",
    description:
      "Quantize Llama 2 models with llama.cpp and upload GGUF versions to the HF Hub.",
    article:
      "https://mlabonne.github.io/blog/posts/Quantize_Llama_2_models_using_ggml.html",
    colab:
      "https://colab.research.google.com/drive/1pL8k7m04mgE5jo2NrjGi8atB0j_37aDD?usp=sharing",
  },
  {
    name: "ExLlamaV2: The Fastest Library to Run LLMs",
    description: "Quantize and run EXL2 models and upload them to the HF Hub.",
    article:
      "https://mlabonne.github.io/blog/posts/ExLlamaV2_The_Fastest_Library_to_Run%C2%A0LLMs.html",
    colab:
      "https://colab.research.google.com/drive/1yrq4XBlxiA0fALtMoT2dwiACVc77PHou?usp=sharing",
  },
];

export const llmOther = [
  {
    name: "Merge LLMs with MergeKit",
    description: "Create your own models easily, no GPU required!",
    article:
      "https://mlabonne.github.io/blog/posts/2024-01-08_Merge_LLMs_with_mergekit%20copy.html",
    colab:
      "https://colab.research.google.com/drive/1_JS7JKJAQozD48-LhYdegcuuZ2ddgXfr?usp=sharing",
  },
  {
    name: "Create MoEs with MergeKit",
    description: "Combine multiple experts into a single frankenMoE",
    article:
      "https://mlabonne.github.io/blog/posts/2024-03-28_Create_Mixture_of_Experts_with_MergeKit.html",
    colab:
      "https://colab.research.google.com/drive/1obulZ1ROXHjYLn6PPZJwRR6GzgQogxxb?usp=sharing",
  },
  {
    name: "Uncensor any LLM with abliteration",
    description: "Fine-tuning without retraining",
    article:
      "https://mlabonne.github.io/blog/posts/2024-06-04_Uncensor_any_LLM_with_abliteration.html",
    colab:
      "https://colab.research.google.com/drive/1VYm3hOcvCpbGiqKZb141gJwjdmmCcVpR?usp=sharing",
  },
  {
    name: "Improve ChatGPT with Knowledge Graphs",
    description: "Augment ChatGPT's answers with knowledge graphs.",
    article:
      "https://mlabonne.github.io/blog/posts/Article_Improve_ChatGPT_with_Knowledge_Graphs.html",
    colab:
      "https://colab.research.google.com/drive/1mwhOSw9Y9bgEaIFKT4CLi0n18pXRM4cj?usp=sharing",
  },
  {
    name: "Decoding Strategies in Large Language Models",
    description:
      "A guide to text generation from beam search to nucleus sampling",
    article:
      "https://mlabonne.github.io/blog/posts/2022-06-07-Decoding_strategies.html",
    colab:
      "https://colab.research.google.com/drive/19CJlOS5lI29g-B3dziNn93Enez1yiHk2?usp=sharing",
  },
];
