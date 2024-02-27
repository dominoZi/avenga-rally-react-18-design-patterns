import { useState } from "react";
import renderPropSlots from "../../assets/render-props-slots.png";
import { Avatar } from "../../components/Avatar";
import { ButtonBase } from "../../components/Button";
import { CheckBox } from "../../components/Checkbox";
import { TrashIcon } from "../../components/Icons/TrashIcon";
import { List, ListItem } from "./components";
import { ExpandPanel } from "./components/ExpandPanel/ExpandPanel";
import { getListExample } from "./mock";
import { Code } from "../../components/Code";

export const RenderPropsPatternPage = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <h1>Render props pattern</h1>
      <p>Allow injecting multiple elements to “scaffold” components</p>
      <p className="top-base-space">The component slots visualization</p>
      <img
        src={renderPropSlots}
        style={{ border: "1px solid var(--border-main-color)" }}
      />
      <h2>List demo</h2>
      <p>List item component</p>
      <Code>
        {`
export interface ComponentBase {
  disabled?: boolean;
  error?: boolean;
  focus?: boolean;
}

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
        `}
      </Code>
      <p style={{ marginTop: "64px" }}>Preview</p>
      <List style={{ maxWidth: 600 }}>
        {getListExample().map((x) => (
          <ListItem
            key={x.id}
            title={x.title}
            desc={x.desc}
            renderSlot1={() =>
              x.firstName ? (
                <Avatar
                  style={{ marginRight: 12 }}
                  firstName={x.firstName}
                  lastName={x.lastName}
                />
              ) : null
            }
            renderSlot2={() =>
              x.selectable ? (
                <CheckBox />
              ) : x.removable ? (
                <ButtonBase>
                  <TrashIcon />
                </ButtonBase>
              ) : null
            }
            data-test-id={x.id}
          />
        ))}
      </List>
      <h2>Expandable panel demo - default render functions</h2>
      <p>Expandable panel component source</p>
      <Code>
        {`export interface ExpandPanelProps extends HtmlHTMLAttributes<HTMLDivElement> {
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
};`}
      </Code>
      <p style={{ marginTop: "64px" }}>Preview</p>
      <ExpandPanel
        style={{ width: 640 }}
        title="Lorem ipsum"
        expanded={expanded}
        onExpand={setExpanded}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ExpandPanel>
      <h2 style={{ marginTop: "64px" }}>Summary</h2>
      <ul>
        <li>
          Always spreads properties to the root element and extends component
          interface (type) using root element interface
        </li>
        <li>Expose as many properties as possible outside component</li>
        <li>Add default render properties to your components</li>
      </ul>
    </div>
  );
};
