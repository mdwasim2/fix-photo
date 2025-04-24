import BlogSection from "./BlogSection";
const PhotographyTips = () => {
  const photographyTipsData = [
    {
      title: "Professional photography",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_55.jpg",
    },
    {
      title: "Professional photography",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_55.jpg",
    },
    {
      title: "Professional photography",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_55.jpg",
    },
    {
      title: "Professional photography",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_55.jpg",
    },
    {
      title: "Professional photography",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_55.jpg",
    },
    {
      title: "Professional photography",
      img: "https://img.fixthephoto.com/blog/images/gallery/blog_55.jpg",
    },
  ];

  return (
    <BlogSection
      title="Photography Tips"
      description="Useful photography tips and techniques to help grow as a photographer. How to shoot weddings, portraits, real estate, landscapes, product photography, etc. for amateurs. The best online and offline photography classes, workshops to study digital photography by real professionals. Step-by-step photography guides to become a true expert in a specific photography genre and make everybody admire your portfolio."
      items={photographyTipsData}
      buttonLabel="MORE PHOTOGRAPHY TIPS"
    />
  );
};

export default PhotographyTips;
