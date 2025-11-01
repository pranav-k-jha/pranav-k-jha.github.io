import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/pranav-k-jha",
    color: "hover:bg-gray-100 dark:hover:bg-gray-800",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/pranav-k-jha",
    color: "hover:bg-blue-50 dark:hover:bg-blue-900/30",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/pranav_kjha",
    color: "hover:bg-sky-50 dark:hover:bg-sky-900/30",
    label: "Twitter",
  },
  {
    icon: FaEnvelope,
    href: "mailto:pranav.jha@mail.concordia.ca",
    color: "hover:bg-rose-50 dark:hover:bg-rose-900/30",
    label: "Email",
  },
];
