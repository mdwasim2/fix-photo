import { Upload } from "lucide-react";
import { useRef } from "react";

const UploadSection = () => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click(); // Open file picker
  };

  return (
    <section className="bg-gray-50 px-4 py-10 text-center dark:bg-gray-800">
      <div className="container">
        <h2 className="mb-2 text-2xl font-semibold md:text-3xl">
         High Quality Ecommerce Product Photo Editing Services :
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-gray-600">
          Imagefixlab has been a trusted and beloved name in the e-commerce photo editing services industry since 2011. Just assuredly upload your photos, let us know of your criteria, and simply consider your work done.
        </p>

        {/* Features */}
        <div className="mx-auto mb-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
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
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-sm text-gray-700"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="mb-2 h-20 w-20"
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {/* Upload Box */}
        <div className="flex h-[300px] w-full items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white p-8 shadow-sm dark:bg-gray-700">
          {/* Hidden file input */}
          <div className="">
            <input
              ref={fileInputRef}
              type="file"
              multiple
              webkitdirectory="true"
              className="hidden"
              onChange={(e) => {
                const files = e.target.files;
                if (files) {
                  console.log("Files uploaded:", files);
                  // You can handle file upload logic here
                }
              }}
            />

            <button
              onClick={handleUploadClick}
              className="relative mx-auto flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 px-8 py-5 font-bold text-white uppercase shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <Upload className="h-5 w-5" />
              Upload Image
              <span className="absolute inset-0 -skew-x-12 animate-[shine_4s_linear_infinite] bg-white opacity-10"></span>
            </button>

            <p className="mt-4 text-sm text-gray-500">
              Drag image here or click to upload
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
