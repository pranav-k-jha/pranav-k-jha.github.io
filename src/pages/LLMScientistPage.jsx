import { llmScientist } from "../components/courses/llmScientist";
import CoursePageTemplate from "../components/courses/CoursePageTemplate";

const LLMScientistPage = () => {
  const courseData = {
    ...llmScientist,
    title: "LLM Scientist",
    subtitle: "Dive deep into LLM research and development",
    level: "Advanced",
    modulesTitle: "Research Tracks",
    modulesDescription: "Advanced modules for LLM research and development",
  };

  return <CoursePageTemplate courseData={courseData} />;
};

export default LLMScientistPage;
