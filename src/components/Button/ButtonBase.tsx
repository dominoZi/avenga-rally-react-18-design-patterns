import { ButtonHTMLAttributes } from "react";
import "./ButtonBase.styles.css";
import clsx from "clsx";

export interface ButtonBaseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  element?: JSX.ElementType;
}

export const ButtonBase = (props: ButtonBaseProps) => {
  const { className, element = "button", children, ...other } = props;
  const Element = element;
  return (
    <Element className={clsx("ButtonBase-root", className)} {...other}>
      {children}
    </Element>
  );
};
