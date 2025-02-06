import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import FAQs from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQs />
      </main>
      <Footer />
    </div>
  )
}

