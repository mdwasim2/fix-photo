import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const testimonials = [
  {
    name: "Celine S",
    role: "E-commerce Store Owner",
    rating: 5,
    date: "04/08/2022",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: `
      Amazing experience! I sent in a batch of product photos for editing, and they came back looking clean, sharp, and ready for my website. The clipping path and ecommerce photo retouching were spot on, and these services were all fast, affordable, and super professional. The team surprisingly even delivered ahead of schedule. I’ll definitely be using this service again for all my future product launches!
    `,
  },
  {
    name: "Mark Z",
    role: "Photographer",
    rating: 5,
    date: "04/08/2022",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: `
      As a photographer, I’m picky about who edits my work, but this team has exceeded all my expectations. The ghost mannequin editing was seamless, and the newborn photo edits all had that soft, dreamy touch I wanted. What stood out even more was their commitment to privacy and quick turnaround. Got quality work done while supporting a noble pursuit, and so I especially loved that they enabled my business to help others in more than one way!
    `,
  },
   {
    name: "Annie F",
    role: "Jewellery Brand Owner",
    rating: 5,
    date: "04/08/2022",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: `
      I needed high-end, professional editing for my jewellery line, and I’m so glad I stumbled upon this company’s services. Every piece looks polished, vibrant, and ready for my e-commerce store. The attention to detail was excellent - no dust, perfect lighting, and beautiful clarity. Moreover, knowing my order helped educate editors and contribute to society made the experience even more meaningful
    `,
  }
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
