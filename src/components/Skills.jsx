import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaMobile,
  FaServer,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact className="text-4xl text-blue-500" />,
    level: "90%",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-4xl text-yellow-400" />,
    level: "85%",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-4xl text-blue-600" />,
    level: "80%",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-4xl text-green-600" />,
    level: "85%",
  },
  {
    name: "Python",
    icon: <FaPython className="text-4xl text-blue-700" />,
    level: "75%",
  },
  {
    name: "Databases",
    icon: <FaDatabase className="text-4xl text-gray-600" />,
    level: "80%",
  },
  {
    name: "Responsive Design",
    icon: <FaMobile className="text-4xl text-purple-500" />,
    level: "90%",
  },
  {
    name: "Backend Development",
    icon: <FaServer className="text-4xl text-red-500" />,
    level: "80%",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl text-cyan-400" />,
    level: "90%",
  },
  {
    name: "State Management",
    icon: <SiRedux className="text-4xl text-purple-700" />,
    level: "85%",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-500 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                ></motion.div>
              </div>
              <span className="text-sm text-gray-600 mt-2">{skill.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
