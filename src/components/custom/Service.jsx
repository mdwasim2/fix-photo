
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

export default Service


