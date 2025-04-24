import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const testimonials = [
  {
    name: "Kate Perkins",
    role: "A verified customer on portrait photo enhancement services",
    rating: 5,
    date: "04/08/2022",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: `
      Some years before, I was a frequent user of automatic image retouching services.
      But as soon as I discovered the world of photo industry, I began to understand that this type of cooperation did not suit me at all.
      So, I referred to freelance photo retouchers but this co-working also did not satisfy me, that was rather slow.
      Then I addressed FixThePhoto. To make sure of their high-quality, I gave them one testing order with photo correction.
      Since then I have been successfully working with them for half a year. No hidden problems concerning pricing, no delays.
      This touch up service can be recommended.
    `,
  },
  {
    name: "Kate Perkins",
    role: "A verified customer on portrait photo enhancement services",
    rating: 5,
    date: "04/08/2022",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: `
      Some years before, I was a frequent user of automatic image retouching services.
      But as soon as I discovered the world of photo industry, I began to understand that this type of cooperation did not suit me at all.
      So, I referred to freelance photo retouchers but this co-working also did not satisfy me, that was rather slow.
      Then I addressed FixThePhoto. To make sure of their high-quality, I gave them one testing order with photo correction.
      Since then I have been successfully working with them for half a year. No hidden problems concerning pricing, no delays.
      This touch up service can be recommended.
    `,
  },
  // You can add more testimonials if needed
]

function SampleNextArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 right-2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow"
      onClick={onClick}
    >
      <ChevronRight size={18} />
    </div>
  )
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 left-2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow"
      onClick={onClick}
    >
      <ChevronLeft size={18} />
    </div>
  )
}

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div className="bg-[#f5f5f5] dark:bg-gray-800 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-2xl font-semibold dark:text-white">
          Our Customers’ Feedback about FixThePhoto Image Editing Service
        </h2>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-2">
              <div className="container flex flex-col md:flex-row items-center gap-6 md:gap-10">
                {/* Image section */}
                <div className="flex-shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow"
                  />
                </div>

                {/* Text section */}
                <div className="text-center md:text-left max-w-3xl">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-sm italic text-gray-600 dark:text-gray-300">{t.role}</p>
                  <div className="mt-2 flex justify-center md:justify-start items-center text-yellow-500">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" />
                    ))}
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      (5/5) - {t.date}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-200">
                    {t.content.trim()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Testimonial
