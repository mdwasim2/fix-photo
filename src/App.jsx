import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import ScrollToTopButton from "./components/custom/ScrollToTopButton";
import { ThemeProvider } from "./components/custom/theme-provider";
import Rootlayout from "./layout/Rootlayout";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import ServicePage from "./pages/ServicePage";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/services",
        Component: ServicePage,
      },
      {
        path: "/pricing",
        Component: Pricing,
      },
      {
        path: "/portfolio",
        Component: Portfolio,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
const App = () => {
  return (
    <ThemeProvider>
      <ScrollToTopButton/>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
