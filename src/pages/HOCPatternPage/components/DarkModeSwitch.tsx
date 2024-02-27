import { HtmlHTMLAttributes } from "react";
import { WithDarkModeProps, withDarkMode } from "../withDarkMode";
import { Button } from "../../../components";

export const DarkModeSwitch = withDarkMode(
  (
    props: Omit<HtmlHTMLAttributes<HTMLDivElement>, "children"> &
      WithDarkModeProps
  ) => {
    const { isDarkMode, toggleDarkMode, ...other } = props;
    return (
      <div {...other}>
        <Button onClick={toggleDarkMode}>
          {isDarkMode ? "Light mode" : "Dark mode"}
        </Button>
      </div>
    );
  }
);
