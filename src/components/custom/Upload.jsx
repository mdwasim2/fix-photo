import { Upload } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: "https://fixthephoto.com/images/content/1-service-in-photo-editing-industry1611654713.svg",
    title: "#1 service in photo editing industry",
  },
  {
    icon: "https://fixthephoto.com/images/content/follow-your-unique-photography-editng-style1611655168.svg",
    title: "Follow your unique photography style",
  },
  {
    icon: "https://fixthephoto.com/images/content/we-guarantee-the-complete-safety-of-our-photo-retouching-service1611655195.svg",
    title: "We guarantee 100% security",
  },
  {
    icon: "https://fixthephoto.com/images/content/24-hours-rush-service-for-photo-editing1611655205.svg",
    title: "Fast 24 hour turnaround",
  },
];

const UploadSection = () => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files) {
      console.log("Files uploaded:", files);
      // File upload logic here
    }
  };

  return (
    <section className="bg-gray-50 px-4 py-14 text-center dark:bg-gray-900">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="mb-4 text-3xl leading-snug font-bold text-gray-800 md:text-4xl dark:text-white">
          High Quality Ecommerce Product Photo Editing Services
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-base text-gray-600 dark:text-gray-300">
          Online shopping starts with great photos. At ImageFix Lab, we help
          make your product pictures look clean, sharp, and ready to sell. If
          you sell on Amazon, Shopify, Etsy, or anywhere else, we can edit your
          photos to look better and more professional. Good product photos help
          you get more clicks and more sales. We’re here to make that happen
          fast and easy.
        </p>

        {/* Features Grid */}
        <div className="mb-14 grid grid-cols-2 gap-6 px-4 md:grid-cols-4 md:px-0">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center text-sm text-gray-700 dark:text-gray-200"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="mb-3 h-16 w-16"
              />
              <p className="font-medium">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Upload Box */}
        <div className="relative mx-auto mb-12 flex h-72 w-full max-w-4xl flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white px-6 text-center shadow-md dark:border-gray-600 dark:bg-gray-800">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />

          <button
            onClick={handleUploadClick}
            className="relative z-10 mb-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 px-6 py-3 font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 focus:ring-2 focus:ring-orange-400 focus:outline-none"
          >
            <Upload className="h-5 w-5" />
            Upload Images
            <span className="absolute inset-0 -z-10 -skew-x-12 animate-[shine_4s_linear_infinite] bg-white opacity-10"></span>
          </button>

          <p className="text-sm text-gray-500 dark:text-gray-300">
            Drag & drop images here or click to upload
          </p>
        </div>

        {/* Text Section */}
        <div className="text-center text-gray-700 dark:text-gray-300">
          <h3 className="mb-2 text-2xl font-semibold">
            Photo Editing Services That Sell Your Products Faster
          </h3>
          <h4 className="mb-3 font-medium">
            Photo Editing & Retouching Services That Increase Conversion
          </h4>
          <p className="text-sm leading-relaxed">
            Our product photo editing services help transform standard images
            into clean, eye-catching photos that sell faster. Whether you’re an
            e-commerce seller, an artist, or working on a wedding project — we
            provide expert retouching and editing handled by professionals. From
            lighting correction, background removal, to stylistic enhancements —
            we ensure your photos match your brand and stand out in the market.
            Send your images and let us handle the rest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
