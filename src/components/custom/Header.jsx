import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  const navItems = [
    "Home",
    "Services",
    "Portfolio",
    "Pricing",
    "Blog",
    "Contact",
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // New
  const [hoveredMenu, setHoveredMenu] = useState(null);
  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const serviceItems = [
  {
    name: "E-commerce Product Photo Editing",
    image: "https://img.fixthephoto.com/UserFiles/headshot-retouching-before-pro-thumb-1.jpg",
    path: "/services/ecommerce-photo-editing",
  },
  {
    name: "Clipping path service",
    image: "https://fixthephoto.com/images/uikit_slider/photo-editing-services-after-wh960.jpg",
    path: "/services/clipping-path",
  },
  {
    name: "Gost Mannequin photo Editing Srvice",
    image: "https://fixthephoto.com/images/uikit_slider/photography-retouching-services-after-wh650.jpg",
    path: "/services/ghost-mannequin",
  },
  {
    name: "Jewelry image editing service",
    image: "https://fixthephoto.com/images/uikit_slider/professional-photo-editing-services-after-wh650.jpg",
    path: "/services/jewelry-editing",
  },
  {
    name: "Newborn photo editing Service",
    image: "https://fixthephoto.com/images/uikit_slider/photoshop-services-online--after-wh650.jpg",
    path: "/services/newborn-editing",
  },
  {
    name: "High-End Model photo Retouching service",
    image: "https://fixthephoto.com/images/uikit_slider/photo-editing-services-for-photographers-after-wh650.jpg",
    path: "/services/highend-model-retouching",
  },
];


  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white px-6 transition-all duration-300 dark:bg-gray-900 ${
        scrolled ? "py-1 shadow-md backdrop-blur-sm" : "py-4 shadow-none"
      }`}
    >
      <nav className="flex w-full items-center justify-between">
        {/* LOGO */}
        <div className="">
          <Link to="/">
            <img
              src="https://fixthephoto.com/images/fixthephoto-logo-photo-retouching-d.png"
              alt="Fix The Photo Logo"
              className="w-40 object-contain"
            />
            <span className="text-muted-foreground block text-xs leading-tight">
              FOUNDED IN 2003
            </span>
          </Link>
        </div>

        <nav className="relative hidden gap-6 text-sm font-medium text-gray-800 md:flex">
          {navItems.map((item) =>
            item === "Services" ? (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => setHoveredMenu("services")}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  to="/services"
                  className="flex items-center text-lg text-gray-800 transition-all after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:duration-200 hover:text-orange-500 hover:after:w-full dark:text-white"
                >
                  Services <ChevronDown className="ml-1 text-[#FF6900]" />
                </Link>
                {hoveredMenu === "services" && (
                  <div className="absolute top-6 left-0 z-50 pt-4">
                    {/* <div className="mt-2 grid max-w-[90vw] min-w-[500px] grid-cols-3 gap-3 rounded-lg border bg-white p-4 shadow-lg dark:bg-gray-800">
                      {serviceItems.map((service, index) => (
                        <Link
                          key={index}
                          to="/services"
                          className="flex flex-col items-center rounded p-2 text-center text-sm text-black transition dark:text-white"
                        >
                          <img
                            src={service.image}
                            alt={service.name}
                            className="mb-2 h-16 w-16 rounded object-cover"
                          />
                          {service.name}
                        </Link>
                      ))}
                    </div> */}
                    <div className="mt-2 grid max-w-[90vw] min-w-[600px] grid-cols-3 gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-2xl dark:border-gray-700 dark:bg-gray-900">
                    {serviceItems.map((service, idx) => (
  <Link
    key={idx}
    to={service.path}
    className="flex flex-col items-center rounded p-2 text-center text-sm text-gray-700 transition hover:bg-gray-100 dark:text-white"
  >
    <img
      src={service.image}
      alt={service.name}
      className="mb-1 h-14 w-14 rounded object-cover"
    />
    {service.name}
  </Link>
))}

                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item}
                to={
                  item === "Blog"
                    ? "/blog"
                    : item === "Home"
                      ? "/"
                      : `/${item.toLowerCase()}`
                }
                className="relative text-lg text-gray-800 transition-all after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:duration-200 hover:text-orange-500 hover:after:w-full dark:text-white"
              >
                {item}
              </Link>
            ),
          )}
        </nav>

        {/* CTA */}
        <div className="hidden gap-3 md:flex">
          <Button
            variant="outline"
            className="rounded-full border-orange-400 text-lg text-orange-500 hover:bg-orange-50"
          >
            Get a Quote
          </Button>
          <Button className="rounded-full bg-orange-400 text-lg text-white hover:bg-orange-500">
            Try for Free
          </Button>
          <ModeToggle />
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center gap-3 md:hidden">
          <ModeToggle />
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6 text-orange-500" />
            </SheetTrigger>
            <SheetContent side="bottom">
              <div className="mt-8 flex flex-col gap-4 p-5">
                {navItems.map((item) =>
                  item === "Services" ? (
                    <div key={item}>
                      <div className="flex items-center justify-between">
                        <div className="mb-2 text-base font-medium text-gray-700 dark:text-white">
                          Services
                        </div>
                        <button
                          className="text-orange-500"
                          onClick={() =>
                            setIsMobileDropdownOpen(!isMobileDropdownOpen)
                          }
                        >
                          <ChevronDown
                            className={`transition-transform ${isMobileDropdownOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>
                      {isMobileDropdownOpen && (
                     <div className="grid grid-cols-2 gap-3">
                     {serviceItems.map((service, idx) => (
                       <Link
                         key={idx}
                       to={service.path}
                         className="flex flex-col items-center rounded p-2 text-center text-sm text-gray-700 transition hover:bg-gray-100 dark:text-white"
                       >
                         <img
                           src={service.image}
                           alt={service.name}
                           className="mb-1 h-14 w-14 rounded object-cover"
                         />
                         {service.name}
                       </Link>
                     ))}
                   </div>
                 )}
              
                     
                   
                    </div>
                  ) : (
                    <Link
                      key={item}
                      to={
                        item === "Blog"
                          ? "/blog"
                          : item === "Home"
                            ? "/"
                            : `/${item.toLowerCase()}`
                      }
                      className="text-base font-medium text-gray-700 hover:text-orange-500 dark:text-white"
                    >
                      {item}
                    </Link>
                  ),
                )}
                <div className="mt-6 flex flex-col gap-2">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-orange-400 text-orange-500 hover:bg-orange-50"
                  >
                    Get a Quote
                  </Button>
                  <Button className="w-full rounded-full bg-orange-400 text-white hover:bg-orange-500">
                    Try for Free
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
