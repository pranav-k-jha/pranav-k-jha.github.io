import { llmEngineer } from "../components/courses/LLMEngineer";
import CoursePageTemplate from "../components/courses/CoursePageTemplate";

const LLMEngineerPage = () => {
  const courseData = {
    title: "LLM Engineer",
    subtitle: "Build and deploy production-grade LLM applications",
    intro:
      "This course focuses on building and deploying production-grade LLM applications. Learn to optimize, scale, and maintain LLM applications with industry best practices.",
    level: "Advanced",
    modulesTitle: "Engineering Tracks",
    modulesDescription:
      "Comprehensive modules covering the full LLM engineering lifecycle",
    sections: llmEngineer, // Pass the array directly as sections
  };

  return <CoursePageTemplate courseData={courseData} />;
};

export default LLMEngineerPage;
