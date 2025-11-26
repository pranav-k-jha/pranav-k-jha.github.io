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
      title: "SERVICES",
      href: "/services",
    },
    {
      title: "RAG",
      href: "/rag",
    },
  ],
  moreNav: [
    {
      title: "LLM",
      href: "/llm-course",
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
    []
  ),
];
