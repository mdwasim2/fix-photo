import React from "react";
import BlogSection from "./BlogSection";

const Popular = () => {
  const popularData = [
    {
      title: "8 Best Free Intro Makers With No Watermark in 2025",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_4035.png",
    },
    {
      title: "8 Best Free Intro Makers With No Watermark in 2025",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_4035.png",
    },
    {
      title: "8 Best Free Intro Makers With No Watermark in 2025",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_4035.png",
    },
    {
      title: "8 Best Free Intro Makers With No Watermark in 2025",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_4035.png",
    },
    {
      title: "8 Best Free Intro Makers With No Watermark in 2025",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_4035.png",
    },
    {
      title: "8 Best Free Intro Makers With No Watermark in 2025",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_4035.png",
    },
  ];
  return (
    <BlogSection
      title="Most popular"
      description="Stay informed with the latest photography and photo editing news, including details on new photography equipment, photo editing softwares, photography trends, demanded and revolutionary photographers, equipment, and other photo news."
      items={popularData}
      buttonLabel="MORE MOST POPULAR"
    />
  );
};

export default Popular;
