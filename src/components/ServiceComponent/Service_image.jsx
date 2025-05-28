import ReactCompareImage from "react-compare-image"

const ServiceImage = ({item}) => {
  const beforeImage =
    "https://fixthephoto.com/images/uikit_slider/photo-editing-services-before1603179337_wh960.jpg"
  const afterImage =
    "https://fixthephoto.com/images/uikit_slider/photo-editing-services-after-wh960.jpg"

  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-black dark:text-white">
           { item.title}<span className="font-bold"> {item.price}</span>
        </h3>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          {item.descrtiption}
        </p>

        {/* Compare Image */}
        <div className="shadow-xl dark:bg-gray-800">
          <div className="p-0 w-full h-full">
            <div className="w-full rounded-xl overflow-hidden ">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceImage
