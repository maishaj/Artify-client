import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./layouts/Home.jsx";
import ExploreArtworks from "./components/ExploreArtworks/ExploreArtworks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path:"/exploreArtworks",
    element:<ExploreArtworks></ExploreArtworks>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
