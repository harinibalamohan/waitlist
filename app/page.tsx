import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  )
}
