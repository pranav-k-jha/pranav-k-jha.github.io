import React from "react";
import ServiceTemplate from "../../components/ServiceTemplate";
import { Database } from "lucide-react";

const DataEngServicePage = () => {
  const serviceData = {
    title: "Data Engineering & Analytics",

    eyebrow: "Data Platforms, Pipelines & Analytics",

    description:
      "Turn raw, fragmented data into reliable, analysis-ready information with scalable data engineering and analytics solutions. From ETL and ELT pipelines to cloud data warehouses, real-time streaming, and business intelligence integrations, I build data systems designed for reliability, performance, and informed decision-making.",

    icon: Database,

    features: [
      "Data pipeline design and development",
      "ETL and ELT workflow implementation",
      "Cloud data warehouse architecture",
      "Data lake and lakehouse solutions",
      "Batch and real-time data processing",
      "Streaming data pipeline development",
      "Data integration across multiple sources",
      "Data quality validation and monitoring",
      "Data transformation and modeling",
      "Analytics-ready dataset development",
      "Business intelligence integration",
      "Data governance and access-control support",
    ],

    technologies: [
      "Python",
      "SQL",
      "Apache Spark",
      "Apache Kafka",
      "Apache Airflow",
      "Databricks",
      "Snowflake",
      "AWS Redshift",
      "Google BigQuery",
      "dbt",
      "Apache Flink",
      "Apache Beam",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],

    process: [
      {
        title: "Data Discovery & Requirements",
        description:
          "We begin by identifying your data sources, business requirements, reporting needs, expected data volumes, refresh frequency, security requirements, and existing infrastructure.",
      },

      {
        title: "Data Architecture Design",
        description:
          "The ingestion, storage, transformation, orchestration, and serving layers are designed based on scalability, reliability, cost, latency, and analytics requirements.",
      },

      {
        title: "Pipeline Development",
        description:
          "Reliable ETL or ELT pipelines are developed to extract data from source systems, validate it, transform it, and deliver it into the appropriate warehouse, lake, or analytics environment.",
      },

      {
        title: "Data Modeling & Quality",
        description:
          "Raw data is transformed into structured, analytics-ready datasets with appropriate schemas, business logic, validation rules, testing, and data quality controls.",
      },

      {
        title: "Analytics & Integration",
        description:
          "Prepared data is connected to dashboards, reporting tools, APIs, machine learning systems, or downstream applications so teams can access consistent and useful information.",
      },

      {
        title: "Monitoring & Optimization",
        description:
          "Pipelines and infrastructure can be monitored for failures, delays, data quality issues, processing performance, and resource usage to keep the data platform reliable over time.",
      },
    ],

    faqs: [
      {
        question:
          "What are the main components of a data engineering platform?",
        answer:
          "A typical data engineering platform includes data ingestion, storage, transformation, orchestration, quality validation, monitoring, and serving layers. Depending on the requirements, this may include data warehouses, data lakes, streaming systems, transformation frameworks, and analytics integrations.",
      },

      {
        question: "What is the difference between ETL and ELT?",
        answer:
          "ETL extracts data, transforms it before loading, and then stores the processed result. ELT first loads raw data into a target platform such as a cloud data warehouse and performs transformations there. The appropriate approach depends on infrastructure, data volume, governance requirements, and processing needs.",
      },

      {
        question:
          "When should I use batch processing versus real-time processing?",
        answer:
          "Batch processing is useful when data can be processed at scheduled intervals, such as hourly or daily reporting. Real-time or streaming processing is better when events need to be processed immediately or with very low latency, such as monitoring, fraud detection, telemetry, or live operational dashboards.",
      },

      {
        question: "Can you integrate data from multiple systems?",
        answer:
          "Yes. Data pipelines can combine information from databases, APIs, cloud applications, files, event streams, third-party platforms, enterprise applications, and other structured or semi-structured data sources.",
      },

      {
        question: "How is data quality maintained?",
        answer:
          "Data quality can be supported through schema validation, automated tests, completeness checks, uniqueness checks, range validation, anomaly detection, duplicate detection, monitoring, and alerts for failed or unexpected pipeline behavior.",
      },

      {
        question: "Can you build a cloud data warehouse?",
        answer:
          "Yes. Data warehouse solutions can be designed using platforms such as Snowflake, BigQuery, Redshift, Databricks, or other suitable technologies depending on data volume, performance, cost, security, and existing cloud infrastructure.",
      },

      {
        question: "What is a data lake or lakehouse?",
        answer:
          "A data lake stores large amounts of raw or semi-structured data in a flexible format. A lakehouse combines aspects of data lakes and data warehouses, allowing scalable storage while supporting structured analytics, governance, and high-performance query workloads.",
      },

      {
        question: "Can the data platform support machine learning?",
        answer:
          "Yes. A well-designed data platform can provide cleaned, validated, and versioned datasets for machine learning pipelines, model training, feature engineering, experimentation, and production inference systems.",
      },

      {
        question: "How is sensitive data protected?",
        answer:
          "Depending on project requirements, protection can include encryption, role-based access control, least-privilege permissions, secrets management, audit logging, data masking, anonymization, and appropriate separation of sensitive datasets.",
      },

      {
        question: "Can you improve an existing data pipeline?",
        answer:
          "Yes. Existing pipelines can be reviewed for reliability, performance, maintainability, data quality, orchestration, cost, and scalability. Improvements may include refactoring workflows, optimizing queries, reducing processing time, improving monitoring, or modernizing infrastructure.",
      },
    ],
  };

  return (
    <ServiceTemplate
      {...serviceData}
      showPricing={false}
      theme={{
        gradient: "from-orange-500 via-red-500 to-rose-500",

        softGradient:
          "from-orange-50 via-red-50 to-rose-50 dark:from-orange-950/20 dark:via-red-950/20 dark:to-rose-950/20",

        hoverGradient:
          "hover:from-orange-600 hover:via-red-600 hover:to-rose-600",

        text: "text-orange-600 dark:text-orange-400",

        border: "border-orange-500 dark:border-orange-400",

        softBorder: "border-orange-200/70 dark:border-orange-800/50",

        bg: "bg-orange-50 dark:bg-orange-900/20",

        iconBg: "bg-gradient-to-br from-orange-500 via-red-500 to-rose-500",
      }}
    />
  );
};

export default DataEngServicePage;
