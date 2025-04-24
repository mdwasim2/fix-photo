import React from "react";
import BlogSection from "./BlogSection";

const AppsSoftware = () => {
  const appsSoftwareData = [
    {
      title: "7 Best 3D Printing Services in 2025 [From $1]",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_27105.png",
    },
    {
      title: "7 Best 3D Printing Services in 2025 [From $1]",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_27105.png",
    },
    {
      title: "7 Best 3D Printing Services in 2025 [From $1]",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_27105.png",
    },
    {
      title: "7 Best 3D Printing Services in 2025 [From $1]",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_27105.png",
    },
    {
      title: "7 Best 3D Printing Services in 2025 [From $1]",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_27105.png",
    },
    {
      title: "7 Best 3D Printing Services in 2025 [From $1]",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_27105.png",
    },
  ];
  return (
    <BlogSection
      title="Apps and Software"
      description="Popular apps and software that you may install on your phones or computers to simplify your work. The list of top software programs for Windows, MacOS, iOS, and Android that is updated every day with dozens of new products that will make your life easier."
      items={appsSoftwareData}
      buttonLabel="MORE APPS AND SOFTWARE"
    />
  );
};

export default AppsSoftware;
