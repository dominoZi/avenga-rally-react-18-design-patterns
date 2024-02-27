import { NavLink } from "react-router-dom";
import {
  compoundPatternPath,
  customHooksPatternPath,
  highOrderComponentPatternPath,
  providerPatternPath,
  renderPropPatternPath,
} from "../../router";
import { ButtonBase } from "../../components";

export const HomePage = () => {
  return (
    <div>
      <h1>Demo application</h1>
      <h2>React 18.2 design patterns</h2>
      <p>
        <i>How do you build a flexible design system?</i>
      </p>
      <p>List of design patterns</p>
      <ul>
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
      <p>
        <ButtonBase element="div">Test</ButtonBase>
      </p>
    </div>
  );
};
