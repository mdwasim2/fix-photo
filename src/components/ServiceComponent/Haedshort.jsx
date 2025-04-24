import { Button } from "@/components/ui/button"
import React from "react"
import ReactCompareImage from "react-compare-image"

const HeadshotEditing = () => {
  const beforeImage =
    "https://fixthephoto.com/images/uikit_slider/headshot-retouching-services-after-1_1593094857_wh960.jpg"
  const afterImage =
    "https://fixthephoto.com/images/uikit_slider/headshot-retouching-services-after-1_1593094857_wh960.jpg"
  const overlayImage =
    "https://fixthephoto.com/images/uikit_slider/headshot-retouching-services-png-1_1593094900.png"

  return (
    <section className="w-full bg-white dark:bg-gray-900 px-4 py-10">
      <div className="container  grid md:grid-cols-2 gap-10 ">
        {/* Image Comparison with Hover Overlay */}
        <div className="group relative rounded-xl overflow-hidden shadow-md">
          <ReactCompareImage
            leftImage={afterImage}
            rightImage={beforeImage}
            sliderLineWidth={2}
            sliderLineColor="#fff"
            handleSize={36}
            handle={
              <div className="flex z-50 h-9 w-9 items-center justify-center rounded-full border bg-white dark:bg-gray-700 shadow">
                <span className="text-sm font-bold text-gray-700 dark:text-white">⇄</span>
              </div>
            }
          />
          {/* Hover Overlay Image */}
          <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
            <img
              src={overlayImage}
              alt="Overlay"
              className="opacity-0 group-hover:opacity-100 transition duration-300 absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* CTA Button */}
          <div className="absolute bottom-0 w-full">
            <Button className="w-full bg-[#FFB100] hover:bg-[#e79b00] text-white rounded-none py-2">
              TRY FOR FREE
            </Button>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold  dark:text-white">
            Editing Headshots and Colors
          </h2>
          <p className=" text-sm">
            Fixthephoto retouchers do their best to make colors in your headshots look beautiful and
            harmonious, without strange transitions that can ruin the photo. We will remove harsh
            shadows and will make sure the face is nicely lit.
          </p>
          <p className=" text-sm">
            Background color scheme will be also edited, so that the final business portrait meets
            with corporate photography standards.
          </p>

          <p className="font-semibold text-sm text-gray-900 dark:text-white">
            Pro Level – US $6.00 (per image)
          </p>

          <div>
            <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Services applied:</h4>
            <ul className="list-disc list-inside text-sm  space-y-1 mt-1">
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
  )
}

export default HeadshotEditing
