import React from "react";
import ServiceTemplate from "../../components/ServiceTemplate";
import {
  Smartphone,
  Code,
  Cpu,
  Database,
  Zap,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";

const MobileAppServicePage = () => {
  const serviceData = {
    title: "Mobile App Development",
    description:
      "Build high-performance, cross-platform mobile applications with React Native and Expo Router, powered by a robust Node.js and GraphQL backend. We create seamless mobile experiences that work flawlessly on both iOS and Android.",
    image:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=1000",
    icon: Smartphone,
    features: [
      "Cross-platform iOS & Android Development",
      "Expo Router for Seamless Navigation",
      "GraphQL API Integration",
      "Offline-First Capabilities",
      "Push Notifications",
      "App Store & Play Store Deployment",
      "UI/UX Optimization",
      "Performance Optimization",
    ],
    technologies: [
      "React Native",
      "Expo Router",
      "Node.js",
      "GraphQL",
      "TypeScript",
      "Apollo Client",
      "Redux Toolkit",
      "Jest",
      "Detox",
    ],
    pricing: [
      {
        name: "Starter",
        description: "Basic mobile app with core features",
        price: "$5,000+",
        features: [
          "Up to 10 screens",
          "Basic UI/UX design",
          "REST/GraphQL API integration",
          "Basic state management",
          "1 platform (iOS or Android)",
          "1 month support",
        ],
        popular: false,
      },
      {
        name: "Professional",
        description: "Advanced mobile application",
        price: "$15,000+",
        features: [
          "Up to 30 screens",
          "Custom UI/UX design",
          "GraphQL API with real-time updates",
          "Advanced state management",
          "Both iOS & Android",
          "Push notifications",
          "Offline support",
          "3 months support",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        description: "Custom mobile solution",
        price: "Custom",
        features: [
          "Unlimited screens",
          "Custom UI/UX design",
          "Advanced API integration",
          "Enterprise-grade security",
          "Cross-platform development",
          "Advanced animations",
          "Custom native modules",
          "6+ months support",
          "Priority support",
        ],
        popular: false,
      },
    ],
    faqs: [
      {
        question: "What is the advantage of using React Native with Expo?",
        answer:
          "React Native with Expo provides a faster development cycle, access to native device features, and a single codebase for both iOS and Android. Expo's development tools and services simplify the build and deployment process.",
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer:
          "Development time varies based on complexity. A basic app typically takes 2-3 months, while more complex applications can take 4-6 months or longer. A detailed timeline is provided during the planning phase.",
      },
      {
        question: "Are app store submission services included?",
        answer:
          "Yes, the service includes preparing and submitting the app to both the Apple App Store and Google Play Store, including creating app store listings, screenshots, and managing the review process.",
      },
      {
        question: "Is integration with existing backend systems possible?",
        answer:
          "The mobile app can be integrated with any existing backend system, whether it uses RESTful APIs, GraphQL, or other web services, ensuring secure and efficient data exchange between the app and backend.",
      },
    ],
    process: [
      {
        title: "Discovery & Planning",
        description:
          "We'll work with you to understand your requirements, target audience, and business goals to create a detailed project plan.",
        icon: Clock,
      },
      {
        title: "UI/UX Design",
        description:
          "Our designers will create intuitive and engaging user interfaces that provide an excellent user experience on both iOS and Android.",
        icon: Smartphone,
      },
      {
        title: "Development",
        description:
          "Our experienced developers will build your app using React Native and Expo, ensuring high performance and code quality.",
        icon: Code,
      },
      {
        title: "Backend Integration",
        description:
          "We'll connect your app to a secure and scalable Node.js backend with GraphQL API for efficient data management.",
        icon: Database,
      },
      {
        title: "Testing & QA",
        description:
          "Rigorous testing across multiple devices and platforms to ensure your app works flawlessly in all scenarios.",
        icon: Shield,
      },
      {
        title: "Deployment & Support",
        description:
          "We'll help you launch your app on the app stores and provide ongoing support and maintenance as needed.",
        icon: Zap,
      },
    ],
    cta: {
      title: "Ready to build your mobile app?",
      description:
        "Let's discuss how we can turn your mobile app idea into reality with our expert development services.",
      buttonText: "Get Started",
      buttonLink: "/contact",
    },
    theme: {
      gradient: "from-green-500 to-emerald-500",
      hoverGradient: "hover:from-green-600 hover:to-emerald-600",
      text: "text-green-600 dark:text-green-400",
      border: "border-green-500",
      bg: "bg-green-50 dark:bg-green-900/20",
      iconBg: "bg-gradient-to-r from-green-500 to-emerald-500",
      buttonGradient:
        "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
      buttonText: "text-white",
      buttonShadow:
        "shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30",
    },
  };

  return (
    <ServiceTemplate
      title={serviceData.title}
      description={serviceData.description}
      image={serviceData.image}
      icon={serviceData.icon}
      features={serviceData.features}
      technologies={serviceData.technologies}
      pricing={serviceData.pricing}
      faqs={serviceData.faqs}
      process={serviceData.process}
      cta={serviceData.cta}
      theme={serviceData.theme}
    />
  );
};

export default MobileAppServicePage;
