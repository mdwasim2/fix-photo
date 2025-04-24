import React from "react";



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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {steps.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="relative mb-4">
              {/* <span className="absolute -top-3 -left-3 bg-orange-400 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center">
                {item.step}
              </span> */}
              <img src={item.icon} alt={item.title} className="w-16 h-16 mx-auto" />

            </div>
            <p className="font-medium">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="text-left max-w-xl  mb-8 text-sm text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          It’s very easy to start using our online photo editing service! You can do it in just 4 simple steps:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Create account and upload your photo/s.</li>
          <li>Write detailed instructions, attach sample photos.</li>
          <li>Get your edited photos back.</li>
          <li>Accept the work or request changes (if necessary).</li>
        </ol>
        <p className="mt-4">
          Be sure that our professional photography retouchers will follow your photo editing guidelines to create a digital masterpiece for your clients.
        </p>
      </div>

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
