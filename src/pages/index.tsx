import Layout from '../components/Layout'
import Header from '../components/Header'
import GalleryCarousel from '../components/GalleryCarousel'

const HomePage = () => {
  const images = ['/images/1.jpg', '/images/2.jpg'] as const
  
  return (
    <Layout>
      <Header title="Современная квартира для ваших удобств" />
      
      <GalleryCarousel images={images} />
    </Layout>
  )
}

HomePage.displayName = 'HomePage'

export default HomePage
