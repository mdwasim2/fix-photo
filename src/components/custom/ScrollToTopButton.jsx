import { ChevronUp } from "lucide-react"; // or use any icon
import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[#FF8904] p-3 text-white shadow-lg transition hover:bg-white hover:text-[#FF8904]"
      >
        <ChevronUp size={20} />
      </button>
    )
  );
};

export default ScrollToTopButton;
