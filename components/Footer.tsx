import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#3B1C32] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Add footer content here */}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© 2024 StyleMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

