import AboutTimeline from '../components/custom/AboutTimeline'
import Banner from '../components/custom/Banner'
import ExperienceStats from '../components/custom/ExperienceStats'
import FAQSection from '../components/custom/Faq'
import Gallery from '../components/custom/Gallery'
import HowItWorks from '../components/custom/HowItWorks'
import ReviewSection from '../components/custom/ReviewSection'
import Services_main from '../components/custom/Services_main'
import Testimonial from '../components/custom/Testimonial'
import UploadSection from '../components/custom/Upload'
import VideoBanner from '../components/custom/VideoBanner'
import WorldwideServices from '../components/custom/WorldwideServices'
import Meta from '../helmet/Meta'


const Home = () => {

  return (
    <div>
      <Meta
        title="Photo Editing Services - E-Commerce Image Retouching"
        description="Get professional e-commerce photo editing services: background removal, ghost mannequin, jewelry retouching, and more."
        keywords="ecommerce photo editing, ghost mannequin, jewelry retouching, clipping path"
      />

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
       <FAQSection />

    </div>
  )
}

export default Home