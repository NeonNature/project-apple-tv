import Navbar from './components/Navbar'
import LandingVideo from './components/LandingVideo'
import Carousel from './components/Carousel'
import Lineup from './components/Lineup'
import Devices from './components/Devices'
import Faq from './components/Faq'
import AppleOne from './components/AppleOne'
import Footer from './components/Footer'
import Routers from './components/Routers'

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingVideo />
      <Carousel />
      <Lineup />
      <Devices />
      <Faq />
      <AppleOne />
      <Routers />
      <Footer />
    </main>
  )
}
