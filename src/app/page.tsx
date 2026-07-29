import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import GuideApplication from '@/components/GuideApplication'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Features />
      <Testimonials />
      <GuideApplication />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
