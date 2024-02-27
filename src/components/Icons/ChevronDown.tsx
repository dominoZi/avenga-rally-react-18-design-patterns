import clsx from "clsx";
import { SVGProps } from "react";

export const ChevronDown = ({
  className,
  ...other
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={clsx("SvgIcon-root", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...other}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
