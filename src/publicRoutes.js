import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Landing = lazy(() => import("./components/Landing"));

const AboutMe = lazy(() => import("./components/aboutMe/AboutMe"));

const Projects = lazy(() => import("./components/projects/Projects"));

const Photos = lazy(() => import("./components/photos/Photos"));

const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/aboutme",
    element: <AboutMe />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/photos",
    element: <Photos />,
  },
]);

export default publicRoutes;
