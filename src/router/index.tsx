// src/router/index.tsx
import { createHashRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import NotFound from "../Pages/not-found";
import Home from "../Pages/home";
import Projects from "../Pages/projects";



const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
           { index: true, element: <Home /> },
            { path: "projects", element: <Projects /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export { router };
