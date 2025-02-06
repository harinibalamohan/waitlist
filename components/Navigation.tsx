'use client'

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto">
        <div className="flex justify-end gap-8 p-4">
          <button 
            onClick={() => {
              const element = document.getElementById('features');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-gray-300 hover:text-white transition-all duration-300
                     hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] 
                     px-4 py-2 rounded-lg hover:bg-white/5
                     cursor-pointer backdrop-blur-sm"
          >
            Features
          </button>
          
          <button 
            onClick={() => {
              const element = document.getElementById('how-it-works');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-gray-300 hover:text-white transition-all duration-300
                     hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]
                     px-4 py-2 rounded-lg hover:bg-white/5
                     cursor-pointer backdrop-blur-sm"
          >
            How It Works
          </button>
          
          <button 
            onClick={() => {
              const element = document.getElementById('faqs');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-gray-300 hover:text-white transition-all duration-300
                     hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]
                     px-4 py-2 rounded-lg hover:bg-white/5
                     cursor-pointer backdrop-blur-sm"
          >
            FAQs
          </button>
        </div>
      </nav>
    </header>
  )
}

