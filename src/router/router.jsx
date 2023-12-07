import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../pages/Main";
import featuredLoader from "./../loaders/featuredLoader";
import Browse from "./../pages/Browse";
import genreLoader from "./../loaders/genreLoader";
import Movie from "../pages/Movie";
import movieLoader from "../loaders/movieLoader";

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
      {
        path: "/browse",
        element: <Browse />,
        loader: genreLoader,
      },
      {
        path: "movie/:movieId",
        element: <Movie />,
        loader: movieLoader,
      },
    ],
  },
]);

export default router;
