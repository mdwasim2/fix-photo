import React from "react";
import BlogSection from "./BlogSection";

const Inspiration = () => {
  const inspirationData = [
    {
      title: "Vintage Typography Ideas: Modern, Classic, Hand",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_26539.png",
    },
    {
      title: "Vintage Typography Ideas: Modern, Classic, Hand",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_26539.png",
    },
    {
      title: "Vintage Typography Ideas: Modern, Classic, Hand",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_26539.png",
    },
    {
      title: "Vintage Typography Ideas: Modern, Classic, Hand",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_26539.png",
    },
    {
      title: "Vintage Typography Ideas: Modern, Classic, Hand",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_26539.png",
    },
    {
      title: "Vintage Typography Ideas: Modern, Classic, Hand",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_26539.png",
    },
  ];
  return (
    <BlogSection
      title="Inspiration"
      description="Inspiring posts about digital and film photography, famous photographers, photo editing, digital drawing, etc. Discover new topics that intrigue or surprise you and learn about different creative photography or photo manipulation projects from talented photographers and retouchers around the world."
      items={inspirationData}
      buttonLabel="MORE INSPIRATION"
    />
  );
};

export default Inspiration;
