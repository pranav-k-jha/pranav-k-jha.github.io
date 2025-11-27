const llmTwinCourse = {
  title: "LLM Twin Architecture",
  architectureImage: "media/architecture.png",

  sections: [
    {
      title: "The data collection pipeline",
      bullets: [
        "Crawl your digital data from various social media platforms, such as Medium, Substack and GitHub.",
        "Clean, normalize and load the data to a Mongo NoSQL DB through a series of ETL pipelines.",
        "Send database changes to a RabbitMQ queue using the CDC pattern.",
        "Learn to package the crawlers as AWS Lambda functions.",
      ],
    },
    {
      title: "The feature pipeline",
      bullets: [
        "Consume messages in real-time from a queue through a Bytewax streaming pipeline.",
        "Every message will be cleaned, chunked, embedded and loaded into a Qdrant vector DB.",
        "In the bonus series, we refactor the cleaning, chunking, and embedding logic using Superlinked, a specialized vector compute engine. We will also load and index the vectors to a Redis vector DB.",
      ],
    },
    {
      title: "The training pipeline",
      bullets: [
        "Create a custom instruction dataset based on your custom digital data to do SFT.",
        "Fine-tune an LLM using LoRA or QLoRA.",
        "Use Comet ML's experiment tracker to monitor the experiments.",
        "Evaluate the LLM using Opik",
        "Save and version the best model to the Hugging Face model registry.",
        "Run and automate the training pipeline using AWS SageMaker.",
      ],
    },
    {
      title: "The inference pipeline",
      bullets: [
        "Load the fine-tuned LLM from the Hugging Face model registry.",
        "Deploy the LLM as a scalable REST API using AWS SageMaker inference endpoints.",
        "Enhance the prompts using advanced RAG techniques.",
        "Monitor the prompts and LLM generated results using Opik",
        "In the bonus series, we refactor the advanced RAG layer to write more optimal queries using Superlinked.",
        "Wrap up everything with a Gradio UI where you can start playing around with the LLM Twin to generate content that follows your writing style.",
      ],
      uiImage: "media/ui-example.png",
    },
  ],

  serverlessTools: [
    "Comet ML as your experiment tracker and data registry;",
    "Qdrant as your vector DB;",
    "AWS SageMaker as your ML infrastructure;",
    "Opik as your prompt evaluation and monitoring tool.",
  ],
};

export default llmTwinCourse;
