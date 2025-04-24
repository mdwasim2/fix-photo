import React from "react";
import BlogSection from "./BlogSection";

const VideoEditingTips = () => {
  const videoEditingTipsData = [
    {
      title: "Software reviews",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_83.jpg",
    },
    {
      title: "Software reviews",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_83.jpg",
    },
    {
      title: "Software reviews",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_83.jpg",
    },
    {
      title: "Software reviews",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_83.jpg",
    },
    {
      title: "Software reviews",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_83.jpg",
    },
    {
      title: "Software reviews",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_83.jpg",
    },
  ];
  return (
    <BlogSection
      title="Video Editing Tips"
      description="Is video editing hard? Have some quality video footage but don’t know what to do next? Are you a beginning video editor who is looking for understandable tutorials and video editing software reviews or professional video editing services? Our experts have gathered all tips and tricks to enhance your video-editing work. Avoid all common video editing mistakes and enhance your storytelling with FixThePhoto."
      items={videoEditingTipsData}
      buttonLabel="MORE VIDEO EDITING TIPS"
    />
  );
};

export default VideoEditingTips;
