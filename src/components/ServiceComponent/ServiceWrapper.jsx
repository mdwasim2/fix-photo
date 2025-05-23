import ServiceImage from "./Service_image";
import ClipingpathEditedImage1 from "../../assets/clippingpath/done.jpg";
import ClipingpathOrginalImage1 from "../../assets/clippingpath/original.jpg";
import EcommerceImageEdited1 from "../../assets/Ecommerce/done6.jpg";
import EcommerceImageOrginal1 from "../../assets/Ecommerce/original6.jpg";
import GostEditedimage1 from "../../assets/gost/Done.jpg";
import GostOriginalimage1 from "../../assets/gost/Orginal.jpg";
import JewlleryImageEdited from "../../assets/jewellery/done.jpg";
import JewlleryImageOrginal from "../../assets/jewellery/original.jpg";
const ServiceWrapper = () => {
const servicedetails = [

    {
      title: "E-commerce Product Photo Editing",
      price: "$6 per photo", 
      descrtiption: "We specialize in e-commerce product photo editing, ensuring that your images are optimized for online sales. Our team will enhance colors, remove backgrounds, and make your products look their best.", 
        beforeImage :
         EcommerceImageOrginal1,
        afterImage :
         
         EcommerceImageEdited1
    },
    {
      title: "Clipping path service",
      price: "$10 per photo",
      descrtiption: "We provide high-quality clipping path services for all types of images, including product photos, portraits, and more. Our team of experts will ensure that your images are perfectly cut out and ready for use.",  
      beforeImage :
    ClipingpathOrginalImage1,
     afterImage :
     ClipingpathEditedImage1
    },
    {
      title: "Gost Mannequin photo Editing Srvice",
      price: "$7 per photo",  
      descrtiption: "Our ghost mannequin photo editing service is perfect for fashion retailers. We will remove the mannequin from your images, leaving only the clothing item for a clean and professional look.",
      beforeImage :
    GostOriginalimage1,
     afterImage :
 GostEditedimage1
    },
    {
      title: "Jewelry image editing service",
      price: "$6 per photo",  
      descrtiption: "We specialize in jewelry image editing, ensuring that your images are bright, clear, and eye-catching. Our team will enhance colors, remove backgrounds, and make your jewelry look its best.",
      beforeImage :
      JewlleryImageOrginal,
      afterImage :
      JewlleryImageEdited
    },
    {
      title: "Newborn photo editing Service",
      price: "$9 per photo",
      descrtiption: "Our newborn photo editing service is perfect for parents and photographers. We will enhance colors, remove blemishes, and make your newborn photos look their best.",
      beforeImage :
      "https://fixthephoto.com/images/uikit_slider/photo-editing-services-for-photographers-before-wh650.jpg",
     afterImage :
      "https://fixthephoto.com/images/uikit_slider/photo-editing-services-for-photographers-after-wh650.jpg"

    },
    {
      title: "High-End Model photo Retouching service",
      price: "$13 per photo",
      descrtiption: "We provide high-end model photo retouching services for fashion and beauty images. Our team of experts will enhance skin tones, remove blemishes, and make your models look their best.",
      beforeImage :
      "https://fixthephoto.com/images/uikit_slider/online-photo-editing-services-before-wh650.jpg",
     afterImage :
      "https://fixthephoto.com/images/uikit_slider/online-photo-editing-services-after-wh650.jpg"
  
    }
  ]

  return (
    <div className="container mt-12">
      <h2 className="mb-2 text-center text-2xl font-bold lg:mb-4 lg:text-3xl">
                High-End Model photo Retouching service:
      </h2>
      <div className="grid grid-cols-2">
        {servicedetails.map((_, index) => (
          <ServiceImage key={index} item={_} />
        ))}
      </div>
    </div>
  );
};

export default ServiceWrapper;
