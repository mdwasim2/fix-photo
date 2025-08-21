import Meta from "../helmet/Meta";

const faqs = [
  {
    question: "How do I send my photos to you?",
    answer: "You can email them or use Google Drive, Dropbox, or another file-sharing app. Just upload your pictures and tell us what you want us to fix.",
  },
  {
    question: "Can I send photos from my phone?",
    answer: "Yes. Phone photos are fine as long as they’re not blurry. We can clean them up and make them look good.",
  },
  {
    question: "Can you remove the background?",
    answer: "Yes, we can take out the background. We can make it white, gray, or any other color you want. Just let us know.",
  },
  {
    question: "Can you fix bad lighting or colors?",
    answer: "Yes. If your photo looks too dark, too bright, or has weird colors, we’ll fix it so it looks more natural and clear.",
  },
  {
    question: "Do you give discounts?",
    answer: "Yes. If you send a lot of photos at once, we’ll give you a lower price.",
  },
  {
    question: "What kind of files do you accept?",
    answer: "We can work with most photo files JPG, PNG, PSD, RAW, and others. If your file is different, just ask.",
  },
  {
    question: "Are my photos safe with you?",
    answer: "Yes. We don’t share your photos. After we finish your work, we delete everything from our system.",
  },
  {
    question: "Can I ask for small changes after delivery?",
    answer: "Yes. If something looks off, we’ll fix it for free. We want you to be happy with the final photos.",
  },
  {
    question: "Are you open on weekends?",
    answer: "Yes. We work every day, even on holidays. You can message us anytime.",
  },
  {
    question: "Do I need to repeat my instructions every time?",
    answer: "No. Once you tell us what you like, we remember. You won’t have to explain it again next time.",
  },
];

const Ecommerce_editing = () => (
  <div>
    <Meta
      title="E-commerce Photo Editing Services for Online Stores"
      description="Easy and clean photo editing for e-commerce. We fix product images, remove backgrounds, and follow Amazon rules."
    />

    {/* Hero Section */}
    <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16 px-4 mb-10 rounded-xl shadow-lg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://fixthephoto.com/images/uikit_slider/photo-editing-services-for-photographers-before-wh650.jpg"
          alt="E-commerce Photo Editing Example"
          className="object-cover w-full h-full opacity-10 blur-sm"
        />
      </div>
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-4 drop-shadow">
          E-commerce Photo Editing Services
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 font-medium">
          Make your products stand out with clean, bright, and professional images. Fast edits, Amazon-ready, and trusted by online sellers.
        </p>
        <a
          href="mailto:info@yourdomain.com"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-200"
        >
          Get Started Now
        </a>
      </div>
    </section>

    {/* Service Details */}
    <section className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
        <div>
          <img
            src="https://fixthephoto.com/images/uikit_slider/photo-editing-services-for-photographers-after-wh650.jpg"
            alt="After E-commerce Editing"
            className="rounded-xl shadow-lg w-full max-w-md mb-4 border-4 border-orange-200"
          />
          <span className="text-sm text-gray-500">After Editing</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Why Good Editing Helps Your Online Store</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-200">
            Your product photo is the first thing shoppers notice. We fix shadows, colors, and backgrounds so your products look sharp, bright, and trustworthy. Consistent, clean images help your store look organized and boost sales.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
            <li>Remove dust, scratches, and wrinkles</li>
            <li>Erase hangers, stands, or clips</li>
            <li>Brighten and fix colors</li>
            <li>Resize and crop for any platform</li>
            <li>Smooth clothes and fabric</li>
            <li>Amazon Product Photo Editing</li>
          </ul>
        </div>
      </div>

      {/* Workflow */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-10">
        <h3 className="text-xl font-bold text-orange-600 mb-4">Our Editing Process</h3>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-200">
          <li>Send Your Product Photos</li>
          <li>Tell Us What You Want Fixed</li>
          <li>We Edit Each Photo by Hand</li>
          <li>We Double-Check Everything</li>
          <li>Get Your Edited Photos</li>
        </ol>
      </div>

      {/* Features & Benefits */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-orange-50 dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-xl font-bold text-orange-600 mb-3">Why People Choose Us</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
            <li>Careful, three-step editing</li>
            <li>Fast turnaround (1–2 days)</li>
            <li>Clear and fair prices</li>
            <li>Safe and private file handling</li>
            <li>Free minor fixes</li>
            <li>One manager for your project</li>
            <li>Support anytime, 24/7</li>
            <li>We remember your style</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
          <h3 className="text-xl font-bold text-orange-600 mb-3">Extra Services</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
            <li>Shadow & Reflection Creation</li>
            <li>Background color changes</li>
            <li>Clothing wrinkle & thread fixes</li>
            <li>Consistent sizing and cropping</li>
            <li>Amazon, Etsy, Shopify ready</li>
          </ul>
        </div>
      </div>

      {/* Industries */}
      <div className="bg-gradient-to-r from-orange-100 via-white to-orange-50 rounded-xl shadow p-8 mb-10">
        <h3 className="text-xl font-bold text-orange-600 mb-3">Who We Help</h3>
        <div className="flex flex-wrap gap-4">
          {[
            "Online Sellers",
            "Photographers",
            "Small Shops",
            "Big Stores",
            "Studios & Creative Teams",
            "Print & Design Teams",
          ].map((industry) => (
            <span
              key={industry}
              className="bg-orange-200 text-orange-800 px-4 py-2 rounded-full font-medium shadow"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-10">
        <h3 className="text-xl font-bold text-orange-600 mb-4">What Our Clients Say</h3>
        <div className="space-y-4">
          <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 dark:text-gray-200">
            “Our product photos look clean and professional. Sales went up after we started using their editing service.” <br />
            <span className="text-sm text-gray-500">– Store Owner, USA</span>
          </blockquote>
          <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 dark:text-gray-200">
            “Fast, friendly, and always gets the colors right. My Amazon listings never get rejected.” <br />
            <span className="text-sm text-gray-500">– Amazon Seller, UK</span>
          </blockquote>
          <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 dark:text-gray-200">
            “They fixed wrinkles and backgrounds for my clothing shop. The photos look amazing!” <br />
            <span className="text-sm text-gray-500">– Boutique Owner, Canada</span>
          </blockquote>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Ready to Start?</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-200">
          <li>Send us your product photos</li>
          <li>Tell us what needs fixing</li>
          <li>We’ll reply with a price and timeline</li>
          <li>Approve and we start editing</li>
          <li>Get your edited photos in 1–2 days</li>
        </ul>
        <a
          href="mailto:info@yourdomain.com"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-200"
        >
          Contact Us
        </a>
      </div>

      {/* FAQ Section */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-10">
        <h2 className="text-xl font-bold text-orange-600 mb-4">E-commerce Photo Editing FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="rounded bg-orange-50 dark:bg-gray-800 p-4 shadow"
            >
              <summary className="cursor-pointer font-semibold text-orange-700 dark:text-orange-300">
                {faq.question}
              </summary>
              <div className="mt-2 text-gray-700 dark:text-gray-200">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Ecommerce_editing;