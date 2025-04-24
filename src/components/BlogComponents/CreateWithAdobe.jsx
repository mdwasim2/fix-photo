import React from "react";
import BlogSection from "./BlogSection";

const CreateWithAdobe = () => {
  const createWithAdobeData = [
    {
      title: "Best AI Image Generator Tools - Try for FREE",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_26696.png",
    },
    {
      title: "Best AI Image Generator Tools - Try for FREE",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_26696.png",
    },
    {
      title: "Best AI Image Generator Tools - Try for FREE",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_26696.png",
    },
    {
      title: "Best AI Image Generator Tools - Try for FREE",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_26696.png",
    },
    {
      title: "Best AI Image Generator Tools - Try for FREE",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_26696.png",
    },
    {
      title: "Best AI Image Generator Tools - Try for FREE",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_26696.png",
    },
  ];

  return (
    <BlogSection
      title="Create with Adobe"
      description="Discover the best AI image generator tools and learn how to use them for free. Explore the latest advancements in AI technology and enhance your creative projects with stunning visuals."
      items={createWithAdobeData}
      buttonLabel="MORE CREATIVE TOOLS"
    />
  );
};

export default CreateWithAdobe;
