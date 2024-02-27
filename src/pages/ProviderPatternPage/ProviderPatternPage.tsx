 import { Code } from "../../components/Code";
import { DarkModeProvider } from "./DarkModeProvider";
import { DarkModeButton } from "./components/DarkModeButton";

export const ProviderPatternPage = () => {
  return (
    <DarkModeProvider>
      <div>
        <h1>Provider pattern</h1>
        <h3>Main elements</h3>
        <h4 className="top-base-space">
          Provider - high order component that share data to children
        </h4>
        <Code>{`
export interface DarkModeProdivderProps {
  children?: ReactNode;
}

export const DarkModeProdivder: FC<DarkModeProdivderProps> = ({ children }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
      `}</Code>
        <h4 className="top-base-space">Context - shared object</h4>

        <Code>{`
export interface DarkModeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextProps>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});
      `}</Code>
        <h4 className="top-base-space">
          useContext - hook for making connection between component and provider
        </h4>
        <Code>{`
import { useContext } from "react";
import { DarkModeContext, DarkModeContextProps } from "./DarkModeProvider";

export const useDarkModeContext = () =>
  useContext<DarkModeContextProps>(DarkModeContext);
      `}</Code>
        <h3 className="top-base-space">Preview</h3>
        <DarkModeButton />
      </div>
    </DarkModeProvider>
  );
};
