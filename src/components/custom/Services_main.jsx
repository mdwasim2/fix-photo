import React from 'react'
import Service from './Service'

const Services_main = () => {

  const servicedetails = [

    {
      title: "E-commerce Product Photo Editing",
      price: "$6 per photo",  
    },
    {
      title: "Clipping path service",
      price: "$10 per photo",  
    },
    {
      title: "Gost Mannequin photo Editing Srvice",
      price: "$7 per photo",  
    },
    {
      title: "Jewelry image editing service",
      price: "$6 per photo",  
    },
    {
      title: "Newborn photo editing Service",
      price: "$9 per photo",
    },
    {
      title: "High-End Model photo Retouching service",
      price: "$13 per photo",
  
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