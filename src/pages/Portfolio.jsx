import React from 'react';
import RetouchingExamples from '../components/PortfolioComponents/RetouchingExamples';
import RetouchingInfo from '../components/PortfolioComponents/RetouchingInfo';
import HeadshotGallery from '../components/ServiceComponent/HeadshotGallery';
import ReviewSection from './../components/custom/ReviewSection';

const Portfolio = () => {
  return (
    <>
    <RetouchingExamples/>
    <RetouchingInfo/>
    <ReviewSection/>
    <HeadshotGallery/>
    </>
  )
}

export default Portfolio