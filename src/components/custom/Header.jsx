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
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceDropdown = [
    {
      name: "Background Removal Service",
      path: "/services/background-removal",
      image: "https://fixthephoto.com/images/uikit_slider/photo-editing-services-for-photographers-before-wh650.jpg",
    },
    {
      name: "Photography Post-Production Services",
      image: "https://fixthephoto.com/images/uikit_slider/online-photo-editing-services-before-wh650.jpg",
      path: "/services/photography-services",
      subItems: [
        {
          name: "E-commerce Photo Editing Services",
          path: "/services/ecommerce-photo-editing",
          image: "https://fixthephoto.com/images/uikit_slider/photo-editing-services-for-photographers-after-wh650.jpg",
        },
        {
          name: "Wedding Photo Editing Services",
          path: "/services/wedding-photo-editing",
          image: "https://fixthephoto.com/images/uikit_slider/wedding-photography-edit-after1594117209_wh960.jpg",
        },
        {
          name: "Fashion Photo Editing Services",
          path: "/services/fashion-photo-editing",
          image: "https://img.fixthephoto.com/images/examples/girl_editing_before-after.jpg",
        },
        {
          name: "Jewelry Photo Editing Services",
          path: "/services/jewelry-photo-editing",
          image: "https://fixthephoto.com/images/uikit_slider/jewelry-phot-retouching-after1595346749_wh960.jpg",
        },
      ],
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
        <div>
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

        {/* Desktop Nav */}
        <nav className="relative hidden gap-6 text-sm font-medium text-gray-800 md:flex">
          {navItems.map((item) =>
            item === "Services" ? (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => setHoveredMenu("services")}
                onMouseLeave={() => {
                  setHoveredMenu(null);
                  setHoveredSubMenu(null);
                }}
              >
                <Link
                  to="/services"
                  className="flex items-center text-lg text-gray-800 transition-all after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:duration-200 hover:text-orange-500 hover:after:w-full dark:text-white"
                >
                  Services <ChevronDown className="ml-1 text-[#FF6900]" />
                </Link>
                {hoveredMenu === "services" && (
                  <div className="absolute top-6 left-0 z-50 pt-4">
                    <div className="min-w-[320px] rounded-xl border border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-700 dark:bg-gray-900">
                      {serviceDropdown.map((service) =>
                        service.subItems ? (
                          <div
                            key={service.name}
                            className="relative"
                            onMouseEnter={() => setHoveredSubMenu(service.name)}
                            onMouseLeave={() => setHoveredSubMenu(null)}
                          >
                            <div className="flex items-center justify-between cursor-pointer px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                              <div className="flex items-center gap-2">
                                <img src={service.image} alt={service.name} className="w-8 h-8 rounded object-cover" />
             
                                <Link to={service.path} className="text-gray-700 dark:text-white">{service.name}</Link>
                              </div>
                              <ChevronDown className="ml-2 h-4 w-4 text-orange-500" />
                            </div>
                            {hoveredSubMenu === service.name && (
                              <div className="absolute left-full top-0 z-50 min-w-[250px] rounded-xl border border-gray-200 bg-white p-3 shadow-2xl dark:border-gray-700 dark:bg-gray-900">
                                {service.subItems.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.path}
                                    className="flex items-center gap-2 px-2 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 rounded"
                                  >
                                    <img src={sub.image} alt={sub.name} className="w-7 h-7 rounded object-cover" />
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="flex items-center gap-2 px-2 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 rounded"
                          >
                            <img src={service.image} alt={service.name} className="w-8 h-8 rounded object-cover" />
                            {service.name}
                          </Link>
                        )
                      )}
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
                        <div className="flex flex-col gap-2">
                          <Link
                            to="/services/background-removal"
                            className="flex items-center gap-2 px-2 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 rounded"
                          >
                            <img src={serviceDropdown[0].image} alt="Background Removal Service" className="w-8 h-8 rounded object-cover" />
                            Background Removal Service
                          </Link>
                          <div>
                            <div
                              className="flex items-center justify-between cursor-pointer px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                              onClick={() => setHoveredSubMenu("Photography Post-Production Services")}
                            >
                              <div className="flex items-center gap-2">
                                <img src={serviceDropdown[1].image} alt="Photography Post-Production Services" className="w-8 h-8 rounded object-cover" />
                                <span className="text-gray-700 dark:text-white">Photography Post-Production Services</span>
                              </div>
                              <ChevronDown className="ml-2 h-4 w-4 text-orange-500" />
                            </div>
                            {hoveredSubMenu === "Photography Post-Production Services" && (
                              <div className="ml-4 flex flex-col gap-1">
                                {serviceDropdown[1].subItems.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.path}
                                    className="flex items-center gap-2 px-2 py-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 rounded"
                                  >
                                    <img src={sub.image} alt={sub.name} className="w-7 h-7 rounded object-cover" />
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            )}
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