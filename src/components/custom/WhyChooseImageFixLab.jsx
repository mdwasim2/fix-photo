
const WhyChooseImageFixLab = () => {
  const features = [
    "Real people edit your photos",
    "Fast delivery",
    "Good prices",
    "Safe and private",
    "All kinds of edits",
    "Helpful support",
  ];

  const sections = [
    {
      title: "1. Easy Process from Start to Finish",
      description:
        "You don’t need editing skills to use ImageFix Lab. Just upload your picture, tell them what you want fixed, and they do the work. No confusing tools. No extra apps. It's quick, clear, and works for everyone from business owners to parents. Whether it’s a product photo for your shop, a baby picture, or a portrait, they can make it look better without wasting your time.",
    },
    {
      title: "2. Real Editors, Not Filters",
      description:
        "Each photo is handled by a person, not a machine. That means edits look natural. The team adjusts lighting, removes spots, smooths skin, fixes clothing, and changes backgrounds when needed. They don’t overdo anything. Every photo still feels real, just better.",
    },
    {
      title: "3. Fair Prices and Fast Turnaround",
      description:
        "You only pay for what you need. There are no hidden fees. Whether you want one picture cleaned up or a whole set edited for your online store, the pricing stays clear. Most jobs come back quickly, and if something looks off, you can ask for a revision without hassle.",
    },
    {
      title: "4. Safe, Private, and Trusted",
      description:
        "Your photos are handled with care. They aren’t posted, shared, or reused. People from around the world trust Fix The Photo with important images—wedding portraits, business product shots, baby pictures, and more. Their team respects your privacy and handles each order seriously.",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-14 px-4 text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl text-center">
          Why Choose ImageFix Lab?
        </h2>
        <p className="mb-12 max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300 leading-relaxed">
          ImageFix Lab shouldn’t feel like a chore. You take a picture, but
          something’s off, maybe the lighting is bad, there’s a wrinkle in the
          shirt, or the background looks messy. That’s where Fix The Photo
          helps. They clean up photos without making them look fake.
        </p>

        {/* Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="mx-auto max-w-3xl text-left">
          <h3 className="mb-4 text-2xl font-bold">Here’s what makes them a smart pick:</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="inline-block h-3 w-3 rounded-full bg-orange-500"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed text-center">
          People keep choosing Fix The Photo because it works. It’s simple, fast, and the results are always clean and natural. Whether you’re selling something online, printing family portraits, or fixing old pictures, you’ll find their help useful.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseImageFixLab;
