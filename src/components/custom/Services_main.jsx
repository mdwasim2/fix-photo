import React from 'react'
import Service from './Service'

const Services_main = () => {


  return (
    <section className=' bg-gray-50 dark:bg-gray-800'>
        <h2 className=' text-2xl lg:text-3xl  text-center font-bold mb-2 lg:mb-4'>Photo Editing Services We Provide:</h2>
        {Array.from({ length: 6 }).map((_, index) => (
        <Service key={index}/>
        ))}
    </section>
  )
}

export default Services_main