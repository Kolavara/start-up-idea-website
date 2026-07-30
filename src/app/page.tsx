import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import JourneySection from '@/components/JourneySection'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <JourneySection />
      <HowItWorks />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
