import { Play } from "lucide-react";
import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const videos = [
  {
    title: "Portrait Photo Retouching",
    videoUrl: "https://www.youtube.com/embed/juxwcU3Jk-o?rel=0&showinfo=1&autoplay=1",
    thumbnail: "https://fixthephoto.com/images/uikit_slider/retouching-services-for-professional-photographers-19-wh960.jpg"
  },
  {
    title: "Wedding Photo Editing",
    videoUrl: "https://www.youtube.com/embed/FykXHDtC1dM",
    thumbnail: "https://fixthephoto.com/images/uikit_slider/photo-retouch-image-retouching-20-wh960.jpg"
  },
  {
    title: "Photoshop Editing Services",
    videoUrl: "https://www.youtube.com/embed/gHw7OiK-f9U",
    thumbnail: "https://fixthephoto.com/images/uikit_slider/photoshop-editing-services-21-wh960.jpg"
  },
];

const VideoBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [activeVideo, setActiveVideo] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex + 1);
      setActiveVideo(null); // stop playing when slide changes
    },
    appendDots: dots => (
      <div>
        <ul className="flex justify-center mt-4 space-x-2 absolute bottom-6 left-2/4 translate-x-[-50%]">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-2.5 h-2.5 rounded-full border-2 border-white transition-all duration-300"></div>
    ),
  };

  return (
    <div className="text-center py-16 px-4 container mx-auto max-w-[1900px]">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Photo Retouching Services</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8 text-sm">
        Professional photo retouching services provided by FixThePhoto perfectly meet requirements of a professional
        photographer who wants to save time or a beginner who wants images to be professionally edited.
      </p>

      <div className="relative rounded-2xl overflow-hidden">
        <Slider {...settings}>
          {videos.map((item, index) => (
            <div key={index}>
              <div className="relative rounded-2xl overflow-hidden">
                {activeVideo === index ? (
                  <iframe
                    src={item.videoUrl}
                    title={item.title}
                    className="w-full h-[480px] rounded-2xl"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div
                    className="relative cursor-pointer"
                    onClick={() => setActiveVideo(index)}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-[480px] object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-red-600 hover:bg-red-700 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                        <Play size={30} className="text-white ml-1" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>

        <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-md text-xs font-semibold shadow">
          {currentSlide}/{videos.length}
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
