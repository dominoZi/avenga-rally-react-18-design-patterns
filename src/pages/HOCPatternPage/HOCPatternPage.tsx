import { Code } from "../../components/Code";
import { DarkModeSwitch } from "./components/DarkModeSwitch";

export const HOCPatternPage = () => {
  return (
    <div>
      <h1>High order component pattern</h1>
      <p>Reuse component and business logic throughout your application.</p>
      <p className="top-base-space">
        Basic implementation of dark mode using high order component pattern
      </p>
      <Code>
        {`import { useState } from "react";

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
`}
      </Code>

      <h3 className="top-base-space">Dark mode implementation</h3>
      <DarkModeSwitch />
    </div>
  );
};
