import { Brain, Code, Database, Smartphone } from "lucide-react";

const services = [
  {
    id: 1,
    isActive: true, // Mark this service as active
    title: "AI & Machine Learning Solutions",
    slug: "ai-ml",
    description:
      "Custom AI models, machine learning pipelines, and intelligent automation solutions tailored to your business needs.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    icon: Brain,
    category: "AI & ML",
    features: [
      "Custom ML Model Development",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics",
      "AI Strategy Consulting",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenAI API",
    ],
    color: "from-purple-600 to-pink-600",
  },
  {
    id: 2,
    isActive: true, //
    title: "Web Development",
    slug: "web-development",
    description:
      "Modern, scalable web applications built with cutting-edge technologies and best practices.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
    icon: Code,
    category: "Web Development",
    features: [
      "React & Next.js Applications",
      "Backend API Development",
      "Database Design & Optimization",
      "Cloud Deployment",
      "Performance Optimization",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: 3,
    title: "Data Engineering & Analytics",
    slug: "data-engineering",
    description:
      "Robust data pipelines, ETL processes, and analytics platforms to unlock insights from your data.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    icon: Database,
    category: "Data Engineering",
    features: [
      "Data Pipeline Development",
      "ETL/ELT Processes",
      "Data Warehousing",
      "Real-time Analytics",
      "Data Visualization",
    ],
    technologies: ["Python", "Apache Airflow", "PostgreSQL", "Redis", "Docker"],
    color: "from-orange-600 to-red-600",
  },
  {
    id: 4,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description:
      "Cross-platform mobile applications built with React Native and Expo Router, powered by a robust Node.js and GraphQL backend.",
    image:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=1000",
    icon: Smartphone,
    category: "Mobile Development",
    features: [
      "Cross-platform iOS & Android Apps",
      "Expo Router for Navigation",
      "GraphQL API Integration",
      "Offline-First Capabilities",
      "Push Notifications",
    ],
    technologies: [
      "React Native",
      "Expo Router",
      "Node.js",
      "GraphQL",
      "TypeScript",
    ],
    color: "from-teal-600 to-emerald-700",
  },
];

export default services;
