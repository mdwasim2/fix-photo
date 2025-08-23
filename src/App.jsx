import { createBrowserRouter, RouterProvider } from "react-router";
import ScrollToTopButton from "./components/custom/ScrollToTopButton";
import { ThemeProvider } from "./components/custom/theme-provider";
import Rootlayout from "./layout/Rootlayout";
import BackgroundRemova from "./pages/BackgroundRemova";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Ecommerce_editing from "./pages/Ecommerce_editing";
import FashionEditing from "./pages/FashionEditing";
import Ghostmannequin from "./pages/Ghostmannequin";
import Highendretouching from "./pages/Highendretouching";
import Home from "./pages/Home";
import Jewelryediting from "./pages/Jewelryediting";
import JewelryPhotoEditing from "./pages/JewelryPhotoediting";
import Newbornediting from "./pages/Newbornediting";
import PhotographyServices from "./pages/PhotographyServices";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import ServicePage from "./pages/ServicePage";
import Weddingphotoediting from "./pages/Wedding-photo-editing";
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
        path: "/services/background-removal",
        Component: BackgroundRemova,
      },
      {
        path: "/services/photography-services",
        Component: PhotographyServices,
      },
      {
        path: "/services/ecommerce-photo-editing",
        Component: Ecommerce_editing,
      },
      {
        path: "/services/wedding-photo-editing",
        Component: Weddingphotoediting,
      },
      {
        path: "/services/fashion-photo-editing",
        Component: FashionEditing,
      },
      {
        path: "/services/jewelry-photo-editing",
        Component: JewelryPhotoEditing,
      },
      {
        path: "/services/ghost-mannequin",
        Component: Ghostmannequin,
      },
      {
        path: "/services/jewelry-editing",
        Component: Jewelryediting,
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
