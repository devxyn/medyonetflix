import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../pages/Main";
import featuredLoader from "./../loaders/featuredLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Main />,
        loader: featuredLoader,
      },
    ],
  },
]);

export default router;
