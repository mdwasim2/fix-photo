import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const blogData = [
  {
    title: "INTERIOR PHOTOGRAPHY",
    description:
      "Making high-quality interior photographs is a real challenge even for the most skilful and high qualified interior photographer. In this article, we will talk about some things that you should pay attention to when shooting indoors.",
    image: "https://fixthephoto.com/blog/images/gallery/slide_8.jpg",
  },
  {
    title: "DIFFERENCE BETWEEN JPEG & PNG",
    description:
      "We are going to discuss difference between TIFF and JPEG, BMP, JPG, RAW. This basic knowledge is indispensable to start photo retouching, but still a lot of photographers ignore this thinking it's not important.",
    image: "https://fixthephoto.com/blog/images/gallery/slide_61533723579.jpg",
  },
  {
    title: "REAL ESTATE PHOTOGRAPHY TIPS",
    description:
      "To begin a real estate photography business is very difficult from scratch. Here's what helped me when I was a beginner and the essential tips you need to know.",
    image: "https://fixthephoto.com/blog/images/gallery/slide_71533724837.jpg",
  },
];

const NextArrow = ({ onClick }) => (
  <button
    className="absolute hidden lg:block top-1/2 -right-5 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow hover:bg-gray-100 dark:bg-amber-400"
    onClick={onClick}
  >
    <ChevronRight className="text-black" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute hidden lg:block top-1/2 -left-5 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow hover:bg-gray-100 dark:bg-amber-400"
    onClick={onClick}
  >
    <ChevronLeft className="text-black" />
  </button>
);

const FixThePhoto = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="w-full px-4 py-10 md:px-10 lg:px-20 bg-gray-50 dark:bg-gray-900">
      <h2 className="mb-10 text-center text-3xl font-semibold text-gray-800 dark:text-white">
        FIXTHEPHOTO BLOG
      </h2>

      <Slider {...settings}>
        {blogData.map((item, index) => (
          <div key={index} className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="w-full h-72 md:h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
                <button className="inline-block rounded-full bg-yellow-500 px-6 py-2 text-sm font-semibold text-white hover:bg-yellow-600">
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FixThePhoto;
