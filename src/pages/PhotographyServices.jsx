import Meta from "../helmet/Meta";

const faqs = [
  {
    question: "How do I place an order?",
    answer: "Just send us your photos by email or file link. Tell us what you need, and we’ll take care of the rest.",
  },
  {
    question: "Do you edit for Amazon?",
    answer: "Yes. We do Amazon Product Photo Editing and follow all the photo rules Amazon requires, like white backgrounds, image size, and cropping.",
  },
  {
    question: "Can you remove backgrounds from clothing photos?",
    answer: "Yes. We offer Apparel & Garment Photo Editing, including Neck Joint and Ghost Mannequin Services to make clothing look like it's worn, even if there's no model.",
  },
  {
    question: "Do you remove strange colors or lighting?",
    answer: "Absolutely. We do Color Cast Removal to fix lighting problems and make your product colors look natural.",
  },
  {
    question: "Can you retouch model photos?",
    answer: "Yes. We do Model Photo Retouching to smooth skin, fix lighting, and clean up details without over-editing.",
  },
  {
    question: "Do you offer bulk discounts?",
    answer: "Yes. If you send lots of photos, we’ll give you a better price per image.",
  },
  {
    question: "How fast is delivery?",
    answer: "Most orders are ready in 24 to 48 hours. If it’s urgent, just tell us—we can rush it.",
  },
  {
    question: "What image formats do you accept?",
    answer: "We work with JPEG, PNG, PSD, TIFF, RAW, and others. If you’re not sure, send it—we’ll check.",
  },
  {
    question: "Will my images be secure?",
    answer: "Yes. We never share, reuse, or keep your photos after your job is done.",
  },
  {
    question: "Can I ask for changes after delivery?",
    answer: "Of course. If you want something changed, just let us know. We offer free revisions.",
  },
  {
    question: "Is support available on weekends?",
    answer: "Yes. You can reach us any day, even during holidays. We're available 24/7.",
  },
  {
    question: "Do I need to give full instructions every time?",
    answer: "Not at all. If you’re a regular client, we save your editing style so you don’t have to repeat anything.",
  },
];

const PhotographyServices = () => (
  <div>
    <Meta
      title="Photography Post-Production Services for Clean Edits"
      description="Photography Post-Production Services for product, model, and fashion photos. Get clean edits, background removal, and retouching fast and easy."
    />

    {/* Hero Section */}
    <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-100 py-16 px-4 mb-10 rounded-xl shadow-lg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://fixthephoto.com/images/uikit_slider/online-photo-editing-services-before-wh650.jpg"
          alt="Photography Post-Production Example"
          className="object-cover w-full h-full opacity-10 blur-sm"
        />
      </div>
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 drop-shadow">
          Photography Post-Production Services
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 font-medium">
          Sharp, sale-ready images for e-commerce, fashion, and product brands. Clean edits, fast turnaround, and expert retouching.
        </p>

      </div>
    </section>

    {/* Service Details */}
    <section className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
        <div>
          <img
            src="https://fixthephoto.com/images/uikit_slider/photo-editing-services-for-photographers-after-wh650.jpg"
            alt="After Post-Production"
            className="rounded-xl shadow-lg w-full max-w-md mb-4 border-4 border-blue-200"
          />
          <span className="text-sm text-gray-500">After Post-Production</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">What Is Photography Post-Production?</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-200">
            Photography post-production involves editing images after they’re captured. This includes color correction, retouching, background adjustments, shadow creation, and more. The goal is to make your images look professional and consistent across all your marketing channels.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
            <li><strong>Manual Retouching:</strong> Remove blemishes, smooth skin, and enhance features.</li>
            <li><strong>Ghost Mannequin & Neck Joint:</strong> Apparel editing for natural, 3D shapes.</li>
            <li><strong>Color Correction & Cast Removal:</strong> Fix lighting and color issues for true-to-life tones.</li>
            <li><strong>Amazon-Ready Optimization:</strong> Meet platform standards for product photos.</li>
            <li><strong>Garment & Apparel Editing:</strong> Clean up clothing photos for sharp, sale-ready images.</li>
          </ul>
        </div>
      </div>

      {/* Workflow */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-10">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Our Photography Post-Production Workflow</h3>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-200">
          <li>Send Us Your Photos</li>
          <li>Tell Us What You Need</li>
          <li>We Edit Each Photo by Hand</li>
          <li>We Double-Check Everything</li>
          <li>Get Your Finished Photos</li>
        </ol>
      </div>

      {/* Features & Benefits */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-blue-50 dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-xl font-bold text-blue-700 mb-3">Why Choose Us?</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
            <li>Manual, detailed editing</li>
            <li>Quick turnaround (1–2 days)</li>
            <li>Fair pricing & bulk discounts</li>
            <li>Secure file handling</li>
            <li>Unlimited free revisions</li>
            <li>Dedicated project manager</li>
            <li>24/7 support</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
          <h3 className="text-xl font-bold text-blue-700 mb-3">Extra Services</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
            <li>Shadow & Reflection Creation</li>
            <li>Apparel & Garment Editing</li>
            <li>Ghost Mannequin & Neck Joint</li>
            <li>Color Cast Removal</li>
            <li>Cropping & Resizing</li>
          </ul>
        </div>
      </div>

      {/* Industries */}
      <div className="bg-gradient-to-r from-blue-100 via-white to-orange-50 rounded-xl shadow p-8 mb-10">
        <h3 className="text-xl font-bold text-blue-700 mb-3">Who Uses Our Service?</h3>
        <div className="flex flex-wrap gap-4">
          {[
            "Amazon Sellers",
            "Fashion Photographers",
            "E-commerce Brands",
            "Studios & Agencies",
            "Print & Catalog Designers",
          ].map((industry) => (
            <span
              key={industry}
              className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium shadow"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-10">
        <h3 className="text-xl font-bold text-blue-700 mb-4">What Our Clients Say</h3>
        <div className="space-y-4">
          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-700 dark:text-gray-200">
            “Consistent, high-quality edits every time. Our Amazon listings look professional and convert better.” <br />
            <span className="text-sm text-gray-500">– Amazon Seller, USA</span>
          </blockquote>
          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-700 dark:text-gray-200">
            “Their ghost mannequin service made our apparel photos look sharp and natural. Fast turnaround too!” <br />
            <span className="text-sm text-gray-500">– Fashion Brand, UK</span>
          </blockquote>
          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-700 dark:text-gray-200">
            “We trust ImageFix Lab for all our post-production needs. The team is responsive and always delivers.” <br />
            <span className="text-sm text-gray-500">– Studio Owner, Canada</span>
          </blockquote>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Ready to Get Started?</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-200">
          <li>Send us your images by email or file link</li>
          <li>Tell us what you want fixed or improved</li>
          <li>We’ll reply with a quote and timeline</li>
          <li>Approve and we start editing</li>
          <li>Get your finished photos in 1–2 days</li>
        </ul>
        <a
          href="mailto:info@yourdomain.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-200"
        >
          Contact Us
        </a>
      </div>

      {/* FAQ Section */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-10">
        <h2 className="text-xl font-bold text-blue-700 mb-4">Photography Post-Production FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="rounded bg-blue-50 dark:bg-gray-800 p-4 shadow"
            >
              <summary className="cursor-pointer font-semibold text-blue-700 dark:text-blue-300">
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

export default PhotographyServices;