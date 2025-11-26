import { llmFundamentals } from "../components/courses/LLMFundamentals";
import CoursePageTemplate from "../components/courses/CoursePageTemplate";

const LLMFundamentalsPage = () => {
  const courseData = {
    ...llmFundamentals,
    title: "LLM Fundamentals",
    subtitle: "Build a strong foundation in Large Language Models",
    level: "Beginner",
    modulesTitle: "Course Modules",
    modulesDescription:
      "A structured learning path covering all aspects of LLM fundamentals",
  };

  return <CoursePageTemplate courseData={courseData} />;
};

export default LLMFundamentalsPage;
