import { Upload } from "lucide-react";
import { useRef } from "react";
import Banner from "../components/custom/Banner";
import ReviewSection from "../components/custom/ReviewSection";
import HeadShortWrapper from "../components/ServiceComponent/HeadShortWrapper";
import HeadshotGallery from "../components/ServiceComponent/HeadshotGallery";
import PricingPlans from "../components/ServiceComponent/PricingPlans";
import ServiceImage from "../components/ServiceComponent/Service_image";
const Ecommercephotoediting = () => {
  const servicedetails = [

    {
      title: "E-commerce Product Photo Editing",
      price: "$6 per photo", 
      descrtiption: "We specialize in e-commerce product photo editing, ensuring that your images are optimized for online sales. Our team will enhance colors, remove backgrounds, and make your products look their best.", 
       beforeImage :
      "https://fixthephoto.com/images/uikit_slider/photo-editing-services-before1603179337_wh960.jpg",
     afterImage :
      "https://fixthephoto.com/images/uikit_slider/photo-editing-services-after-wh960.jpg"
    },
    {
      title: "Clipping path service",
      price: "$10 per photo",
      descrtiption: "We provide high-quality clipping path services for all types of images, including product photos, portraits, and more. Our team of experts will ensure that your images are perfectly cut out and ready for use.",  
      beforeImage :
      "https://fixthephoto.com/images/uikit_slider/photography-retouching-services-before-wh650.jpg",
     afterImage :
      "https://fixthephoto.com/images/uikit_slider/photography-retouching-services-after-wh650.jpg"
    },
    {
      title: "Gost Mannequin photo Editing Srvice",
      price: "$7 per photo",  
      descrtiption: "Our ghost mannequin photo editing service is perfect for fashion retailers. We will remove the mannequin from your images, leaving only the clothing item for a clean and professional look.",
      beforeImage :
      "https://fixthephoto.com/images/uikit_slider/professional-photo-editing-services-before-wh650.jpg",
     afterImage :
      "https://fixthephoto.com/images/uikit_slider/professional-photo-editing-services-after-wh650.jpg"
    },
    {
      title: "Jewelry image editing service",
      price: "$6 per photo",  
      descrtiption: "We specialize in jewelry image editing, ensuring that your images are bright, clear, and eye-catching. Our team will enhance colors, remove backgrounds, and make your jewelry look its best.",
      beforeImage :
      "https://fixthephoto.com/images/uikit_slider/photoshop-services-online--before-wh650.jpg",
     afterImage :
      "https://fixthephoto.com/images/uikit_slider/photoshop-services-online--after-wh650.jpg"
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
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click(); // Open file picker
  };
  return (
    <>
    <Banner/>
      <div className="container mt-12">
        <h2 className="mb-2 text-center text-2xl font-semibold md:text-3xl">
          E-commerce Product Photo Editing
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-gray-600">
          Fixthephoto is the most trusted agency in online photo retouching
          business since 2003. Simply upload photos, write your requirements,
          and we’ll take care of the rest.
        </p>

        {/* Features */}
        <div className="mx-auto mb-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            {
              icon: "https://fixthephoto.com/images/content/1-service-in-photo-editing-industry1611654713.svg",
              title: "#1 service in photo editing industry",
            },
            {
              icon: "https://fixthephoto.com/images/content/follow-your-unique-photography-editng-style1611655168.svg",
              title: "Follow your unique photography style",
            },
            {
              icon: "https://fixthephoto.com/images/content/we-guarantee-the-complete-safety-of-our-photo-retouching-service1611655195.svg",
              title: "We guarantee 100% security",
            },
            {
              icon: "https://fixthephoto.com/images/content/24-hours-rush-service-for-photo-editing1611655205.svg",
              title: "Fast 24 hour turnaround",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-sm text-gray-700"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="mb-2 h-20 w-20"
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {/* Upload Box */}
        <div className="flex h-[300px] w-full items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white p-8 shadow-sm dark:bg-gray-700">
          {/* Hidden file input */}
          <div className="">
            <input
              ref={fileInputRef}
              type="file"
              multiple
              webkitdirectory="true"
              className="hidden"
              onChange={(e) => {
                const files = e.target.files;
                if (files) {
                  console.log("Files uploaded:", files);
                  // You can handle file upload logic here
                }
              }}
            />

            <button
              onClick={handleUploadClick}
              className="relative mx-auto flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 px-8 py-5 font-bold text-white uppercase shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <Upload className="h-5 w-5" />
              Upload Image
              <span className="absolute inset-0 -skew-x-12 animate-[shine_4s_linear_infinite] bg-white opacity-10"></span>
            </button>

            <p className="mt-4 text-sm text-gray-500">
              Drag image here or click to upload
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {servicedetails.map((_, index) => (
            <ServiceImage key={index} item={_} />
          ))}
        </div>
      </div>
         <PricingPlans/>
        <HeadShortWrapper/>
        <ReviewSection/>
        <HeadshotGallery/>
    </>
  );
};

export default Ecommercephotoediting;
