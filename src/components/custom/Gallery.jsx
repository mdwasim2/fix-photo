import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import React, { useState } from "react";

const galleryImages = [
  "https://img.fixthephoto.com/images/home-before-after-thumb/image-retouching-services-before-after-thumb.jpg",
  "https://img.fixthephoto.com/images/home-before-after-thumb/image-retouching-services-before-after-thumb.jpg",
  "https://img.fixthephoto.com/images/home-before-after-thumb/image-retouching-services-before-after-thumb.jpg",
  "https://img.fixthephoto.com/images/home-before-after-thumb/image-retouching-services-before-after-thumb.jpg",
  "https://img.fixthephoto.com/images/home-before-after-thumb/image-retouching-services-before-after-thumb.jpg",
  "https://img.fixthephoto.com/images/home-before-after-thumb/image-retouching-services-before-after-thumb.jpg",
  "https://img.fixthephoto.com/images/home-before-after-thumb/image-retouching-services-before-after-thumb.jpg",
  "https://img.fixthephoto.com/images/home-before-after-thumb/image-retouching-services-before-after-thumb.jpg",
  "https://img.fixthephoto.com/images/home-before-after-thumb/image-retouching-services-before-after-thumb.jpg",
  "https://img.fixthephoto.com/images/home-before-after-thumb/image-retouching-services-before-after-thumb.jpg",
];

const Gallery = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setShowAll(false);
    setDialogOpen(true);
  };

  const handleShowAllClick = () => {
    setSelectedImage(null);
    setShowAll(true);
    setDialogOpen(true);
  };

  const handleNestedImageClick = (img) => {
    setSelectedImage(img);
    setShowAll(false);
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-2xl font-semibold mb-2">Our Photo Editors Works</h2>
      <p className=" max-w-3xl mx-auto mb-10 px-4">
        Click on the Before and After examples below to see some of our recent retouching work.
        Professional photographers all around the world trust us and send their photos for
        post production photography services by our highly skilled Photoshop experts.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 max-w-6xl mx-auto mb-8">
        {galleryImages.map((img, i) => {
          const isLast = i === galleryImages.length - 1;
          return (
            <div
              key={i}
              className="relative overflow-hidden rounded-md shadow group cursor-pointer"
              onClick={() => (isLast ? handleShowAllClick() : handleImageClick(img))}
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="object-cover w-full h-40 md:h-48 transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
              {/* Hover text */}
              {!isLast && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-sm text-white font-medium transition">
                  Click to see Before & After
                </div>
              )}
              {/* +1 overlay */}
              {isLast && (
                <div className="absolute inset-0 bg-white/70 flex items-center justify-center text-xl font-bold text-gray-800">
                  +1
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4">
        <button className="px-6 py-2 border border-yellow-500 rounded-full text-yellow-600 hover:bg-yellow-50 transition">
          More Samples
        </button>
        <button className="px-6 py-2 border border-yellow-500 rounded-full text-yellow-600 hover:bg-yellow-50 transition">
          View Prices
        </button>
      </div>

      {/* Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-5xl">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            onClick={() => setDialogOpen(false)}
          >
            <X />
          </button>

          {/* Show grid or single image */}
          {showAll ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 p-4">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => handleNestedImageClick(img)}
                  className="cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  <img
                    src={img}
                    alt={`Expanded ${i}`}
                    className="w-36 h-36 object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          ) : (
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full max-h-[80vh] object-contain rounded-md"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
