'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

export function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    toast({
      title: "Success!",
      description: "You've been added to our waitlist. We'll be in touch soon!",
    })
  }

  return (
    <section id="signup" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-12 font-seasons">Get Early Access</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="font-tt-commons">First Name</Label>
            <Input id="firstName" required />
          </div>
          <div>
            <Label htmlFor="lastName" className="font-tt-commons">Last Name</Label>
            <Input id="lastName" required />
          </div>
        </div>
        <div>
          <Label htmlFor="email" className="font-tt-commons">Email Address</Label>
          <Input id="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="phone" className="font-tt-commons">Phone Number</Label>
          <Input id="phone" type="tel" required />
        </div>
        <div>
          <Label htmlFor="source" className="font-tt-commons">How did you hear about us?</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="social">Social Media</SelectItem>
              <SelectItem value="friend">Friend or Family</SelectItem>
              <SelectItem value="search">Search Engine</SelectItem>
              <SelectItem value="ad">Advertisement</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Join the Waitlist'}
        </Button>
      </form>
    </section>
  )
}

