export const navigationConfig = {
  mainNav: [
    {
      title: "HOME",
      href: "/",
    },
    {
      title: "RESOURCES",
      href: "/resources",
    },
    {
      title: "PUBLICATIONS",
      href: "/publications",
    },
    {
      title: "RAG",
      href: "/rag",
    },
    {
      title: "LLM COURSE",
      href: "/llm-course",
    },
  ],
  moreNav: [
    {
      title: "LLM NOTEBOOKS",
      href: "/llm-notebooks",
    },
    {
      title: "LLM TWIN COURSE",
      href: "/llm-twin-course",
    },
    {
      title: "SERVICES",
      href: "/services",
    },
    {
      title: "BLOG",
      href: "/blog",
    },
    {
      title: "CONTACT",
      href: "/contact",
    },
  ],
};

export const allNavItems = [
  ...navigationConfig.mainNav,
  ...navigationConfig.mainNav.reduce(
    (acc, item) => acc.concat(item.dropdown || []),
    [],
  ),
];
