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

//   const servicedetails = [

//     {
//       title: "E-Commerce Product Photo Editing",
//       price: "$6 per photo", 
//       descrtiption: "Our professional e-commerce photo editing team helps your products in many ways. We make it look its best with clean backgrounds and perfect lighting. These sharp and detailed pictures are great for online stores, product pages, and ads. The eye-catching photos will make people stop, look, and want to easily buy your products. E-commerce photo editing services help turn more viewers into real customers. Clear, bright photos make your store look more trustworthy and professional. With our e-commerce image editing, your products look new, neat, and ready to sell. Hence, it’s an easy way to help your online business grow faster.", 
//         beforeImage :
//          EcommerceImageOrginal1,
//         afterImage :
         
//          EcommerceImageEdited1
//     },
//     {
//       title: "Clipping path service",
//       price: "$10 per photo",
//       descrtiption: "We provide high-quality clipping path services for all types of images, including product photos, portraits, and more. Our team of experts will ensure that your images are perfectly cut out and ready for use.",  
//       beforeImage :
//     ClipingpathOrginalImage1,
//      afterImage :
//      ClipingpathEditedImage1
//     },
//     {
//       title: "Gost Mannequin photo Editing Srvice",
//       price: "$7 per photo",  
//       descrtiption: "Our ghost mannequin photo editing service is perfect for fashion retailers. We will remove the mannequin from your images, leaving only the clothing item for a clean and professional look.",
//       beforeImage :
//     GostOriginalimage1,
//      afterImage :
//  GostEditedimage1
//     },
//     {
//       title: "Jewelry image editing service",
//       price: "$6 per photo",  
//       descrtiption: "We specialize in jewelry image editing, ensuring that your images are bright, clear, and eye-catching. Our team will enhance colors, remove backgrounds, and make your jewelry look its best.",
//       beforeImage :
//       JewlleryImageOrginal,
//       afterImage :
//       JewlleryImageEdited
//     },
//     {
//       title: "Newborn photo editing Service",
//       price: "$9 per photo",
//       descrtiption: "Our newborn photo editing service is perfect for parents and photographers. We will enhance colors, remove blemishes, and make your newborn photos look their best.",
//       beforeImage :
//       "https://fixthephoto.com/images/uikit_slider/photo-editing-services-for-photographers-before-wh650.jpg",
//      afterImage :
//       "https://fixthephoto.com/images/uikit_slider/photo-editing-services-for-photographers-after-wh650.jpg"

//     },
//     {
//       title: "High-End Model photo Retouching service",
//       price: "$13 per photo",
//       descrtiption: "We provide high-end model photo retouching services for fashion and beauty images. Our team of experts will enhance skin tones, remove blemishes, and make your models look their best.",
//       beforeImage :
//       "https://fixthephoto.com/images/uikit_slider/online-photo-editing-services-before-wh650.jpg",
//      afterImage :
//       "https://fixthephoto.com/images/uikit_slider/online-photo-editing-services-after-wh650.jpg"
  
