import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const timelineData = [
  { year: 2025, title: "ImageFix Lab Photo Editing App", content: "We launched our own photo editing app to help photographers and sellers edit on the go." },
  { year: 2021, title: "Product & Fashion Editing", content: "Expanded into e-commerce and fashion photography retouching." },
  { year: 2020, title: "Lightroom Editing Services", content: "Added advanced Lightroom workflows for photographers." },
  { year: 2018, title: "Old Photo Restoration", content: "Started offering restoration for damaged and vintage photos." },
  { year: 2016, title: "Portrait Editing", content: "Our very first service—helping people with basic portrait touch-ups.", isStart: true },
];

const AboutTimeline = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          About Fix The Photo 
        </h2>
      </div>

      {/* Added Intro Section */}
      <div className="space-y-5 mb-10 text-base leading-relaxed max-w-4xl mx-auto">
        <p>
          If you have a photo and it needs fixing, there’s a good chance we can handle it.
        </p>
        <h3 className="text-xl font-semibold mt-4">How It All Grew</h3>
        <p>
          At first, we focused on one thing: portrait editing. That was in 2016. Over the next few years, we started offering other services. By 2018, we were working on old photo restoration. In 2020, we added Lightroom editing. In 2021, we got into product and fashion work. More options followed.
          In 2025, we even made our own photo editing app. One step at a time, we built a service people could count on.
        </p>
        <h3 className="text-xl font-semibold mt-4">What Makes Us Different</h3>
        <p>
          You’re not just sending your photos into a system. Real people work on every picture. We look at your request, fix what you ask for, and check the details. If you want something changed, you can ask. We’ll listen.
          Also, your photos are private. We don’t share them. We don’t post them. They stay between you and us.
        </p>
        <h3 className="text-xl font-semibold mt-4">No Tricks, No Pressure</h3>
        <p>
          We don’t lock you into anything. If you have one photo, send one. If you have 500, we can do that too. We keep our pricing clear, and there are no hidden fees. Not sure yet? You can ask for a free sample before placing an order.
        </p>
        <h3 className="text-xl font-semibold mt-4">Our Promise</h3>
        <p>
          We don’t try to be something we’re not. We don’t use big words to sound smart. We fix photos. That’s it. You take the pictures. We clean them up. You get more time to do what you care about.
          Some people use our service once. Others send work every week. Either way, we treat each photo like it matters because it does.
        </p>
      </div>

      {/* Story / About */}
      <div className="space-y-5 mb-16 text-base leading-relaxed max-w-4xl mx-auto">
        <p>
          ImageFix Lab has been editing pictures since 2016. It started small, helping with basic portrait touch-ups. Over time, more services were added, more people joined the team, and the quality got better. Now, we work with photographers, sellers, and brands from all over the world.
        </p>
        <p>
          We help with the kind of editing most people don’t have time for. Some photos need clean backgrounds. Others need better lighting. Sometimes, people just want small things fixed, like dust on a product or a shadow that doesn’t look right. We handle all that.
        </p>
        <h3 className="text-xl font-semibold mt-8">No Fancy Tools Needed on Your End</h3>
        <p>
          You don’t need to download software or spend hours clicking around. Just send us your photos and let us know what you want. We’ll fix them and send them back usually within one or two days.
        </p>
        <p>
          Most people who use our service are busy. Some run online shops. Others are photographers who want to focus on taking pictures instead of sitting in front of a screen all day. Whatever the case, we make the editing part simple.
        </p>

        <h3 className="text-xl font-semibold mt-8">Services That Actually Help</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Product photos for e-commerce</li>
          <li>Cutting out backgrounds (clipping path)</li>
          <li>Ghost mannequin edits for clothing</li>
          <li>Jewelry photo clean-up</li>
          <li>Baby photo retouching</li>
          <li>Touch-ups for model shoots</li>
          <li>Old photo fixing</li>
          <li>Cropping and resizing images</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">What Makes Us Different</h3>
        <p>
          You’re not just sending your photos into a system. Real people work on every picture. We look at your request, fix what you ask for, and check the details. If you want something changed, you can ask. We’ll listen.
        </p>
        <p>
          Also, your photos are private. We don’t share them. We don’t post them. They stay between you and us.
        </p>

        <h3 className="text-xl font-semibold mt-8">No Tricks, No Pressure</h3>
        <p>
          We don’t lock you into anything. If you have one photo, send one. If you have 500, we can do that too. We keep our pricing clear, and there are no hidden fees. Not sure yet? You can ask for a free sample before placing an order.
        </p>

        <h3 className="text-xl font-semibold mt-8">Our Promise</h3>
        <p>
          We don’t try to be something we’re not. We don’t use big words to sound smart. We fix photos. That’s it. You take the pictures. We clean them up. You get more time to do what you care about.
        </p>
        <p>
          Some people use our service once. Others send work every week. Either way, we treat each photo like it matters—because it does.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-gray-300 ml-4 sm:ml-6">
        {timelineData.map((item, index) => (
          <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem value={`item-${index}`} className="border-none">
              <div className="flex items-start relative pb-10 min-h-[56px]">
                {/* Dot */}
                <div className="absolute -left-[9px] top-2">
                  <div
                    className={`w-4 h-4 rounded-full border-4 shadow-sm ${
                      item.isStart
                        ? "bg-blue-500 border-blue-300"
                        : "bg-yellow-400 border-yellow-200"
                    }`}
                  />
                </div>

                {/* Year and content */}
                <div className="ml-8 w-full">
                  <AccordionTrigger className="flex flex-wrap items-center justify-start gap-x-3 gap-y-2 text-left text-base font-semibold hover:text-yellow-600 transition-all">
                    <span className="font-bold text-lg w-16">{item.year}</span>
                    <span className="flex-1">{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm mt-2 pl-20 pr-2 max-w-3xl">
                    {item.content}
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-24">
        <h3 className="text-xl font-semibold mb-3">LET’S WORK TOGETHER</h3>
        <p className="text-gray-600 mb-6 text-base">
          Our image retouchers are ready for you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 transition text-white font-semibold py-3 px-6 rounded-full shadow-md">
            Try for Free
          </button>
          <button className="border border-yellow-400 hover:bg-yellow-100 transition text-yellow-600 font-semibold py-3 px-6 rounded-full shadow-sm">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;