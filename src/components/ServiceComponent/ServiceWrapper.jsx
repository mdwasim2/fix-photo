import React from "react";
import ServiceImage from "./Service_image";

const ServiceWrapper = () => {
  return (
    <div className="container mt-12">
      <h2 className="mb-2 text-center text-2xl font-bold lg:mb-4 lg:text-3xl">
        Headshot Retouching Services:
      </h2>
      <div className="grid grid-cols-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <ServiceImage />
        ))}
      </div>
    </div>
  );
};

export default ServiceWrapper;
