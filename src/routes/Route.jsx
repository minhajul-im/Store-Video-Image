import { createBrowserRouter } from "react-router-dom";

import App from "../app/App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Movies from "../pages/Movies";
import Youtube from "../pages/Youtube";
import Error from "../pages/Error";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/youtube",
        element: <Youtube />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default Route;
