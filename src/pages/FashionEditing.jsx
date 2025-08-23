import Meta from "../helmet/Meta";

const faqs = [
  {
    question: "How do I send photos to you?",
    answer: "You can use Google Drive, Dropbox, or email. Choose whatever is easiest for you.",
  },
  {
    question: "Can I send RAW or PSD files?",
    answer: "Yes. We accept RAW, PSD, JPG, PNG, and most other file types.",
  },
  {
    question: "Can you remove wrinkles, loose threads, or dust?",
    answer: "Yes. We smooth out fabric, fix folds, and clean every detail so clothes look neat.",
  },
  {
    question: "Can you match my brand’s editing style?",
    answer: "Absolutely. Just send sample photos, and we’ll match your colors, lighting, and tone.",
  },
  {
    question: "Do you offer discounts for large orders?",
    answer: "Yes. The more images you send, the lower the cost per photo.",
  },
  {
    question: "Will my photos stay private?",
    answer: "Yes. We never share your files. Once your project is done, we delete everything.",
  },
  {
    question: "What if I want changes after delivery?",
    answer: "No problem. We offer free minor revisions until you’re happy.",
  },
  {
    question: "Are you open on weekends?",
    answer: "Yes, we work every day — weekdays and weekends.",
  },
  {
    question: "Do I need to explain my edits again next time?",
    answer: "No. We save your style and notes to make your next order even easier.",
  },
];

const FashionEditing = () => (
  <div>
    <Meta
      title="Fashion Photo Editing Services for Stylish, Clean Looks"
      description="High-quality editing for fashion photos. We retouch skin, adjust lighting, remove distractions, and make every shot look polished and on-brand."
    />

    {/* Hero Section */}
    <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-100 py-16 px-4 mb-10 rounded-xl shadow-lg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://fixthephoto.com/images/uikit_slider/fashion-photo-editing-services-before-wh650.jpg"
          alt="Fashion Photo Editing Example"
          className="object-cover w-full h-full opacity-10 blur-sm"
        />
      </div>
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4 drop-shadow">
          Fashion Photo Editing Services That Make Your Style Stand Out
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 font-medium">
          Clean, stylish, and polished edits for fashion brands, photographers, and stylists. We retouch skin, fix lighting, and keep every detail looking natural and on-brand.
        </p>
    
      </div>
    </section>

    {/* Why Editing Matters */}
    <section className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
        <div>
          <img
            src="https://fixthephoto.com/images/uikit_slider/fashion-photo-editing-services-after-wh650.jpg"
            alt="After Fashion Editing"
            className="rounded-xl shadow-lg w-full max-w-md mb-4 border-4 border-pink-200"
          />
          <span className="text-sm text-gray-500">After Editing</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Why Good Editing Matters for Fashion Photography</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-200">
            Fashion photos aren’t just about clothes, they’re about the whole look. Editing helps fix lighting, wrinkles, flyaways, and background clutter, keeping the focus on the outfit and model.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
            <li>Skin retouching without losing texture</li>
            <li>Fabric wrinkle and lint removal</li>
            <li>Color correction for true-to-life tones</li>
            <li>Background cleanup and distractions removed</li>
            <li>Consistent editing for catalogs and campaigns</li>
          </ul>
        </div>
      </div>

      {/* Types of Edits */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-10">
        <h3 className="text-xl font-bold text-pink-600 mb-4">The Types of Edits We Offer</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
          <li>Skin Retouching and Face Cleanup</li>
          <li>Fixing Background Distractions</li>
          <li>Color Correction and Tone Matching</li>
          <li>Clothing and Fabric Smoothing</li>
          <li>Cropping and Framing</li>
        </ul>
      </div>

      {/* Process */}
      <div className="bg-pink-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-10">
        <h3 className="text-xl font-bold text-pink-600 mb-4">Our Fashion Editing Process</h3>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-200">
          <li>Send Us the Fashion Photos</li>
          <li>Tell Us What Needs Fixing</li>
          <li>Manual Editing — No Filters</li>
          <li>Final Review & Double-Check</li>
          <li>Get Your Final Files</li>
        </ol>
      </div>

      {/* Why Choose Us */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-pink-50 dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-xl font-bold text-pink-600 mb-3">Why People Choose Us</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
            <li>Three-step quality check</li>
            <li>Fast turnaround (2–3 days)</li>
            <li>Fair, transparent pricing</li>
            <li>Free minor revisions</li>
            <li>Dedicated project manager</li>
            <li>Privacy and file safety</li>
            <li>24/7 support</li>
            <li>We remember your style</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
          <h3 className="text-xl font-bold text-pink-600 mb-3">Who We Help</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
            <li>Fashion brands and designers</li>
            <li>Photographers and studios</li>
            <li>Stylists and creative teams</li>
            <li>Online stores and lookbooks</li>
            <li>Agencies and magazines</li>
          </ul>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-10">
        <h3 className="text-xl font-bold text-pink-600 mb-4">What Our Clients Say</h3>
        <div className="space-y-4">
          <blockquote className="border-l-4 border-pink-400 pl-4 italic text-gray-700 dark:text-gray-200">
            “They cleaned up wrinkles and lighting issues — my lookbook photos came back flawless.” <br />
            <span className="text-sm text-gray-500">– Fashion Photographer, USA</span>
          </blockquote>
          <blockquote className="border-l-4 border-pink-400 pl-4 italic text-gray-700 dark:text-gray-200">
            “Fast turnaround and consistent edits across 200+ catalog shots.” <br />
            <span className="text-sm text-gray-500">– Apparel Brand, UK</span>
          </blockquote>
          <blockquote className="border-l-4 border-pink-400 pl-4 italic text-gray-700 dark:text-gray-200">
            “They matched our brand style perfectly. The campaign images looked stunning.” <br />
            <span className="text-sm text-gray-500">– Creative Director, Canada</span>
          </blockquote>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">Ready to Start?</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-200">
          <li>Send us your fashion photos</li>
          <li>Tell us what needs fixing</li>
          <li>We’ll reply with a quote and timeline</li>
          <li>Approve and we start editing</li>
          <li>Get polished photos in 2–3 days</li>
        </ul>
        <a
          href="mailto:info@yourdomain.com"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-200"
        >
          Contact Us
        </a>
      </div>

      {/* FAQ Section */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-10">
        <h2 className="text-xl font-bold text-pink-600 mb-4">Fashion Photo Editing FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="rounded bg-pink-50 dark:bg-gray-800 p-4 shadow"
            >
              <summary className="cursor-pointer font-semibold text-pink-700 dark:text-pink-300">
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

export default FashionEditing;
