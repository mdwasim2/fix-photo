import React from "react";
import AdditionalServices from "../components/PricingComponents.jsx/AdditionalServices";
import PhotoEditingPrice from "../components/PricingComponents.jsx/PhotoEditingPrice";
import PricingHeader from "../components/PricingComponents.jsx/PricingHeader";
import PricingSection from "../components/PricingComponents.jsx/PricingSection";
import RetouchCardSection from "../components/PricingComponents.jsx/RetouchCardSection";
import PhotoRetouchingPricing from './../components/PricingComponents.jsx/PhotoRetouchingPricing';

const Pricing = () => {
  return (
    <div>
      <PricingHeader />
      <PricingSection />
      <AdditionalServices />
      <PhotoEditingPrice />
      <RetouchCardSection />
      <PhotoRetouchingPricing />
    </div>
  );
};

export default Pricing;
