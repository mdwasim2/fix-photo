import { createBrowserRouter, RouterProvider } from "react-router";
import ScrollToTopButton from "./components/custom/ScrollToTopButton";
import { ThemeProvider } from "./components/custom/theme-provider";
import Rootlayout from "./layout/Rootlayout";
import Blog from "./pages/Blog";
import Clippingpath from "./pages/Clipping-path";
import Contact from "./pages/Contact";
import Ecommercephotoediting from "./pages/Ecommercephotoediting";
import Ghostmannequin from "./pages/Ghostmannequin";
import Highendretouching from "./pages/Highendretouching";
import Home from "./pages/Home";
import Newbornediting from "./pages/Newbornediting";
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
        path: "/services/ecommerce-photo-editing",
        Component: Ecommercephotoediting,
      },
      {
        path: "/services/clipping-path",
        Component: Clippingpath,
      },
      {
        path: "/services/ghost-mannequin",
        Component: Ghostmannequin,
      },
      {
        path: "/services/jewelry-editing",
        Component: Ghostmannequin,
      },
      {
        path: "/services/newborn-editing",
        Component: Newbornediting,
      },
      {
        path: "/services/highend-model-retouching",
        Component: Highendretouching,
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
