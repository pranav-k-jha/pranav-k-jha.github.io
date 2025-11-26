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

  const additionalPublications = [
    {
      "work-summary": [
        {
          title: {
            title: {
              value:
                "Adversarial Machine Learning: Attacks, Defenses, and Open Challenges",
            },
          },
          "publication-date": {
            year: { value: "2025" },
            month: { value: "02" },
            day: { value: "08" },
          },
          "journal-title": { value: "arXiv" },
          "journal-subtitle": { value: "Preprint" },
          "work-type": { value: "ARTICLE" },
          type: "ARTICLE",
          url: { value: "https://arxiv.org/abs/2502.05637" },
          manual: true,
          "publication-status": "published",
          category: "article",
        },
      ],
    },
    {
      "work-summary": [
        {
          title: {
            title: {
              value:
                "A Grid-Enabled Framework Integrating Computer Vision and Machine Learning for Real-Time Intersection Intelligence and Autonomous Vehicle Coordination",
            },
          },
          "publication-date": { year: { value: "2025" } },
          "journal-title": { value: "MDPI Infrastructures" },
          "journal-subtitle": { value: "Submitted" },
          "work-type": { value: "JOURNAL_ARTICLE" },
          type: "JOURNAL_ARTICLE",
          url: { value: "https://www.mdpi.com/journal/applsci" },
          manual: true,
          "publication-status": "Conditionally Accepted",
        },
      ],
    },
    {
      "work-summary": [
        {
          title: {
            title: {
              value:
                "Generative Models for Synthetic Transit Trip Data: A Comparative Study of CTGAN and TVAE for Travel Behavior Analysis",
            },
          },
          "publication-date": { year: { value: "2025" } },
          "journal-title": { value: "Transportation Research Procedia" },
          "journal-subtitle": { value: "Submitted" },
          "work-type": { value: "CONFERENCE_ARTICLE" },
          type: "CONFERENCE_ARTICLE",
          url: "",
          manual: true,
          "publication-status": "submitted",
        },
      ],
    },
    {
      "work-summary": [
        {
          title: {
            title: {
              value:
                "Secure and Equitable Transportation Planning in the Quantum Age: A Framework for Privacy-Preserving Mobility Data Using Quantum-Resilient Cryptography",
            },
          },
          "publication-date": { year: { value: "2025" } },
          "journal-title": { value: "Transportation Research Procedia" },
          "journal-subtitle": { value: "Submitted" },
          "work-type": { value: "CONFERENCE_ARTICLE" },
          type: "CONFERENCE_ARTICLE",
          url: "",
          manual: true,
          "publication-status": "submitted",
        },
      ],
    },
  ];

  useEffect(() => {
    const loadPublications = async () => {
      try {
        const orcidWorks = (await fetchORCIDPublications(orcidId)) || [];
        const allWorks = [...orcidWorks, ...additionalPublications];
        const sortedWorks = allWorks.sort((a, b) => {
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
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-purple-900/50">
      <main className="min-h-[60vh] py-24 mt-6 px-4 max-w-4xl mx-auto ">
        <motion.div
          initial="hidden"
          animate="show"
          variants={headerVariants}
          className="mb-12 flex flex-col items-center"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 dark:from-purple-400 dark:via-blue-400 dark:to-emerald-400">
              PUBLICATIONS
            </span>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <p className="text-center text-lg font-light text-gray-600 dark:text-gray-400">
              Research papers, articles, and academic contributions
            </p>
          </motion.div>
        </motion.div>

        {loading ? (
          <div className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <motion.div key={i} className="flex items-start space-x-4">
                <div className="w-16 h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
                  <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2 animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
        ) : error ? (
          <div className="min-h-[40vh] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center text-red-500"
            >
              {error}
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="space-y-6"
          >
            {publications.map((work, index) => {
              const workSummary = work["work-summary"]?.[0] || {};
              const title = workSummary?.title?.title?.value || "Untitled";
              const url = workSummary?.url?.value;
              const year = workSummary?.["publication-date"]?.year?.value;
              const journal = workSummary?.["journal-title"]?.value;
              const doi = workSummary?.["external-ids"]?.["external-id"]?.find(
                (id) => id["external-id-type"] === "doi"
              )?.["external-id-value"];
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
                >
                  <div className="flex items-baseline">
                    <div className="text-sm font-mono text-gray-500 dark:text-gray-400 w-16 flex-shrink-0">
                      {year}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-sm md:text-base lg:text-lg font-medium leading-snug transition-colors text-gray-900 dark:text-gray-100 ${
                          url
                            ? "hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                            : ""
                        }`}
                        onClick={() => url && window.open(url, "_blank")}
                      >
                        {title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        {journal && (
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {journal}
                            {workSummary?.["journal-subtitle"]?.value && (
                              <span className="ml-2 text-blue-500 dark:text-blue-400">
                                • {workSummary["journal-subtitle"].value}
                              </span>
                            )}
                          </span>
                        )}
                        {type && (
                          <span className="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 whitespace-nowrap">
                            {type.replace(/_/g, " ").toLowerCase()}
                          </span>
                        )}
                      </div>
                      {doi && (
                        <a
                          href={`https://doi.org/${doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-blue-500 dark:text-blue-400 hover:underline block mt-1"
                        >
                          {doi}
                        </a>
                      )}
                      {authors && (
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                          {authors}.
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default PublicationsPage;
