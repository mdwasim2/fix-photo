import React from "react";
import BlogSection from "./BlogSection";

const FileFormat = () => {
  const fileFormatData = [
    {
      title: "PNG vs TIFF: Choosing the Right Format",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_25200.png",
    },
    {
      title: "PNG vs TIFF: Choosing the Right Format",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_25200.png",
    },
    {
      title: "PNG vs TIFF: Choosing the Right Format",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_25200.png",
    },
    {
      title: "PNG vs TIFF: Choosing the Right Format",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_25200.png",
    },
    {
      title: "PNG vs TIFF: Choosing the Right Format",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_25200.png",
    },
    {
      title: "PNG vs TIFF: Choosing the Right Format",
      img: "https://img.fixthephoto.com/blog/images/gallery/news_main__preview_25200.png",
    },
  ];
  return (
    <BlogSection
      title="File Formats"
      description="File Formats
Complete list of file formats, when to use them, how to open or convert files to various other file types, etc. Any file type is a classical way that information is encoded for storing in a computer file. Everything you should know about all common types of files."
      items={fileFormatData}
      buttonLabel="MORE FILE FORMATS"
    />
  );
};

export default FileFormat;
