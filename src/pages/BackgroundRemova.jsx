import Meta from "../helmet/Meta";

const faqs = [
  {
    question: "How can I place an order?",
    answer:
      "Just email us with your project details—how many photos, what kind of edits you need, and any special notes. We’ll reply quickly to confirm everything and get started.",
  },
  {
    question: "Do you offer bulk discounts?",
    answer:
      "Yes, we do. If you have a big batch of images, let us know. We’ll give you a special price based on the number of files and the type of work needed.",
  },
  {
    question: "How fast can you finish the job?",
    answer:
      "Most edits are done within 24–48 hours. If you need it sooner, let us know—we also handle urgent orders.",
  },
  {
    question: "What image formats do you accept?",
    answer:
      "We accept JPEG, PNG, PSD, TIFF, RAW, and more. If you’re not sure, just ask—we likely support your file type.",
  },
  {
    question: "What hours do you work?",
    answer:
      "Our team works every day. You can send us files anytime, and we’ll respond as soon as possible, usually within a few hours.",
  },
  {
    question: "Are my photos safe with you?",
    answer:
      "Yes. Your images are secure. We follow strict privacy rules, and your files are never shared or reused.",
  },
  {
    question: "My files are large—how do I send them?",
    answer:
      "You can send large files using Google Drive, WeTransfer, Dropbox, or any file-sharing tool you prefer.",
  },
  {
    question: "Do you accept urgent jobs?",
    answer:
      "Absolutely. If you need quick delivery, just let us know in your message. We offer express turnaround for rush projects.",
  },
  {
    question: "Can you edit product photos for Amazon?",
    answer:
      "Yes. We follow Amazon’s image rules exactly, background, size, format, and optimization. Just tell us what you need, and we’ll take care of it.",
  },
];

const BackgroundRemova = () => {

  return (
    <div>
      <Meta
        title="Background Removal Service for Clean Product Photos"
        description="Get sharp, distraction-free product images with our background removal service. Clean edits, fast delivery, and perfect for online stores."
      />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16 px-4 mb-10 rounded-xl shadow-lg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://fixthephoto.com/images/uikit_slider/photo-editing-services-for-photographers-before-wh650.jpg"
            alt="Background Removal Example"
            className="object-cover w-full h-full opacity-10 blur-sm"
          />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl leading-tight font-extrabold text-orange-600 mb-4 drop-shadow">
            Professional Background Removal Service
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 font-medium">
            Get flawless, distraction-free product images. Fast delivery, pixel-perfect edits, and trusted by e-commerce brands worldwide.
          </p>
   
        </div>
      </section>

      {/* Service Details */}
      <section className="container mx-auto px-4 py-8">
   

        {/* Info Sections */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">What Is Background Removal?</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-200">
            Background removal separates the main subject from its background, focusing attention on your product. Our experts use manual and AI tools for pixel-perfect results, ensuring every detail is sharp and clean.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Types of Background Removal</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
                <li><strong>Manual Clipping Path:</strong> Clean, sharp edges for products with strong outlines.</li>
                <li><strong>Image Masking:</strong> Perfect for hair, fur, or transparent items.</li>
                <li><strong>AI-Based Removal:</strong> Fast for bulk images, checked by real editors for quality.</li>
                <li><strong>Color-Based Removal:</strong> Ideal for solid backgrounds.</li>
                <li><strong>Custom Background Replacement:</strong> Add any background you want after removal.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Process</h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-200">
                <li>Send Us Your Photos</li>
                <li>Choose the Background Style</li>
                <li>Careful Editing by Hand</li>
                <li>Check and Double-Check</li>
                <li>Get Your Images & Request Changes</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Features & Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-orange-50 dark:bg-gray-800 rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-orange-600 mb-3">Why Choose Us?</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
              <li>Manual Precision</li>
              <li>Fast Turnaround (1–2 days)</li>
              <li>Competitive Pricing (from $0.25/image)</li>
              <li>Secure File Transfers</li>
              <li>Bulk Discounts</li>
              <li>Unlimited Fixes Until You're Happy</li>
              <li>24/7 Customer Support</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-orange-600 mb-3">Extra Services</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
              <li>Shadow & Reflection Creation</li>
              <li>Ghost Mannequin Effect</li>
              <li>Color Correction & Balancing</li>
              <li>Image Retouching</li>
              <li>Cropping & Resizing</li>
            </ul>
          </div>
        </div>

        {/* Industries */}
        <div className="bg-gradient-to-r from-orange-100 via-white to-orange-50 rounded-xl shadow p-8 mb-10">
          <h3 className="text-xl font-bold text-orange-600 mb-3">Who Uses Our Service?</h3>
          <div className="flex flex-wrap gap-4">
            {[
              "E-commerce Stores",
              "Photography Studios",
              "Real Estate Companies",
              "Fashion Brands",
              "Jewelry Designers",
              "Digital Agencies",
              "Print & Catalog Publishers",
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
              “Incredible quality and turnaround time. The background removing service exceeded our expectations.” <br />
              <span className="text-sm text-gray-500">– E-commerce Manager, USA</span>
            </blockquote>
            <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 dark:text-gray-200">
              “We tried multiple providers, but this image background remove service gave the most consistent results for our fashion line.” <br />
              <span className="text-sm text-gray-500">– Studio Owner, UK</span>
            </blockquote>
            <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 dark:text-gray-200">
              “As a creative agency, we rely on tight deadlines. Their team always delivers on time and meets our quality standards.” <br />
              <span className="text-sm text-gray-500">– Art Director, Canada</span>
            </blockquote>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center justify-center py-10">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Ready to Get Started?</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-200">
            <li>Send us an email with your photo files</li>
            <li>Tell us how many pictures you have and what kind of edits you want</li>
            <li>We’ll reply with the price and how long it will take</li>
            <li>Once you agree, we’ll start the work</li>
            <li>You’ll get your finished pictures in 1 to 2 days</li>
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
          <h2 className="text-xl font-bold text-orange-600 mb-4">Photo Background Removal FAQs</h2>
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
};

export default BackgroundRemova;