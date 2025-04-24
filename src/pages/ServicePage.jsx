import React from 'react'
import Banner from '../components/custom/Banner'
import ReviewSection from '../components/custom/ReviewSection'
import UploadSection from '../components/custom/Upload'
import HeadShortWrapper from '../components/ServiceComponent/HeadShortWrapper'
import HeadshotGallery from '../components/ServiceComponent/HeadshotGallery'
import PricingPlans from '../components/ServiceComponent/PricingPlans'
import ServiceWrapper from '../components/ServiceComponent/ServiceWrapper'

const ServicePage = () => {
  return (
    <>
        <Banner/>
        <UploadSection/>
        <ServiceWrapper/>
        <PricingPlans/>
        <HeadShortWrapper/>
        <ReviewSection/>
        <HeadshotGallery/>
    </>
  )
}

export default ServicePage