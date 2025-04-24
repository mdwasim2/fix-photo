import React from "react";

const Shop = () => {
  const presetCategories = [
    {
      title: "Matte Lightroom Presets",
      description: "380 Free Lightroom Presets",
      image: "https://fixthephoto.com/images/content/lightroom-presets-banner-matte-dream1620995958.jpg",
      link: "/matte-lightroom-presets",
    },
    {
      title: "Film Presets for Lightroom",
      description: "10 Adobe Lightroom Filters Free",
      image: "https://fixthephoto.com/images/content/lightroom-presets-banner-matte-dream1620995958.jpg",
      link: "/film-lightroom-presets",
    },
    {
      title: "Portrait Lightroom Presets",
      description: "350 Adobe LR Presets Free",
      image: "https://fixthephoto.com/images/content/lightroom-presets-banner-matte-dream1620995958.jpg",
      link: "/portrait-lightroom-presets",
    },
    {
      title: "Matte Lightroom Presets",
      description: "380 Free Lightroom Presets",
      image: "https://fixthephoto.com/images/content/lightroom-presets-banner-matte-dream1620995958.jpg",
      link: "/matte-lightroom-presets",
    },
    {
      title: "Film Presets for Lightroom",
      description: "10 Adobe Lightroom Filters Free",
      image: "https://fixthephoto.com/images/content/lightroom-presets-banner-matte-dream1620995958.jpg",
      link: "/film-lightroom-presets",
    },
    {
      title: "Portrait Lightroom Presets",
      description: "350 Adobe LR Presets Free",
      image: "https://fixthephoto.com/images/content/lightroom-presets-banner-matte-dream1620995958.jpg",
      link: "/portrait-lightroom-presets",
    },
    {
      title: "Matte Lightroom Presets",
      description: "380 Free Lightroom Presets",
      image: "https://fixthephoto.com/images/content/lightroom-presets-banner-matte-dream1620995958.jpg",
      link: "/matte-lightroom-presets",
    },
    {
      title: "Film Presets for Lightroom",
      description: "10 Adobe Lightroom Filters Free",
      image: "https://fixthephoto.com/images/content/lightroom-presets-banner-matte-dream1620995958.jpg",
      link: "/film-lightroom-presets",
    },
    {
      title: "Portrait Lightroom Presets",
      description: "350 Adobe LR Presets Free",
      image: "https://fixthephoto.com/images/content/lightroom-presets-banner-matte-dream1620995958.jpg",
      link: "/portrait-lightroom-presets",
    },
    {
      title: "Matte Lightroom Presets",
      description: "380 Free Lightroom Presets",
      image: "https://fixthephoto.com/images/content/lightroom-presets-banner-matte-dream1620995958.jpg",
      link: "/matte-lightroom-presets",
    },
    {
      title: "Film Presets for Lightroom",
      description: "10 Adobe Lightroom Filters Free",
      image: "https://fixthephoto.com/images/content/lightroom-presets-banner-matte-dream1620995958.jpg",
      link: "/film-lightroom-presets",
    },
    {
      title: "Portrait Lightroom Presets",
      description: "350 Adobe LR Presets Free",
      image: "https://fixthephoto.com/images/content/lightroom-presets-banner-matte-dream1620995958.jpg",
      link: "/portrait-lightroom-presets",
    },
    // Add more categories as needed
  ];
  return (
    <div>
      <header className="bg-yellow-500 py-12 text-center text-white">
        <h1 className="text-4xl font-bold">550+ Free Lightroom Presets</h1>
        <p className="mt-4 text-lg">
          Download free Lightroom presets designed by professional
          photographers.
        </p>
      </header>

      {/* Preset Categories Grid */}
      <main className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {presetCategories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="block overflow-hidden rounded-lg border shadow transition-shadow duration-300 hover:shadow-lg"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{category.title}</h2>
                <p className="mt-2 text-gray-600">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shop;
