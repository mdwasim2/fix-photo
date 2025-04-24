import React from "react";
import BlogSection from "./BlogSection";

const PhotographyGear = () => {
  const photographyGearData = [
    {
      title: "Cameras & Lenses",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_69.jpg",
    },
    {
      title: "Cameras & Lenses",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_69.jpg",
    },
    {
      title: "Cameras & Lenses",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_69.jpg",
    },
    {
      title: "Cameras & Lenses",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_69.jpg",
    },
    {
      title: "Cameras & Lenses",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_69.jpg",
    },
    {
      title: "Cameras & Lenses",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_69.jpg",
    },
  ];
  return (
    <BlogSection
      title="Photography Gear"
      description="Read about how to choose budget photography equipment to get amazing photos. Essential photography gear reviews by experts about DSLR/mirrorless cameras, lenses, tripods, flashes, laptops, tablets, drones, 360 photography equipment, props, bags and photography accessories. Whether you are a beginning photographer who wants to a user-friendly photography tools and equipment or a real estate shooter who can’t choose a drone for property photography, these articles are for you."
      items={photographyGearData}
      buttonLabel="MORE PHOTOGRAPHY GEAR"
    />
  );
};

export default PhotographyGear;
