import { FC, ReactNode, createContext } from "react";
import { useDarkMode } from "../CustomHooksPatternPage/hooks";

export interface DarkModeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextProps>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export interface DarkModeProviderProps {
  children?: ReactNode;
}

export const DarkModeProvider: FC<DarkModeProviderProps> = ({ children }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
