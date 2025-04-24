import React from "react";

const ExperienceStats = () => {
  return (
    <section className="bg-[#f9f9f9] dark:bg-gray-900 py-20 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="flex items-start gap-8 w-full lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-[120px] lg:text-[220px] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-cyan-600">
            21
          </h1>
          <div className="pt-6">
            <h4 className="uppercase text-sm  font-semibold mb-1 tracking-wider">
              Years of Experience
            </h4>
            <p className="text-gray-600 text-sm mb-6 max-w-xs">
              Only calibrated monitors, any kind of raw files, any image downloader and free revisions.
            </p>
            <button className="bg-[#FFB533] hover:bg-[#ffa500] text-white  text-sm font-semibold  py-2 px-6 rounded-full transition-all duration-200">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Side Stats */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 w-full lg:w-1/2 text-center  border-gray-200 pl-12">
          <div>
            <h3 className="text-3xl font-bold text-[#0DA8BC]">90+</h3>
            <p className="mt-1 text-sm text-gray-700">Experienced Retouchers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#0DA8BC]">2M+</h3>
            <p className="mt-1 text-sm text-gray-700">Orders</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#0DA8BC]">70</h3>
            <p className="mt-1 text-sm text-gray-700">Countries’ Trust</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#0DA8BC]">10M</h3>
            <p className="mt-1 text-sm text-gray-700">Edited Photos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceStats;
