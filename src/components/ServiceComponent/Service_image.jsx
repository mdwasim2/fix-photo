import { Card, CardContent } from "@/components/ui/card"
import React from "react"
import ReactCompareImage from "react-compare-image"

const ServiceImage = () => {
  const beforeImage =
    "https://fixthephoto.com/images/uikit_slider/photo-editing-services-before1603179337_wh960.jpg"
  const afterImage =
    "https://fixthephoto.com/images/uikit_slider/photo-editing-services-after-wh960.jpg"

  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-black dark:text-white">
          • Skin smoothing and toning - from <span className="font-bold">$6 per photo</span>
        </h3>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          Let us take care of the model’s skin and make it look healthy and smooth. We will get rid
          of visible defects, take care of blackheads and acne, remove dark circles and bags under
          the eyes, and set a proper tone based on the lighting pattern.
        </p>

        {/* Compare Image */}
        <Card className="shadow-lg overflow-hidden rounded-xl dark:bg-gray-800">
          <CardContent className="p-0">
            <ReactCompareImage
              leftImage={afterImage}
              rightImage={beforeImage}
              sliderLineWidth={2}
              sliderLineColor="#fff"
              handleSize={36}
              handle={
                <div className="flex h-9 w-9 items-center justify-center rounded-full border bg-white dark:bg-gray-700 shadow">
                  <span className="text-sm font-bold text-gray-700 dark:text-white">⇄</span>
                </div>
              }
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default ServiceImage
