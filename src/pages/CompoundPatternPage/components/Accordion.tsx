import { PropsWithChildren, createContext, useContext } from "react";
import {
  AccordionContextProps,
  AccordionDetailsProps,
  AccordionHeaderProps,
  AccordionProps,
  AccordionSectionContextProps,
  AccordionSectionProps,
} from "./types";
import "./Accordion.styles.css";
import clsx from "clsx";
import { ChevronDown } from "../../../components";

export const AccordionContext = createContext<AccordionContextProps>({});

export const Accordion = function (props: PropsWithChildren<AccordionProps>) {
  const { className, openSection, onOpenSection, children } = props;
  return (
    <AccordionContext.Provider value={{ openSection, onOpenSection }}>
      <div className={clsx("Accordion-root", className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

const useAccodrionContext = () =>
  useContext<AccordionContextProps>(AccordionContext);

export const AccordionSectionContext =
  createContext<AccordionSectionContextProps>({ sectionId: undefined });

const useSectionContext = () =>
  useContext<AccordionSectionContextProps>(AccordionSectionContext);

const Section = (props: AccordionSectionProps) => {
  const { sectionId, children, ...other } = props;
  return (
    <AccordionSectionContext.Provider value={{ sectionId }}>
      <div className={clsx("Accordion-section")} {...other}>
        {children}
      </div>
    </AccordionSectionContext.Provider>
  );
};

function Header(props: AccordionHeaderProps) {
  const {
    disabled,
    className,
    renderIcon = (expanded: boolean) => (
      <ChevronDown className={clsx("Accordion-icon", expanded && "expanded")} />
    ),
    children,
    ...other
  } = props;
  const { sectionId } = useSectionContext();
  const { openSection, onOpenSection } = useAccodrionContext();
  const isOpen = openSection === sectionId;
  return (
    <div
      className={clsx("Accordion-header", disabled && "disabled", className)}
      onClick={() => onOpenSection?.(isOpen ? null : sectionId)}
      {...other}
    >
      {children}
      {renderIcon(isOpen)}
    </div>
  );
}

function Details(props: AccordionDetailsProps) {
  const { children, ...other } = props;
  const { sectionId } = useSectionContext();
  const { openSection } = useAccodrionContext();
  return openSection === sectionId ? (
    <div className={clsx("Accordion-details")} {...other}>
      {children}
    </div>
  ) : null;
}

Accordion.Section = Section;
Accordion.Header = Header;
Accordion.Details = Details;
