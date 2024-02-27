import { HtmlHTMLAttributes } from "react";
import "./Navigation.styles.css";
import { NavLink } from "react-router-dom";
import {
  compoundPatternPath,
  customHooksPatternPath,
  highOrderComponentPatternPath,
  providerPatternPath,
  renderPropPatternPath,
} from "../../router";

export const Navigation = (
  props: Omit<HtmlHTMLAttributes<HTMLElement>, "children">
) => {
  return (
    <nav className="Navigation-root" {...props}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={renderPropPatternPath}>Render property</NavLink>
        </li>

        <li>
          <NavLink to={providerPatternPath}>Provider pattern</NavLink>
        </li>
        <li>
          <NavLink to={customHooksPatternPath}>Custome hooks</NavLink>
        </li>
        <li>
          <NavLink to={highOrderComponentPatternPath}>
            High order component
          </NavLink>
        </li>
        <li>
          <NavLink to={compoundPatternPath}>Compound pattern</NavLink>
        </li>
      </ul>
    </nav>
  );
};
