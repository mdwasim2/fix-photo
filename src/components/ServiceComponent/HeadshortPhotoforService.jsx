import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import EcommerceImageEdited0 from "../../assets/Ecommerce/done.jpg";
import EcommerceImageEdited6 from "../../assets/Ecommerce/done10.jpg";
import EcommerceImageEdited11 from "../../assets/Ecommerce/done11.jpg";
import EcommerceImageEdited3 from "../../assets/Ecommerce/done3.jpg";
import EcommerceImageEdited4 from "../../assets/Ecommerce/done4.jpg";
import EcommerceImageEdited5 from "../../assets/Ecommerce/done5.jpg";
import EcommerceImageEdited10 from "../../assets/Ecommerce/done6.jpg";
import EcommerceImageEdited2 from "../../assets/Ecommerce/done7.jpg";
import EcommerceImageEdited1 from "../../assets/Ecommerce/done8.jpg";
import EcommerceImageEdited12 from "../../assets/Ecommerce/done_1.jpg";

const HeadshortPhotoforService = () => {
  const allImages = [
    EcommerceImageEdited6,
    EcommerceImageEdited5,
    EcommerceImageEdited4,
    EcommerceImageEdited3,
    EcommerceImageEdited2,
    EcommerceImageEdited1,
    EcommerceImageEdited0,
    EcommerceImageEdited10,
    EcommerceImageEdited11,
    EcommerceImageEdited12,
  ];

  const IMAGES_PER_LOAD = 10;
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_LOAD);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + IMAGES_PER_LOAD, allImages.length),
      );
      setLoading(false);
    }, 1000);
  };

  const visibleImages = allImages.slice(0, visibleCount);

  return (
    <section className="w-full bg-white px-4 py-10 dark:bg-gray-900">
      <h2 className="mb-6 text-center text-xl font-semibold md:text-2xl dark:text-white">
        Headshot Photo Retouching Examples in Full Size
      </h2>

      <div className="mx-auto columns-2 gap-4 space-y-4 sm:columns-3 md:columns-4 lg:columns-5">
        {visibleImages.map((src, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <img
                src={src}
                alt={`Headshot ${index + 1}`}
                className="mb-4 w-full cursor-pointer rounded-xl shadow-sm"
                loading="lazy"
                onClick={() => setSelectedImage(src)}
              />
            </DialogTrigger>
            <DialogContent className="max-w-4xl border-none bg-transparent p-0">
              <img
                src={selectedImage}
                alt="Preview"
                className="h-auto w-full rounded-xl"
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {visibleCount < allImages.length && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLoadMore}
            className={`flex items-center gap-2 rounded-full bg-[#FFB100] px-6 py-2 font-medium text-white transition hover:bg-[#e79b00] disabled:opacity-60`}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  className="h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Loading...
              </>
            ) : (
              "Load More"
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default HeadshortPhotoforService;
