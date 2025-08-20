import ClipingpathEditedImage1 from "../../assets/clippingpath/done.jpg";
import ClipingpathOrginalImage1 from "../../assets/clippingpath/original.jpg";
import EcommerceImageEdited1 from "../../assets/Ecommerce/done6.jpg";
import EcommerceImageOrginal1 from "../../assets/Ecommerce/original6.jpg";
import GostEditedimage1 from "../../assets/gost/Done.jpg";
import GostOriginalimage1 from "../../assets/gost/Orginal.jpg";
import JewlleryImageEdited from "../../assets/jewellery/done.jpg";
import JewlleryImageOrginal from "../../assets/jewellery/original.jpg";

import Service from './Service';

const Services_main = () => {


// const servicedetails = [
//   {
//     title: "E-Commerce Product Photo Editing",
//     price: "$6 per photo",
//     descrtiption: `We help make your product pictures look clean and bright. We fix the lighting, remove the messy background, and make everything sharp. Good photos help people trust your store and want to buy.
// If you sell on Amazon, eBay, or Shopify, this service helps your products look ready to sell. Clear pictures mean more clicks, more buyers, and a better-looking shop.`,
//     features: [
//       "Color fix",
//       "Brightness balance",
//       "Background removal"
//     ],
//     beforeImage: EcommerceImageOrginal1,
//     afterImage: EcommerceImageEdited1,
//   },
//   {
//     title: "Clipping path service",
//     price: "$10 per photo",
//     descrtiption: `Our clipping path services experts cut out backgrounds by hand with care. The products instantly look clean, sharp, and ready for sale as a result. This helps products stand out and look more professional online. We offer fast and affordable product image editing services that save time. With our e-commerce image editing, your product pictures look even better and bring in more buyers. Clear photos also help make your store look more trustworthy and easy to shop from. Thus, these pictures will mean better sales for your online store.`,
//     features: [
//       "Background removal",
//       "Colour correction",
//       "Tone balancing"
//     ],
//     beforeImage: ClipingpathOrginalImage1,
//     afterImage: ClipingpathEditedImage1,
//   },
//   {
//     title: "Gost Mannequin photo Editing Srvice",
//     price: "$7 per photo",
//     descrtiption: `Our ghost mannequin photo editing experts make clothes look clean and 3D. This means the clothing looks like it’s being worn, but without showing a model or mannequin. These real-looking images help people see how the clothes fit. It, therefore, makes more people want to buy them. With our e-commerce image editing, fashion stores look more professional and neat. Our product image editing services help clothes effortlessly stand out and look ready for sale. Hence, these enhanced pictures help your store get more clicks and scale your brand up.`,
//     features: [
//       "Mannequin removal",
//       "3D rendering"
//     ],
//     beforeImage: GostOriginalimage1,
//     afterImage: GostEditedimage1,
//   },
//   {
//     title: "Jewelry image editing service",
//     price: "$6 per photo",
//     descrtiption: `Our jewellery image editors make every piece look shiny, detailed, and beautiful. The e-commerce product editing service cleans up dust, fixes the lighting, and makes the colours bright and clear. This helps jewellery look its best in every photo. With e-commerce image editing, online stores can show off rings, necklaces, and more in a clean and classy way. More people are encouraged to buy when the pictures look clear and pretty. Moreover, our product image editing services help your jewellery stand out and look new. So, these photos will help your store get more sales and happy customers.`,
//     features: [
//       "Colour correction",
//       "Tone balancing",
//       "Background removal"
//     ],
//     beforeImage: JewlleryImageOrginal,
//     afterImage: JewlleryImageEdited,
//   },
//   {
//     title: "Newborn photo editing Service",
//     price: "$9 per photo",
//     descrtiption: `Our newborn photo editing services enrich baby pictures to look even more special. We smooth the baby’s skin, fix the lighting, and add a soft, peaceful feel. Each photo keeps its natural look but becomes a little more perfect. With e-commerce retouching, baby stores and brands can show beautiful, clean pictures that attract more attention. These sweet images help parents feel more connected to and excited about your brand. Our e-commerce photo retouching makes sure every tiny detail looks just right. Great baby photos can help your store grow and make more happy customers.`,
//     features: [
//       "Retouching",
//       "Skin smoothing",
//       "Blemish removal",
//       "Imperfection removal",
//       "Colour correction",
//       "Tone balancing"
//     ],
//     beforeImage:
//       "https://fixthephoto.com/images/uikit_slider/photo-editing-services-for-photographers-before-wh650.jpg",
//     afterImage:
//       "https://fixthephoto.com/images/uikit_slider/photo-editing-services-for-photographers-after-wh650.jpg",
//   },
//   {
//     title: "High-End Model photo Retouching service",
//     price: "$13 per photo",
//     descrtiption: `Our high-end model photo retouchers make pictures look cleaner and natural. They smooth the skin, fix the colours, and touch up hair and makeup. This helps the model’s beauty shine through in every photo. With our e-commerce retouching, fashion and beauty brands can show off their styles in the best way. The photos look professional and drive more customers to your store. Our e-commerce photo retouching service is, thus, perfect for fashion shoots, beauty ads, and online catalogues to stand out from the crowd.`,
//     features: [
//       "Retouching",
//       "Skin smoothing",
//       "Blemish removal",
//       "Imperfection removal",
//       "Colour correction",
//       "Tone balancing"
//     ],
//     beforeImage:
//       "https://fixthephoto.com/images/uikit_slider/online-photo-editing-services-before-wh650.jpg",
//     afterImage:
//       "https://fixthephoto.com/images/uikit_slider/online-photo-editing-services-after-wh650.jpg",
//   }
// ];

const servicedetails = [
  {
    title: "E-Commerce Product Photo Editing",
    price: "$6 per photo",
    descrtiption: `We help make your product pictures look clean and bright. We fix the lighting, remove the messy background, and make everything sharp. Good photos help people trust your store and want to buy.
If you sell on Amazon, eBay, or Shopify, this service helps your products look ready to sell. Clear pictures mean more clicks, more buyers, and a better-looking shop.`,
    features: [
      "Color fix",
      "Brightness balance",
      "Background removal",
    ],
    beforeImage: EcommerceImageOrginal1,
    afterImage: EcommerceImageEdited1,
  },
  {
    title: "Clipping Path Service",
    price: "$10 per photo",
    descrtiption: `We cut out your product from the background so it stands alone. Every edge is smooth and clean. This is great if you want to change backgrounds or use the photo in ads.
Clear cutouts make your products look more real and professional. This service helps your brand look neat and easy to shop from.`,
    features: [
      "Background cleanup",
      "Sharp edges",
      "Bright color balance",
    ],
    beforeImage: ClipingpathOrginalImage1,
    afterImage: ClipingpathEditedImage1,
  },
  {
    title: "Ghost Mannequin Photo Editing",
    price: "$7 per photo",
    descrtiption: `We take out the mannequin from clothes photos. The clothes still look like someone is wearing them. This shows the fit clearly without needing a real model.
It helps people imagine wearing it themselves. Great for t-shirts, jackets, dresses, and more.`,
    features: [
      "Mannequin removal",
      "3D look",
    ],
    beforeImage: GostOriginalimage1,
    afterImage: GostEditedimage1,
  },
  {
    title: "Jewelry Image Editing Service",
    price: "$6 per photo",
    descrtiption: `Jewelry photos need to sparkle. We remove dust, fix lights, and make each piece shine. Your rings, bracelets, or necklaces will look clean and new.
Shiny, clear pictures help people feel excited to buy. That means more orders and happier shoppers.`,
    features: [
      "Shine boost",
      "Dust clean-up",
      "Color and tone fix",
    ],
    beforeImage: JewlleryImageOrginal,
    afterImage: JewlleryImageEdited,
  },
  {
    title: "Newborn Photo Editing Service",
    price: "$9 per photo",
    descrtiption: `We make baby pictures soft and sweet. We smooth skin, fix small spots, and adjust the light. The photo still looks natural but even better.
Perfect for baby stores and brands. These clean photos help families feel close to your product.`,
    features: [
      "Skin smoothing",
      "Spot removal",
      "Gentle light and color fix",
    ],
    beforeImage:
      "https://fixthephoto.com/images/uikit_slider/photo-editing-services-for-photographers-before-wh650.jpg",
    afterImage:
      "https://fixthephoto.com/images/uikit_slider/photo-editing-services-for-photographers-after-wh650.jpg",
  },
  {
    title: "High-End Model Photo Retouching",
    price: "$13 per photo",
    descrtiption: `Model photos need to look clean but real. We fix skin, makeup, and lighting while keeping it natural. Your brand looks strong, stylish, and professional.
This is perfect for clothing ads, beauty products, or online stores.`,
    features: [
      "Skin touch-up",
      "Makeup fix",
      "Balanced colors",
    ],
    beforeImage:
      "https://fixthephoto.com/images/uikit_slider/online-photo-editing-services-before-wh650.jpg",
    afterImage:
      "https://fixthephoto.com/images/uikit_slider/online-photo-editing-services-after-wh650.jpg",
  },
//   {
//     title: "Image Resizing & Cropping",
//     price: "$4 per photo",
//     descrtiption: `We make your photos the right size for any site. Amazon, Instagram, Etsy — all have different rules. We crop and resize to match.
// Your pictures load fast, fit well, and look the same size across your store.`,
//     features: [
//       "Resize for any site",
//       "Fix framing",
//       "Keep images sharp",
//     ],
//     beforeImage: SomeResizeOriginalImage, // <-- add your own original image
//     afterImage: SomeResizeEditedImage,   // <-- add your own edited image
//   }
];


  return (
    <section className=' bg-gray-50 dark:bg-gray-800'>
        <h2 className=' text-2xl lg:text-3xl  text-center font-bold mb-2 lg:mb-4'>Photo Editing Services We Provide:</h2>
        {servicedetails.map((_, index) => (
        <Service item={_} key={index}/>
        ))}
    </section>
  )
}

export default Services_main