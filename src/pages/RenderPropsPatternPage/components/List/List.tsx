import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";
import "./List.styles.css";

export const List = (props: HtmlHTMLAttributes<HTMLUListElement>) => {
  const { className, children, ...other } = props;
  return (
    <ul className={clsx("List-root", className)} {...other}>
      {children}
    </ul>
  );
};
