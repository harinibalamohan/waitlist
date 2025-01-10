'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useToast } from "@/components/ui/toast"

export default function WaitlistDialog() {
  const { addToast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formBody = new FormData()
      formBody.append('entry.1752858561', formData.name)    // Name field
      formBody.append('entry.1037138390', formData.email)   // Email field
      formBody.append('entry.1317481118', formData.phone)   // Phone field
      formBody.append('entry.1445548931', formData.comments) // Comments field

      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdhjUE8GchzHliuaBN-oR7FSwHea7BOOXG7r7v9-s8qYAMbcw/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: formBody
      })

      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        comments: ''
      })
      
      addToast({
        title: "Success!",
        description: "Thank you for joining our waitlist. We'll be in touch soon!",
      })
    } catch (_error) { // Using underscore to indicate intentionally unused parameter
      addToast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#3B1C32] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#4d2441] transition-colors">
          Join the waitlist
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Our Waitlist</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input 
              placeholder="Name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Input 
              type="email" 
              placeholder="Email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Input 
              type="tel" 
              placeholder="Phone" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Textarea 
              placeholder="Comments (optional)" 
              value={formData.comments}
              onChange={(e) => setFormData({...formData, comments: e.target.value})}
              disabled={isSubmitting}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-[#3B1C32] hover:bg-[#4d2441]"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 