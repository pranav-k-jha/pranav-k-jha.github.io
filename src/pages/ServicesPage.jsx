import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useMemo, useCallback } from "react";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Brain,
  Smartphone,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

const SERVICE_CATEGORIES = {
  "AI & ML": {
    name: "AI & ML",
    icon: Brain,
    description: "Artificial Intelligence and Machine Learning solutions",
    color: "from-purple-500 to-pink-500",
  },
  "Web Development": {
    name: "Web Development",
    icon: Code,
    description: "Full-stack web applications and platforms",
    color: "from-blue-500 to-cyan-500",
  },

  "Data Engineering": {
    name: "Data Engineering",
    icon: Database,
    description: "Data pipelines and analytics platforms",
    color: "from-orange-500 to-red-500",
  },
};

// Hook for filtering services
const useServiceFilter = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredServices = useMemo(() => {
    if (!activeCategory) return services;
    return services.filter((service) => service.category === activeCategory);
  }, [activeCategory]);

  const categoryStats = useMemo(() => {
    return Object.keys(SERVICE_CATEGORIES).reduce((acc, category) => {
      acc[category] = services.filter(
        (service) => service.category === category
      ).length;
      return acc;
    }, {});
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  return {
    activeCategory,
    filteredServices,
    categoryStats,
    handleCategoryChange,
    totalServices: services.length,
  };
};

const services = [
  {
    id: 1,
    title: "AI & Machine Learning Solutions",
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
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
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
    color: "from-blue-500 to-cyan-500",
  },

  {
    id: 4,
    title: "Data Engineering & Analytics",
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
    color: "from-orange-500 to-red-500",
  },
];

// Render individual service card
const renderServiceCard = (service) => {
  const IconComponent = service.icon;
  return (
    <>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`}
        />

        {/* Icon */}
        <div className="absolute top-4 right-4">
          <div
            className={`p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-lg`}
          >
            <IconComponent className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {service.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
            {service.description}
          </p>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Key Features:
            </h4>
            <ul className="space-y-1">
              {service.features.slice(0, 3).map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-xs text-gray-600 dark:text-gray-400"
                >
                  <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-1">
              {service.technologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
              {service.technologies.length > 3 && (
                <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                  +{service.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-auto space-y-2">
          <Link
            to="/contact"
            className={`w-full py-3 px-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 text-white font-semibold flex items-center justify-center hover:shadow-lg transition-all duration-300`}
          >
            Get Pricing
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button
            className={`w-full py-3 px-4 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </>
  );
};

// Variants for framer-motion animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: { scale: 1.02, transition: { duration: 0.2, ease: "easeInOut" } },
};

export default function ServicesPage() {
  const {
    activeCategory,
    filteredServices,
    categoryStats,
    handleCategoryChange,
    totalServices,
  } = useServiceFilter();

  const categoryList = useMemo(
    () =>
      Object.entries(SERVICE_CATEGORIES).map(([key, config]) => ({
        key,
        ...config,
        count: categoryStats[key],
      })),
    [categoryStats]
  );

  return (
    <main className="bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white min-h-screen relative">
      {/* Services Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-light tracking-tight mb-4 text-gray-900 dark:text-white">
              What I <span className="font-bold">Offer</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
              From AI-powered solutions to full-stack development, I provide
              end-to-end technology services that transform ideas into reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={`${service.category}-${service.id}`}
                  className="group relative bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-white/20 flex flex-col h-full"
                >
                  {/* Service Card Content */}
                  {renderServiceCard(service)}
                </div>
              );
            })}

            {/* No results message */}
            {filteredServices.length === 0 && (
              <div className="col-span-full text-center py-12">
                <div className="text-gray-500 dark:text-gray-400 text-lg">
                  No services found in this category.
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-6 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-blue-900/50"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-light tracking-tight mb-4 text-gray-900 dark:text-white">
              Ready to <span className="font-bold">Transform</span> Your Ideas?
            </h2>
            <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how my services can help you achieve your goals
              and drive innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
