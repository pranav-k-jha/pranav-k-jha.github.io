import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchORCIDPublications } from "../utils/orcid";
import { useTheme } from "../context/ThemeContext";
import {
  FiSearch,
  FiBookOpen,
  FiExternalLink,
  FiCopy,
  FiCheck,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const orcidId = "0000-0001-8053-988X";

// Local enrichment layer to provide abstracts, bibtex, and clean authors (not returned by ORCID summaries API)
const publicationEnrichment = {
  "10.3390/infrastructures11020041": {
    authors: "Manoj K. Jha, Pranav K. Jha, Rupesh K. Yadav",
    abstract: "Intersections are safety-critical nodes in roadway networks, often prone to congestion and collisions. Traditional traffic management systems, relying on localized sensors or legacy signal controllers, struggle to handle the high density and dynamics of modern urban traffic. This paper proposes a Grid-Enabled Vision and Machine Learning Framework for Safer and Smarter Intersections, designed to enhance real-time roadway intelligence and vehicle coordination.",
    bibtex: `@Article{infrastructures11020041,
  AUTHOR = {Jha, Manoj K. and Jha, Pranav K. and Yadav, Rupesh K.},
  TITLE = {A Grid-Enabled Vision and Machine Learning Framework for Safer and Smarter Intersections: Enhancing Real-Time Roadway Intelligence and Vehicle Coordination},
  JOURNAL = {Infrastructures},
  VOLUME = {11},
  YEAR = {2026},
  NUMBER = {2},
  ARTICLE-NUMBER = {41},
  URL = {https://www.mdpi.com/2412-3811/11/2/41},
  ISSN = {2412-3811},
  DOI = {10.3390/infrastructures11020041}
}`
  },
  "10.3390/futuretransp5040161": {
    authors: "Manoj K. Jha, Rishav Jaiswal, D. Sai Kiran Varma, Shalini Rankavat, Anil K. Bachu, Pranav K. Jha",
    abstract: "Traffic congestion in urban areas leads to significant economic losses, environmental degradation, and reduced quality of life. Traditional congestion detection methods often rely on sparse sensor data or static models, which are inadequate for real-time applications. This study presents a machine learning-based framework for identifying and predicting traffic congestion hotspots using high-fidelity spatial-temporal mobility data.",
    bibtex: `@Article{futuretransp5040161,
  AUTHOR = {Jha, Manoj K. and Jaiswal, Rishav and Varma, D. Sai Kiran and Rankavat, Shalini and Bachu, Anil K. and Jha, Pranav K.},
  TITLE = {A Machine Learning Approach to Traffic Congestion Hotspot Identification and Prediction},
  JOURNAL = {Future Transportation},
  VOLUME = {5},
  YEAR = {2025},
  NUMBER = {4},
  PAGES = {1715--1735},
  URL = {https://www.mdpi.com/2673-7590/5/4/161},
  DOI = {10.3390/futuretransp5040161}
}`
  },
  "10.3390/vehicles7030073": {
    authors: "Pranav K. Jha, Manoj K. Jha",
    abstract: "Connected and Autonomous Vehicles (CAVs) generate vast amounts of heterogeneous data that must be transmitted and processed with ultra-low latency. However, issues such as missing data structures, packet drops, and transmission delays can severely degrade CAV coordination. This paper proposes a machine learning-based approach to address these data structure issues, ensuring robust V2X communication.",
    bibtex: `@Article{vehicles7030073,
  AUTHOR = {Jha, Pranav K. and Jha, Manoj K.},
  TITLE = {Handling Data Structure Issues with Machine Learning in a Connected and Autonomous Vehicle Communication System},
  JOURNAL = {Vehicles},
  VOLUME = {7},
  YEAR = {2025},
  NUMBER = {3},
  PAGES = {1120--1135},
  URL = {https://www.mdpi.com/2624-8921/7/3/73},
  DOI = {10.3390/vehicles7030073}
}`
  },
  "10.1109/ICEES.2018.8442405": {
    authors: "Pranav Kumar Jha, Nitin Kachare, K. Kalyani, D. Sriram Kumar",
    abstract: "Free Space Optical (FSO) communication has gained attention as a high-bandwidth alternative to radio frequency links. However, atmospheric turbulence causes fading, which degrades link performance. This paper analyzes the performance of FSO systems using cooperative relays and spatial diversity (Multiple-Input Single-Output) under log-normal fading channels.",
    bibtex: `@INPROCEEDINGS{8442405,
  author={Jha, Pranav Kumar and Kachare, Nitin and Kalyani, K. and Kumar, D. Sriram},
  booktitle={2018 4th International Conference on Electrical Energy Systems (ICEES)}, 
  title={Performance analysis of FSO using relays and spatial diversity under log-normal fading channel}, 
  year={2018},
  pages={121-125},
  doi={10.1109/ICEES.2018.8442405}
}`
  },
  "10.1109/RAIT.2018.8388972": {
    authors: "Pranav Kumar Jha, D. Sriram Kumar",
    abstract: "Non-Orthogonal Multiple Access (NOMA) is a key technology for spectral efficiency in 5G and beyond networks. This paper provides an achievable rate analysis of a relay-assisted cooperative NOMA system over Rician fading channels, using superposition coding at the source and successive interference cancellation (SIC) at the receivers.",
    bibtex: `@INPROCEEDINGS{8388972,
  author={Jha, Pranav Kumar and Kumar, D. Sriram},
  booktitle={2018 4th International Conference on Recent Advances in Information Technology (RAIT)}, 
  title={Achievable rate analysis of relay assisted cooperative NOMA over Rician fading channels}, 
  year={2018},
  pages={1-5},
  doi={10.1109/RAIT.2018.8388972}
}`
  },
  "10.1109/RAIT.2018.8388973": {
    authors: "Pranav Kumar Jha, S. Sushmitha Shree, D. Sriram Kumar",
    abstract: "Non-orthogonal Multiple Access (NOMA) has become a salient technology for improving the spectral efficiency of the next generation 5G wireless communication networks. In this paper, the achievable average rate of an Opportunistic Non-Orthogonal Multiple Access (O-NOMA) based Cooperative Relaying System (CRS) is studied under Rician fading channels with Channel State Information (CSI) available at the source terminal.",
    bibtex: `@INPROCEEDINGS{8388973,
  author={Jha, Pranav Kumar and Shree, S. Sushmitha and Kumar, D. Sriram},
  booktitle={2018 4th International Conference on Recent Advances in Information Technology (RAIT)}, 
  title={An opportunistic-non orthogonal multiple access based cooperative relaying system over Rician fading channels}, 
  year={2018},
  pages={1-5},
  doi={10.1109/RAIT.2018.8388973}
}`
  },
  "10.1063/1.4984154": {
    authors: "Pranav Kumar Jha, Neha Mishra, D. Sriram Kumar",
    abstract: "Visible Light Communication (VLC) utilizes light-emitting diodes (LEDs) for simultaneous illumination and high-speed data transmission. This paper presents a state-of-the-art review of VLC systems, outlining the primary hardware constraints, modulation schemes, and applications, alongside open challenges such as path loss, flickering, and shadowing.",
    bibtex: `@inproceedings{jha2017challenges,
  title={Challenges and potentials for visible light communications: State of the art},
  author={Jha, Pranav Kumar and Mishra, Neha and Kumar, D Sriram},
  booktitle={AIP Conference Proceedings},
  volume={1849},
  number={1},
  pages={020005},
  year={2017},
  organization={AIP Publishing LLC},
  doi={10.1063/1.4984154}
}`
  },
  "10.1063/1.4984158": {
    authors: "Neha Mishra, Pranav Kumar Jha",
    abstract: "Optical Wireless Communication (OWC) systems are susceptible to performance degradation from atmospheric turbulence and pointing errors. This paper evaluates the performance of dual-hop relaying systems operating over K-distribution turbulence channels under the combined influence of pointing errors and atmospheric attenuation.",
    bibtex: `@inproceedings{mishra2017performance,
  title={Performance analysis of dual-hop optical wireless communication systems over k-distribution turbulence channel with pointing error},
  author={Mishra, Neha and Jha, Pranav Kumar},
  booktitle={AIP Conference Proceedings},
  volume={1849},
  number={1},
  pages={020009},
  year={2017},
  organization={AIP Publishing LLC},
  doi={10.1063/1.4984158}
}`
  },
  "secure-transportation": {
    authors: "Pranav K. Jha, Manoj K. Jha",
    abstract: "As quantum computing advances, classical cryptographic systems face existential threats. This paper introduces a privacy-preserving framework for transportation planning data. We leverage quantum-resilient cryptography to ensure that sensitive mobility data can be collected, analyzed, and shared equitably without compromising individual privacy.",
    bibtex: `@article{jha2026secure,
  title={Secure and Equitable Transportation Planning in the Quantum Age: A Framework for Privacy-Preserving Mobility Data Using Quantum-Resilient Cryptography},
  author={Jha, Pranav K. and Jha, Manoj K.},
  journal={Transportation Research Procedia},
  year={2026},
  note={World Conference on Transport Research - WCTR 2026}
}`
  },
  "adversarial-machine-learning": {
    authors: "Pranav K. Jha",
    abstract: "Adversarial Machine Learning (AML) addresses vulnerabilities in AI systems where adversaries manipulate inputs or training data to degrade performance. This article provides a comprehensive analysis of evasion and poisoning attacks, formalizes defense mechanisms with mathematical rigor, and discusses the challenges of implementing robust solutions in adaptive threat models. Additionally, it highlights open challenges in certified robustness, scalability, and real-world deployment.",
    bibtex: `@article{jha2025adversarial,
  title={Adversarial Machine Learning: Attacks, Defenses, and Open Challenges},
  author={Jha, Pranav K.},
  journal={arXiv preprint arXiv:2502.05637},
  year={2025}
}`
  }
};

const getNormalizedCategory = (work) => {
  const workSummary = work["work-summary"]?.[0] || {};
  const type = (workSummary?.type || "").toLowerCase();
  const journal = (workSummary?.["journal-title"]?.value || "").toLowerCase();
  const journalSubtitle = (workSummary?.["journal-subtitle"]?.value || "").toLowerCase();
  
  if (
    type.includes("preprint") || 
    journal.includes("arxiv") || 
    journal.includes("preprint") || 
    journalSubtitle.includes("preprint")
  ) {
    return "preprint";
  }
  if (type.includes("conference") || type.includes("proceedings") || type.includes("procedia")) {
    return "conference";
  }
  if (type.includes("journal") || type.includes("article") || type === "work-type-article") {
    return "journal";
  }
  return "other";
};

const PublicationsPage = () => {
  const { theme } = useTheme();
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedAbstracts, setExpandedAbstracts] = useState({});
  const [expandedCitations, setExpandedCitations] = useState({});
  const [copiedDoi, setCopiedDoi] = useState(null);

  const orcidId = "0000-0001-8053-988X";

  const additionalPublications = [
    {
      "work-summary": [
        {
          title: {
            title: {
              value:
                "Secure and Equitable Transportation Planning in the Quantum Age: A Framework for Privacy-Preserving Mobility Data Using Quantum-Resilient Cryptography",
            },
          },
          "publication-date": {
            year: { value: "2026" },
            month: { value: "07" },
            day: { value: "06" },
          },
          "journal-title": { value: "Transportation Research Procedia" },
          "journal-subtitle": {
            value: "World Conference on Transport Research - WCTR 2026",
          },
          "work-type": { value: "ARTICLE" },
          type: "ARTICLE",
          url: { value: "https://www.sciencedirect.com" },
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

  const toggleAbstract = (key) => {
    setExpandedAbstracts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCitation = (key) => {
    setExpandedCitations((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Stats calculation based on ALL publications loaded
  const stats = {
    total: publications.length,
    journal: publications.filter((w) => getNormalizedCategory(w) === "journal").length,
    conference: publications.filter((w) => getNormalizedCategory(w) === "conference").length,
    preprint: publications.filter((w) => getNormalizedCategory(w) === "preprint").length,
  };

  // Filtering publications
  const filteredPublications = publications.filter((work) => {
    const workSummary = work["work-summary"]?.[0] || {};
    const title = (workSummary?.title?.title?.value || "").toLowerCase();
    const journal = (workSummary?.["journal-title"]?.value || "").toLowerCase();
    const doi = (
      workSummary?.["external-ids"]?.["external-id"]?.find(
        (id) => id["external-id-type"] === "doi"
      )?.["external-id-value"] || ""
    ).toLowerCase();

    // Matching enrichment for search
    let enrichment = null;
    if (doi && publicationEnrichment[doi]) {
      enrichment = publicationEnrichment[doi];
    } else if (title.includes("quantum")) {
      enrichment = publicationEnrichment["secure-transportation"];
    } else if (title.includes("adversarial")) {
      enrichment = publicationEnrichment["adversarial-machine-learning"];
    }
    const enrichmentAuthors = (enrichment?.authors || "").toLowerCase();

    const matchesSearch =
      title.includes(searchQuery.toLowerCase()) ||
      journal.includes(searchQuery.toLowerCase()) ||
      enrichmentAuthors.includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeFilter === "all") return true;
    return getNormalizedCategory(work) === activeFilter;
  });

  // Group by year
  const groupedByYear = {};
  filteredPublications.forEach((work) => {
    const workSummary = work["work-summary"]?.[0] || {};
    const year = workSummary?.["publication-date"]?.year?.value || "Unknown";
    if (!groupedByYear[year]) {
      groupedByYear[year] = [];
    }
    groupedByYear[year].push(work);
  });

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

  // Highlighting user's name in authors list
  const renderAuthors = (authorStr) => {
    if (!authorStr) return null;
    const namesToHighlight = [
      "Pranav K. Jha",
      "Pranav Kumar Jha",
      "Pranav K Jha",
      "Jha, Pranav Kumar",
      "Jha, Pranav K.",
      "Pranav Kumar Jha",
    ];

    const parts = authorStr.split(/,\s*/);
    return (
      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">
        {parts.map((part, index) => {
          const isSelf = namesToHighlight.some(
            (name) =>
              part.toLowerCase().trim() === name.toLowerCase().trim() ||
              part.toLowerCase().trim().replace(/\s+/g, "") ===
                name.toLowerCase().trim().replace(/\s+/g, "")
          );
          return (
            <span key={index}>
              {isSelf ? (
                <span className="font-semibold text-blue-600 dark:text-blue-400 underline decoration-blue-500/30 decoration-2 underline-offset-2">
                  {part}
                </span>
              ) : (
                <span className="text-gray-650 dark:text-gray-400">{part}</span>
              )}
              {index < parts.length - 1 ? ", " : ""}
            </span>
          );
        })}
      </div>
    );
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.015,
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-purple-900/50">
      <main className="min-h-[60vh] py-16 md:py-24 px-4 max-w-5xl mt-10 mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={headerVariants}
          className="mb-12 flex flex-col items-center"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-wider text-gray-900 dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 dark:from-purple-400 dark:via-blue-400 dark:to-emerald-400 font-extrabold font-sans">
              PUBLICATIONS
            </span>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-center text-sm sm:text-base font-light text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Research papers, conference articles, and academic contributions in machine learning and transportation systems
            </p>
          </motion.div>
        </motion.div>

        {/* Search & Dynamic Stats */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Search Input */}
            <div className="relative max-w-md mx-auto mb-10">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                <FiSearch className="h-5 w-5" />
              </div>
              <input
                type="text"
                placeholder="Search by title, authors, or journal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-11 pr-4 py-3 border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 transition duration-200 shadow-sm text-gray-900 dark:text-white"
              />
            </div>

            {/* Dynamic Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: "Total Papers", value: stats.total },
                { label: "Journals", value: stats.journal },
                { label: "Conferences", value: stats.conference },
                { label: "Preprints", value: stats.preprint },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-200 dark:border-gray-800 text-center flex flex-col justify-center items-center shadow-sm"
                >
                  <span className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {[
                { id: "all", label: "All", count: stats.total },
                { id: "journal", label: "Journals", count: stats.journal },
                { id: "conference", label: "Conferences", count: stats.conference },
                { id: "preprint", label: "Preprints", count: stats.preprint },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    activeFilter === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-500/10"
                      : "bg-white/60 dark:bg-gray-900/40 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-900 border border-gray-200 dark:border-gray-800"
                  }`}
                >
                  {tab.label}
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      activeFilter === tab.id
                        ? "bg-white/20 text-white"
                        : "bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Publications List */}
        {loading ? (
          <div className="space-y-6 max-w-4xl mx-auto pl-4 md:pl-36">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="w-12 h-3 bg-gray-300 dark:bg-gray-800 rounded animate-pulse flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded w-3/4 animate-pulse" />
                  <div className="h-3 bg-gray-300 dark:bg-gray-800 rounded w-1/2 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="min-h-[40vh] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center text-red-500 font-medium"
            >
              {error}
            </motion.div>
          </div>
        ) : filteredPublications.length === 0 ? (
          <div className="min-h-[30vh] flex flex-col items-center justify-center text-center">
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              No publications match your criteria.
            </p>
            <button
              onClick={() => {
                setActiveFilter("all");
                setSearchQuery("");
              }}
              className="mt-4 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clear filters and search
            </button>
          </div>
        ) : (
          <div className="relative">
            {/* Timeline Vertical Line (Desktop only) */}
            <div className="absolute left-4 md:left-[144px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-transparent dark:from-blue-600/20 dark:via-purple-600/20 hidden md:block" />

            <div className="space-y-12 md:pl-0 pl-4">
              {sortedYears.map((year) => (
                <div key={year} className="relative md:pl-44">
                  {/* Sticky Year Sidebar */}
                  <div className="md:absolute md:-left-[4px] md:w-32 md:text-right md:pr-8 md:top-1 select-none">
                    <span className="font-mono font-bold text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent block">
                      {year}
                    </span>
                    <span className="hidden md:block text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mt-1">
                      {groupedByYear[year].length}{" "}
                      {groupedByYear[year].length === 1 ? "paper" : "papers"}
                    </span>
                  </div>

                  {/* Node dot on timeline */}
                  <div className="absolute left-[-21px] md:left-[140px] top-2.5 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 ring-4 ring-white dark:ring-gray-950 z-10 hidden md:block" />

                  {/* Mobile year divider */}
                  <div className="md:hidden flex items-center gap-2 mb-4">
                    <span className="font-mono font-bold text-lg text-gray-800 dark:text-gray-200">
                      {year}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({groupedByYear[year].length})
                    </span>
                    <div className="flex-grow h-[1px] bg-gray-200 dark:bg-gray-800" />
                  </div>

                  {/* Cards container */}
                  <div className="space-y-6">
                    {groupedByYear[year].map((work, index) => {
                      const workSummary = work["work-summary"]?.[0] || {};
                      const title = workSummary?.title?.title?.value || "Untitled";
                      const url = workSummary?.url?.value;
                      const journal = workSummary?.["journal-title"]?.value;
                      const doi = workSummary?.["external-ids"]?.["external-id"]?.find(
                        (id) => id["external-id-type"] === "doi"
                      )?.["external-id-value"];

                      const cat = getNormalizedCategory(work);

                      // Match enrichment
                      let enrichment = null;
                      if (doi && publicationEnrichment[doi]) {
                        enrichment = publicationEnrichment[doi];
                      } else if (title.toLowerCase().includes("quantum")) {
                        enrichment = publicationEnrichment["secure-transportation"];
                      } else if (title.toLowerCase().includes("adversarial")) {
                        enrichment = publicationEnrichment["adversarial-machine-learning"];
                      }

                      const authorList = enrichment?.authors || "Pranav K. Jha";
                      const doiOrKey = doi || title.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 30);

                      const badgeStyles = {
                        journal:
                          "bg-blue-50 text-blue-700 border-blue-100/50 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800/30",
                        conference:
                          "bg-purple-50 text-purple-700 border-purple-100/50 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800/30",
                        preprint:
                          "bg-amber-50 text-amber-700 border-amber-100/50 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800/30",
                        other:
                          "bg-gray-50 text-gray-700 border-gray-100/50 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800/30",
                      };

                      const badgeLabel = {
                        journal: "Journal Article",
                        conference: "Conference Paper",
                        preprint: "Preprint / arXiv",
                        other: "Publication",
                      };

                      const absoluteIndex = filteredPublications.indexOf(work);

                      return (
                        <motion.div
                          key={doiOrKey}
                          custom={absoluteIndex}
                          variants={cardVariants}
                          initial="hidden"
                          animate="visible"
                          className="group relative bg-white dark:bg-gray-900 rounded-2xl p-5 md:p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500/20 dark:hover:border-blue-500/30"
                        >
                          {/* Top Row: Tag / Label */}
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span
                              className={`px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-md border ${
                                badgeStyles[cat] || badgeStyles.other
                              }`}
                            >
                              {badgeLabel[cat] || badgeLabel.other}
                            </span>
                          </div>

                          {/* Paper Title */}
                          <h3
                            className={`text-sm md:text-base font-bold leading-snug transition-colors text-gray-900 dark:text-gray-100 ${
                              url ? "hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer" : ""
                            }`}
                            onClick={() => url && window.open(url, "_blank")}
                          >
                            {title}
                          </h3>

                          {/* Authors (Self Bolded) */}
                          {renderAuthors(authorList)}

                          {/* Journal / Proceedings Venue */}
                          {journal && (
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic font-light">
                              {journal}
                              {workSummary?.["journal-subtitle"]?.value && (
                                <span className="text-blue-500 dark:text-blue-400 font-medium not-italic">
                                  {" "}• {workSummary["journal-subtitle"].value}
                                </span>
                              )}
                            </p>
                          )}

                          {/* Utilities and Actions Panel */}
                          <div className="flex flex-wrap items-center gap-4 mt-5 pt-4 border-t border-gray-200/60 dark:border-gray-850/60 text-xs">
                            {url && (
                              <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold transition-colors shadow-sm"
                              >
                                <FiExternalLink className="w-3.5 h-3.5" />
                                View Paper
                              </a>
                            )}

                            {doi && (
                              <a
                                href={`https://doi.org/${doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-mono hidden sm:inline"
                              >
                                doi:{doi}
                              </a>
                            )}

                            {enrichment?.abstract && (
                              <button
                                onClick={() => toggleAbstract(doiOrKey)}
                                className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium ml-auto"
                              >
                                <FiBookOpen className="w-3.5 h-3.5" />
                                {expandedAbstracts[doiOrKey] ? "Hide Abstract" : "Abstract"}
                                {expandedAbstracts[doiOrKey] ? (
                                  <FiChevronUp className="w-3.5 h-3.5" />
                                ) : (
                                  <FiChevronDown className="w-3.5 h-3.5" />
                                )}
                              </button>
                            )}

                            {enrichment?.bibtex && (
                              <button
                                onClick={() => toggleCitation(doiOrKey)}
                                className={`inline-flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium ${
                                  !enrichment?.abstract ? "ml-auto" : ""
                                }`}
                              >
                                <FiCopy className="w-3.5 h-3.5" />
                                Cite
                                {expandedCitations[doiOrKey] ? (
                                  <FiChevronUp className="w-3.5 h-3.5" />
                                ) : (
                                  <FiChevronDown className="w-3.5 h-3.5" />
                                )}
                              </button>
                            )}
                          </div>

                          {/* Expanded Abstract Section */}
                          {enrichment?.abstract && expandedAbstracts[doiOrKey] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 p-4 rounded-xl bg-gray-50/50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-800 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                <span className="font-bold block mb-1 text-gray-800 dark:text-gray-200">
                                  Abstract
                                </span>
                                {enrichment.abstract}
                              </div>
                            </motion.div>
                          )}

                          {/* Expanded BibTeX Section */}
                          {enrichment?.bibtex && expandedCitations[doiOrKey] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="relative mt-4">
                                <pre className="p-4 rounded-xl bg-gray-950 dark:bg-black/40 border border-gray-800 dark:border-gray-800 text-[10px] sm:text-[11px] font-mono text-emerald-600 dark:text-emerald-400 overflow-x-auto whitespace-pre leading-relaxed select-all">
                                  {enrichment.bibtex}
                                </pre>
                                <button
                                  onClick={() => {
                                    navigator.clipboard.writeText(enrichment.bibtex);
                                    setCopiedDoi(doiOrKey);
                                    setTimeout(() => setCopiedDoi(null), 2000);
                                  }}
                                  className="absolute top-3 right-3 p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 dark:bg-gray-900/80 dark:hover:bg-gray-800 text-gray-300 hover:text-white transition-colors"
                                  title="Copy to Clipboard"
                                >
                                  {copiedDoi === doiOrKey ? (
                                    <FiCheck className="w-4 h-4 text-emerald-400" />
                                  ) : (
                                    <FiCopy className="w-4 h-4" />
                                  )}
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default PublicationsPage;
