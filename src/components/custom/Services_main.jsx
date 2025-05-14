import React from 'react'
import Service from './Service'

const Services_main = () => {

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