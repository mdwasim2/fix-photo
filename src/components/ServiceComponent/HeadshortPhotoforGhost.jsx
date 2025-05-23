import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import GostImageEdited9 from "../../assets/gost/Done 10.jpg";
import GostImageEdited10 from "../../assets/gost/Done 11.jpg";
import GostImageEdited11 from "../../assets/gost/Done 12.jpg";
import GostImageEdited12 from "../../assets/gost/Done 13.jpg";
import GostImageEdited13 from "../../assets/gost/Done 14.jpg";
import GostImageEdited14 from "../../assets/gost/Done 15.jpg";
import GostImageEdited15 from "../../assets/gost/Done 16.jpg";
import GostImageEdited16 from "../../assets/gost/Done 17.jpg";
import GostImageEdited17 from "../../assets/gost/Done 18.jpg";
import GostImageEdited18 from "../../assets/gost/Done 19.jpg";
import GostImageEdited1 from "../../assets/gost/Done 2.jpg";
import GostImageEdited19 from "../../assets/gost/Done 20.jpg";
import GostImageEdited20 from "../../assets/gost/Done 21.jpg";
import GostImageEdited2 from "../../assets/gost/Done 3.jpg";
import GostImageEdited3 from "../../assets/gost/Done 4.jpg";
import GostImageEdited4 from "../../assets/gost/Done 5.jpg";
import GostImageEdited5 from "../../assets/gost/Done 6.jpg";
import GostImageEdited6 from "../../assets/gost/Done 7.jpg";
import GostImageEdited7 from "../../assets/gost/Done 8.jpg";
import GostImageEdited8 from "../../assets/gost/Done 9.jpg";
import GostImageEdited0 from "../../assets/gost/Done.jpg";

const HeadshortPhotoforGhost = () => {
  const allImages = [
    GostImageEdited6,
    GostImageEdited5,
    GostImageEdited4,
    GostImageEdited3,
    GostImageEdited2,
    GostImageEdited1,
    GostImageEdited0,
    GostImageEdited10,
    GostImageEdited11,
    GostImageEdited12,
    GostImageEdited7,
    GostImageEdited8,
    GostImageEdited9,
    GostImageEdited13,
    GostImageEdited14,
    GostImageEdited15, 
    GostImageEdited16,
    GostImageEdited17, 
    GostImageEdited18,
    GostImageEdited19,
    GostImageEdited20
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

export default HeadshortPhotoforGhost;