//     }
//   ]
const servicedetails = [
  {
    title: "E-Commerce Product Photo Editing",
    price: "$6 per photo",
    descrtiption: `Our professional e-commerce photo editing team helps your products in many ways. We make it look its best with clean backgrounds and perfect lighting. These sharp and detailed pictures are great for online stores, product pages, and ads. The eye-catching photos will make people stop, look, and want to easily buy your products. E-commerce photo editing services help turn more viewers into real customers. Clear, bright photos make your store look more trustworthy and professional. With our e-commerce image editing, your products look new, neat, and ready to sell. Hence, it’s an easy way to help your online business grow faster.`,
    features: [
      "Colour correction",
      "Tone balancing",
      "Background removal"
    ],
    beforeImage: EcommerceImageOrginal1,
    afterImage: EcommerceImageEdited1,
  },
  {
    title: "Clipping path service",
    price: "$10 per photo",
    descrtiption: `Our clipping path services experts cut out backgrounds by hand with care. The products instantly look clean, sharp, and ready for sale as a result. This helps products stand out and look more professional online. We offer fast and affordable product image editing services that save time. With our e-commerce image editing, your product pictures look even better and bring in more buyers. Clear photos also help make your store look more trustworthy and easy to shop from. Thus, these pictures will mean better sales for your online store.`,
    features: [
      "Background removal",
      "Colour correction",
      "Tone balancing"
    ],
    beforeImage: ClipingpathOrginalImage1,
    afterImage: ClipingpathEditedImage1,
  },
  {
    title: "Gost Mannequin photo Editing Srvice",
    price: "$7 per photo",
    descrtiption: `Our ghost mannequin photo editing experts make clothes look clean and 3D. This means the clothing looks like it’s being worn, but without showing a model or mannequin. These real-looking images help people see how the clothes fit. It, therefore, makes more people want to buy them. With our e-commerce image editing, fashion stores look more professional and neat. Our product image editing services help clothes effortlessly stand out and look ready for sale. Hence, these enhanced pictures help your store get more clicks and scale your brand up.`,
    features: [
      "Mannequin removal",
      "3D rendering"
    ],
    beforeImage: GostOriginalimage1,
    afterImage: GostEditedimage1,
  },
  {
    title: "Jewelry image editing service",
    price: "$6 per photo",
    descrtiption: `Our jewellery image editors make every piece look shiny, detailed, and beautiful. The e-commerce product editing service cleans up dust, fixes the lighting, and makes the colours bright and clear. This helps jewellery look its best in every photo. With e-commerce image editing, online stores can show off rings, necklaces, and more in a clean and classy way. More people are encouraged to buy when the pictures look clear and pretty. Moreover, our product image editing services help your jewellery stand out and look new. So, these photos will help your store get more sales and happy customers.`,
    features: [
      "Colour correction",
      "Tone balancing",
      "Background removal"
    ],
    beforeImage: JewlleryImageOrginal,
    afterImage: JewlleryImageEdited,
  },
  {
    title: "Newborn photo editing Service",
    price: "$9 per photo",
    descrtiption: `Our newborn photo editing services enrich baby pictures to look even more special. We smooth the baby’s skin, fix the lighting, and add a soft, peaceful feel. Each photo keeps its natural look but becomes a little more perfect. With e-commerce retouching, baby stores and brands can show beautiful, clean pictures that attract more attention. These sweet images help parents feel more connected to and excited about your brand. Our e-commerce photo retouching makes sure every tiny detail looks just right. Great baby photos can help your store grow and make more happy customers.`,
    features: [
      "Retouching",
      "Skin smoothing",
      "Blemish removal",
      "Imperfection removal",
      "Colour correction",
      "Tone balancing"
    ],
    beforeImage:
      "https://fixthephoto.com/images/uikit_slider/photo-editing-services-for-photographers-before-wh650.jpg",
    afterImage:
      "https://fixthephoto.com/images/uikit_slider/photo-editing-services-for-photographers-after-wh650.jpg",
  },
  {
    title: "High-End Model photo Retouching service",
    price: "$13 per photo",
    descrtiption: `Our high-end model photo retouchers make pictures look cleaner and natural. They smooth the skin, fix the colours, and touch up hair and makeup. This helps the model’s beauty shine through in every photo. With our e-commerce retouching, fashion and beauty brands can show off their styles in the best way. The photos look professional and drive more customers to your store. Our e-commerce photo retouching service is, thus, perfect for fashion shoots, beauty ads, and online catalogues to stand out from the crowd.`,
    features: [
      "Retouching",
      "Skin smoothing",
      "Blemish removal",
      "Imperfection removal",
      "Colour correction",
      "Tone balancing"
    ],
    beforeImage:
      "https://fixthephoto.com/images/uikit_slider/online-photo-editing-services-before-wh650.jpg",
    afterImage:
      "https://fixthephoto.com/images/uikit_slider/online-photo-editing-services-after-wh650.jpg",
  }
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