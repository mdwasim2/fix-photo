import Meta from "../helmet/Meta";

const faqs = [
  {
    question: "What are Wedding Photo Editing Services?",
    answer: "These services fix and improve your wedding photos. They make colors brighter, remove unwanted things, fix lighting, and make your pictures look their best.",
  },
  {
    question: "How do I send my wedding photos to you?",
    answer: "You can send them by email, Google Drive, Dropbox, or any app that shares files easily.",
  },
  {
    question: "Can you edit photos taken with my phone?",
    answer: "Yes! As long as the photo is clear, we can work on it just like a professional picture.",
  },
  {
    question: "Can you remove people or objects from the photos?",
    answer: "Yes, we can remove things like strangers, trash, or anything you don’t want in your pictures.",
  },
  {
    question: "Can you fix problems with lighting or weather?",
    answer: "Yes, we can brighten dark spots, fix shadows, and even make cloudy skies look nicer.",
  },
  {
    question: "Do you offer discounts if I have a lot of photos?",
    answer: "Yes, the more photos you send, the better the price you get.",
  },
  {
    question: "What types of photo files do you accept?",
    answer: "We accept common files like JPG, PNG, PSD, RAW, and others.",
  },
  {
    question: "Is it safe to send you my wedding photos?",
    answer: "Yes. We keep your photos private and delete them once the work is done.",
  },
  {
    question: "Can I ask for changes after you finish?",
    answer: "Yes, small fixes like cropping or color tweaks are free. Just tell us what you want changed.",
  },
  {
    question: "Do you work on weekends?",
    answer: "Yes, we are available every day, including weekends and holidays.",
  },
  {
    question: "Will you remember how I like my photos edited?",
    answer: "Yes, once you tell us your preferences, we save them so your next photos will match your style.",
  },
];

