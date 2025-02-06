'use client'
import { useState } from 'react'
//import { useRouter } from "next/navigation"
import Image from 'next/image'
import { AnimatedButton } from "@/components/ui/animated-button"
import { Spinner } from "@/components/ui/spinner"

export default function Hero() {
  //const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdhjUE8GchzHliuaBN-oR7FSwHea7BOOXG7r7v9-s8qYAMbcw/viewform?usp=dialog', '_blank')
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <Spinner />}
      <div className="relative min-h-screen pt-16">
        {/* Background GIF with overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://media.giphy.com/media/lKaeQAunM3hZaqsOpj/giphy.gif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'saturate(0.8)',
            animation: 'backgroundMove 15s ease-in-out infinite',
          }}
        >
          {/* Dark overlay to make text more readable */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-start justify-center text-center px-4">
          <div className="max-w-4xl mx-auto pt-20">
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
            
            <div className="inline-block min-w-[280px]">
              <AnimatedButton onClick={handleClick} size="large">
                Join the Waitlist
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

