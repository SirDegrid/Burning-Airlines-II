import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Planes from "./routes/Planes";
import Users from "./routes/Users";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "planes",
    element: <Planes />,
  },
  {
    path: "users",
    element: <Users />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);