import React from "react";
import RetouchingGallery from "./RetochingImageGalary";
import RetochingItems from "./RetochingItems";

const RetouchingExamples = () => {
  return (
    <main>
      <h2 className="mb-4 text-center text-xl font-semibold md:text-2xl">
        Before and After Retouching Examples
      </h2>
      <p className="mx-auto mb-6 max-w-2xl text-center text-gray-600">
        Click on the Before and After examples below to see some of our recent
        retouching work. Professional photographers all around the world trust
        us and send their photos for{" "}
        <a href="#" className="text-blue-600 underline">
          post production photography services
        </a>{" "}
        by our highly skilled Photoshop retouchers.
      </p>
      <RetouchingGallery/>
      {Array.from({ length: 4 }).map((_, index) => (
          
      <RetochingItems />
      ))}
    </main>
  );
};

export default RetouchingExamples;
