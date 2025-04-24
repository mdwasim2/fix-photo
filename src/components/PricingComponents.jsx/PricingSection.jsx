import React from "react";
import PricingCard from "./PricingCard";

const pricingOptions = [
  {
    title: "Basic",
    price: "2.50",
    perUnit: "per photo",
    description: "post production services basic",
    services: [
      "Light Skin Face Correction (Up to 3 People)",
      "Red Eye Effect Removal",
      "Blemish Removal",
      "Scar, Pimple, Acne",
      "Face Skin Smoothening",
      "Teeth Whitening",
      "Color Correction",
      "Image Cropping",
    ],
    notIncluded: [
      "Headshots Editing",
      "Studio Photos Editing",
      "Body Retouching",
      "Touch Up of the Background",
      "Newborn Photo Editing",
    ],
  },
  {
    title: "Pro",
    price: "5.00",
    perUnit: "per photo",
    description: "More detailed photo retouching",
    services: [
      "Basic Corrections",
      "Pro Beauty Correction (Up to 3 People)",
      "Body Correction / Retouching",
      "Weight Reduction",
      "BackGround Enhancement",
      "Removing Stray Hair",
      "Slight Stretching Solid Сolor Background",
      "Face Wrinkles Removal",
      "Removing Small Objects",
      "Clipping Path simple objects on the transparent / solid black or white background (No Retouching)",
      "Newborn Photo Editing",
      "Portrait Photo Retouching",
    ],
    notIncluded: ["Newborn Photo Editing"],
  },
  {
    title: "High End",
    price: "8.00",
    perUnit: "per photo",
    description: "Full retouching and creative edits",
    services: [
      "Everything in Standard",
      "Body Reshape",
      "Color Grading",
      "Artistic Effects",
    ],
    notIncluded: [],
  },
  {
    title: "Extra",
    price: "12",
    perUnit: "per photo",
    description: "Best for professional portraits",
    services: [
      "Skin Retouching",
      "Eye Sharpening",
      "Background Blur",
      "Teeth Whitening",
    ],
    notIncluded: ["Newborn Editing", "Body Retouching"],
  },
  {
    title: "Photo Manipulations",
    price: "30",
    perUnit: "per photo",
    description: "Perfect for baby photo editing",
    services: [
      "Soft Skin Tone Correction",
      "Redness Reduction",
      "Baby Safe Retouching",
      "Light Background Touch-up",
    ],
    notIncluded: ["Body Reshape", "Artistic Effects"],
  },
];

const PricingSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-800 uppercase">
        Our Pricing Plans
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {pricingOptions.map((item, index) => (
          <PricingCard key={index} {...item} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <p className="text-lg font-medium text-gray-600">
          *The prices listed do not include VAT. The applicable VAT will be
          included in the invoice total.
        </p>
      </div>
    </div>
  );
};

export default PricingSection;
