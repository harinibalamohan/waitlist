export default function FAQs() {
  return (
    <section id="faqs" className="scroll-mt-24 bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-gradient-to-br from-black/60 via-black/60 to-violet-900/40 rounded-lg border border-gray-800 p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">
              How does StyleMaster work?
            </h3>
            <p className="text-gray-400">
              StyleMaster uses advanced AI to analyze facial features and hair types, providing personalized hairstyle recommendations and realistic previews.
            </p>
          </div>
          {/* Add more FAQ items as needed */}
        </div>
      </div>
    </section>
  )
} 