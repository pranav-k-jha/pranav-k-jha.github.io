import React from "react";
import ServiceTemplate from "../../components/ServiceTemplate";
import { Code } from "lucide-react";

const WebDevServicePage = () => {
  const serviceData = {
    title: "Web Development",

    eyebrow: "Web Design & Application Development",

    description:
      "Build modern, responsive, secure, and high-performance websites and web applications tailored to your business needs. From landing pages and corporate websites to full-stack platforms and custom web applications, I create digital experiences designed for usability, scalability, and long-term growth.",

    icon: Code,

    features: [
      "Responsive and mobile-first web design",
      "Modern frontend application development",
      "Secure backend and API development",
      "Custom web application development",
      "E-commerce and online platform solutions",
      "Database design and integration",
      "Third-party API and service integration",
      "Performance and loading-speed optimization",
      "Authentication and user account systems",
      "Deployment and cloud infrastructure setup",
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "REST APIs",
      "Tailwind CSS",
      "Material UI",
      "Redux",
      "Jest",
      "Docker",
      "AWS",
    ],

    process: [
      {
        title: "Discovery & Planning",
        description:
          "We begin by understanding your business goals, target users, required features, technical constraints, integrations, and project expectations. This stage helps define the project scope, architecture, priorities, and development roadmap.",
      },

      {
        title: "UI/UX & Architecture",
        description:
          "The application structure, navigation, responsive layouts, backend architecture, database requirements, and overall user experience are planned before development begins.",
      },

      {
        title: "Development & Integration",
        description:
          "The frontend, backend, APIs, database, authentication, and required third-party services are developed and integrated using modern development practices.",
      },

      {
        title: "Testing & Optimization",
        description:
          "The application is tested across devices and browsers for functionality, responsiveness, accessibility, security, and performance. Issues are resolved before launch.",
      },

      {
        title: "Deployment & Support",
        description:
          "The completed application is deployed to the selected hosting or cloud environment. Documentation, deployment assistance, monitoring, maintenance, and post-launch support can also be provided.",
      },
    ],

    pricing: [
      {
        name: "Basic",
        description:
          "Ideal for landing pages, portfolios, small business websites, and simple informational websites.",

        price: "Contact",

        type: "project",

        features: [
          "Up to 5 core pages",
          "Responsive mobile-first design",
          "Modern frontend implementation",
          "Contact or inquiry form",
          "Basic SEO configuration",
          "Performance optimization",
          "Deployment assistance",
          "Post-launch support",
        ],

        popular: false,
      },

      {
        name: "Professional",
        description:
          "Best for businesses that need a custom website, client portal, dashboard, or full-stack web application.",

        price: "Contact",

        type: "project",

        features: [
          "Custom UI and application development",
          "Frontend and backend development",
          "User authentication",
          "Database integration",
          "REST API or GraphQL integration",
          "Admin or content management features",
          "Analytics integration",
          "Deployment assistance",
          "Post-launch support",
        ],

        popular: true,
      },

      {
        name: "Enterprise",
        description:
          "For advanced platforms, SaaS applications, high-traffic systems, and complex business requirements.",

        price: "Contact",

        type: "enterprise",

        features: [
          "Custom enterprise web application",
          "Scalable system architecture",
          "Advanced authentication and authorization",
          "Custom API development",
          "Third-party platform integrations",
          "Advanced security implementation",
          "Performance and database optimization",
          "Cloud deployment architecture",
          "Monitoring and analytics",
          "Extended maintenance and support",
        ],

        popular: false,
      },
    ],

    faqs: [
      {
        question: "What's included in the website development process?",
        answer:
          "The development process typically includes discovery and planning, application architecture, interface design, frontend and backend development, database integration, testing, optimization, deployment, and post-launch support. The exact process depends on the size and technical requirements of the project.",
      },

      {
        question: "How long does it take to build a website?",
        answer:
          "A simple business website or landing page can usually be completed within a few weeks. More advanced websites and custom web applications may require several weeks or several months depending on the number of features, integrations, design requirements, and technical complexity.",
      },

      {
        question: "Can you build both the frontend and backend?",
        answer:
          "Yes. Full-stack development can include the user interface, server-side application logic, databases, authentication, REST or GraphQL APIs, third-party integrations, deployment, and cloud infrastructure.",
      },

      {
        question: "Can you work with an existing website?",
        answer:
          "Yes. Existing websites and applications can be redesigned, modernized, optimized, migrated, or extended with new functionality without necessarily rebuilding the entire system from scratch.",
      },

      {
        question: "Do you provide website maintenance?",
        answer:
          "Yes. Ongoing maintenance can include security updates, bug fixes, dependency updates, content changes, performance monitoring, backups, feature development, and infrastructure maintenance.",
      },

      {
        question: "How is website performance optimized?",
        answer:
          "Performance improvements can include optimized images and assets, code splitting, lazy loading, caching, database optimization, efficient API design, CDN integration, server-side rendering where appropriate, and monitoring of key performance metrics.",
      },

      {
        question: "Will the website work on mobile devices?",
        answer:
          "Yes. Websites and applications are developed using responsive and mobile-first design principles so that layouts and functionality adapt properly across phones, tablets, laptops, and desktop screens.",
      },

      {
        question: "Can you integrate third-party services?",
        answer:
          "Yes. Integrations can include payment gateways, authentication providers, email platforms, analytics tools, CRMs, cloud services, AI APIs, maps, external databases, and other third-party business systems.",
      },

      {
        question: "How much does a web development project cost?",
        answer:
          "Project pricing depends on the scope, number of features, design complexity, integrations, infrastructure requirements, and level of ongoing support. Contact me with your requirements and I can provide a customized estimate.",
      },
    ],
  };

  return (
    <ServiceTemplate
      {...serviceData}
      theme={{
        gradient: "from-blue-600 via-cyan-500 to-sky-500",

        softGradient:
          "from-blue-50 via-cyan-50 to-sky-50 dark:from-blue-950/20 dark:via-cyan-950/20 dark:to-sky-950/20",

        hoverGradient:
          "hover:from-blue-700 hover:via-cyan-600 hover:to-sky-600",

        text: "text-blue-600 dark:text-blue-400",

        border: "border-blue-500 dark:border-blue-400",

        softBorder: "border-blue-200/70 dark:border-blue-800/50",

        bg: "bg-blue-50 dark:bg-blue-900/20",

        iconBg: "bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-500",
      }}
    />
  );
};

export default WebDevServicePage;
