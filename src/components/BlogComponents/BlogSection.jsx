import React from "react";

const BlogSection = ({ title, description, items, buttonLabel }) => {
  return (
    <div className="relative container mx-auto px-4 py-10">
      <h2 className="mb-10 flex items-center text-3xl font-medium text-gray-800 uppercase dark:text-white">
        <span className="mr-4 h-px flex-grow bg-gray-300"></span>
        {title}
        <span className="ml-4 h-px flex-grow bg-gray-300"></span>
      </h2>
      {description && (
        <p className="text-justify text-sm text-gray-600 dark:text-white">
          {description}
        </p>
      )}
      <div className="py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className="cursor-pointer text-center">
              <img
                src={item.img}
                alt={item.title}
                className="h-64 w-full rounded object-cover"
              />
              <h3 className="mt-4 font-medium text-gray-800 uppercase dark:text-white">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        {buttonLabel && (
          <div className="mt-6 flex justify-end">
            <button className="cursor-pointer border border-yellow-500 px-6 py-2 font-semibold text-yellow-500 transition duration-300 hover:bg-yellow-500 hover:text-white">
              {buttonLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
