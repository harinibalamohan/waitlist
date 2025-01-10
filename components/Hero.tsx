import Image from 'next/image'
import WaitlistDialog from './WaitlistDialog'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://media.giphy.com/media/lKaeQAunM3hZaqsOpj/giphy.gif")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(0.8)',
          animation: 'backgroundMove 15s ease-in-out infinite',
        }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50 z-1"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="relative w-[450px] h-[150px] mx-auto mb-6">
          <Image
            src="/images/logo2-removebg-preview.png"
            alt="StyleMaster Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Transform Your Hair Studio with AI
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          The AI-enabled hairstyling solution that brings personalized
          recommendations and realistic previews to your salon.
        </p>
        <WaitlistDialog />
      </div>
    </section>
  )
}

