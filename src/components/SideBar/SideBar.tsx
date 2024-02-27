import { AvengaLogo } from "../Logo/Logo";
import { Navigation } from "./Navigation";
import "./SideBar.styles.css";

export const SideBar = () => {
  return (
    <aside className="SideBar-root">
      <AvengaLogo className="SideBar-logo" width={168} />
      <Navigation />
    </aside>
  );
};
