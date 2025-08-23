

import Meta from "../helmet/Meta";

const faqs = [
  {
    question: "How do I send my jewelry photos to you?",
    answer:
      "You can email them or use file-sharing apps like Google Drive, Dropbox, or any other platform that works for you.",
  },
  {
    question: "Do you accept RAW files?",
    answer:
      "Yes, our Jewelry Photo Editing Services handle RAW, PSD, JPG, PNG, TIFF, and many other formats.",
  },
  {
    question: "Can you remove reflections and background clutter?",
    answer:
      "Absolutely. We carefully remove unwanted reflections, clean up messy backgrounds, and fix lighting issues to highlight your jewelry perfectly.",
  },
  {
    question: "Can you make my stones look shinier?",
    answer:
      "Yes. We enhance the sparkle naturally without adding fake shine, so your jewelry looks real and beautiful.",
  },
  {
    question: "Do you offer discounts for large batches?",
    answer:
      "Yes. Sending many photos means you get a lower price per image, making it affordable for big collections.",
  },
  {
    question: "Are my files safe?",
    answer:
      "Definitely. Your photos are private and secure. We never share them and delete all files after your order is complete.",
  },
  {
    question: "Do you do revisions?",
    answer:
      "Yes. If you want small changes after delivery, revisions are free. We want you to be completely happy with your images.",
  },
  {
    question: "Are you available on weekends?",
    answer:
      "Yes, our Jewelry Photo Editing Services team works seven days a week to support your needs.",
  },
  {
    question: "Will you remember my editing preferences?",
    answer:
      "Yes. We save your style and instructions, so future orders are easier and always consistent.",
  },
];

export default function JewelryPhotoEditing() {
  return (
    <>
      <Meta
        title="Jewelry Photo Editing Services for Clean, Detailed Images"
        description="Shine brighter with our jewelry photo editing services. We clean up backgrounds, fix lighting, sharpen details, and make every piece look flawless."
      />

      <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
        <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 to-white py-20">
          <div className="absolute inset-0 bg-[url('/images/jewelry-bg.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="container relative mx-auto px-6 text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 drop-shadow md:text-5xl">
              Jewelry Photo Editing Services That Bring Out the Sparkle
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-700">
              Jewelry photography is tricky. Even with a great camera, getting the
              shine, color, and clarity just right is hard. Our expert jewelry
              photo editing services make your gold, silver, diamonds, and
              gemstones sharp, clean, and eye-catching.
            </p>
     
          </div>
        </section>

        <section className="container mx-auto grid gap-10 px-6 py-16 md:grid-cols-2 md:gap-16">
          <div>
            <img
              src="/images/jewelry-sample.jpg"
              alt="Jewelry Editing Sample"
              className="w-full rounded-lg border shadow"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Why Good Editing Matters for Jewelry Photography
            </h2>
            <p className="mb-4 text-gray-700">
              Jewelry buyers rely on photos to decide if they trust the quality.
              Clean editing removes dust, smudges, and unwanted reflections while
              sharpening the details and keeping colors true. Every image looks
              consistent, professional, and trustworthy.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              <li>Dust, scratch, and smudge removal</li>
              <li>Reflection and shine control</li>
              <li>Background cleanup or full removal</li>
              <li>Sharpness and fine detail retouching</li>
              <li>Color correction and tone matching</li>
            </ul>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              Our Jewelry Photo Editing Process
            </h2>
            <ol className="mx-auto max-w-2xl list-decimal space-y-4 pl-5 text-gray-700">
              <li>Send us your jewelry photos via email, Dropbox, or Google Drive.</li>
              <li>Tell us what you want changed (background, reflections, colors).</li>
              <li>We edit each photo by hand with careful attention to detail.</li>
              <li>Every image is double-checked before delivery.</li>
              <li>You get polished, flawless jewelry images ready for use.</li>
            </ol>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
            Why People Choose Our Jewelry Photo Editing Services
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-yellow-50 p-6 shadow">
              <h3 className="mb-4 text-2xl font-semibold text-yellow-700">
                Jewelry Background Removal
              </h3>
              <p className="text-gray-700">
                We remove messy or distracting backgrounds and replace them with
                clean white, gray, or custom shades that highlight your jewelry.
              </p>
            </div>
            <div className="rounded-xl bg-yellow-50 p-6 shadow">
              <h3 className="mb-4 text-2xl font-semibold text-yellow-700">
                Jewelry Color Correction & Retouching
              </h3>
              <p className="text-gray-700">
                Fix incorrect tones and enhance gem brilliance with natural,
                accurate color correction and detail retouching.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-100 to-yellow-50 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Ready to Start?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-gray-700">
              Send your jewelry photos (rings, earrings, bangles, necklaces). Tell
              us what you want fixed, and we’ll send you a quote with a quick
              turnaround time.
            </p>
            <button className="rounded-xl bg-yellow-600 px-8 py-3 text-lg font-semibold text-white shadow hover:bg-yellow-700">
              Contact Us
            </button>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            FAQs About Jewelry Photo Editing
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-lg border border-gray-200 p-4 shadow"
              >
                <summary className="cursor-pointer font-semibold text-yellow-700">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}