import { Code, Button } from "../../components";
import { AvatarDemo, BatteryDemo } from "./components";
import { useDarkMode } from "./hooks";

export const CustomHooksPatternPage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>
      <h1>Custom hooks pattern</h1>
      <p>Reuse component and business logic throughout your application.</p>
      <h3 className="top-base-space">
        Dark mode implementation using custome hooks pattern
      </h3>
      <p>
        <Code>
          {`import { useState } from "react";

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
};`}
        </Code>
        <h4>Preview</h4>
        <Button
          style={{ display: "block", marginTop: 24 }}
          onClick={() => toggleDarkMode()}
        >
          {isDarkMode ? "Light mode" : "Dark mode"}
        </Button>
      </p>
      <h3 className="top-base-space">
        Library react-use - example battery status demo
      </h3>
      <p>
        <a
          href="https://github.com/streamich/react-use?tab=readme-ov-file"
          target="_blank"
          rel="noopener noreferer"
        >
          https://github.com/streamich/react-use?tab=readme-ov-file
        </a>
        <p>Impementation details</p>
        <a
          href="https://github.com/streamich/react-use?tab=readme-ov-file"
          target="_blank"
          rel="noopener noreferer"
        >
          https://github.com/streamich/react-use/blob/master/src/useBattery.ts
        </a>
      </p>
      <BatteryDemo />
      <h3 className="top-base-space">Headless component</h3>
      <AvatarDemo />
      <p>
        Read more: <br />
        <a
          href="https://martinfowler.com/articles/headless-component.html"
          target="_blank"
          rel="noopener noreferer"
        >
          https://martinfowler.com/articles/headless-component.html
        </a>
        <br />
        <a
          href="https://mui.com/base-ui/react-badge/"
          target="_blank"
          rel="noopener noreferer"
        >
          https://mui.com/base-ui/react-badge/
        </a>
      </p>
    </div>
  );
};
