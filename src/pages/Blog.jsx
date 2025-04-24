import React from "react";
import AppsSoftware from "../components/BlogComponents/AppsSoftware";
import CreateWithAdobe from "../components/BlogComponents/CreateWithAdobe";
import FileFormat from "../components/BlogComponents/FileFormat";
import Inspiration from "../components/BlogComponents/Inspiration";
import PhotoEditingTips from "../components/BlogComponents/PhotoEditingTips";
import Photographer from "../components/BlogComponents/Photographer";
import PhotographyGear from "../components/BlogComponents/PhotographyGear";
import PhotographyTips from "../components/BlogComponents/PhotographyTips";
import Popular from "../components/BlogComponents/Popular";
import SpecialOffer from "../components/BlogComponents/SpecialOffer";
import VideoEditingTips from "../components/BlogComponents/VideoEditingTips";

const Blog = () => {
  return (
    <div>
      {/* <FixThePhoto /> */}
      <SpecialOffer />
      <PhotoEditingTips />
      <CreateWithAdobe />
      <PhotographyTips />
      <PhotographyGear />
      <Inspiration />
      <VideoEditingTips />
      <Popular />
      <AppsSoftware />
      <FileFormat />
      <Photographer />
    </div>
  );
};

export default Blog;
