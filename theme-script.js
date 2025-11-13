(function () {
  const savedTheme = localStorage.getItem("theme");

  const systemPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const theme = savedTheme || (systemPrefersDark ? "dark" : "light");

  document.documentElement.classList.add(theme);

  if (!savedTheme) {
    localStorage.setItem("theme", theme);
  }
})();
