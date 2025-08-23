
const HowItWorks = () => {
  const steps = [
    {
      icon: "https://fixthephoto.com/images/content/upload-unretouched-photos1611657362.svg",
      step: "1",
      title: "Upload photos",
    },
    {
      icon: "https://fixthephoto.com/images/content/write-photo-editing-instructions1611657391.svg",
      step: "2",
      title: "Write instructions",
    },
    {
      icon: "https://img.fixthephoto.com/images/home-pricing-icons/get-your-edited-photos.svg",
      step: "3",
      title: "Get your edited photos",
    },
    {
      icon: "https://img.fixthephoto.com/images/home-pricing-icons/accept-the-retouched-photo.svg",
      step: "4",
      title: "Submit for revision if needed",
    },
  ];

  return (
    <section className="text-center py-16 px-4 container mx-auto">
      <h2 className="text-3xl font-semibold mb-12">How Does It Work?</h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {steps.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="relative mb-4">
              <img src={item.icon} alt={item.title} className="w-16 h-16 mx-auto" />
            </div>
            <p className="font-medium">{item.title}</p>
          </div>
        ))}
      </div>

      {/* How it Works Text */}
      <div className="text-left max-w-3xl mx-auto mb-8 text-sm text-gray-700 dark:text-gray-300 space-y-4">
        <p>
          It’s very easy to start using our online photo editing service! You can do it in just 4 simple steps:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Create account and upload your photo/s.</li>
          <li>Write detailed instructions, attach sample photos.</li>
          <li>Get your edited photos back.</li>
          <li>Accept the work or request changes (if necessary).</li>
        </ol>

        {/* New Content */}
        <p>
          <strong>Our Photo Editors Work</strong><br />
          Photos don’t always come out perfect. Some are too dark. Others have something in the background that doesn’t belong. That’s where our Photo Editing Services come in. Our editors take your photos and fix what needs fixing. They brighten the image, clean up the background, and improve the overall look without changing the true feel of the moment.
        </p>
        <p>
          Whether it’s for personal use or a business project, our Photo Editing Services make your photos clearer, cleaner, and ready to share. It’s quick, easy, and done with care.
        </p>
        <p>
          Our team doesn’t use quick apps or filters. Real people check each photo. They fix faces, colors, and little mistakes. The photo still feels natural but looks much cleaner.
        </p>
        <p>
          We help people from everywhere. You can send us a photo from the USA, Canada, China, Brazil, Europe, Australia, Japan, or anywhere else. Since we work online, you don’t need to come in. Just upload your picture, write what you want fixed, and we’ll do it.
        </p>
        <p>
          It’s simple, fast, and clear. That’s why so many people trust us to help with their special photos.
        </p>

        <p>
          Be sure that our professional photography retouchers will follow your photo editing guidelines to create a digital masterpiece for your clients.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full">
          Try for Free
        </button>
        <button className="border border-orange-400 text-orange-400 hover:bg-orange-100 px-6 py-2 rounded-full">
          Get a Quote
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
