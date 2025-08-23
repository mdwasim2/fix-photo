import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Updated content with detailed descriptions
const countries = [
  {
    name: "USA",
    flag: "https://flagcdn.com/us.svg",
    preview: `USA is our primary business area. We have built successful collaboration with hundreds of professional and beginner photographers from West to East.`,
    full: `We work with many photographers in the USA. Some shoot weddings. Others take portraits, products, or events. From big cities like New York, Los Angeles, San Francisco, Chicago, Houston, Boston, Atlanta, Philadelphia, Denver, Miami, Seattle, and San Diego to smaller towns, they send us their photos. We fix lighting, clean up backgrounds, and make each image look natural and sharp. The USA remains our most active region.`,
  },
  {
    name: "Canada",
    flag: "https://fixthephoto.com/images/content/Canadian-customers-recommend-our-photo-retouching-services1611660599.svg",
    preview: `Canada is the second destination we work with.`,
    full: `Photographers across Canada use our service for different needs. Some take indoor portraits, others send outdoor shots. Whether it’s Toronto, Vancouver, or somewhere in between, we edit each photo with care. Every image comes back clean, clear, and ready to use.`,
  },
  {
    name: "China",
    flag: "https://fixthephoto.com/images/content/photo-retouching-services-in-China1611660611.svg",
    preview: `This country has many talented photographers who use our services.`,
    full: `In China, many creative photographers trust us with their work. We help improve studio shots, personal portraits, and more. It’s simple for them to upload and send instructions. We return the photos quickly, keeping their original feel.`,
  },
  {
    name: "Brazil",
    flag: "https://fixthephoto.com/images/content/photo-retouching-services-in-Brazil1611660625.svg",
    preview: `We provide photo retouching services for photographers in Brazil.`,
    full: `From São Paulo to Rio, Brazilian photographers send in bright and bold images. We fix minor issues, adjust colors, and prepare photos for print or online use. Each edit is done with care so the final image stays true to the moment.`,
  },
  {
    name: "Europe",
    flag: "https://flagcdn.com/eu.svg",
    preview: `We are a multi-language online photo editing service.`,
    full: `Europe has a wide mix of styles, languages, and photo needs. We’ve worked with clients in France, Germany, Spain, Italy, and more. Our editors understand how to follow clear instructions, no matter the language or photo type. The results speak for themselves.`,
  },
  {
    name: "Australia and New Zealand",
    flag: "https://flagcdn.com/au.svg",
    preview: `From Sydney to Perth and from Adelaide to Darwin.`,
    full: `In this region, we get a mix of city and nature photos. Some photographers take family pictures, while others focus on brands or events. We adjust each image based on what’s needed—no shortcuts, just focused work that looks right. We also support New Zealand photographers in cities like Auckland and Wellington.`,
  },
  {
    name: "Japan",
    flag: "https://flagcdn.com/jp.svg",
    preview: `Our portfolio includes work from creative Japanese photographers.`,
    full: `Japanese clients often send photos that reflect strong attention to detail. We help tidy up each picture without changing its meaning. Whether it’s for business or personal use, we aim to return photos that look clean and real.`,
  },
  {
    name: "United Kingdom",
    flag: "https://flagcdn.com/gb.svg",
    preview: `Our experienced masters work with many UK photographers.`,
    full: `UK photographers count on us for all kinds of edits. Some work in studios, others shoot outdoors. From London to Manchester and small towns, they upload, we edit, and they get results that are simple, polished, and ready for use anywhere.`,
  },
];

const WorldwideServices = () => {
  return (
    <section className="py-16 px-4 container">
      <h2 className="text-2xl font-semibold mb-4">Professional Photo Retouching Services Worldwide</h2>
      <p className="max-w-3xl mb-12">
        Many photographers ask us where we are based and if they can still use our service from outside the USA. The answer is yes! We work online, so it doesn’t matter where you live. You can be in any country, speak any language, and still send us your photos. Our team helps photographers from all over the world. Since everything is done through the internet, there’s no need to meet in person. You just upload your photos, tell us what needs fixing, and we’ll do it. Whether you’re in the USA, Canada, Europe, Asia, or anywhere else, we’re ready to help.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-5">
        {countries.map((country, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="flex justify-start items-center gap-5 font-medium">
                <img src={country.flag} alt={country.name} className="w-16 h-16 rounded-full" />
                <span>{country.name}</span>
              </AccordionTrigger>

              {/* Preview content always visible */}
              <div className="px-5 pb-2 text-sm">{country.preview}</div>

              {/* Full content toggles via accordion */}
              <AccordionContent className="text-sm mt-1 px-5 pb-4">
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
