import React from "react";

const PhotoEditingPrice = () => {
  const services = [
    {
      name: "Basic Photo Retouching",
      price: "$2.50",
      description:
        "Basic changes of the color and toning, light portrait editing (nose, eyes, hair, cheeks, etc.), image cropping.",
    },
    {
      name: "Pro Photo Retouching",
      price: "$6.00",
      description:
        "Colors brightening, beauty portrait fixing up, figure & face reshaping, improving the background, adding HDR effects.",
    },
    {
      name: "High End Photo Retouching",
      price: "$12.00",
      description:
        "Colors brightening, beauty portrait fixing up, figure & face reshaping, improving a background, adding HDR effects supplement.",
    },
    {
      name: "Extra Photo Retouching",
      price: "$12.00",
      description:
        "Artistic image post processing, experiences back ground manipulations, natural head swap if it’s needed, deep color compensation & shadows adjustment.",
    },
    {
      name: "Photo Manipulation & Restoration",
      price: "$30.00",
      description:
        "Creative or funny portrait edit, making digital drawings, natural photo montage, comic pictures creating.",
    },
  ];

  return (
    <section className="w-full px-4 py-10 md:py-14 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Photo Editing Prices by FixThePhoto
        </h1>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
          Our US-based company has gathered a big team of professionals and retouchers with over 10 years of experience. They
          know Photoshop & Lightroom from A to Z, understand how to edit photos of all types and genres, including portrait,
          family, wedding, product, magazine, and fashion images.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-sm sm:text-base">
          Our manager will contact you and assign a personal retoucher who will take care of your custom
          <a href="#" className="text-blue-600 underline ml-1">photo post production</a> tasks.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4">
          Our Photo Retouching Prices
        </h2>

        <div className="overflow-x-auto rounded-md shadow-sm mb-6">
          <table className="min-w-full border border-gray-300 text-sm sm:text-base">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
              <tr>
                <th className="border px-4 py-3 text-left">Service</th>
                <th className="border px-4 py-3 text-left">Price per photo**</th>
                <th className="border px-4 py-3 text-left">Included Services</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
                  <td className="border px-4 py-3 font-medium text-gray-800 dark:text-white">
                    {service.name}
                  </td>
                  <td className="border px-4 py-3 text-gray-600 dark:text-gray-300">{service.price}</td>
                  <td className="border px-4 py-3 text-gray-600 dark:text-gray-300">{service.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
          **The prices listed do not include VAT. VAT will be included in the invoice total.
        </p>

        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-3">
            5 Photo Editing Levels Offered by Our Company
          </h3>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 text-sm sm:text-base">
          Which stages does each package consist of? How much should you pay? What are the main benefits of choosing our qualified team? You can find all answers below.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
          If you’ve decided to contact us and use our services, you are welcome to choose the package you like the most. Below, you'll find info about the main differences between all levels and recommendations on how to choose the most suitable one.
        </p>
      </div>
    </section>
  );
};

export default PhotoEditingPrice;
