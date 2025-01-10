import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Salon Owner",
    content: "StyleMaster has revolutionized our salon. Our clients love seeing previews of their new styles!",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Michael Lee",
    role: "Hair Stylist",
    content: "The AI recommendations have helped me offer more diverse styles to my clients. It's a game-changer!",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Emily Davis",
    role: "Regular Client",
    content: "I always struggled to describe what I wanted. With StyleMaster, I can see and tweak my new look before the cut!",
    avatar: "/placeholder.svg?height=40&width=40"
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

