import { ReactNode } from "react";
import "./useBadge.styles.css";

export interface UseBadgeProps {
  renderBadge?: (displayValue: number | undefined, max: number) => ReactNode;
  displayValue?: number;
  max?: number;
  invisible?: boolean;
}

export const useBadge = (props: UseBadgeProps) => {
  const {
    renderBadge = (displayValue, max) => (
      <div className="Badge-content">
        {Number(displayValue) <= max ? displayValue : max}
      </div>
    ),
    displayValue = undefined,
    max = 99,
    invisible = false,
  } = props;
  const BadgeComponent = !invisible ? renderBadge(displayValue, max) : null;
  return { rootClass: "Badge-root", BadgeComponent };
};
