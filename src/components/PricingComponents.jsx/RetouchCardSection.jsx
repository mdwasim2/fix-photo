import React from "react";
import RetouchCard from "./RetouchCard";

const RetouchCardSection = () => {
  return (
    <div className="mt-12">
      <h2 className="mb-2 text-center text-2xl font-bold lg:mb-4 lg:text-3xl">
        Basic Retouching Level - $2.50 per image
      </h2>
      {Array.from({ length: 5 }).map((_, index) => (
        <RetouchCard />
      ))}
    </div>
  );
};

export default RetouchCardSection;
