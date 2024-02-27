import { useContext } from "react";
import { DarkModeContext, DarkModeContextProps } from "./DarkModeProvider";

export const useDarkModeContext = () =>
  useContext<DarkModeContextProps>(DarkModeContext);
