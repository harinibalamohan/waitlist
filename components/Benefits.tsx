import { CheckCircle } from 'lucide-react'

const benefits = [
  "Personalized styling recommendations",
  "Realistic hairstyle previews",
  "Improved client satisfaction",
  "Increased efficiency for stylists"
]

export default function Benefits() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
          Benefits for You and Your Clients
        </h2>
        <div className="mt-10">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-700">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

