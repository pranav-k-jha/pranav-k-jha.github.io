import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiPlay, FiCalendar } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className={`group relative flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-8 mb-24 last:mb-0`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      layout
    >
      {/* Image */}
      <div className="w-full md:w-1/2 relative">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="overflow-hidden rounded-xl shadow-xl relative group"
        >
          <div className="relative w-full h-64 md:h-80">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading={index < 3 ? "eager" : "lazy"}
            />
          </div>
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
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <div className={`${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
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
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
