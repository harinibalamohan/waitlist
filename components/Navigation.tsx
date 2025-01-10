import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-xl text-primary">
              StyleMaster
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="#features" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
              Features
            </Link>
            <Link href="#how-it-works" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
              How It Works
            </Link>
            <Link href="#faqs" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
              FAQs
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

