import { useEffect, useState } from "react";
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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  if (!publications.length) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-500">
        No publications found.
      </div>
    );
  }

  return (
    <div
      className={`min-h-[80vh] py-24 px-4 max-w-4xl mx-auto ${
        theme === "dark" ? "text-gray-200" : "text-gray-800"
      }`}
    >
      <h1
        className={`text-3xl font-bold mb-8 border-b pb-2 ${
          theme === "dark" ? "border-gray-700" : "border-gray-200"
        }`}
      >
        Publications
      </h1>

      <div className="space-y-8">
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
            <div key={index} className="group">
              <div className="flex items-baseline">
                <div className="text-sm font-mono text-gray-500 dark:text-gray-400 w-16 flex-shrink-0">
                  {year}
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-lg font-medium leading-snug ${
                      url ? "hover:underline cursor-pointer" : ""
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
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-1 inline-block"
                    >
                      View Publication
                    </a>
                  )}
                </div>
              </div>
              {index < publications.length - 1 && (
                <div
                  className={`h-px my-6 ${
                    theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                  }`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PublicationsPage;
