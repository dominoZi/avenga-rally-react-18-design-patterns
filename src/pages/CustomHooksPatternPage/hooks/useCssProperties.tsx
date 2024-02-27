import { CssProperties } from "../../../styles/types";

export const useCssProperties = () => {
  const style = document.documentElement.style;
  const getCssProperty = (variableName: CssProperties) =>
    style.getPropertyValue(variableName);
  const setCssProperty = (
    variableName: CssProperties,
    value: string | number
  ) => {
    style.setProperty(variableName, String(value));
  };
  return { getCssProperty, setCssProperty };
};
