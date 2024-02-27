import { useState } from "react";

export interface WithDarkModeProps {
  isDarkMode?: boolean;
  toggleDarkMode?: () => void;
}

export const darkModeAttrName = "data-theme";
export const darkModeAttrVal = "dark";

export function withDarkMode<T>(WrappedComponent: React.ComponentType<T>) {
  const ComponentWithDarkMode = (props: T) => {
    const root = document.documentElement;

    const [isDarkMode, setIsDarkMode] = useState<boolean>(
      root.dataset.theme === darkModeAttrVal
    );

    const toggleDarkMode = () => {
      if (isDarkMode) root.removeAttribute(darkModeAttrName);
      else root.setAttribute(darkModeAttrName, darkModeAttrVal);
      setIsDarkMode((prev) => !prev);
    };

    return (
      <WrappedComponent
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        {...props}
      />
    );
  };

  return ComponentWithDarkMode;
}
