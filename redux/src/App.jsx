import Albums from "./routes/Albums";
import Users from "./routes/Users";
import User from "./routes/User";
import Album from "./routes/Album";
import NotFound from "./routes/NotFound";
import Layout from "./routes/Layout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Albums />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <User />,
      },
      {
        path: "/albums/:id",
        element: <Album />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}


