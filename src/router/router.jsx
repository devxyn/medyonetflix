import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../pages/Main";
import featuredLoader from "./../loaders/featuredLoader";
import Browse from "./../pages/Browse";
import genreLoader from "./../loaders/genreLoader";
import Movie from "../pages/Movie";
import movieLoader from "../loaders/movieLoader";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Account from "../pages/Account";
import ProtectedRoute from "../components/ProtectedRoute";

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
      {
        path: "/account",
        element: (
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
