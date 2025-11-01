import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchORCIDPublications } from "../utils/orcid";
import { useTheme } from "../context/ThemeContext";

const PublicationsPage = () => {
  const { theme } = useTheme();
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const orcidId = "0000-0001-8053-988X";

  useEffect(() => {
    const loadPublications = async () => {
      try {
        const works = await fetchORCIDPublications(orcidId);
        const sortedWorks = [...(works || [])].sort((a, b) => {
          const yearA =
            a["work-summary"]?.[0]?.["publication-date"]?.year?.value || 0;
          const yearB =
            b["work-summary"]?.[0]?.["publication-date"]?.year?.value || 0;
          return yearB - yearA;
        });
        setPublications(sortedWorks);
        setError(null);
      } catch (err) {
        console.error("Error loading publications:", err);
        setError("Failed to load publications. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadPublications();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center text-red-500"
        >
          {error}
        </motion.div>
      </div>
    );
  }

  if (!publications.length) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-500">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No publications found.
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className={`min-h-[80vh] py-24 px-4 max-w-4xl mx-auto ${
        theme === "dark" ? "text-gray-200" : "text-gray-800"
      }`}
    >
      <motion.h1
        variants={headerVariants}
        className={`text-3xl font-bold mb-8 border-b pb-2 ${
          theme === "dark" ? "border-gray-700" : "border-gray-200"
        }`}
      >
        Publications
      </motion.h1>

      <motion.div variants={containerVariants} className="space-y-8">
        {publications.map((work, index) => {
          const title =
            work["work-summary"]?.[0]?.title?.title?.value || "Untitled";
          const url = work["work-summary"]?.[0]?.url?.value;
          const year =
            work["work-summary"]?.[0]?.["publication-date"]?.year?.value;
          const journal = work["work-summary"]?.[0]?.["journal-title"]?.value;
          const type = work["work-summary"]?.[0]?.type;
          const authors = work["work-summary"]?.[0]?.["contributors"]?.[
            "contributor"
          ]
            ?.map((c) => c["credit-name"]?.value)
            .join(", ");

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group"
            >
              <div className="flex items-baseline">
                <div className="text-sm font-mono text-gray-500 dark:text-gray-400 w-16 flex-shrink-0">
                  {year}
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-lg font-medium leading-snug transition-colors ${
                      url
                        ? "hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                        : ""
                    }`}
                    onClick={() => url && window.open(url, "_blank")}
                  >
                    {title}
                  </h3>
                  <div className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                    {authors && <span>{authors}. </span>}
                    {journal && <span className="italic">{journal}</span>}
                    {type && (
                      <span className="ml-2 px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                        {type.replace(/_/g, " ").toLowerCase()}
                      </span>
                    )}
                  </div>
                  {url && (
                    <motion.a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 2 }}
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-1 inline-block"
                    >
                      View Publication →
                    </motion.a>
                  )}
                </div>
              </div>
              {index < publications.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className={`h-px my-6 origin-left ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                  }`}
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default PublicationsPage;
