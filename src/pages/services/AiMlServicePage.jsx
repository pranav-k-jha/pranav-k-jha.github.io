import React from "react";
import ServiceTemplate from "../../components/ServiceTemplate";
import { Brain } from "lucide-react";

const AiMlServicePage = () => {
  const serviceData = {
    title: "AI & Machine Learning Solutions",

    eyebrow: "Artificial Intelligence & Machine Learning",

    description:
      "Build intelligent, production-ready AI and machine learning solutions tailored to real business problems. From predictive analytics and natural language processing to computer vision and intelligent automation, I design systems that improve decision-making, efficiency, and scalability.",

    icon: Brain,

    features: [
      "Custom machine learning model development",
      "Natural language processing solutions",
      "Computer vision applications",
      "Predictive analytics and forecasting",
      "Recommendation and ranking systems",
      "AI-powered workflow automation",
      "Large language model integration",
      "Model fine-tuning and optimization",
      "AI integration with existing applications",
      "Model deployment and production monitoring",
      "Data preprocessing and feature engineering",
      "AI strategy and technical consulting",
    ],

    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "OpenAI API",
      "Hugging Face",
      "Keras",
      "Pandas",
      "NumPy",
      "OpenCV",
      "spaCy",
      "NLTK",
      "LangChain",
      "FastAPI",
      "Docker",
      "AWS",
    ],

    process: [
      {
        title: "Problem & Data Discovery",
        description:
          "We begin by defining the business problem, expected outcomes, available data, technical constraints, evaluation criteria, and how AI can realistically provide value.",
      },

      {
        title: "Data Preparation",
        description:
          "Data is reviewed, cleaned, transformed, and prepared for modeling. This may include feature engineering, labeling strategies, dataset validation, augmentation, or synthetic data generation where appropriate.",
      },

      {
        title: "Model Design & Development",
        description:
          "Appropriate machine learning, deep learning, or foundation-model approaches are selected and developed based on the problem, available data, performance requirements, and deployment environment.",
      },

      {
        title: "Evaluation & Optimization",
        description:
          "Models are evaluated using suitable metrics and validation strategies. Performance, robustness, latency, interpretability, and computational requirements are analyzed and optimized before deployment.",
      },

      {
        title: "Integration & Deployment",
        description:
          "The selected model is integrated into your application, API, data pipeline, or cloud environment with the required inference, authentication, monitoring, and infrastructure components.",
      },

      {
        title: "Monitoring & Improvement",
        description:
          "Post-deployment monitoring can track model quality, data drift, latency, failures, and changing business requirements so the system can be maintained and improved over time.",
      },
    ],

    faqs: [
      {
        question: "What types of AI and ML projects do you handle?",
        answer:
          "Projects can include predictive analytics, classification, forecasting, recommendation systems, natural language processing, computer vision, intelligent automation, anomaly detection, generative AI applications, and AI integration with existing software systems.",
      },

      {
        question: "Do I need a large dataset to use machine learning?",
        answer:
          "Not always. The amount of data required depends on the problem, model type, complexity, and desired accuracy. Some projects can use transfer learning, pre-trained models, existing foundation models, or carefully designed smaller datasets.",
      },

      {
        question: "Can you integrate AI into an existing application?",
        answer:
          "Yes. AI capabilities can be integrated into existing web applications, mobile applications, APIs, enterprise systems, databases, cloud environments, and internal business workflows.",
      },

      {
        question: "Can you build solutions using large language models?",
        answer:
          "Yes. Large language model solutions can include AI assistants, document analysis, retrieval-augmented generation, summarization, classification, information extraction, conversational interfaces, and workflow automation.",
      },

      {
        question: "Do you build custom models or use existing models?",
        answer:
          "Both approaches are possible. Depending on the project, I may use traditional machine learning, build a custom deep learning model, fine-tune an existing model, or integrate a hosted foundation model. The approach is selected based on accuracy, cost, latency, privacy, and maintenance requirements.",
      },

      {
        question: "How long does an AI project take?",
        answer:
          "Timelines depend heavily on data readiness, modeling complexity, integration requirements, evaluation needs, and deployment infrastructure. A focused proof of concept may take a few weeks, while a production AI platform can require multiple development phases.",
      },

      {
        question: "What data is needed for an AI project?",
        answer:
          "Data requirements depend on the machine learning problem. Supervised learning may require labeled examples, while other approaches can use unlabeled data, historical records, images, text, sensor data, logs, transactions, or external data sources.",
      },

      {
        question: "Can you help if my data is not ready?",
        answer:
          "Yes. Early project work can include data assessment, preprocessing, labeling strategies, feature engineering, quality analysis, dataset design, and determining whether the available data is suitable for the proposed AI solution.",
      },

      {
        question: "How do you evaluate whether an AI model is performing well?",
        answer:
          "Evaluation depends on the problem. Metrics may include accuracy, precision, recall, F1 score, ROC-AUC, mean absolute error, root mean squared error, latency, robustness, calibration, or business-specific success measures.",
      },

      {
        question: "Do you provide deployment and ongoing support?",
        answer:
          "Yes. Support can include API deployment, cloud infrastructure, containerization, monitoring, model updates, performance optimization, bug fixes, retraining workflows, and integration improvements.",
      },
    ],
  };

  return (
    <ServiceTemplate
      {...serviceData}
      showPricing={false}
      theme={{
        gradient: "from-purple-600 via-fuchsia-500 to-pink-500",

        softGradient:
          "from-purple-50 via-fuchsia-50 to-pink-50 dark:from-purple-950/20 dark:via-fuchsia-950/20 dark:to-pink-950/20",

        hoverGradient:
          "hover:from-purple-700 hover:via-fuchsia-600 hover:to-pink-600",

        text: "text-purple-600 dark:text-purple-400",

        border: "border-purple-500 dark:border-purple-400",

        softBorder: "border-purple-200/70 dark:border-purple-800/50",

        bg: "bg-purple-50 dark:bg-purple-900/20",

        iconBg: "bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500",
      }}
    />
  );
};

export default AiMlServicePage;
