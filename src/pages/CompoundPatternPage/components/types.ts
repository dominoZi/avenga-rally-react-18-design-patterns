import { HtmlHTMLAttributes, ReactNode } from "react";

export type Nullish<T> = T | null | undefined;
export type PropsWithChildren<P> = P & { children?: ReactNode };

export interface AccordionContextProps {
  openSection?: Nullish<string | number>;
  onOpenSection?: (openSection: Nullish<string | number>) => void;
}
export interface AccordionSectionContextProps {
  sectionId?: string | number | null;
}

export interface AccordionProps
  extends HtmlHTMLAttributes<HTMLDivElement>,
    AccordionContextProps {}

export interface AccordionSectionProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  sectionId: string | number;
}

export interface AccordionHeaderProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  renderIcon?: (expanded: boolean) => ReactNode;
}

export interface AccordionDetailsProps
  extends HtmlHTMLAttributes<HTMLDivElement> {}
