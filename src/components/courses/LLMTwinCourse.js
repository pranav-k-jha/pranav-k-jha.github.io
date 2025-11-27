const llmTwinCourse = {
  title: "LLM Twin Architecture",
  description:
    "The architecture of the LLM Twin is split into 4 Python microservices",
  sections: [
    {
      title: "The data collection pipeline",
      bullets: [
        "Crawl your digital data from various social media platforms, such as Medium, Substack and GitHub.",
        "Clean, normalize and load the data to a [Mongo NoSQL DB](https://www.mongodb.com/) through a series of ETL pipelines.",
        "Send database changes to a [RabbitMQ](https://www.rabbitmq.com/) queue using the CDC pattern.",
        "Learn to package the crawlers as AWS Lambda functions.",
      ],
    },
    {
      title: "The feature pipeline",
      bullets: [
        "Consume messages in real-time from a queue through a [Bytewax](https://github.com/bytewax/bytewax?utm_source=github&utm_medium=decodingml&utm_campaign=2024_q1) streaming pipeline.",
        "Every message will be cleaned, chunked, embedded and loaded into a [Qdrant](https://qdrant.tech/?utm_source=decodingml&utm_medium=referral&utm_campaign=llm-course) vector DB.",
        "In the bonus series, we refactor the cleaning, chunking, and embedding logic using [Superlinked](https://github.com/superlinked/superlinked?utm_source=community&utm_medium=github&utm_campaign=oscourse), a specialized vector compute engine. We will also load and index the vectors to a [Redis vector DB](https://redis.io/solutions/vector-search/).",
      ],
    },
    {
      title: "The training pipeline",
      bullets: [
        "Create a custom instruction dataset based on your custom digital data to do SFT.",
        "Fine-tune an LLM using LoRA or QLoRA.",
        "Use [Comet ML's](https://www.comet.com/signup/?utm_source=decoding_ml&utm_medium=partner&utm_content=github) experiment tracker to monitor the experiments.",
        "Evaluate the LLM using [Opik](https://github.com/comet-ml/opik)",
        "Save and version the best model to the [Hugging Face model registry](https://huggingface.co/models).",
        "Run and automate the training pipeline using [AWS SageMaker](https://aws.amazon.com/sagemaker/).",
      ],
    },
    {
      title: "The inference pipeline",
      bullets: [
        "Load the fine-tuned LLM from the [Hugging Face model registry](https://huggingface.co/models).",
        "Deploy the LLM as a scalable REST API using [AWS SageMaker inference endpoints](https://aws.amazon.com/sagemaker/deploy/).",
        "Enhance the prompts using advanced RAG techniques.",
        "Monitor the prompts and LLM generated results using [Opik](https://github.com/comet-ml/opik)",
        "In the bonus series, we refactor the advanced RAG layer to write more optimal queries using [Superlinked](https://github.com/superlinked/superlinked?utm_source=community&utm_medium=github&utm_campaign=oscourse).",
      ],
    },
  ],
  serverlessTools: [
    {
      name: "Comet ML",
      description: "as your experiment tracker and data registry",
      url: "https://www.comet.com/signup/?utm_source=decoding_ml&utm_medium=partner&utm_content=github",
    },
    {
      name: "Qdrant",
      description: "as your vector DB",
      url: "https://qdrant.tech/?utm_source=decodingml&utm_medium=referral&utm_campaign=llm-course",
    },
    {
      name: "AWS SageMaker",
      description: "as your ML infrastructure",
      url: "https://aws.amazon.com/sagemaker/",
    },
    {
      name: "Opik",
      description: "as your prompt evaluation and monitoring tool",
      url: "https://github.com/comet-ml/opik",
    },
  ],
};

export default llmTwinCourse;
