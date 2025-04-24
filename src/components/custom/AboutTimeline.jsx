import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
  
  const timelineData = [
    { year: 2022, title: "FixThePhoto Photo Editing App", content: "We launched our app to streamline editing for photographers on the go." },
    { year: 2020, title: "Reviews Professional Photography Editing Software Gears", content: "Expanded our reach with professional editing gear reviews." },
    { year: 2017, title: "Shop for Digital Photo Retouching Tools", content: "Launched an online shop for curated editing tools." },
    { year: 2016, title: "Digital Image Retouching Manipulation", content: "Improved retouching algorithms for better realism." },
    { year: 2015, title: "Product Photo Retouching Services Clipping Path Photoshop Service", content: "Added new commercial product photo services." },
    { year: 2011, title: "Lightroom Photo Editing Services", content: "Introduced Lightroom-focused workflows." },
    { year: 2009, title: "Old Photo Retouching Restoration Services", content: "Started offering restoration services for vintage photos." },
    { year: 2003, title: "Portrait Retouching Services", content: "Our very first retouching service, focused on portraits.", isStart: true },
  ];
  
  const AboutTimeline = () => {
    return (
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            About Fix The Photo Photo Retouching Service
          </h2>
          <p className=" text-base">
            Image Retouching Company Growth Over the Years
          </p>
        </div>
  
        {/* Description */}
        <div className=" space-y-5 mb-20 text-base leading-relaxed max-w-4xl mx-auto">
          <p>
            FixThePhoto has been in business since 2003. We began with portrait photo editing in Photoshop and GIMP, offering only basic services. Today, we provide professional online retouching services of the highest quality for all genres and complexities.
          </p>
          <p>
            Our mission is to provide fast, affordable, secure, and high-quality photo retouching for both beginner and professional photographers.
          </p>
          <p>
            No matter where you are, we make editing simple. You take the photos—we’ll handle the editing.
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
                    <AccordionTrigger className="flex flex-wrap items-center justify-start gap-x-3 gap-y-2 text-left text-base font-semibold  hover:text-yellow-600 transition-all">
                      <span className=" font-bold text-lg w-16">{item.year}</span>
                      <span className="flex-1">{item.title}</span>
                    </AccordionTrigger>
                    <AccordionContent className=" text-sm mt-2 pl-20 pr-2 max-w-3xl">
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
  