const Weddingphotoediting = () => (
  <div>
    <Meta
      title="Wedding Photo Editing Services That Keep Your Memories Clear"
      description="Clean, natural, and emotional wedding photo editing. We fix lighting, remove distractions, and retouch each shot to make your big day look just right."
    />

    {/* Hero Section */}
    <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-white to-orange-100 py-16 px-4 mb-10 rounded-xl shadow-lg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://fixthephoto.com/images/uikit_slider/wedding-photo-editing-services-after-wh650.jpg"
          alt="Wedding Photo Editing Example"
          className="object-cover w-full h-full opacity-10 blur-sm"
        />
      </div>
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4 drop-shadow">
          Wedding Photo Editing Services That Keep Your Memories Clear
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 font-medium">
          Wedding photos are more than just pictures—they're memories. We fix lighting, remove distractions, and retouch each shot so your big day looks clean, emotional, and timeless.
        </p>

      </div>
    </section>

    {/* Service Details */}
    <section className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
        <div>
          <img
            src="https://fixthephoto.com/images/uikit_slider/wedding-photography-edit-after1594117209_wh960.jpg"
            alt="After Wedding Editing"
            className="rounded-xl shadow-lg w-full max-w-md mb-4 border-4 border-pink-200"
          />
          <span className="text-sm text-gray-500">After Editing</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-pink-700 mb-4">What is Wedding Photo Editing?</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-200">
            Sometimes, wedding photos don’t come out perfect. Our editing services fix lighting, colors, backgrounds, and small flaws so your memories look clean, clear, and beautiful—ready for albums, frames, or sharing online.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
            <li>Touching up skin and faces (natural, gentle retouching)</li>
            <li>Fixing background distractions (remove objects, people, clutter)</li>
            <li>Color correction and lighting fixes</li>
            <li>Cropping and framing for better focus</li>
            <li>Dress and suit wrinkle fixes</li>
            <li>Consistent edits for albums and galleries</li>
            <li>Premium edits: sky replacement, cinematic tones, fine art effects</li>
          </ul>
        </div>
      </div>

      {/* Why Editing Matters */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-10">
        <h3 className="text-xl font-bold text-pink-700 mb-4">Why Good Editing Matters for Wedding Photos</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          A wedding is a once-in-a-lifetime event, and your photos are all you have to relive it. We carefully go through each image, brighten dull photos, correct color tones, remove objects in the background, and retouch faces gently so they still look real. Your album will feel like a story—clean, connected, and full of life.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
          <li>Remove red eyes, soften harsh sunlight, clean up busy backgrounds</li>
          <li>Blend group shots, match colors across your gallery</li>
          <li>Natural or creative edits to match your style</li>
        </ul>
      </div>

      {/* Workflow */}
      <div className="bg-pink-50 dark:bg-gray-800 rounded-xl shadow p-6 mb-10">
        <h3 className="text-xl font-bold text-pink-700 mb-4">Our Wedding Photo Editing Process</h3>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-200">
          <li>Send Your Photos (any format, any device)</li>
          <li>Tell Us What You Want (your style, your needs)</li>
          <li>We Edit Each Photo by Hand (no shortcuts)</li>
          <li>We Double-Check Everything (three-step review)</li>
          <li>You Get the Finished Photos (ready to print, share, or post)</li>
        </ol>
      </div>

      {/* Features & Benefits */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-pink-50 dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-xl font-bold text-pink-700 mb-3">Why People Choose Us</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
            <li>Careful, three-step editing for every photo</li>
            <li>Fast delivery (2–4 days, rush available)</li>
            <li>Fair and simple pricing, bulk discounts</li>
            <li>Private and secure file handling</li>
            <li>Free minor fixes and revisions</li>
            <li>Dedicated manager for your project</li>
            <li>24/7 support, even weekends and holidays</li>
            <li>We remember your style for future edits</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
          <h3 className="text-xl font-bold text-pink-700 mb-3">Extra Services</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
            <li>Soft glow effects</li>
            <li>Consistent tones across your gallery</li>
            <li>Custom crops for prints or social media</li>
            <li>Dress and suit wrinkle fixes</li>
            <li>Sky replacement and cinematic tones</li>
            <li>Color-matching to your wedding theme</li>
          </ul>
        </div>
      </div>

      {/* Who We Help */}
      <div className="bg-gradient-to-r from-pink-100 via-white to-orange-50 rounded-xl shadow p-8 mb-10">
        <h3 className="text-xl font-bold text-pink-700 mb-3">Who We Help</h3>
        <div className="flex flex-wrap gap-4">
          {[
            "Couples & Families",
            "Wedding Photographers",
            "Wedding Planners",
            "Photo Studios",
            "Album Designers",
          ].map((industry) => (
            <span
              key={industry}
              className="bg-pink-200 text-pink-800 px-4 py-2 rounded-full font-medium shadow"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-10">
        <h3 className="text-xl font-bold text-pink-700 mb-4">What Our Clients Say</h3>
        <div className="space-y-4">
          <blockquote className="border-l-4 border-pink-400 pl-4 italic text-gray-700 dark:text-gray-200">
            “They made our wedding photos look natural and beautiful. The colors and lighting are perfect!” <br />
            <span className="text-sm text-gray-500">– Bride, USA</span>
          </blockquote>
          <blockquote className="border-l-4 border-pink-400 pl-4 italic text-gray-700 dark:text-gray-200">
            “Fast, friendly, and always listens to what we want. Our album looks amazing.” <br />
            <span className="text-sm text-gray-500">– Groom, UK</span>
          </blockquote>
          <blockquote className="border-l-4 border-pink-400 pl-4 italic text-gray-700 dark:text-gray-200">
            “They fixed every little detail and kept our photos looking real. Highly recommend!” <br />
            <span className="text-sm text-gray-500">– Photographer, Canada</span>
          </blockquote>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-2xl font-bold text-pink-700 mb-4">Ready to Start?</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-200">
          <li>Send us your wedding photos (email, Google Drive, Dropbox, any app)</li>
          <li>Tell us what needs fixing or improving</li>
          <li>We’ll reply with a price and timeline</li>
          <li>Approve and we start editing</li>
          <li>Get your edited photos in 2–4 days</li>
        </ul>
        <a
          href="mailto:info@yourdomain.com"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-200"
        >
          Contact Us
        </a>
      </div>

      {/* FAQ Section */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-10">
        <h2 className="text-xl font-bold text-pink-700 mb-4">FAQs About Wedding Photo Editing Services</h2>
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

export default Weddingphotoediting;