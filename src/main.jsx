import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Resources from "./pages/Resources/Resources.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import Home from "./pages/Home/Home.jsx";
import SinglePost from "./pages/SinglePost/SinglePost.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: ":id",
        element: <SinglePost />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
