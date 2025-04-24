import * as Dialog from "@radix-ui/react-dialog";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import "./RetouchingGallery.css"; // Optional: for custom styles

const imageData = {
  all: [
    { before: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo", after: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo" },
    { before: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo", after: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo" },
    { before: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo", after: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo" },
    { before: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo", after: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo" },
    { before: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo", after: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo" },
    { before: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo", after: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo" },
  ],
  basic: [
    { before: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo", after: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo" },
    { before: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo", after: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo" },
    { before: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo", after: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo" },
  ],
  pro: [
    { before: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo", after: "https://img.fixthephoto.com/images/examples/photo-editing-before-after-couple-photo" },
  ],
};

const RetouchingGallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = imageData[activeTab];
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    initialSlide: selectedIndex,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <section className="container mx-auto px-4 py-10">
    

      {/* Tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-6">
        {Object.keys(imageData).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 rounded-full font-medium border ${
              activeTab === key ? "bg-yellow-500 text-white" : "bg-white text-black"
            }`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {/* Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => {
              setSelectedIndex(i);
              setOpen(true);
            }}
            className="relative cursor-pointer group overflow-hidden rounded"
          >
            <img
              src={img.after}
              alt="After"
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-medium text-sm">
              Click to see Before & After
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-medium hover:bg-yellow-600 transition">
          Try for Free
        </button>
        <button className="border border-yellow-500 text-yellow-500 px-6 py-2 rounded-full font-medium hover:bg-yellow-100 transition">
          More Samples
        </button>
      </div>

      {/* Dialog + Slider */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 overflow-hidden">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div>

                <div key={index} className="flex flex-col md:flex-row gap-4 items-center justify-center">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-center font-semibold mb-2">Before</h3>
                    <img src={img.before} alt="Before" className="w-full rounded" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-center font-semibold mb-2">After</h3>
                    <img src={img.after} alt="After" className="w-full rounded" />
                  </div>
                </div>

                </div>
              ))}
            </Slider>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
};

export default RetouchingGallery;
