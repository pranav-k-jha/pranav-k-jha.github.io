import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiPlay, FiCalendar } from "react-icons/fi";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      className={`group relative flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-8 mb-24 last:mb-0`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={index % 5} // Stagger based on index
      layout
    >
      {/* Image */}
      <motion.div
        className="w-full md:w-1/2 relative"
        variants={contentVariants}
      >
        <motion.div
          whileHover={{
            scale: 1.02,
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="overflow-hidden rounded-2xl shadow-lg relative group bg-gray-50 dark:bg-gray-800"
        >
          <motion.div
            className="relative w-full h-64 md:h-80 overflow-hidden"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
            }}
          >
            <motion.img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
              loading={index < 3 ? "eager" : "lazy"}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <div className="flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub className="mr-2" /> View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <span className="absolute -top-3 right-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md z-10">
          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
        </span>
      </motion.div>

      {/* Content */}
      <motion.div className="w-full md:w-1/2" variants={contentVariants}>
        <motion.div
          className={`${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          {project.associatedWith && (
            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">
              {project.associatedWith}
            </p>
          )}

          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 gap-4 flex-wrap">
            <span className="flex items-center">
              <FiCalendar className="mr-1.5" />
              {project.startDate} - {project.endDate || "Present"}
            </span>
            {project.notes && (
              <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs rounded-full">
                {project.notes}
              </span>
            )}
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.skills.slice(0, 6).map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
            {project.skills.length > 6 && (
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full">
                +{project.skills.length - 6} more
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                <FiExternalLink className="mr-2" /> View Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition-colors"
              >
                <FiGithub className="mr-2" /> Source Code
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
              >
                <FiPlay className="mr-2" /> Watch Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.article>
  );
};

export default ProjectCard;
