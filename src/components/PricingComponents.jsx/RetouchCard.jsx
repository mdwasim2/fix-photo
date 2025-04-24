import { Button } from "@/components/ui/button";
import React from "react";
import ReactCompareImage from "react-compare-image";

const RetouchCard = () => {
  const beforeImage =
    "https://fixthephoto.com/images/uikit_slider/headshot-retouching-services-after-1_1593094857_wh960.jpg";
  const afterImage =
    "https://fixthephoto.com/images/uikit_slider/headshot-retouching-services-after-1_1593094857_wh960.jpg";
  const overlayImage =
    "https://fixthephoto.com/images/uikit_slider/headshot-retouching-services-png-1_1593094900.png";

  return (
    <section className="w-full bg-white px-4 py-10 dark:bg-gray-900">
      <div className="container grid gap-10 md:grid-cols-2">
        {/* Image Comparison with Hover Overlay */}
        <div className="group relative overflow-hidden rounded-xl shadow-md">
          <ReactCompareImage
            leftImage={afterImage}
            rightImage={beforeImage}
            sliderLineWidth={2}
            sliderLineColor="#fff"
            handleSize={36}
            handle={
              <div className="z-50 flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow dark:bg-gray-700">
                <span className="text-sm font-bold text-gray-700 dark:text-white">
                  ⇄
                </span>
              </div>
            }
          />
          {/* Hover Overlay Image */}
          <div className="bg-opacity-0 group-hover:bg-opacity-50 absolute inset-0 transition duration-300">
            <img
              src={overlayImage}
              alt="Overlay"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-300 group-hover:opacity-100"
            />
          </div>

          {/* CTA Button */}
          <div className="absolute bottom-0 w-full">
            <Button className="w-full rounded-none bg-[#FFB100] py-2 text-white hover:bg-[#e79b00]">
              TRY FOR FREE
            </Button>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Editing Headshots and Colors
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Fixthephoto retouchers do their best to make colors in your
            headshots look beautiful and harmonious, without strange transitions
            that can ruin the photo. We will remove harsh shadows and will make
            sure the face is nicely lit.
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Background color scheme will be also edited, so that the final
            business portrait meets with corporate photography standards.
          </p>

          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            Pro Level – US $6.00 (per image)
          </p>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
              Services applied:
            </h4>
            <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>Color correction</li>
              <li>Stray hairs removal</li>
              <li>Skin tone improvement</li>
              <li>Make eyes more expressive</li>
              <li>Removing minor glares in glasses</li>
              <li>Basic photo retouching</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetouchCard;
