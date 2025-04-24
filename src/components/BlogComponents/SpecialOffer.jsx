import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const offerData = [
  {
    title: "VEGAS PRO 17 BARGAINS",
    description: "Professional but cheap video post-production has never been so close!",
    image: "https://fixthephoto.com/blog/images/bf-sales/vegas-pro-17-best-value.png",
  },
  {
    title: "DIFFERENCE BETWEEN JPEG & PNG",
    description: "Special offer for photographers - 50% OFF and more!",
    image: "https://fixthephoto.com/blog/images/bf-sales/adorama-special-offer.jpg",
  },
  {
    title: "ADOBE SPECIAL OFFER",
    description: "Best price for all creative apps! Get Discount",
    image: "https://fixthephoto.com/blog/images/bf-sales/adobe-best-value.jpg",
  },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-2 md:-right-6 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow hover:bg-gray-100 dark:bg-amber-400"
  >
    <ChevronRight className="text-black" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-2 md:-left-6 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow hover:bg-gray-100 dark:bg-amber-400"
  >
    <ChevronLeft className="text-black" />
  </button>
);

const SpecialOffer = () => {
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
      <h2 className="mb-10 flex items-center justify-center text-3xl font-semibold text-gray-800 dark:text-white">
        <span className="mr-4 h-px w-1/6 bg-gray-300"></span>
        SPECIAL OFFERS
        <span className="ml-4 h-px w-1/6 bg-gray-300"></span>
      </h2>

      <Slider {...settings}>
        {offerData.map((item, index) => (
          <div key={index} className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="w-full h-64 md:h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
                <button className="inline-block rounded-full bg-yellow-500 px-6 py-2 text-sm font-semibold text-white hover:bg-yellow-600">
                  Get Discount
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SpecialOffer;
