import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./layouts/root";
import { Home } from "./routes/home";
import Impressum from "./components/impressum";
import Datenschutz from "./components/datenschutz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Main layout that includes the footer
    children: [
      {
        index: true,
        element: <Home />, // Default homepage
      },
      {
        path: "impressum",
        element: <Impressum />, // Replace with your Impressum component or content
      },
      {
        path: "datenschutz",
        element: <Datenschutz />, // Replace with your Datenschutz component or content
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
