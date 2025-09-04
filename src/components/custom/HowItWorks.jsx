
const HowItWorks = () => {
  const steps = [
    {
      icon: "https://fixthephoto.com/images/content/upload-unretouched-photos1611657362.svg",
      step: "1",
      title: "Upload Your Photos",
    },
    {
      icon: "https://fixthephoto.com/images/content/write-photo-editing-instructions1611657391.svg",
      step: "2",
      title: "Write Clear Instructions",
    },
    {
      icon: "https://img.fixthephoto.com/images/home-pricing-icons/get-your-edited-photos.svg",
      step: "3",
      title: "Download Your Edited Photos",
    },
    {
      icon: "https://img.fixthephoto.com/images/home-pricing-icons/accept-the-retouched-photo.svg",
      step: "4",
      title: "Ask for Fixes if Needed",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">How Does It Work?</h2>
        <p className="max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300 leading-relaxed">
          Photo editing shouldn’t be complicated. At Fix The Photo, we make the process clear so you can focus on what matters: getting photos that look right. Whether you're a business owner, a photographer, or just someone who wants better images, our steps are the same. You only need four:
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {steps.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={item.icon} alt={item.title} className="w-16 h-16 mb-4" />
              <p className="font-medium">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Detailed Step Descriptions */}
        <div className="text-left max-w-3xl mx-auto space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            <strong>1. Upload Your Photos</strong><br />
            Start with the basics. Create an account and upload the photos you want us to fix. That’s it. No long forms. No confusing steps. Send one image or fifty. It's your call. We accept most file types, and if you’re stuck, our team is always ready to help.
          </p>
          <p>
            <strong>2. Write Clear Instructions</strong><br />
            After uploading, tell us what you need. Want the background removed? Need lighting fixed? Are wrinkles in clothing bothering you? Be direct and send sample images if needed. The clearer your notes, the better we can match your expectations.
          </p>
          <p>
            <strong>3. Download Your Edited Photos</strong><br />
            Our team edits every file carefully and efficiently. Most orders are completed within 24–48 hours. Once ready, you'll get a link to download your images and start using them immediately.
          </p>
          <p>
            <strong>4. Ask for Fixes if Needed</strong><br />
            If something isn’t right, request corrections. Whether it's a bright background, an unwanted shadow, or another detail, we’ll fix it. There’s no limit to revisions—your satisfaction matters.
          </p>
          <p>
            <strong>Simple Process. Real People.</strong><br />
            Your photos are handled by real editors, not automated systems. They read your instructions, review sample images, and apply judgment to produce natural, polished results. This approach works for business owners, photographers, bloggers, and parents alike.
          </p>
          <p>
            <strong>Want to Try It First?</strong><br />
            Unsure? Try one photo for free. See the results before committing. Click “Try for Free” or “Get a Quote.” No pressure. No commitment. Just better photos.
          </p>

          {/* Additional Content: Our Photo Editors Work */}
          <p>
            <strong className="text-center font-bold text-2xl inline-block mb-4">Our Photo Editors Work</strong><br />
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
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full transition-transform duration-200 hover:scale-105">
            Try for Free
          </button>
          <button className="border border-orange-400 text-orange-400 hover:bg-orange-100 px-6 py-2 rounded-full transition-transform duration-200">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
