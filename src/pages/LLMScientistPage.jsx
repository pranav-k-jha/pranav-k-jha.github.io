import { llmScientist } from "../components/courses/llmScientist";
import CoursePageTemplate from "../components/courses/CoursePageTemplate";

const LLMScientistPage = () => {
  const courseData = {
    title: "LLM Scientist",
    subtitle: "Dive deep into LLM research and development",
    intro:
      "This section of the course focuses on learning how to build the best possible LLMs using the latest techniques.",
    level: "Advanced",
    modulesTitle: "Research Tracks",
    modulesDescription: "Advanced modules for LLM research and development",
    sections: llmScientist, // Pass the array directly as sections
  };

  return <CoursePageTemplate courseData={courseData} />;
};

export default LLMScientistPage;
