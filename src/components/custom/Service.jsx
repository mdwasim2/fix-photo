// // components/PhotoEditingCard.tsx
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import React from "react";
// import ReactCompareImage from "react-compare-image";

// const Services = () => {
//   const beforeImage =
//     "https://fixthephoto.com/images/uikit_slider/photo-editing-services-before1603179337_wh960.jpg";
//   const afterImage =
//     "https://fixthephoto.com/images/uikit_slider/photo-editing-services-after-wh960.jpg";
//   return (
//     <div className="p-6">
//       <div className="container">
//         <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
//           {/* Text content */}
//           <div className="max-w-md">
//             <h2 className="mb-2 text-xl font-semibold text-gray-800">
//               Portrait Photo Editing
//             </h2>
//             <p className="mb-2 text-sm">
//               <strong className="text-black">Only $6 per photo.</strong> We will
//               make portrait photos look good and professionally edited. Our
//               retouchers will enhance body shapes and skin texture, remove all
//               unwanted imperfections making your models look realistically
//               edited.
//             </p>
//             <ul className="mb-4 list-inside list-disc text-sm text-gray-700">
//               <li>Color adjustment</li>
//               <li>Skin smoothing</li>
//               <li>Blemishes and stray hair removal</li>
//               <li>Make-up correction</li>
//             </ul>
//             <Button variant="outline" className="mt-2 rounded-full px-6 py-2">
//               View More
//             </Button>
//           </div>

//           {/* Image comparison */}
//           <Card className="w-full max-w-md overflow-hidden">
//             <CardContent className="p-0">
//               <ReactCompareImage
//                 leftImage={afterImage}
//                 rightImage={beforeImage}
//                 sliderLineWidth={2}
//                 sliderLineColor="#fff"
//                 handleSize={40}
//                 handle={
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow">
//                     <span className="text-sm font-bold text-gray-700">⇄</span>
//                   </div>
//                 }
//               />
              
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import ReactCompareImage from "react-compare-image";
import { Link } from "react-router";

const Service = ({item}) => {


  return (
    <section className="w-full px-3 lg:px-6 py-2.5 lg:py-5">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white leading-tight">
          {item.title}
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300">
            <strong className="text-black dark:text-white">{item.price}</strong> {item.descrtiption}
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>Color correction & tone balancing</li>
            <li>Skin smoothing & glow enhancement</li>
            <li>Removal of blemishes & stray hairs</li>
            <li>Makeup retouching for a natural look</li>
          </ul>
          <Link  to="/services"
            variant="outline"
            className="rounded-full border  px-6 py-2 shadoww41 hover:bg-[#FF6900] hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            View More
          </Link>
        </div>

        {/* Compare Image */}
        <Card className="shadow-xl dark:bg-gray-800">
          <CardContent className="p-0">
            <div className="w-full rounded-xl overflow-hidden">
              <ReactCompareImage
                leftImage={item.afterImage}
                rightImage={item.beforeImage}
                sliderLineWidth={2}
                sliderLineColor="#fff"
                handleSize={36}
                handle={
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border bg-white dark:bg-gray-700 shadow">
                    <span className="text-sm font-bold text-gray-700 dark:text-white">⇄</span>
                  </div>
                }
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Service


