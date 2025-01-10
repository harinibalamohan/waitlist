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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Key Features
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="w-[280px]">
              <div className="relative rounded-lg bg-gray-50 px-6 pb-6 pt-12 h-[200px]">
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center justify-center rounded-md bg-[#A64D79] p-4 shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="text-base font-medium tracking-tight text-gray-900 text-center mb-2">{feature.name}</h3>
                <p className="text-sm text-gray-500 text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

