import clsx from "clsx";
import { HtmlHTMLAttributes, ReactNode } from "react";
import "./ExpandPanel.styles.css";
import { ChevronDown } from "../../../../components/Icons/ChevronDown";

export interface ExpandPanelProps extends HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  expanded: boolean;
  onExpand: (expanded: boolean) => void;
  renderIcon?: (expanded: boolean) => ReactNode;
  renderTitle?: (title: string, expanded: boolean) => ReactNode;
}

export const ExpandPanel = (props: ExpandPanelProps) => {
  const {
    className,
    children,
    title,
    expanded,
    onExpand,
    renderIcon = (expanded: boolean) => (
      <ChevronDown
        className={clsx("ExpandPanel-icon", expanded && "expanded")}
      />
    ),
    renderTitle = (title: string) => <>{title}</>,
    ...other
  } = props;
  return (
    <section className={clsx("ExpandPanel-root", className)} {...other}>
      <div
        className={clsx("ExpandPanel-header", expanded && "expanded")}
        onClick={() => onExpand(!expanded)}
      >
        {renderTitle(title, expanded)}
        {renderIcon(expanded)}
      </div>
      {children && (
        <div className={clsx("ExpandPanel-content", expanded && "expanded")}>
          {children}
        </div>
      )}
    </section>
  );
};
