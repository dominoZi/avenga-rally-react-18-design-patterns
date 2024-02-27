import { LiHTMLAttributes, ReactNode } from "react";
import "./ListItem.styles.css";
import clsx from "clsx";
import { ComponentBase } from "../../../../types";

export interface ListItemClasses {
  root: string;
  content: string;
  desc: string;
}

export interface ListItemProps
  extends Omit<LiHTMLAttributes<HTMLLIElement>, "children">,
    ComponentBase {
  title: string;
  desc?: string;
  classes?: ListItemClasses;
  renderSlot1?: () => ReactNode | null;
  renderSlot2?: () => ReactNode | null;
}

export const ListItem = (props: ListItemProps) => {
  const {
    className,
    classes = {
      root: "ListItem-root",
      content: "ListItem-content",
      desc: "ListItem-desc",
    },
    title,
    desc,
    renderSlot1,
    renderSlot2,
    ...other
  } = props;
  return (
    <li className={clsx(classes.root, className)} {...other}>
      {renderSlot1?.()}
      <div className={classes.content}>
        {title}
        {desc && <div className={classes.desc}>{desc}</div>}
      </div>
      {renderSlot2?.()}
    </li>
  );
};
