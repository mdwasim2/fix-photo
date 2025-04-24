import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";

// Split content into preview and full for better control
const countries = [
  {
    name: "USA",
    flag: "https://flagcdn.com/us.svg",
    preview: `USA is our primary business area. We have built successful collaboration with hundreds of professional and beginner photographers from West to East.`,
    full: `Main cities are covered: New York, Los Angeles, San Francisco, Chicago, Houston, Boston, Atlanta, Philadelphia, Denver, Miami, Seattle, San Diego, and photographers from smaller towns also have highly appreciated our photo retouching services. 
You can read reviews and testimonials from our USA clients, many of them are posted on our Facebook page by real photographers who have used our photo editing services.`,
  },
  {
    name: "Canada",
    flag: "https://fixthephoto.com/images/content/Canadian-customers-recommend-our-photo-retouching-services1611660599.svg",
    preview: `Canada is the second destination we work with.`,
    full: `We work with many talented photographers across Canada, from Toronto to Vancouver and beyond.`,
  },
  {
    name: "China",
    flag: "https://fixthephoto.com/images/content/photo-retouching-services-in-China1611660611.svg",
    preview: `This country has many talented photographers who use our services.`,
    full: `We assist both beginners and professionals in achieving high-quality retouching results.`,
  },
  {
    name: "Brazil",
    flag: "https://fixthephoto.com/images/content/photo-retouching-services-in-Brazil1611660625.svg",
    preview: `We provide photo retouching services for photographers in Brazil.`,
    full: `Our team collaborates closely with many studios and freelance artists throughout Brazil.`,
  },
  {
    name: "Europe",
    flag: "https://flagcdn.com/eu.svg",
    preview: `We are a multi-language online photo editing service.`,
    full: `We support photographers across all European countries, including Germany, France, Spain, Italy, and more.`,
  },
  {
    name: "Australia and New Zealand",
    flag: "https://flagcdn.com/au.svg",
    preview: `From Sydney to Perth and from Adelaide to Darwin.`,
    full: `We serve photographers across the continent including New Zealand's Auckland and Wellington.`,
  },
  {
    name: "Japan",
    flag: "https://flagcdn.com/jp.svg",
    preview: `Our portfolio includes work from creative Japanese photographers.`,
    full: `We work with many local studios and help with fashion, wedding, and portrait retouching.`,
  },
  {
    name: "United Kingdom",
    flag: "https://flagcdn.com/gb.svg",
    preview: `Our experienced masters work with many UK photographers.`,
    full: `From London to Manchester, we support professionals in commercial and editorial photography.`,
  },
];

const WorldwideServices = () => {
  return (
    <section className="py-16 px-4 container">
      <h2 className="text-2xl font-semibold mb-4">Professional Photo Retouching Services Worldwide</h2>
      <p className=" max-w-3xl mb-12">
        Photographers often ask us where our photo editing company is located and is it possible to work if they are not in the USA.
        We are an online photo editing service, meaning there are no limits or borders, and we can work with photographers from any
        country and speak any language.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-5">
        {countries.map((country, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="flex justify-start items-center gap-5 font-medium ">
                <img src={country.flag} alt={country.name} className="w-16 h-16 rounded-full" />
                <span>{country.name}</span>
              </AccordionTrigger>

              {/* Preview content always visible */}
              <div className="px-5 pb-2 text-sm ">{country.preview}</div>

              {/* Full content toggles via accordion */}
              <AccordionContent className=" text-sm mt-1 px-5 pb-4">
                {country.full}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default WorldwideServices;
