import BlogSection from "./BlogSection";

const PhotoEditingTips = () => {
  const photoEditingData = [
    {
      title: "SOFTWARE REVIEWS",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_65.jpg",
    },
    {
      title: "LIGHTROOM TIPS",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_65.jpg",
    },
    {
      title: "PHOTOSHOP TIPS",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_65.jpg",
    },
    {
      title: "CAMERA FILE FORMATS",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_65.jpg",
    },
    {
      title: "CAPTURE ONE TIPS",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_65.jpg",
    },
    {
      title: "ON1 TIPS",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_65.jpg",
    },
  ];
  return (
    <BlogSection
      title="Photo Editing Tips"
      description="Speed up your photo retouching with our professional photo editing tips, video tutorials, and step-by-step guides in Photoshop, Lightroom, Capture One, ON1 Photo Raw, etc. Find out what photo editors and photo editing softwares to download, how to use Lightroom presets, Photoshop actions or overlays and where to download them for free, what short keys to use and what you should know before working as a photo retoucher."
      items={photoEditingData}
      buttonLabel="MORE PHOTO EDITING TIPS"
    />
  );
};

export default PhotoEditingTips;
