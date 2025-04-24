import React from "react";

const PricingCard = ({
  title,
  price,
  perUnit,
  description,
  services,
  notIncluded,
}) => {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-gray-200 p-6 shadow transition duration-300 hover:shadow-lg">
      <div>
        <div className="text-center">
          <h3 className="mb-2 text-xl font-semibold  uppercase">
            {title}
          </h3>
          <p className="mb-2 text-sm ">{description}</p>
          <div className="mb-1 text-2xl font-bold text-yellow-500">
            ${price}
          </div>
          <p className="mb-4 text-sm ">{perUnit}</p>
          <div className="mt-4 mb-10 flex items-center justify-center">
            <button className="cursor-pointer rounded-full border-2 px-4 py-2 font-semibold transition hover:border-yellow-500 hover:bg-yellow-500 hover:text-white">
              View Examples
            </button>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="mb-1 font-semibold ">
            Services applied:
          </h4>
          <ul className="list-inside list-disc space-y-1 text-sm ">
            {services.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {notIncluded.length > 0 && (
          <div className="mb-4">
            <h4 className="mb-1 font-semibold ">Not Included:</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-red-500">
              {notIncluded.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-center">
        <button className="cursor-pointer rounded-full bg-yellow-500 px-10 py-2 font-semibold text-white transition hover:bg-yellow-600">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
