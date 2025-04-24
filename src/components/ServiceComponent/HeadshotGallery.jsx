// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// const allImages = [
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
//   "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
// ];

// const IMAGES_PER_LOAD = 10;

// const HeadshotGallery = () => {
//   const [visibleCount, setVisibleCount] = useState(IMAGES_PER_LOAD);
//   const [loading, setLoading] = useState(false);
  

//   const handleLoadMore = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setVisibleCount((prev) => Math.min(prev + IMAGES_PER_LOAD, allImages.length));
//       setLoading(false);
//     }, 1000); // Simulate network delay
//   };

//   const visibleImages = allImages.slice(0, visibleCount);

//   return (
//     <section className="w-full bg-white px-4 py-10 dark:bg-gray-900">
//       <h2 className="mb-6 text-center text-xl font-semibold text-gray-800 md:text-2xl dark:text-white">
//         Headshot Photo Retouching Examples in Full Size
//       </h2>

//       {/* Responsive masonry-like layout using auto-rows */}
//       <div className="mx-auto columns-2 gap-4 sm:columns-3 md:columns-4 lg:columns-5 space-y-4">
//         {visibleImages.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`Headshot ${index + 1}`}
//             className="w-full rounded-xl shadow-sm mb-4"
//             loading="lazy"
//           />
//         ))}
//       </div>

//       {visibleCount < allImages.length && (
//         <div className="mt-8 flex justify-center">
//           <button
//             onClick={handleLoadMore}
//             className={`rounded-full bg-[#FFB100] px-6 py-2 text-white font-medium hover:bg-[#e79b00] transition flex items-center gap-2 disabled:opacity-60`}
//             disabled={loading}
//           >
//             {loading ? (
//               <>
//                 <svg
//                   className="animate-spin h-5 w-5 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8v8z"
//                   ></path>
//                 </svg>
//                 Loading...
//               </>
//             ) : (
//               "Load More"
//             )}
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default HeadshotGallery;

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";

const allImages = [
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596029247.jpg",
  "https://img.fixthephoto.com/thumb/aspect/auto/280/1596028944.jpg",
];

const IMAGES_PER_LOAD = 10;

const HeadshotGallery = () => {
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_LOAD);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + IMAGES_PER_LOAD, allImages.length));
      setLoading(false);
    }, 1000);
  };

  const visibleImages = allImages.slice(0, visibleCount);

  return (
    <section className="w-full bg-white px-4 py-10 dark:bg-gray-900">
      <h2 className="mb-6 text-center text-xl font-semibold  md:text-2xl dark:text-white">
        Headshot Photo Retouching Examples in Full Size
      </h2>

      <div className="mx-auto columns-2 gap-4 sm:columns-3 md:columns-4 lg:columns-5 space-y-4">
        {visibleImages.map((src, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <img
                src={src}
                alt={`Headshot ${index + 1}`}
                className="w-full rounded-xl shadow-sm mb-4 cursor-pointer"
                loading="lazy"
                onClick={() => setSelectedImage(src)}
              />
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
              <img src={selectedImage} alt="Preview" className="w-full h-auto rounded-xl" />
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {visibleCount < allImages.length && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLoadMore}
            className={`rounded-full bg-[#FFB100] px-6 py-2 text-white font-medium hover:bg-[#e79b00] transition flex items-center gap-2 disabled:opacity-60`}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
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

export default HeadshotGallery;
