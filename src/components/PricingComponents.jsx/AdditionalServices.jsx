import React from "react";

const services = [
  {
    title: "Wedding Photo Editing Services",
    price: "$0.25",
    image: "https://fixthephoto.com/images/real_estate_pricing.jpg",
  },
  {
    title: "Photo Restoration Services",
    price: "$30.00",
    image: "https://fixthephoto.com/images/restoration_pricing.jpg",
  },
  {
    title: "Product Photo Editing Services",
    price: "$0.99",
    image: "https://fixthephoto.com/images/real_estate_pricing.jpg",
  },
  {
    title: "Jewelry Photo Editing Services",
    price: "$6.00",
    image: "https://fixthephoto.com/images/restoration_pricing.jpg",
  },
  {
    title: "Real Estate Photo Editing Services",
    price: "$1.50",
    image: "https://fixthephoto.com/images/restoration_pricing.jpg",
  },
  {
    title: "Wedding Photo Editing Services",
    price: "$0.25",
    image: "https://fixthephoto.com/images/real_estate_pricing.jpg",
  },
];

const AdditionalServices = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="mb-10 text-center text-3xl font-semibold">
        Additional Services
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:shadow-lg"
          >
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="absolute top-3 right-3 rounded bg-yellow-500 px-3 py-1 text-sm font-semibold text-white">
                From {service.price} <span className="text-xs">per photo</span>
              </div>
            </div>
            <div className="p-4 text-center font-medium text-gray-800">
              {service.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalServices;
