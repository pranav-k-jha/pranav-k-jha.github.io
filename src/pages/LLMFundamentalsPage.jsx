import { llmFundamentals } from "../components/courses/LLMFundamentals";
import CoursePageTemplate from "../components/courses/CoursePageTemplate";

const LLMFundamentalsPage = () => {
  const courseData = {
    title: "LLM Fundamentals",
    subtitle: "Build a strong foundation in Large Language Models",
    intro:
      "This section introduces essential knowledge about mathematics, Python, and neural networks. You might not want to start here but refer to it as needed.",
    level: "Beginner",
    modulesTitle: "Course Modules",
    modulesDescription:
      "A structured learning path covering all aspects of LLM fundamentals",
    sections: llmFundamentals, // Pass the array directly as sections
  };

  return <CoursePageTemplate courseData={courseData} />;
};

export default LLMFundamentalsPage;
