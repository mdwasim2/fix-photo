import React from "react";
import BlogSection from "./BlogSection";

const Photographer = () => {
  const photographerData = [
    {
      title: "Brianna Parks Photography Review 2025: BIO & Portfolio",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_24828.jpg",
    },
    {
      title: "Brianna Parks Photography Review 2025: BIO & Portfolio",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_24828.jpg",
    },
    {
      title: "Brianna Parks Photography Review 2025: BIO & Portfolio",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_24828.jpg",
    },
    {
      title: "Brianna Parks Photography Review 2025: BIO & Portfolio",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_24828.jpg",
    },
    {
      title: "Brianna Parks Photography Review 2025: BIO & Portfolio",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_24828.jpg",
    },
    {
      title: "Brianna Parks Photography Review 2025: BIO & Portfolio",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_24828.jpg",
    },
  ];
  return (
    <BlogSection
      title="Photographer"
      description="Interesting facts about photographers, their childhood, career in the modern photo industry, contribution to society, famous galleries, etc. Who are those photographers to follow for inspiration? Read more about the following artist who will definitely make you love photography and become a photographer."
      items={photographerData}
      buttonLabel="MORE PHOTOGRAPHERS"
    />
  );
};

export default Photographer;
