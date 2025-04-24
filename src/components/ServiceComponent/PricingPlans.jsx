import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import React from "react"
import { FaCamera } from "react-icons/fa"

const PricingPlans = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-8 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-6">
        {/* Pro Level */}
        <Card className="rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-center">Pro Level</h3>
            <div className="flex justify-center space-x-2">
              <img src="https://randomuser.me/api/portraits/women/1.jpg" className="w-12 h-12 rounded-full" />
              <img src="https://randomuser.me/api/portraits/men/2.jpg" className="w-12 h-12 rounded-full" />
              <img src="https://randomuser.me/api/portraits/men/3.jpg" className="w-12 h-12 rounded-full" />
            </div>
            <p className="text-2xl font-bold text-center">$6.00</p>
            <p className="text-sm text-center text-gray-600 dark:text-gray-300">per photo</p>
            <Button variant="outline" className="w-full rounded-full border-gray-400">
              View Examples
            </Button>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Adjustment Red-Eyes Effect</li>
              <li>Skin Imperfections, Acne, Scars Removal</li>
              <li>Face Skin Airbrushing</li>
              <li>Teeth Whitening</li>
              <li>Color Correction</li>
              <li>Images Resizing/Cropping</li>
              <li>Body/Face Reshaping</li>
              <li>Background Retouching</li>
              <li>Stray Hair Fixing</li>
              <li>Slight Extending Solid Color Background</li>
              <li>Blur Background (No Retouching)</li>
              <li>Some Small Objects Cutting Out</li>
              <li>Clipping Path (No Retouching)</li>
            </ul>
            <Button className="w-full bg-[#FFB100] hover:bg-[#e8a000] text-white font-semibold">
              Order Now
            </Button>
          </CardContent>
        </Card>

        {/* Extra Level */}
        <Card className="rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-center">Extra Level</h3>
            <div className="flex justify-center space-x-2">
              <img src="https://randomuser.me/api/portraits/women/4.jpg" className="w-12 h-12 rounded-full" />
              <img src="https://randomuser.me/api/portraits/men/5.jpg" className="w-12 h-12 rounded-full" />
              <img src="https://randomuser.me/api/portraits/women/6.jpg" className="w-12 h-12 rounded-full" />
            </div>
            <p className="text-2xl font-bold text-center">$12.00</p>
            <p className="text-sm text-center text-gray-600 dark:text-gray-300">per photo</p>
            <Button variant="outline" className="w-full rounded-full border-gray-400">
              View Examples
            </Button>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Pro Beauty Retouching</li>
              <li>Two Images Merging</li>
              <li>Braces Removing</li>
              <li>Unwanted Objects Removing</li>
              <li>Glasses Glare Fixing</li>
              <li>Hair Roots Touch Up</li>
              <li>Advanced Hair Removal</li>
              <li>Swapping Heads/Body Parts</li>
              <li>Colors of Clothes/Image Items Changing</li>
              <li>Clothes Smoothen</li>
              <li>Background Changing</li>
              <li>Dodge and Burn Effect</li>
              <li>Complex Background Extending</li>
            </ul>
            <Button className="w-full bg-[#FFB100] hover:bg-[#e8a000] text-white font-semibold">
              Order Now
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Bulk Discount Section */}
      <div className="max-w-6xl mx-auto mt-12 text-center">
        <h4 className="text-lg font-medium mb-4">Bulk Services for Permanent Customers</h4>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex flex-col items-center space-y-2">
            <FaCamera className="text-3xl text-[#FFB100]" />
            <p className="text-xl font-bold">15% OFF</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 max-w-xs">
              Discount for all headshot retouching services during a month who orders from total
              cost is more than <strong>$300.00 US per 1 order</strong>.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaCamera className="text-3xl text-[#FFB100]" />
            <p className="text-xl font-bold">30% OFF</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 max-w-xs">
              Discount for all headshot retouching services during a month who orders from total
              cost is more than <strong>$1500 US per 1 order</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPlans
