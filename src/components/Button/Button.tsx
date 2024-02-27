import "./Button.styles.css";
import clsx from "clsx";
import { ButtonBaseProps } from "./ButtonBase";

export const Button = (props: ButtonBaseProps) => {
  const { className, children, ...other } = props;
  return (
    <button className={clsx("Button-root", className)} {...other}>
      {children}
    </button>
  );
};
