import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { FiBookOpen, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

import { courseAttribution } from "../data/llmTwinModules";
import llmTwinCourse from "../components/courses/LLMTwinCourse";

// Animation variants for reusability
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeInUpDelayed = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5 },
});

// Extracted component for better organization
const BulletPoint = ({ bullet }) => {
  const linkRegex = /\[(.*?)\]\((.*?)\)/g;
  let match;
  let lastIndex = 0;
  const parts = [];

  while ((match = linkRegex.exec(bullet)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: "text",
        content: bullet.substring(lastIndex, match.index),
      });
    }
    parts.push({
      type: "link",
      text: match[1],
      url: match[2],
    });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < bullet.length) {
    parts.push({
      type: "text",
      content: bullet.substring(lastIndex),
    });
  }

  return (
    <li className="flex items-start">
      <span className="text-blue-500 mr-2 mt-1">•</span>
      <span className="text-gray-700 dark:text-gray-300">
        {parts.map((part, i) =>
          part.type === "link" ? (
            <a
              key={i}
              href={part.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
            >
              {part.text}
              <FiExternalLink className="ml-1 w-3 h-3" />
            </a>
          ) : (
            <span key={i}>{part.content}</span>
          )
        )}
      </span>
    </li>
  );
};

// Course Overview Section Component
const CourseOverview = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
    <div className="p-6 md:p-8 space-y-8">
      <div className="space-y-6">
        {/* What You'll Learn */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
            <span className="mr-2">🎯</span> What you'll learn
          </h3>
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-200">
              {llmTwinCourse.description}
            </p>
            <p className="font-medium text-blue-600 dark:text-blue-400">
              No more isolated scripts or Notebooks! Learn production ML by
              building and deploying an end-to-end production-grade LLM system.
            </p>
          </div>
        </div>

        <div className="h-px bg-gray-100 dark:bg-gray-700"></div>

        {/* About This Course */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
            <span className="mr-2">📖</span> About this course
          </h3>
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-200">
              You will learn how to architect and build a real-world LLM system
              from start to finish — from data collection to deployment.
            </p>
            <p className="text-gray-700 dark:text-gray-200">
              You will also learn to leverage MLOps best practices, such as
              experiment trackers, model registries, prompt monitoring, and
              versioning.
            </p>
            <p className="font-medium text-gray-800 dark:text-white">
              The end goal? Build and deploy your own LLM twin.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-r">
              <p className="text-blue-700 dark:text-blue-200 font-medium">
                What is an LLM Twin? It is an AI character that learns to write
                like somebody by incorporating its style and personality into an
                LLM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Course Architecture Section Component
const CourseArchitecture = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
      Course Architecture
    </h2>
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {llmTwinCourse.sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <span className="w-6 h-6 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mr-3 text-sm font-medium">
                  {index + 1}
                </span>
                {section.title}
              </h3>
              <ul className="space-y-2 mt-4">
                {section.bullets.map((bullet, bulletIndex) => (
                  <BulletPoint key={bulletIndex} bullet={bullet} />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Serverless Tools Section Component
const ServerlessTools = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
      Integrated Serverless Tools
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {llmTwinCourse.serverlessTools.map((tool, index) => (
        <motion.a
          key={index}
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          whileHover={{ y: -5 }}
        >
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {tool.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {tool.description}
            </p>
          </div>
          <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
            Learn more
            <FiArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.a>
      ))}
    </div>
  </div>
);

// Call to Action Section Component
const CallToAction = () => (
  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center">
    <h3 className="text-2xl font-bold text-white mb-4">
      Ready to build your LLM Twin?
    </h3>
    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
      Start your journey to creating a production-ready AI replica with our
      comprehensive course.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="https://github.com/decodingai-magazine/llm-twin-course"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
      >
        View on GitHub
        <FiExternalLink className="ml-2 w-4 h-4" />
      </a>
      <Link
        to="/llm-notebooks"
        className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
      >
        Explore Notebooks
        <FiArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </div>
  </div>
);

// Main Component
const LLMTwinCoursePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollPosition) {
      window.scrollTo(0, location.state.scrollPosition);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl my-20 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="space-y-4 mb-16">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 dark:from-purple-400 dark:via-blue-400 dark:to-emerald-400">
              LLM TWIN COURSE
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="space-y-2 text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h2 className="text-lg sm:text-xl font-light text-gray-600 dark:text-gray-400">
              Building Your Production-Ready AI Replica
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              Learn to architect and implement a production-ready LLM & RAG
              system by building your LLM Twin. From data gathering to
              deployment, master the entire pipeline of creating an AI that
              writes like you.
            </p>
          </motion.div>

          {/* Attribution */}
          <div className="mt-20">
            <motion.div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-4">
              <div className="w-full">
                <motion.p
                  className="text-gray-700 dark:text-gray-300 text-center whitespace-nowrap overflow-hidden text-ellipsis"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <span className="font-medium">Note:</span> This course is
                  based on the work of{" "}
                  <a
                    href={courseAttribution.authorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {courseAttribution.author}
                  </a>
                  . The course materials are available under the{" "}
                  <a
                    href={courseAttribution.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {courseAttribution.license}
                  </a>
                  .
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Course Content */}
          <motion.div
            className="w-full mt-12 space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CourseOverview />
            <CourseArchitecture />
            <ServerlessTools />
            <CallToAction />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LLMTwinCoursePage;
