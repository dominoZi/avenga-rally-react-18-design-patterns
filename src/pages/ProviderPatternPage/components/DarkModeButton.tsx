import { Button } from "../../../components";
import { useDarkModeContext } from "../hooks";

export const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();
  return (
    <Button onClick={toggleDarkMode}>
      {isDarkMode ? "Light mode" : "Dark mode"}
    </Button>
  );
};
