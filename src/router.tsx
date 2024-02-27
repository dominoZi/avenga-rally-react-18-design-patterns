import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import {
  CompoundPatternPage,
  CustomHooksPatternPage,
  HOCPatternPage,
  HomePage,
  ProviderPatternPage,
  RenderPropsPatternPage,
} from "./pages";

export const homePath = "/";
export const highOrderComponentPatternPath = "/high-order-component-pattern";
export const providerPatternPath = "/provider-pattern";
export const renderPropPatternPath = "/render-prop-pattern";
export const compoundPatternPath = "/compound-pattern";
export const customHooksPatternPath = "/custom-hooks-pattern";

export const router = createBrowserRouter([
  {
    path: homePath,
    element: <Root />,
    children: [
      {
        path: homePath,
        element: <HomePage />,
      },
      {
        path: highOrderComponentPatternPath,
        element: <HOCPatternPage />,
      },
      {
        path: providerPatternPath,
        element: <ProviderPatternPage />,
      },
      {
        path: renderPropPatternPath,
        element: <RenderPropsPatternPage />,
      },
      {
        path: compoundPatternPath,
        element: <CompoundPatternPage />,
      },
      { path: customHooksPatternPath, element: <CustomHooksPatternPage /> },
    ],
  },
]);
