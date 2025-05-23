import React from 'react'
import AboutTimeline from '../components/custom/AboutTimeline'
import Banner from '../components/custom/Banner'
import ExperienceStats from '../components/custom/ExperienceStats'
import Footer from '../components/custom/Footer'
import Gallery from '../components/custom/Gallery'
import Header from "../components/custom/Header"
import HowItWorks from '../components/custom/HowItWorks'
import ReviewSection from '../components/custom/ReviewSection'
import Services_main from '../components/custom/Services_main'
import Testimonial from '../components/custom/Testimonial'
import UploadSection from '../components/custom/Upload'
import VideoBanner from '../components/custom/VideoBanner'
import WorldwideServices from '../components/custom/WorldwideServices'


const Home = () => {

  return (
    <div>

       <Banner/>
       <UploadSection/>
       <Services_main  />
       <HowItWorks/>
       <VideoBanner/>
       <ExperienceStats/>
       <Testimonial/>
       <Gallery/>
       <WorldwideServices/>
       <AboutTimeline/>
       <ReviewSection/>

    </div>
  )
}

export default Home