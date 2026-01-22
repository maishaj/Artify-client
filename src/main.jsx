import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./layouts/Home.jsx";
import ExploreArtworks from "./components/ExploreArtworks/ExploreArtworks.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import { ToastContainer } from "react-toastify";
import AddArtwork from "./components/AddArtwork/AddArtwork.jsx";
import MyGallery from "./components/MyGallery/MyGallery.jsx";
import MyFavourites from "./components/MyFavourites/MyFavourites.jsx";
import PrivateRoute from "../src/Routes/PrivateRoute.jsx";
import ErrorPage from "./layouts/ErrorPage.jsx";
import ExploreArtworkLayout from "./layouts/ExploreArtworkLayout.jsx";
import AddArtworkLayout from "./layouts/AddArtworkLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:"/exploreArtworks",
    element:<ExploreArtworkLayout></ExploreArtworkLayout>
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/addArtwork",
    element: (
      <PrivateRoute>
        <AddArtworkLayout></AddArtworkLayout>
      </PrivateRoute>
    ),
  },
  {
    path: "/myGallery",
    element: (
      <PrivateRoute>
        <MyGallery></MyGallery>,
      </PrivateRoute>
    ),
  },
  {
    path: "/myFavourites",
    element: (
      <PrivateRoute>
        <MyFavourites></MyFavourites>,
      </PrivateRoute>
    ),
  },
  {
    path:"/*",
    element:<ErrorPage></ErrorPage>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </AuthProvider>
  </StrictMode>,
);
