import "./AvatarDemo.styles.css";
import { useBadge } from "../hooks/useBadge";
import clsx from "clsx";

export const AvatarDemo = () => {
  const { BadgeComponent, rootClass } = useBadge({ displayValue: 50 });
  return (
    <div className={clsx("AvatarDemo-root", rootClass)}>
      <img className="AvatarDemo-avatar" src="/avatar-dominik-zima-bg.png" />
      {BadgeComponent}
    </div>
  );
};
