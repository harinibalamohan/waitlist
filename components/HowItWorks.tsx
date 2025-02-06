'use client'
import { motion } from 'framer-motion'
//import Image from 'next/image'
//import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    title: 'Upload a Photo',
    image: "/images/upload-photo.jpg"
  },
  {
    title: 'Get AI Recommendations',
    image: '/images/ai-recommendations.jpg'
  },
  {
    title: 'Preview Styles',
    image: '/images/preview-styles.jpg'
  },
  {
    title: 'Achieve the Perfect Look',
    image: "/images/perfect-look.jpg"
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16 text-white"
        >
          How StyleMaster Works
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="relative aspect-[4/3] mb-4 rounded-lg overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 bg-zinc-900/50 rounded-lg border border-gray-800">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {step.title}
                </h3>
                {/* <p className="text-sm text-gray-400">
                  {step.description}
                </p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

