import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";
import "./Avatar.styles.css";

export interface AvatarProps
  extends Omit<HtmlHTMLAttributes<HTMLSpanElement>, "children"> {
  firstName: string;
  lastName?: string;
}

export const Avatar = (props: AvatarProps) => {
  const { className, firstName, lastName, ...other } = props;
  const firstLetter = firstName[0].toLocaleUpperCase();
  const lastLetter = lastName?.[0]?.toLocaleUpperCase() ?? "";
  return (
    <span className={clsx("Avatar-root", className)} {...other}>
      {firstLetter + lastLetter}
    </span>
  );
};
