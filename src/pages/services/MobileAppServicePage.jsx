import React from "react";
import ServiceTemplate from "../../components/ServiceTemplate";
import { Smartphone } from "lucide-react";

const MobileAppServicePage = () => {
  const serviceData = {
    title: "Mobile App Development",

    eyebrow: "iOS, Android & Cross-Platform Applications",

    description:
      "Build modern, secure, and high-performance mobile applications for iOS and Android using scalable cross-platform technologies. From customer-facing apps and business platforms to real-time mobile systems, I create responsive mobile experiences backed by reliable APIs and cloud infrastructure.",

    icon: Smartphone,

    features: [
      "Cross-platform iOS and Android development",
      "React Native and Expo application development",
      "Responsive and accessible mobile UI/UX",
      "Secure authentication and user accounts",
      "REST and GraphQL API integration",
      "Push notification implementation",
      "Offline-first application capabilities",
      "Real-time data synchronization",
      "Camera, location, and device feature integration",
      "Payment and third-party service integration",
      "Performance and memory optimization",
      "App Store and Google Play deployment support",
    ],

    technologies: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "GraphQL",
      "REST APIs",
      "Apollo Client",
      "Redux Toolkit",
      "Firebase",
      "PostgreSQL",
      "MongoDB",
      "Jest",
      "Detox",
      "Docker",
      "AWS",
    ],

    process: [
      {
        title: "Discovery & Planning",
        description:
          "We begin by defining your application goals, target users, required features, supported platforms, integrations, business requirements, and technical constraints. This creates a clear development roadmap before implementation begins.",
      },

      {
        title: "UI/UX & Application Architecture",
        description:
          "The navigation structure, user journeys, screen layouts, reusable components, state management approach, backend architecture, and mobile interaction patterns are planned to create a consistent experience across devices.",
      },

      {
        title: "Mobile App Development",
        description:
          "The application is developed using React Native, Expo, TypeScript, and other appropriate technologies while maintaining reusable components, clean architecture, responsive layouts, and maintainable code.",
      },

      {
        title: "Backend & API Integration",
        description:
          "The mobile application is connected to secure APIs, databases, authentication services, cloud infrastructure, payment systems, notification services, and other third-party platforms required by the project.",
      },

      {
        title: "Testing & Performance Optimization",
        description:
          "The application is tested across multiple devices, screen sizes, and operating-system versions. Functionality, navigation, API behavior, responsiveness, accessibility, loading performance, memory usage, and error handling are validated before release.",
      },

      {
        title: "Deployment & Ongoing Support",
        description:
          "The production application is prepared for distribution through the Apple App Store and Google Play Store. Deployment support, release configuration, updates, monitoring, maintenance, and future feature development can also be provided.",
      },
    ],

    faqs: [
      {
        question: "Can one application work on both iOS and Android?",
        answer:
          "Yes. Cross-platform technologies such as React Native allow a large portion of the application codebase to be shared between iOS and Android while still providing access to native device capabilities and platform-specific functionality when required.",
      },

      {
        question: "Why use React Native and Expo for mobile development?",
        answer:
          "React Native enables development of native mobile applications using a shared JavaScript or TypeScript codebase. Expo provides additional development tooling, routing, build services, device APIs, and deployment workflows that can simplify development and maintenance for many applications.",
      },

      {
        question: "Can you build both the mobile app and backend?",
        answer:
          "Yes. A project can include the complete mobile application as well as backend APIs, authentication, databases, cloud services, file storage, notification infrastructure, business logic, and administrative functionality.",
      },

      {
        question: "Can the app connect to my existing backend?",
        answer:
          "Yes. Existing systems can be integrated through REST APIs, GraphQL, WebSockets, authentication services, cloud functions, or other supported interfaces. The integration approach depends on your existing architecture and security requirements.",
      },

      {
        question: "Can mobile apps work without an internet connection?",
        answer:
          "Yes. Applications can be designed with offline-first capabilities using local storage, caching, queued actions, and synchronization strategies. The exact offline functionality depends on which application features need to remain available without connectivity.",
      },

      {
        question: "Can you add push notifications?",
        answer:
          "Yes. Push notifications can be implemented for alerts, messages, reminders, status updates, transactions, user engagement, and other application events using appropriate notification services.",
      },

      {
        question: "Can the app use camera, GPS, or other phone features?",
        answer:
          "Yes. Mobile applications can integrate device capabilities such as the camera, photo library, GPS and location services, biometrics, file storage, contacts, sensors, deep links, and other supported native functionality.",
      },

      {
        question: "Can payment systems be integrated?",
        answer:
          "Yes. Depending on the type of application, payment functionality can be integrated using supported payment providers, subscription systems, in-app purchases, or external checkout services while following the relevant platform requirements.",
      },

      {
        question: "Do you help with App Store and Google Play submission?",
        answer:
          "Yes. Deployment support can include production builds, signing configuration, application metadata, release preparation, store listing requirements, and submission guidance for both the Apple App Store and Google Play Store.",
      },

      {
        question: "How long does mobile app development take?",
        answer:
          "Development time depends on the number of screens, backend requirements, integrations, design complexity, offline functionality, device features, and testing requirements. A smaller application may take several weeks, while a larger production application can require multiple development phases.",
      },

      {
        question: "Do you provide maintenance after launch?",
        answer:
          "Yes. Ongoing support can include bug fixes, operating-system compatibility updates, dependency upgrades, performance monitoring, backend maintenance, application updates, security improvements, and development of new features.",
      },

      {
        question: "Can an existing mobile app be improved or modernized?",
        answer:
          "Yes. Existing applications can be reviewed and improved through UI modernization, performance optimization, architecture refactoring, dependency upgrades, API improvements, feature additions, security enhancements, or migration to a newer technology stack.",
      },
    ],
  };

  return (
    <ServiceTemplate
      {...serviceData}
      showPricing={false}
      theme={{
        gradient: "from-teal-500 via-emerald-500 to-green-500",

        softGradient:
          "from-teal-50 via-emerald-50 to-green-50 dark:from-teal-950/20 dark:via-emerald-950/20 dark:to-green-950/20",

        hoverGradient:
          "hover:from-teal-600 hover:via-emerald-600 hover:to-green-600",

        text: "text-teal-600 dark:text-teal-400",

        border: "border-teal-500 dark:border-teal-400",

        softBorder: "border-teal-200/70 dark:border-teal-800/50",

        bg: "bg-teal-50 dark:bg-teal-900/20",

        iconBg: "bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500",
      }}
    />
  );
};

export default MobileAppServicePage;
