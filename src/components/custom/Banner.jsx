import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const images = [
  {
    image: "https://fixthephoto.com/images/uikit_slider/retouching-services-for-professional-photographers-19-wh960.jpg",
  },
  {
    image: "https://fixthephoto.com/images/uikit_slider/photo-retouch-image-retouching-20-wh960.jpg",
  },
  {
    image: "https://fixthephoto.com/images/uikit_slider/photoshop-editing-services-21-wh960.jpg",
  },
  
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex + 1),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div>
        <ul className="flex justify-center mt-4 space-x-2 absolute bottom-10  left-2/4 translate-x-[-50%]">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-2.5 h-2.5 rounded-full border-2 border-white transition-all duration-300"></div>
    ),
  };
  

  return (
    <div className="relative w-full max-w-[1900px] mx-auto px-4 ">
      
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="rounded-2xl overflow-hidden">
            <div className="flex items-center justify-center">
              <img
                src={item.image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full"
              />
            </div>
          </div>
        ))}
      </Slider>

      <div className="absolute top-4 right-8 bg-white text-black px-4 py-1 rounded-md text-sm font-semibold shadow">
        {currentSlide}/{images.length}
      </div>
    </div>
  );
};

function SampleNextArrow({ onClick, currentSlide, totalSlides }) {
  // Hide if last slide
  if (currentSlide === totalSlides - 1) return null;

  return (
    <div
      className={`absolute z-10 top-1/2 ${currentSlide === 0 ? "right-4" : "right-2"} transform -translate-y-1/2 cursor-pointer hidden md:flex`}
      onClick={onClick}
    >
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition">
        <ChevronRight size={20} className="text-black" />
      </div>
    </div>
  );
}

function SamplePrevArrow({ onClick, currentSlide }) {
  // Hide if first slide
  if (currentSlide === 0) return null;

  return (
    <div
      className="absolute z-10 top-1/2 left-2 transform -translate-y-1/2 cursor-pointer hidden md:flex"
      onClick={onClick}
    >
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition">
        <ChevronLeft size={20} className="text-black" />
      </div>
    </div>
  );
}



export default Banner;
