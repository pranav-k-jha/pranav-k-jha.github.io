import { llmEngineer } from "../components/courses/LLMEngineer";
import CoursePageTemplate from "../components/courses/CoursePageTemplate";

const LLMEngineerPage = () => {
  const courseData = {
    ...llmEngineer,
    title: "LLM Engineer",
    subtitle: "Build and deploy production-grade LLM applications",
    level: "Advanced",
    modulesTitle: "Engineering Tracks",
    modulesDescription:
      "Comprehensive modules covering the full LLM engineering lifecycle",
  };

  return <CoursePageTemplate courseData={courseData} />;
};

export default LLMEngineerPage;
