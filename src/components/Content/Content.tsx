import { HtmlHTMLAttributes } from "react";
import "./Content.styles.css";
import clsx from "clsx";

export const Content = (props: HtmlHTMLAttributes<HTMLElement>) => {
  const { className, children, ...other } = props;
  return (
    <main className={clsx(className, "Content-root")} {...other}>
      {children}
    </main>
  );
};
