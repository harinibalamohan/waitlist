import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
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
    <section id="how-it-works" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
          How StyleMaster Works
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="flex flex-col overflow-hidden bg-[#3B1C32] text-white">
              <CardContent className="p-0 flex flex-col">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-center text-white">{step.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

