import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Landing = lazy(() => import("./components/Landing"));

const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/aboutme",
    element: <Landing />,
  },
]);

export default publicRoutes;
