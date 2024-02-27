import { useState } from "react";
import { Accordion } from "./components/Accordion";
import { Nullish } from "./components/types";
import { Code } from "../../components";

export const CompoundPatternPage = () => {
  const [openSection, setOpenSection] =
    useState<Nullish<string | number>>(undefined);
  return (
    <div>
      <h1>Compound Pattern</h1>
      <p>
        <i>
          A compound component is one of the advanced patterns of React which
          makes use of an interesting way to communicate the relationship
          between UI components and share implicit state by leveraging an
          explicit parent-child relationship.
        </i>
      </p>
      <a href="https://www.smashingmagazine.com/2021/08/compound-components-react/">
        Soruce:
        https://www.smashingmagazine.com/2021/08/compound-components-react/
      </a>
      <h3 className="top-base-space">Accordion compound pattern example</h3>
      <Code>
        {`
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

function Section(props: AccordionSectionProps) {
  const { sectionId, children, ...other } = props;
  return (
    <AccordionSectionContext.Provider value={{ sectionId }}>
      <div className={clsx("Accordion-section")} {...other}>
        {children}
      </div>
    </AccordionSectionContext.Provider>
  );
}

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
  `}
      </Code>

      <h3 className="top-base-space">Preview</h3>
      <Accordion openSection={openSection} onOpenSection={setOpenSection}>
        <Accordion.Section sectionId="header1">
          <Accordion.Header>Header1</Accordion.Header>
          <Accordion.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras
            ornare arcu dui vivamus arcu felis. Rhoncus urna neque viverra justo
            nec ultrices dui sapien eget. Etiam erat velit scelerisque in.
            Ullamcorper velit sed ullamcorper morbi. Neque sodales ut etiam sit
            amet nisl purus in mollis. Tincidunt vitae semper quis lectus nulla
            at. Id venenatis a condimentum vitae sapien pellentesque habitant
            morbi tristique. Ut pharetra sit amet aliquam id diam maecenas
            ultricies mi. Et odio pellentesque diam volutpat commodo sed. At
            tellus at urna condimentum mattis pellentesque id nibh tortor. Ut
            diam quam nulla porttitor massa id neque aliquam.
          </Accordion.Details>
        </Accordion.Section>
        <Accordion.Section id="test" sectionId="header2">
          <Accordion.Header>Header2</Accordion.Header>
          <Accordion.Details>
            Faucibus interdum posuere lorem ipsum dolor sit. Eu tincidunt tortor
            aliquam nulla facilisi cras fermentum odio. Nec sagittis aliquam
            malesuada bibendum arcu vitae elementum. Nulla pellentesque
            dignissim enim sit amet venenatis urna cursus. Semper eget duis at
            tellus at urna condimentum mattis pellentesque. Urna cursus eget
            nunc scelerisque viverra mauris in aliquam. Eu lobortis elementum
            nibh tellus molestie nunc non blandit. Leo urna molestie at
            elementum eu facilisis sed odio morbi. Egestas integer eget aliquet
            nibh. Ac feugiat sed lectus vestibulum. Vel pretium lectus quam id.
            Volutpat odio facilisis mauris sit. Etiam sit amet nisl purus. At
            erat pellentesque adipiscing commodo elit at imperdiet dui. Orci a
            scelerisque purus semper eget duis at tellus. Proin sagittis nisl
            rhoncus mattis rhoncus urna neque viverra justo. Vestibulum rhoncus
            est pellentesque elit ullamcorper. Pharetra magna ac placerat
            vestibulum. Luctus venenatis lectus magna fringilla urna porttitor
            rhoncus dolor. At tellus at urna condimentum mattis.
          </Accordion.Details>
        </Accordion.Section>
        <Accordion.Section sectionId="header3">
          <Accordion.Header>Header3</Accordion.Header>
          <Accordion.Details>
            Bibendum arcu vitae elementum curabitur vitae nunc sed velit.
            Elementum nisi quis eleifend quam adipiscing vitae proin. Ut
            faucibus pulvinar elementum integer enim neque volutpat ac. Nisi
            vitae suscipit tellus mauris a diam maecenas sed. In tellus integer
            feugiat scelerisque varius. A arcu cursus vitae congue. Velit
            egestas dui id ornare arcu odio. Dignissim diam quis enim lobortis.
            Neque vitae tempus quam pellentesque. Mauris cursus mattis molestie
            a iaculis at erat. Nam at lectus urna duis convallis convallis
            tellus id. Et egestas quis ipsum suspendisse ultrices. Posuere ac ut
            consequat semper viverra nam libero justo. Gravida in fermentum et
            sollicitudin. Mauris nunc congue nisi vitae suscipit tellus mauris a
            diam. Urna id volutpat lacus laoreet. Id neque aliquam vestibulum
            morbi blandit. Odio morbi quis commodo odio aenean sed.
          </Accordion.Details>
        </Accordion.Section>
        <Accordion.Section key="test" sectionId="header4">
          <Accordion.Header>Header4</Accordion.Header>
          <Accordion.Details>
            Donec adipiscing tristique risus nec feugiat in fermentum posuere
            urna. Lorem ipsum dolor sit amet consectetur adipiscing elit. Urna
            id volutpat lacus laoreet. Nunc sed id semper risus in. Et pharetra
            pharetra massa massa ultricies mi quis hendrerit. Nam at lectus urna
            duis convallis convallis tellus id interdum. Sed libero enim sed
            faucibus turpis in eu mi bibendum. Amet nisl suscipit adipiscing
            bibendum. Ipsum suspendisse ultrices gravida dictum fusce ut. Libero
            justo laoreet sit amet cursus sit. Arcu risus quis varius quam. Est
            lorem ipsum dolor sit amet consectetur. Luctus accumsan tortor
            posuere ac ut consequat semper viverra. Fermentum odio eu feugiat
            pretium nibh ipsum consequat. Sed viverra tellus in hac habitasse
            platea dictumst. Metus dictum at tempor commodo ullamcorper a lacus.
            Augue lacus viverra vitae congue eu consequat ac felis. Aliquam
            etiam erat velit scelerisque. Lorem ipsum dolor sit amet consectetur
            adipiscing elit.
          </Accordion.Details>
        </Accordion.Section>
      </Accordion>
    </div>
  );
};
