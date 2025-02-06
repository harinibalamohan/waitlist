'use client'
import { motion } from 'framer-motion'
import { Scissors, Camera, Sparkles, Users } from 'lucide-react'

const features = [
  {
    name: 'AI-Powered Recommendations',
    description: 'Get personalized hairstyle suggestions based on face shape, hair type, and preferences.',
    icon: Sparkles,
  },
  {
    name: 'Realistic Previews',
    description: 'See how a hairstyle will look before making any changes with our advanced visualization technology.',
    icon: Camera,
  },
  {
    name: 'Stylist Collaboration',
    description: 'Easily share and discuss style ideas between clients and stylists for better communication.',
    icon: Users,
  },
  {
    name: 'Trend Analysis',
    description: 'Stay up-to-date with the latest hairstyle trends and popular looks in your area.',
    icon: Scissors,
  },
]

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16 text-white"
        >
          Powerful Features for Your Salon
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-gradient-to-br from-black/60 via-black/60 to-violet-900/40 border border-gray-800"
            >
              <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {feature.icon === Sparkles && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  )}
                  {feature.icon === Camera && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  )}
                  {feature.icon === Users && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  )}
                  {feature.icon === Scissors && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  )}
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.name}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

