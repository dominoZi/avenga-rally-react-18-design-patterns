import { useState } from "react";

export const darkModeAttrName = "data-theme";
export const darkModeAttrVal = "dark";

export const useDarkMode = () => {
  const root = document.documentElement;

  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    root.dataset.theme === darkModeAttrVal
  );

  const toggleDarkMode = () => {
    if (isDarkMode) root.removeAttribute(darkModeAttrName);
    else root.setAttribute(darkModeAttrName, darkModeAttrVal);
    setIsDarkMode((prev) => !prev);
  };

  return { isDarkMode, toggleDarkMode };
};
