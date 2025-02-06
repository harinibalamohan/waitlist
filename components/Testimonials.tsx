'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Salon Owner",
    content: "StyleMaster has transformed how we interact with our clients. The AI recommendations are spot-on!",
    image: "/images/testimonial1.jpg"
  },
  {
    name: "Michael Chen",
    role: "Hair Stylist",
    content: "The visualization tool helps my clients feel confident about trying new styles. It's a game-changer.",
    image: "/images/testimonial2.jpg"
  },
  {
    name: "Emma Davis",
    role: "Client",
    content: "I love being able to see how different hairstyles would look on me before making a change.",
    image: "/images/testimonial3.jpg"
  }
]

export default function Testimonials() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16 text-white"
        >
          What Our Users Say
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-black/60 via-black/60 to-violet-900/40 p-6 rounded-lg border border-gray-800"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

