
const PhotoEditingInfo = () => {
  const features = [
    {
      title: "#1 in Product Photo Editing",
      description:
        "We’ve been editing photos since 2016. Our team knows how to fix backgrounds, remove dust, clean up edges, and make your product stand out. Many online stores trust us because we always give clean and clear results.",
    },
    {
      title: "Match Your Brand Look",
      description:
        "Your product photos should match your brand. We follow your style so everything looks the same. Just send your instructions, and we’ll make sure every photo looks right.",
    },
    {
      title: "Safe and Private",
      description:
        "We keep your photos safe. We never share your images with anyone. Everything you send is private, and we treat it with care.",
    },
    {
      title: "Fast Delivery in 24 Hours",
      description:
        "Need your photos quickly? We can finish most edits in 24 to 48 hours. That means you can list your products faster and start selling sooner.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-14 px-4 text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl text-center">
          We are The Best Photo Editing Services
        </h2>
        <p className="mb-12 max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300 leading-relaxed">
          Our Product Photo Editing Services are trusted by photographers, e-commerce sellers, creative enterprises, and individuals who wish to bring a sharp touch of style to their photos using graphics and Photoshop. We help studios, advertising teams, and agencies improve every picture with smart editing and precise clipping path work. As a service provider, we focus on high quality results that are clean, clear, and completely error-free. To keep our work consistent, we’ve implemented a three-step control method that shows our professionalism on every project. Whether it’s one photo or a full set, our services are handled by an expert team that understands how to color balance, sharpen, and fix each image the right way. We make sure our customers always receive the best support with quick delivery, solid design, and results that truly benefit your brand or project.
        </p>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((item, idx) => (
            <div key={idx} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoEditingInfo;
