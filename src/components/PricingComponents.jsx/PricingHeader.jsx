import React from "react";

const PricingHeader = () => {
  return (
    <section className="w-full px-4 py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-6">
          Photo Retouching Prices
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          The cost of photo retouching starts from <span className="font-semibold text-gray-900 dark:text-white">$0.25</span> for color correction,
          and from <span className="font-semibold text-gray-900 dark:text-white">$2.50</span> for basic retouching at FixThePhoto, depending on the
          complexity of the task and the specific services ordered. This page includes our price list for all services we provide.
          <br /><br />
          If you were looking for professional retouching for a low price, you’ve found the perfect place. Photo retouching prices at FixThePhoto
          have been reasonable and stable since 2013.
          <br /><br />
          Do not forget to mention all instructions and specific requirements concerning changes you want us to apply to photographs.
          You are welcome to choose the most suitable option from 5 Retouching Packages for photographers listed below.
          FixThePhoto also provides special packages for beginning shooters and even gives Lightroom presets to them.
          You pay for the services in American dollars but we can accept international charges via <span className="font-medium">PayPal*</span>.
        </p>
      </div>
    </section>
  );
};

export default PricingHeader;
