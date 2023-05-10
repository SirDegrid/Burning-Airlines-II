import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import Planes from "./routes/Planes";
import Users from "./routes/Users";
import Seeds from "./components/Seeds";
import Flights from "./routes/Flights";
import Reservations from "./routes/Reservations";
import Home from "./routes/Home";

console.log("You are at the following location:", window.location);

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "planes",
        element: <Planes />,
      },
      {
        path: "planes/new",
        element: <Seeds />
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "flights",
        element: <Flights />,
      },
      {
        path: "reservations",
        element: <Reservations />,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


